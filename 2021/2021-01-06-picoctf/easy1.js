// https://play.picoctf.org/practice/challenge/43
// https://en.wikipedia.org/wiki/One-time_pad

const encryptedFlag = 'UFJKXQZQUNB'.split('')
const           key = 'SOLVECRYPTO'.split('')

const A = 'A'.charCodeAt(0)
const Z = 'Z'.charCodeAt(0)

function decryptChar(c, k) {
  const cN = c.charCodeAt(0) - A
  const kN = k.charCodeAt(0) - A
  let newN = cN - kN
  if (newN < 0) newN += 26
  const newCode = newN + A
  const newChar = String.fromCharCode(newCode)
  // console.log({cN, kN, newN, newNWrapped, newCode, newChar})
  return newChar
}

const answer = encryptedFlag.map((x, i) => decryptChar(x, key[i])).join('')
console.log(`picoCTF{${answer}}`)