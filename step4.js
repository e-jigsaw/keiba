let s = {}
require('./data/2014/g1results.json').forEach(race => {
  race[6].forEach((r, i) => {
    if (s[r] === undefined) {
      s[r] = []
    }
    s[r].push(race[5][i])
  })
})
console.log(s)
