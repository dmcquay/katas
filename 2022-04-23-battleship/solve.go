package main

import (
	"fmt"
	"math/rand"
	"time"
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
	rand.Seed(time.Now().UnixNano())

	grid := buildGrid()

	s1 := Ship{length: 5, label: 'C'}
	s2 := Ship{length: 4, label: 'B'}
	s3 := Ship{length: 3, label: 'c'}
	s4 := Ship{length: 3, label: 'S'}
	s5 := Ship{length: 2, label: 'D'}

	placeShip(&s1, &grid)
	placeShip(&s2, &grid)
	placeShip(&s3, &grid)
	placeShip(&s4, &grid)
	placeShip(&s5, &grid)

	printGrid(grid)
}

func isLocationEmpty(grid *[10][10]*Cell, shipLen int, isOnCol bool, randShort int, randFull int) bool {
	if isOnCol {
		for r := randShort; r < shipLen+randShort; r++ {
			cell := (*grid)[r][randFull]
			if cell.ship != nil {
				return false
			}
		}
	} else {
		for c := randShort; c < shipLen+randShort; c++ {
			cell := (*grid)[randFull][c]
			if cell.ship != nil {
				return false
			}
		}
	}
	return true
}

func placeShip(s *Ship, grid *[10][10]*Cell) {
	var isOnCol bool = rand.Intn(2) == 1
	var randShort int = rand.Intn(10 - s.length)
	var randFull int = rand.Intn(10)

	for isLocationEmpty(grid, (*s).length, isOnCol, randShort, randFull) {
		isOnCol := rand.Intn(2) == 1
		randShort := rand.Intn(10 - s.length)
		randFull := rand.Intn(10)
	}

	if isOnCol {
		for r := randShort; r < (*s).length+randShort; r++ {
			cell := (*grid)[r][randFull]
			cell.ship = s
		}
	} else {
		for c := randShort; c < (*s).length+randShort; c++ {
			cell := (*grid)[randFull][c]
			cell.ship = s
		}
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
