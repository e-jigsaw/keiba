const {writeFileSync} = require('fs')
require('isomorphic-unfetch')
const cheerio = require('cheerio')

const pi = n => parseInt(trimComma(n))
const trimComma = str => str.replace(',', '')

const main = async () => {
  const races = require('./data/2014/g1.json')
  let results = []
  for (const race of races) {
    const res = await fetch(`http://db.netkeiba.com${race}`)
    const html = await res.text()
    const $ = cheerio.load(html)
    const $html = $('html')
    const name = $html.find('.mainrace_data h1').text()
    const $tan = $html.find('.tan')
    const tn = $tan.next().text()
    const tb = parseInt(trimComma($tan.next().next().text()))
    const to = parseInt(trimComma($tan.next().next().next().text()))
    const $fuku = $html.find('.fuku')
    const fn = $fuku.next().html().split('<br>')
    const fb = $fuku.next().next().html().split('<br>').map(pi)
    const fo = $fuku.next().next().next().html().split('<br>').map(pi)
    results.push([name, tn, tb, to, fn, fb, fo])
  }
  writeFileSync('./data/2014/g1results.json', JSON.stringify(results))
}

main()
