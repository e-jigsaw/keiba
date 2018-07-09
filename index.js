const {readFileSync, writeFileSync} = require('fs')
require('isomorphic-unfetch')
const cheerio = require('cheerio')

const pi = n => parseInt(trimComma(n))
const trimComma = str => str.replace(',', '')

const main = async () => {
  // const html = readFileSync('./g1.utf8.html').toString()
  // const $ = cheerio.load(html)
  // const g1races = $('html').find('.txt_l a').map((_, el) => $(el).attr('href')).get().filter(str => /^\/race/.test(str))
  // writeFileSync('g1.json', JSON.stringify(g1races))
  // const races = require('./g1.json')
  // let results = []
  // for (const race of races) {
  //   const res = await fetch(`http://db.netkeiba.com${race}`)
  //   const html = await res.text()
  //   const $ = cheerio.load(html)
  //   const name = $('html').find('.mainrace_data h1').text()
  //   const tn = $('html').find('.tan').next().text()
  //   const tb = parseInt(trimComma($('html').find('.tan').next().next().text()))
  //   const to = parseInt(trimComma($('html').find('.tan').next().next().next().text()))
  //   const fn = $('html').find('.fuku').next().html().split('<br>')
  //   const fb = $('html').find('.fuku').next().next().html().split('<br>').map(pi)
  //   const fo = $('html').find('.fuku').next().next().next().html().split('<br>').map(pi)
  //   results.push([name, tn, tb, to, fn, fb, fo])
  // }
  // writeFileSync('results.json', JSON.stringify(results))
  let s = {}
  // require('./results.json').forEach(race => {
  //   if (s[race[3]] === undefined) {
  //     s[race[3]] = []
  //   }
  //   s[race[3]].push(race[2])
  // })
  require('./results.json').forEach(race => {
    race[6].forEach((r, i) => {
      if (s[r] === undefined) {
        s[r] = []
      }
      s[r].push(race[5][i])
    })
  })
  console.log(s)
}

main()
