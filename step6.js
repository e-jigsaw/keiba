let balance = 0

for (const race of require('./data/2014/g1results.json')) {
  balance -= 100
  race[6].forEach((r, i) => {
    if (r === 1) {
      balance += race[5][i]
    }
  })
}

console.log(balance)
