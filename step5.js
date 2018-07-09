let balance = 0

for (const race of require('./data/2014/g1results.json')) {
  balance -= 100
  if (race[3] === 1) {
    balance += race[2]
  }
}

console.log(balance)
