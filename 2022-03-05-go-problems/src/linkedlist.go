package main

import (
	"fmt"
	s "strings"
)

type LinkedList struct {
	first *LinkedListNode
	last  *LinkedListNode
}

type LinkedListNode struct {
	val  interface{}
	next *LinkedListNode
}

func makeList() *LinkedList {
	l := LinkedList{nil, nil}
	return &l
}

func push(list *LinkedList, val interface{}) {
	newNode := &LinkedListNode{val, nil}
	if list.first == nil {
		list.first = newNode
		list.last = list.first
	} else {
		list.last.next = newNode
		list.last = newNode
	}
}

func pop(list *LinkedList) interface{} {
	val := list.first.val
	list.first = list.first.next
	if list.first == nil {
		list.last = nil
	}
	return val
}

func isEmpty(list *LinkedList) bool {
	return list.first == nil
}

func makeListAndPrintAll() {
	n1 := LinkedListNode{1, nil}
	n2 := LinkedListNode{"hello", nil}
	n1.next = &n2

	curr := &n1
	for curr != nil {
		fmt.Println(curr.val)
		curr = curr.next
	}
}

func makeListAndPrintAll2() {
	list := makeList()
	push(list, "hello")
	push(list, "world")

	for !isEmpty(list) {
		// can't do this because result of pop is interface{} not string
		// see generic example for solution
		// fmt.Println(s.ToUpper(pop(list)))
		fmt.Println(pop(list))
	}
}

func main() {
	makeListAndPrintAll2()
}
