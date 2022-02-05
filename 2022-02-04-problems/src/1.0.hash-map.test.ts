import { expect } from "chai";

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;
}

class LinkedList<T> {
  first: LinkedListNode<T> | undefined;

  push(obj: T): void {
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

  find(predicate: (item: T) => boolean): T | undefined {
    if (this.first === undefined) return undefined;

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

class HashMap<T> {
  private arrayOfLists: LinkedList<HashMapItem<T>>[];
  private size;

  constructor(size: number) {
    this.arrayOfLists = [];
    this.size = size;
  }

  set(key: string, value: T): void {
    const hashCode = stringToHashCode(this.size, key);
    if (this.arrayOfLists[hashCode] === undefined) {
      this.arrayOfLists[hashCode] = new LinkedList();
    }
    this.arrayOfLists[hashCode].push({
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

describe("1.0.hash-map", () => {
  it("found key", () => {
    const hashMap = new HashMap<any>(2);
    const jill = { name: "Jill McQuay", age: 38 };
    hashMap.set("dustin", { name: "Dustin McQuay", age: 38 });
    hashMap.set("jill", jill);
    hashMap.set("ella", { name: "Ella McQuay", age: 13 });
    expect(hashMap.get("jill")).to.eql(jill);
  });

  it("not found key", () => {
    const hashMap = new HashMap<any>(2);
    const jill = { name: "Jill McQuay", age: 38 };
    hashMap.set("dustin", { name: "Dustin McQuay", age: 38 });
    hashMap.set("jill", jill);
    hashMap.set("ella", { name: "Ella McQuay", age: 13 });
    expect(hashMap.get("bogus")).to.be.undefined;
  });
});
