// https://leetcode.com/problems/add-binary/

import {expect} from 'chai'
import * as _ from 'lodash'

let testCount = 0
let failedCount = 0

const test = (name: string, fn: () => void) => {
  testCount++
  console.log(name)
  try {
    fn() 
  } catch(err) {
    failedCount++
    console.error(err.message) 
  }
  console.log()
}

// if either input or the result exceed the size of a native JS number, this will fail
const addBinary = (a: string, b: string):string => {
  const aInt = parseInt(a, 2)
  const bInt = parseInt(b, 2)
  let sum = aInt + bInt
  
  if (sum === 0) return '0'
  
  const remainders:number[] = []
  while (sum > 0) {
    remainders.push(sum % 2)
    sum = Math.floor(sum / 2 )
  }
  
  const reversedRemainders: number[] = _.reverse(remainders)
  return reversedRemainders.map(x => '' + x).join('')
}

// this will handle numbers of any size
// performs somewhat poorly when tail-call optimization is not available
// leet code: faster than 6.88% of submissions, less memory than 5.29%
const addBinary2 = (a: string, b: string): string => {
  const aList: boolean[] = _.reverse(a.split('').map(x => x === '1'))
  const bList: boolean[] = _.reverse(b.split('').map(x => x === '1'))
  const result = _addBinary2(aList, bList, false)
  return _.reverse(result.map(x => x ? '1' : '0')).join('')
}

const _addBinary2 = (aList: boolean[], bList: boolean[], c: boolean):boolean[] => {
  const [a] = aList
  const [b] = bList
  if (a === undefined && b === undefined) return c ? [true] : []
  const result = (a && !b && !c)
    || (!a && b && !c)
    || (!a && !b && c)
    || (a && b && c)
  const carryOut = (a && b && !c)
    || (a && !b && c)
    || (!a && b && c)
    || (a && b && c)
  const nextResult = _addBinary2(aList.slice(1), bList.slice(1), carryOut)
  // console.log({a,b,c, result, carryOut})
  return [result].concat(nextResult)
}

// moderately faster (faster than 17.46%)
// no improvement on memory usage (VM must be optimizing the slice call)
const addBinary3 = (a: string, b: string): string => {
  const aList: boolean[] = _.reverse(a.split('').map(x => x === '1'))
  const bList: boolean[] = _.reverse(b.split('').map(x => x === '1'))
  const result = _addBinary3(aList, bList, 0, false)
  return _.reverse(result.map(x => x ? '1' : '0')).join('')
}

const _addBinary3 = (aList: boolean[], bList: boolean[], idx: number, c: boolean):boolean[] => {
  const a = aList[idx]
  const b = bList[idx]
  if (a === undefined && b === undefined) return c ? [true] : []
  const result = (a && !b && !c)
    || (!a && b && !c)
    || (!a && !b && c)
    || (a && b && c)
  const carryOut = (a && b && !c)
    || (a && !b && c)
    || (!a && b && c)
    || (a && b && c)
  const nextResult = _addBinary3(aList, bList, idx + 1, carryOut)
  // console.log({a,b,c, result, carryOut})
  return [result].concat(nextResult)
}

// removes recursion
// again, moderately faster (faster than 31.2%)
// and again no improvement on memory
const addBinary4 = (aStr: string, bStr: string): string => {
  const aList: boolean[] = _.reverse(aStr.split('').map(x => x === '1'))
  const bList: boolean[] = _.reverse(bStr.split('').map(x => x === '1'))
  
  const result = []
  let c = false
  for (let idx = 0; idx < Math.max(aList.length, bList.length); idx++) {
    const a = aList[idx]
    const b = bList[idx]
    
    const r = (a && !b && !c)
      || (!a && b && !c)
      || (!a && !b && c)
      || (a && b && c)
    
    result.push(r)
    
    const nextC:boolean = (a && b && !c)
      || (a && !b && c)
      || (!a && b && c)
      || (a && b && c)
    
    // console.log({a, b, c, r, nextC})
    
    c = nextC
  }
  
  if (c) result.push(true)
  
  return _.reverse(result.map(x => x ? '1' : '0')).join('')
}

// much better on memory (85.19%) - however worst run was 45MB and this was 40MB so does it really matter? only looks great as a percentage.
// but worse on runtime (14.81%)
// runtimes have ranged from 100 ms to 161ms. somewhat meaningful, but in most contexts not enough to matter at all.
// if we REALLY needed to scale this, a more interesting question would be can we distribute this across CPUs? across a cluster over a network? but c'mon, what size numbers are you adding that are worth distributing across a network!?
const addBinary5 = (aStr: string, bStr: string): string => {
  const result = []
  let c = false
  for (let idx = 0; idx < Math.max(aStr.length, bStr.length); idx++) {
    const a = aStr[aStr.length - 1 - idx] === '1'
    const b = bStr[bStr.length - 1 - idx] === '1'
    
    const r = (a && !b && !c)
      || (!a && b && !c)
      || (!a && !b && c)
      || (a && b && c)
    
    result.push(r)
    
    const nextC:boolean = (a && b && !c)
      || (a && !b && c)
      || (!a && b && c)
      || (a && b && c)
    
    // console.log({a, b, c, r, nextC})
    
    c = nextC
  }
  
  if (c) result.push(true)
  
  return _.reverse(result.map(x => x ? '1' : '0')).join('')
}

/**
truth table

a | b | carryIn | result | carryOut
--+---+---------+--------+---------
0 | 0 | 0       | 0      | 0
1 | 0 | 0       | 1      | 0
0 | 1 | 0       | 1      | 0
1 | 1 | 0       | 0      | 1
0 | 0 | 1       | 1      | 0
1 | 0 | 1       | 0      | 1
0 | 1 | 1       | 0      | 1
1 | 1 | 1       | 1      | 1

result =
(a && !b && !c)
|| (!a && b && !c)
|| (!a && !b && c)
|| (a && b && c)
*/

const testCases = [ 
  ['0', '0', '0'],
  ['0', '1', '1'],
  ['1', '0', '1'],
  ['1', '1', '10'],
  ['10', '1', '11'],
  ['1010', '11101', '100111'],
]

for (let [a, b, c] of testCases) {
  test(`${a} + ${b} = ${c}`, () => {
    expect(addBinary4(a, b)).to.eq(c)
  })
}

if (failedCount) {
  console.error(`${failedCount} / ${testCount} tests failed`)
} else {
  console.log(`All ${testCount} tests passed`)
}

