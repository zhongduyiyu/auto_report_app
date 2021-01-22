<!--
 * @Description: 11
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-21 15:53:34
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-22 18:37:19
-->
<template>
  <div>
    <page-header-wrapper />
    <div class="content">
      <div 
      v-for="item in table"
      :key="item"
      class="table"
      :id='item'
      >item</div>
    </div>
  </div>
</template>

<script>
import { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
export default {
  data(){
    return{
      table:[]
    }
  },
  name: 'Workplace',
  components: {
    PageHeaderWrapper
  },
  created(){
    for(let i = 0;i<1;i++){
      this.table.push(i)
    }
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      // 指定图表的配置项和数据
      let option = {
        series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
        
      }
      // 使用刚指定的配置项和数据显示图表。
            this.table.forEach(item =>{
               let myChart = this.$echarts.init(document.getElementById(item),null, {renderer: 'svg'})
               myChart.setOption(option)
            })
      
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style lang="less" scoped>
@import './Workplace.less';
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .table {
    width: 600px;
    height: 400px;
  }
}
</style>
