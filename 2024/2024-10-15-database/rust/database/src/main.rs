use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};

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
