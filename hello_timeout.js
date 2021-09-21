
let words = '4311o th3r3 w0r1d'
let splitwords = words.split(/(\s+)/)
console.log(`${splitwords}`)
for (let i = 0; i < splitwords.length; i++) {
  setTimeout(function () { console.log(splitwords[i]); }, i * 1000)
}
