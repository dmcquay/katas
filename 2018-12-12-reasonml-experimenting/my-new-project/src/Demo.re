let l1 = ["b", "c"];
let l2 = ["a", ...l1];
let l3 = l1 @ ["d"];

let a1 = [|"b", "c"|];

let abc: list(string) = ["a", "b", "c"];

let rec len = (myList: list('a)) =>
  switch (myList) {
  | [] => 0
  | [_, ...tail] => 1 + len(tail)
  };

Js.log(l1);