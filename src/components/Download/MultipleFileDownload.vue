<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-07 14:22:06
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-11 13:47:45
-->
<template>
  <div>
    <vue-scroll :ops="scrollBarOptions">
      <div class="tree">
        <a-tree
          v-model="checkedKeys"
          checkable
          :expanded-keys="expandedKeys"
          :auto-expand-parent="autoExpandParent"
          :selected-keys="selectedKeys"
          :tree-data="treeData"
          @expand="onExpand"
          @select="onSelect"
        />
      </div>
    </vue-scroll>
    <a-divider />
    <div class="panel">
       <vue-scroll :ops="scrollBarOptions">
           <ul class="fileList">
              <li class="file"
              v-for="item in checkedKeys"
              :key="item"
              >
                <span>{{item}}</span>
                <a
                @click="handleDel(item)"
                >删除</a>
              </li>
              
           </ul>
       </vue-scroll>
    </div>
  </div>
</template>

<script>
//引入滚动条配置
import scrollBarOptions from "@/systemConfig/scrollBarOptions.js";
import { saveAs } from "file-saver";
const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          {
            title: "0-0-1-2",
            key: "0-0-1-2",

            children: [
              { title: "0-0-0-0", key: "0-0-0-0" },
              { title: "0-0-0-1", key: "0-0-0-1" },
              {
                title: "0-0-0-2",
                key: "0-0-0-2",
                children: [
                  { title: "0-0-0-0", key: "0-0-0-0" },
                  { title: "0-0-0-1", key: "0-0-0-1" },
                  { title: "0-0-0-2", key: "0-0-0-2" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];
export default {
  props:["checkedKey"],
  data() {
    return {
      scrollBarOptions,//滚动条配置
      expandedKeys: [],//默认展开的父节点
      autoExpandParent: true,
      checkedKeys: null,//选中的节点
      selectedKeys: [],//选中的节点
      treeData,//树数据
      lastCheckedKey:""
    };

  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
    checkedKey(val){
      //判断是否为上一次触发该组件的同一列
      if(val!=this.lastCheckedKey){
        this.checkedKeys=null
      }
      //存储触发当前组件列的key值
      this.lastCheckedKey = this.checkedKey
    }
    
  },

  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      //checkedKeys===选中的子节点
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    },
    handleDownload() {
      var FileSaver = require("file-saver");
      FileSaver.saveAs(
        "https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi",
        "nodejs.msi"
      );
    },
    handleDel(val){
      this.checkedKeys.splice(this.checkedKeys.indexOf(val),1)
    }
  },
};
</script>

<style lang="less" scoped>
.tree {
  max-height: 400px;
}
.panel {
  height: 120px;
  .fileList{
    margin: 0;
    padding: 0;
    list-style: none;
    
    .file{
      display: flex;
      justify-content: space-between;
      padding-bottom:15px;
      span{
        margin-right:15px;
      }
      a{
        margin-right: 20px;
      }
    }
  }
}
</style>