package main

import (
	"fmt"
	s "strings"
)

type LinkedList[T any] struct {
	first *LinkedListNode[T]
	last  *LinkedListNode[T]
}

type LinkedListNode[T any] struct {
	val  T
	next *LinkedListNode[T]
}

func makeList[T any]() LinkedList[T] {
	l := LinkedList[T]{nil, nil}
	return l
}

func (list *LinkedList[T]) push(val T) {
	newNode := &LinkedListNode[T]{val, nil}
	if list.first == nil {
		list.first = newNode
		list.last = list.first
	} else {
		list.last.next = newNode
		list.last = newNode
	}
}

func (list *LinkedList[T]) pop() T {
	val := list.first.val
	list.first = list.first.next
	if list.first == nil {
		list.last = nil
	}
	return val
}

func (list LinkedList[T]) isEmpty() bool {
	return list.first == nil
}

func makeListAndPrintAll() {
	list := makeList[string]()
	list.push("hello")
	list.push("world")

	for !list.isEmpty() {
		fmt.Println(s.ToUpper(list.pop()))
	}
}

func main() {
	makeListAndPrintAll()
}
