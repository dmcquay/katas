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

func makeList[T any]() *LinkedList[T] {
	l := LinkedList[T]{nil, nil}
	return &l
}

func push[T any](list *LinkedList[T], val T) {
	newNode := &LinkedListNode[T]{val, nil}
	if list.first == nil {
		list.first = newNode
		list.last = list.first
	} else {
		list.last.next = newNode
		list.last = newNode
	}
}

func pop[T any](list *LinkedList[T]) T {
	val := list.first.val
	list.first = list.first.next
	if list.first == nil {
		list.last = nil
	}
	return val
}

func isEmpty[T any](list *LinkedList[T]) bool {
	return list.first == nil
}

func makeListAndPrintAll() {
	list := makeList[string]()
	push(list, "hello")
	push(list, "world")

	for !isEmpty(list) {
		fmt.Println(s.ToUpper(pop(list)))
	}
}

func main() {
	makeListAndPrintAll()
}
