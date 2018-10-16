var http = require('http')
var cheerio = require('cheerio')
var fs = require('fs')
var url = 'http://www.jikexueyuan.com/course/nodejs/' // 要爬取的网址


function filterHtml(html) {
  var $ = cheerio.load(html)

  var lesson_list = $('.lesson-list').find('ul').children('li') //nodejs 类型下所有课程

  //预期想抓取的每个课程结构
  /*[{
      lesson_name: '',
      lesson_desc:'',
      lesson_num:'',
      lesson_href:''
      
  }]*/

  var nodeData = {
    lessonersNum: 0,
    dataArray: []
  }
  var lessonersTotalNum = 0

  lesson_list.each(function (item) {
    var lesson = $(this) //获得每个课程li


    var lesson_box = lesson.find('.lessonimg-box')
    var lesson_href = $(lesson_box.find('a')[0]).attr('href') //课程链接
    console.log(lesson_box.html())
    var lesson_infor = lesson.find('.lesson-infor') //课程详情
    var lesson_name = $(lesson_infor.find('.lesson-info-h2').find('a')[0]).text() //课程名
    var lesson_desc = lesson_infor.find('p').text().trim() //课程介绍
    var lesson_num = lesson_infor.find('.timeandicon').find('.learn-number').text()
    lessonersTotalNum += parseInt(lesson_num)

    var lessonData = {
      lesson_name: lesson_name,
      lesson_desc: lesson_desc,
      lesson_num: lesson_num,
      lesson_href: lesson_href
    }

    nodeData.dataArray.push(lessonData)
  })
  nodeData.lessonersNum = lessonersTotalNum

  return nodeData
}


function printInfo(info, course) {

  var desStr = course + '系列共有: ' + info.dataArray.length + '门课程,总学习人数：' + info.lessonersNum + '\r\n'
  console.log(desStr)
  fs.writeFileSync('./output.txt', desStr, {
    flag: 'a'
  })

  console.log('********** 具体信息如下 **********' + '\r\n')

  info.dataArray.forEach(function (item) {
    var itemDesc = '课程名称: ' + item.lesson_name + '\r\n' +
      '课程介绍：' + item.lesson_desc + '\r\n' +
      '课程链接：' + item.lesson_num + '\r\n' +
      '学习人数：' + item.lesson_href + '\r\n\r\n'

    console.log(itemDesc)
    fs.writeFileSync('./output.txt', itemDesc, {
      flag: 'a'
    })

  })
}

http.get(url, function (res) {
  var html = ''

  res.on('data', function (data) {
    html += data
  })

  res.on('end', function () {


    var output = filterHtml(html)

    printInfo(output, 'nodejs')
  })

}).on('error', function () {
  console.log('出错了')
})

