<!--
 * @Description: 此组件为数据检查详情页的表单组件
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-25 11:09:53
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-25 17:33:20
-->

<template>
    <div class="detailForm">
        <div class="title">
            <div class="secondTabs">
                <div class="card-container">
                    <a-tabs 
                     v-model="activeKey" 
                     :animated="false"
                     class="tab"
                    >
                        <a-tab-pane 
                        v-for="item in secondTabs "
                        :key="item.key" 
                        :tab="item.secondTabName"
                        >
                            <div v-if="item.thirdTabs.length>1">
                            <a-tabs                            
                            type="card"
                            class="tab"
                            >
                                <a-tab-pane 
                                v-for="thirdItem in item.thirdTabs "
                                :key="thirdItem.key" 
                                :tab="thirdItem.thirdTabName"
                                >
                                    <a-table 
                                    :columns="thirdItem.fieldConfig" 
                                    :data-source="data" 
                                    :scroll="{ x: '100%' }"
                                    />
                                </a-tab-pane>
                            
                            </a-tabs>
                            </div>
                             <div v-else>
                                 <a-table 
                                :columns="item.fieldConfig"
                                :data-source="data"
                                :scroll="{ x: '100%' }"
                                >
                                    <a slot="name" slot-scope="text">{{ text }}</a>
                                </a-table>
                             </div>
                        </a-tab-pane>
                       
                    </a-tabs>
                </div>
            </div>
            <div class="thirdTabs"></div>
        </div>
    </div>
</template>

<script>
import tabsName from "@/systemEnum/checkDataDetailTabsName"


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

    export default {
        data(){
            return {
                secondTabs:tabsName[this.$props.type].secondTabs,
                activeKey : 1,
                data
            }
        },
        props:["type"],
        created () {
           
        },
    }



</script>

<style lang="less" scoped>


    /deep/.tab{
        background-color: #e8e8e8;
        height: 100%;
    }
    /deep/.ant-tabs-top-bar{
        border:0;
    }
   
    
    
</style>