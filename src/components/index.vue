<template>
  <div class="index-contain">
    <div class="module-box" v-for="(item,index) in oneList" :key="index">
      <div class="module-title">
        <span class="moudle-index">{{index+1}}</span>
        <span>{{item.name}}</span>
      </div>
      <Collapse v-model="collapseValue" accordion>
        <Panel :name="indexTwo+''" v-for="(itemTwo,indexTwo) in item.task_list" :key="indexTwo">
          {{itemTwo.name}}
          <div slot="content" v-for="(itemTwoInfo,indexTwoInfo) in itemTwo.arr" :key="indexTwoInfo">
            <!-- <i-circle :percent="80">
              <span class="demo-Circle-inner" style="font-size:24px">80%</span>
            </i-circle>-->
            {{itemTwoInfo}}
          </div>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
import oneList from "../common/json/oneList.js";
export default {
  name: "index",
  data() {
    return {
      collapseValue: "0",
      oneList: oneList
    };
  }
};
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
    .module-title {
      margin-bottom: 5px;
      .moudle-index {
        display: inline-block;
        border: solid 1px #009eef;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
      }
    }
  }
}
</style>
