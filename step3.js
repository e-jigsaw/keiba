let s = {}
require('./data/2014/g1results.json').forEach(race => {
  if (s[race[3]] === undefined) {
    s[race[3]] = []
  }
  s[race[3]].push(race[2])
})

console.log(s)
