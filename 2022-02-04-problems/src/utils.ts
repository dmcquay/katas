interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;
}

export class LinkedList<T> {
  first: LinkedListNode<T> | undefined;

  static from<T>(arr: T[]): LinkedList<T> {
    const list = new LinkedList<T>();
    for (let obj of arr) {
      list.append(obj);
    }
    return list;
  }

  each(fn: (value: T) => unknown) {
    let node: LinkedListNode<T> | undefined = this.first;

    while (node !== undefined) {
      fn(node.value);
      node = node.next;
    }
  }

  append(obj: T): void {
    const newNode: LinkedListNode<T> = {
      value: obj,
      next: undefined,
    };

    if (this.first === undefined) {
      this.first = newNode;
    } else {
      let last: LinkedListNode<T> = this.first;
      while (last.next !== undefined) last = last.next;
      last.next = newNode;
    }
  }

  remove(value: T): void {
    const nodeToRemove = this.findNode((node) => node.value === value);
    if (nodeToRemove === undefined) return;
    const prevNode = this.findNode((node) => node.next === nodeToRemove);
    if (prevNode === undefined) throw new Error("This should never happen");
    prevNode.next = nodeToRemove.next;
    nodeToRemove.next = undefined;
  }

  findNode(
    predicate: (node: LinkedListNode<T>) => boolean
  ): LinkedListNode<T> | undefined {
    let node: LinkedListNode<T> | undefined = this.first;

    while (node !== undefined) {
      if (predicate(node)) {
        return node;
      }
      node = node.next;
    }
  }

  find(predicate: (item: T) => boolean): T | undefined {
    let node: LinkedListNode<T> | undefined = this.first;

    while (node !== undefined) {
      if (predicate(node.value)) {
        return node.value;
      }
      node = node.next;
    }

    return undefined;
  }
}

interface HashMapItem<T> {
  key: string;
  value: T;
}

const stringToHashCode = (size: number, value: string): number => {
  let code = 0;

  for (let i = 0; i < value.length; i++) {
    code += value.charCodeAt(i);
  }

  return code % size;
};

export class HashMap<T> {
  private arrayOfLists: LinkedList<HashMapItem<T>>[];
  private size;

  constructor(size: number = 100) {
    this.arrayOfLists = [];
    this.size = size;
  }

  set(key: string, value: T): void {
    const hashCode = stringToHashCode(this.size, key);
    if (this.arrayOfLists[hashCode] === undefined) {
      this.arrayOfLists[hashCode] = new LinkedList();
    }
    this.arrayOfLists[hashCode].append({
      key,
      value,
    });
  }

  get(key: string): T | undefined {
    const hashCode = stringToHashCode(this.size, key);
    const list = this.arrayOfLists[hashCode];
    const item = list.find((x) => x.key === key);
    // why is optional chaining not working?
    // return item?.value;
    return item === undefined ? undefined : item.value;
  }
}

interface QueueNode<T> {
  data: T;
  next: QueueNode<T> | undefined;
}

export class Queue<T> {
  first: QueueNode<T> | undefined;
  last: QueueNode<T> | undefined;

  enqueue(data: T): void {
    const node = {
      data,
      next: undefined,
    };
    if (this.last === undefined) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  dequeue(): T {
    if (this.first === undefined) {
      throw new Error("Cannot dequeue from an empty queue");
    }

    const data = this.first.data;
    this.first = this.first.next;
    if (this.first === undefined) this.last = undefined;
    return data;
  }

  hasNext(): boolean {
    return this.last !== undefined;
  }
}

export interface GraphNode<T> {
  value: T;
  adjacencies: GraphNode<T>[];
  visited: boolean;
}

export const routeExists = (
  root: GraphNode<unknown>,
  candidate: GraphNode<unknown>
): boolean => {
  const queue = new Queue<GraphNode<unknown>>();
  queue.enqueue(root);

  while (queue.hasNext()) {
    const n = queue.dequeue();
    if (n === candidate) return true;
    n.adjacencies.forEach((adj) => queue.enqueue(adj));
  }

  return false;
};
