package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Cell struct {
	attacked bool
	ship     *Ship
}

type Ship struct {
	length     int
	shortLabel rune
	longLabel  string
	cells      []*Cell
	isSunk     bool
}

type Grid *[10][10]*Cell

func buildGrid() Grid {
	var grid [10][10]*Cell
	for row := 0; row < 10; row++ {
		for col := 0; col < 10; col++ {
			grid[row][col] = &Cell{}
		}
	}
	return &grid
}

func buildShips() []*Ship {
	return []*Ship{
		{length: 5, shortLabel: 'C', longLabel: "Carrier"},
		{length: 4, shortLabel: 'B', longLabel: "Battleship"},
		{length: 3, shortLabel: 'D', longLabel: "Destroyer"},
		{length: 3, shortLabel: 'S', longLabel: "Submarine"},
		{length: 2, shortLabel: 'P', longLabel: "Patrol Boat"},
	}
}

func main() {
	rand.Seed(time.Now().UnixNano())
	grid := buildGrid()
	ships := buildShips()
	placeShips(ships, grid)
	printGrid(grid)
	printShips(ships)
	solveIncrementally(grid, ships)
}

func isLocationEmpty(grid Grid, shipLen int, isOnCol bool, randShort int, randFull int) bool {
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

func placeShips(ships []*Ship, grid Grid) {
	for i := 0; i < len(ships); i++ {
		placeShip(ships[i], grid)
	}
}

func placeShip(s *Ship, grid Grid) {
	var isOnCol bool = rand.Intn(2) == 1
	var randShort int = rand.Intn(10 - s.length)
	var randFull int = rand.Intn(10)

	for !isLocationEmpty(grid, (*s).length, isOnCol, randShort, randFull) {
		isOnCol = rand.Intn(2) == 1
		randShort = rand.Intn(10 - s.length)
		randFull = rand.Intn(10)
	}

	if isOnCol {
		for r := randShort; r < (*s).length+randShort; r++ {
			cell := (*grid)[r][randFull]
			cell.ship = s
			s.cells = append((*s).cells, cell)
		}
	} else {
		for c := randShort; c < (*s).length+randShort; c++ {
			cell := (*grid)[randFull][c]
			cell.ship = s
			s.cells = append((*s).cells, cell)
		}
	}
}

func printGrid(grid Grid) {
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
		fmt.Print(string(c.ship.shortLabel))
	} else {
		fmt.Print("_")
	}
}

func printShips(ships []*Ship) {
	for i := 0; i < len(ships); i++ {
		printShip(ships[i])
	}
}

func printShip(ship *Ship) {
	placed := len(ship.cells) == ship.length
	hitCount := 0
	for i := 0; i < len(ship.cells); i++ {
		if ship.cells[i].attacked == true {
			hitCount++
		}
	}
	fmt.Printf("%s (%d)\tPlaced: %t, Hits: %d/%d\n", ship.longLabel, ship.length, placed, hitCount, ship.length)
}

func allShipsAreSunk(ships []*Ship) bool {
	for i := 0; i < len(ships); i++ {
		if !ships[i].isSunk {
			return false
		}
	}
	return true
}

func solveIncrementally(grid Grid, ships []*Ship) {
	shotCount := 0
	for row := 0; row < 10; row++ {
		for col := 0; col < 10; col++ {
			cell := grid[row][col]
			cell.attacked = true
			shotCount++
			if cell.ship != nil && !cell.ship.isSunk {
				fmt.Println("Hit a ship")
				cell.ship.isSunk = true
				for i := 0; i < len(cell.ship.cells); i++ {
					if !cell.ship.cells[i].attacked {
						cell.ship.isSunk = false
					}
				}
				if cell.ship.isSunk {
					fmt.Println("Sunk a ship")
				}
			}
			if allShipsAreSunk(ships) {
				fmt.Printf("Solved in %d shots\n", shotCount)
				return
			}
		}
	}
}
