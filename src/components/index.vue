<template>
  <div class='index-contain'>
    <div class='module-box' v-for='(item,index) in courseOutlineList' :key='index'>
      <div class='module-title'>{{item.title}}</div>
      <Collapse v-model='collapseValue' accordion>
        <Panel name='1'>史蒂夫·乔布斯
          <p slot='content'>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      collapseValue: '1',
      courseOutlineList: [
        {
          title: '第一周.JavaScript语言新发展'
        },
        {
          title: '第二周.大话NodeJS72般变化'
        },
        {
          title: '第三周.前端工程化那些事'
        },
        {
          title: '第四周.前端性能优化与工程化'
        },
        {
          title: '第五周.CSS古话今说与网站重构'
        },
        {
          title: '第六周.MVC MVVM框架那些事'
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.index-contain {
  width: 800px;
  margin: 50px auto 0;
  .module-box {
    margin: 0 20px 20px 0;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #a1a1a1;
    .module-title{
      margin-bottom: 5px;
    }
  }
}
</style>
