let balance = 0

for (const race of require('./g3results.json')) {
  balance -= 300
  race[6].forEach((r, i) => {
    if (r === 1 || r === 2 || r === 3) {
      balance += race[5][i]
    }
  })
}

console.log(balance)
