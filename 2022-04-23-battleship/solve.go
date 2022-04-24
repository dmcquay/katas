package main

import (
	"fmt"
)

// board
// 2d array of Cells
// Cell has properties: occupied (bool), attacked (bool)
// Array of Ships. Each ship has a length (int) and an array of Cells.

type Cell struct {
	attacked bool
	ship     *Ship
}

type Ship struct {
	length int
	label  rune
}

func buildGrid() [10][10]*Cell {
	var grid [10][10]*Cell
	for row := 0; row < 10; row++ {
		for col := 0; col < 10; col++ {
			grid[row][col] = &Cell{}
		}
	}
	return grid
}

func main() {
	grid := buildGrid()
	s1 := Ship{length: 5, label: 'A'}

	placeShip(&s1, &grid)
	printGrid(grid)
}

func placeShip(s *Ship, grid *[10][10]*Cell) {
	row := 3
	col := 4

	for r := row; r < (*s).length+row; r++ {
		cell := (*grid)[r][col]
		cell.ship = s
	}
}

func printGrid(grid [10][10]*Cell) {
	for i := 0; i < len(grid); i++ {
		printCells(grid[i])
	}
}

func printCells(cells [10]*Cell) {
	for i := 0; i < len(cells); i++ {
		printCell(cells[i])
		if i < len(cells)-1 {
			fmt.Print(" ")
		}
	}
	fmt.Println()
}

func printCell(c *Cell) {
	// fmt.Printf("%s: occupied=%t, attacked=%t\n", label, c.occupied, c.attacked)
	if c == nil {
		fmt.Print("N")
	} else if c.attacked && c.ship != nil {
		fmt.Print("X")
	} else if c.attacked {
		fmt.Print("O")
	} else if c.ship != nil {
		fmt.Print(string(c.ship.label))
	} else {
		fmt.Print("_")
	}
}
