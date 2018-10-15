var express = require('express')
var app = express()
var request = require('request')
const cheerio = require('cheerio')

app.get('/', function (req, res) {
  request('https://ke.qq.com/', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(body) // $此刻拿到了整个body前端选择器
      let list = []
      list.push($('.item-tt-link').html())
      console.log(body)
      res.json({
        'Classnum': $('.item-tt-link').length
      })
    } else {
      console.log('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    }
  })
})

app.listen(3000)
