const {writeFileSync} = require('fs')
require('isomorphic-unfetch')
const cheerio = require('cheerio')

const pi = n => parseInt(trimComma(n))
const trimComma = str => str.replace(',', '')

const main = async () => {
  const races = require('./data/2017/g1.json')
  let results = []
  for (const race of races) {
    const res = await fetch(`http://db.netkeiba.com${race}`)
    const html = await res.text()
    const $ = cheerio.load(html)
    const $html = $('html')
    const name = $html.find('.mainrace_data h1').text()
    const trs = $html.find('.race_table_01 tr').map((_, el) => {
      const $tds = $(el).find('td')
      return `${$tds.eq(0).text()},${$tds.eq(2).text()},${$tds.eq(12).text()}`
    }).get().slice(1).map(str => str.split(',')).map(arr => [arr[0], arr[1], parseFloat(arr[2])])
    results.push([name, trs])
  }
  writeFileSync('./data/2017/g1odds.json', JSON.stringify(results))
}

main()
