const {readFileSync, writeFileSync} = require('fs')
require('isomorphic-unfetch')
const cheerio = require('cheerio')

const main = async () => {
  const html = readFileSync('./data/2014/g1.utf8.html').toString()
  const $ = cheerio.load(html)
  const g1races = $('html').find('.txt_l a').map((_, el) => $(el).attr('href')).get().filter(str => /^\/race/.test(str))
  writeFileSync('./data/2014/g1.json', JSON.stringify(g1races))
}

main()
