let balance = 0

for (const race of require('./g1results.json')) {
  balance -= 300
  if (race[3] === 1 || race[3] === 2 || race[3] === 3) {
    balance += race[2]
  }
}

console.log(balance)
