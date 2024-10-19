use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};
use std::fs;
use std::path::Path;
use uuid::Uuid;

#[derive(Debug, Clone)]
enum DataType {
    Int32,
    Text,
}

// Define a structure for a column
#[derive(Debug, Clone)]
struct Column {
    name: String,
    data_type: DataType,
}

// Define a structure for a table
#[derive(Debug)]
struct Table {
    name: String,
    columns: Vec<Column>,
}

fn create_table(table: &Table) -> std::io::Result<()> {
    // Create a folder for the table
    let table_dir = Path::new("tables").join(&table.name);
    fs::create_dir_all(&table_dir)?;

    // Create schema file
    let schema_file = table_dir.join("schema.txt");
    let mut file = File::create(schema_file)?;

    // Write table name
    writeln!(file, "TABLE_NAME: {}", table.name)?;

    // Write number of columns
    writeln!(file, "COLUMNS: {}", table.columns.len())?;

    // Create files for each column
    for column in &table.columns {
        let column_id = Uuid::new_v4().to_string();
        let column_file = table_dir.join(format!("{}.col", column_id));
        let mut col_file = File::create(column_file)?;

        // Write column information
        writeln!(col_file, "ID: {}", column_id)?;
        writeln!(col_file, "NAME: {}", column.name)?;
        writeln!(col_file, "TYPE: {:?}", column.data_type)?;

        // Write column information to schema file
        writeln!(file, "COLUMN: {} {} {}", column_id, column.name, format!("{:?}", column.data_type))?;
    }

    println!("Table '{}' created successfully.", table.name);
    Ok(())
}

fn handle_client(mut stream: TcpStream) {
    let mut buffer = [0; 1024];

    while let Ok(size) = stream.read(&mut buffer) {
        if size == 0 {
            // Connection closed
            return;
        }

        let received = String::from_utf8_lossy(&buffer[..size]);
        let trimmed = received.trim();

        if trimmed == "PING" {
            stream.write_all(b"PONG\n").unwrap();
        } else {
            stream.write_all(b"Unknown command\n").unwrap();
        }
    }
}

fn main() {
    let example_table = Table {
        name: String::from("users"),
        columns: vec![
            Column {
                name: String::from("id"),
                data_type: DataType::Int32,
            },
            Column {
                name: String::from("name"),
                data_type: DataType::Text,
            },
        ],
    };

    if let Err(e) = create_table(&example_table) {
        eprintln!("Error creating table: {}", e);
    }

    let listener = TcpListener::bind("127.0.0.1:8080").unwrap();
    println!("Server listening on 127.0.0.1:8080");

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                std::thread::spawn(|| {
                    handle_client(stream);
                });
            }
            Err(e) => {
                eprintln!("Error: {}", e);
            }
        }
    }
}
