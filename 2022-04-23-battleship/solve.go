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

func hitFollowUp(row int, col int, grid Grid, ships []*Ship) int {
	shotCount := 0

	// up
	for r2 := row - 1; r2 >= 0; r2-- {
		if grid[r2][col].attacked {
			continue
		}

		shotCount++

		// go until we miss
		if !attackCell(grid[r2][col]) {
			break
		}

		// stop early if the game is over
		if allShipsAreSunk(ships) {
			return shotCount
		}
	}

	// down
	for r2 := row + 1; r2 < 10; r2++ {
		if grid[r2][col].attacked {
			continue
		}

		shotCount++

		// go until we miss
		if !attackCell(grid[r2][col]) {
			break
		}

		// stop early if the game is over
		if allShipsAreSunk(ships) {
			return shotCount
		}
	}

	// left
	for c2 := col - 1; c2 >= 0; c2-- {
		if grid[row][c2].attacked {
			continue
		}

		shotCount++

		// go until we miss
		if !attackCell(grid[row][c2]) {
			break
		}

		// stop early if the game is over
		if allShipsAreSunk(ships) {
			return shotCount
		}
	}

	// down
	for c2 := col + 1; c2 < 10; c2++ {
		if grid[row][c2].attacked {
			continue
		}

		shotCount++

		// go until we miss
		if !attackCell(grid[row][c2]) {
			break
		}

		// stop early if the game is over
		if allShipsAreSunk(ships) {
			return shotCount
		}
	}

	return shotCount
}

func solveIncrementally(grid Grid, ships []*Ship) int {
	shotCount := 0
	for row := 0; row < 10; row++ {
		for col := 0; col < 10; col++ {
			cell := grid[row][col]
			shotCount++
			attackCell(cell)
			if allShipsAreSunk(ships) {
				return shotCount
			}
		}
	}
	panic("board was never solved. this is unexpected.")
}

func solveEveryOther(grid Grid, ships []*Ship) int {
	shotCount := 0
	for row := 0; row < 10; row++ {
		for col := row % 2; col < 10; col += 2 {
			cell := grid[row][col]
			shotCount++
			if attackCell(cell) {
				shotCount += hitFollowUp(row, col, grid, ships)
			}
			if allShipsAreSunk(ships) {
				return shotCount
			}
		}
	}
	panic("board was never solved. this is unexpected.")
}

func solveEveryThird(grid Grid, ships []*Ship) int {
	shotCount := 0
	for row := 0; row < 10; row++ {
		for col := row % 3; col < 10; col += 3 {
			cell := grid[row][col]
			shotCount++
			if attackCell(cell) {
				shotCount += hitFollowUp(row, col, grid, ships)
			}
			if allShipsAreSunk(ships) {
				return shotCount
			}
		}
	}

	// this is not guaranteed to solve the board so if it is not solved
	// yet, let's follow up with another strategy that is guaranteed to
	// solve it.
	shotCount += solveEveryOther(grid, ships)
	if allShipsAreSunk(ships) {
		return shotCount
	}

	panic("board was never solved. this is unexpected.")
}

func solveEveryFourth(grid Grid, ships []*Ship) int {
	shotCount := 0
	for row := 0; row < 10; row++ {
		for col := row % 4; col < 10; col += 4 {
			cell := grid[row][col]
			shotCount++
			if attackCell(cell) {
				shotCount += hitFollowUp(row, col, grid, ships)
			}
			if allShipsAreSunk(ships) {
				return shotCount
			}
		}
	}

	// this is not guaranteed to solve the board so if it is not solved
	// yet, let's follow up with another strategy that is guaranteed to
	// solve it.
	shotCount += solveEveryThird(grid, ships)
	if allShipsAreSunk(ships) {
		return shotCount
	}

	panic("board was never solved. this is unexpected.")
}

func solveEveryFifth(grid Grid, ships []*Ship) int {
	shotCount := 0
	for row := 0; row < 10; row++ {
		for col := row % 5; col < 10; col += 5 {
			cell := grid[row][col]
			shotCount++
			if attackCell(cell) {
				shotCount += hitFollowUp(row, col, grid, ships)
			}
			if allShipsAreSunk(ships) {
				return shotCount
			}
		}
	}

	// this is not guaranteed to solve the board so if it is not solved
	// yet, let's follow up with another strategy that is guaranteed to
	// solve it.
	shotCount += solveEveryFourth(grid, ships)
	if allShipsAreSunk(ships) {
		return shotCount
	}

	panic("board was never solved. this is unexpected.")
}

func solveRandomly(grid Grid, ships []*Ship) int {
	shotCount := 0
	for !allShipsAreSunk(ships) {
		row := rand.Intn(10)
		col := rand.Intn(10)
		cell := grid[row][col]
		if cell.attacked {
			continue
		}
		shotCount++
		if attackCell(cell) {
			shotCount += hitFollowUp(row, col, grid, ships)
		}
	}
	return shotCount
}

func attackCell(cell *Cell) bool {
	cell.attacked = true
	isHit := false
	if cell.ship != nil && !cell.ship.isSunk {
		isHit = true
		cell.ship.isSunk = true
		for i := 0; i < len(cell.ship.cells); i++ {
			if !cell.ship.cells[i].attacked {
				cell.ship.isSunk = false
			}
		}
	}
	return isHit
}

func reset(grid Grid, ships []*Ship) {
	for i := 0; i < len(ships); i++ {
		ships[i].isSunk = false
	}
	for row := 0; row < 10; row++ {
		for col := 0; col < 10; col++ {
			grid[row][col].attacked = false
		}
	}
}

type Result struct {
	solver string
	shots  int
}

func solve(ch chan Result, iterations int) {
	for i := 0; i < iterations; i++ {
		grid := buildGrid()
		ships := buildShips()
		placeShips(ships, grid)
		// printGrid(grid)
		// printShips(ships)
		ch <- Result{solver: "Incremental", shots: solveIncrementally(grid, ships)}
		reset(grid, ships)
		ch <- Result{solver: "Random", shots: solveRandomly(grid, ships)}
		reset(grid, ships)
		ch <- Result{solver: "EveryOther", shots: solveEveryOther(grid, ships)}
		reset(grid, ships)
		ch <- Result{solver: "EveryThird", shots: solveEveryThird(grid, ships)}
		reset(grid, ships)
		ch <- Result{solver: "EveryFourth", shots: solveEveryFourth(grid, ships)}
		reset(grid, ships)
		ch <- Result{solver: "EveryFifth", shots: solveEveryFifth(grid, ships)}
	}
}

func main() {
	rand.Seed(time.Now().UnixNano())

	iterations := 1000000
	workers := 5
	ch := make(chan Result, 1)
	results := make(map[string]int)

	for i := 0; i < workers; i++ {
		go solve(ch, iterations/workers+1)
	}

	resultCount := 0
	for result := range ch {
		results[result.solver] += result.shots
		resultCount++
		if resultCount == (iterations * 6) {
			break
		}
	}

	for k, v := range results {
		fmt.Printf("Avg Shots %s: %d\n", k, v/iterations)
	}
}
