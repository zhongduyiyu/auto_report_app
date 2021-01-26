<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-26 13:42:51
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-26 18:33:42
-->
<template>
    <div class="reportEdit">
        <page-header-wrapper />
        <div class="progressTool">
            <div 
            :class="[editFrame?'progressbtn checked':'progressbtn']"
            @click="handleProgressTool('editFrame')"
            >编辑框架</div>
            <div 
             :class="[choose?'progressbtn checked':'progressbtn']"
             @click="handleProgressTool('choose')"
            >选择生成内容</div>
            <div 
            :class="[editItem?'progressbtn checked':'progressbtn']"
            @click="handleProgressTool('editItem')"
            >编辑指标与解读</div>
        </div>
       <div class="content">
            <a-card
            :style="{marginTop:'24px',width:'350px'}"
            >
                <a-card 
                title="报告名称"
                :bordered="false"
                >
                    <a slot="extra" href="#">样本限制</a>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <a-button type="dashed" icon="plus" :style="{width:'100%'}">
                        新增框架
                    </a-button>
                </a-card>
            </a-card>
            <a-card
            :style="{margin:'24px 0 0 24px',width:'100%',}"
            >
            <vxe-table
            border
            row-key
            ref="xTable1"
            class="sortable-row-demo"
            :scroll-y="{enabled: false}"
            :data="tableData">
                <vxe-table-column width="60">
                    <template v-slot>
                    <span class="drag-btn">
                        <i class="vxe-icon--menu"></i>
                    </span>
                    </template>
                    <template v-slot:header>
                    <vxe-tooltip v-model="showHelpTip1" content="按住后可以上下拖动排序！" enterable>
                        <i class="vxe-icon--question" @click="showHelpTip1 = !showHelpTip1"></i>
                    </vxe-tooltip>
                    </template>
                </vxe-table-column>
                <vxe-table-column field="name" title="Name"></vxe-table-column>
                <vxe-table-column field="sex" title="Sex"></vxe-table-column>
                <vxe-table-column field="age" title="Age"></vxe-table-column>
                <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
            </vxe-table>
            </a-card>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //vxe
                showHelpTip1: false,
                tableData: [
                    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women ', age: 23, address: 'Shenzhen' },
                    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' }
                ],
                //vxe
                editFrame:true,
                choose:false,
                editItem:false,
            }
        },
        created () {
            this.rowDrop()
        },
        beforeDestroy () {
            if (this.sortable1) {
                this.sortable1.destroy()
            }
        },
        methods: {
            handleProgressTool(val) {
                if(val=="editFrame"){
                    this.editFrame = true
                    this.choose = false
                    this.editItem = false
                }
                if(val=="choose"){
                    this.editFrame = false
                    this.choose = true
                    this.editItem = false
                }
                if(val=="editItem"){
                    this.editFrame = false
                    this.choose = false
                    this.editItem = true
                }
            },
            rowDrop () {
              this.$nextTick(() => {
                const xTable = this.$refs.xTable1
                this.sortable1 = Sortable.create(xTable.$el.querySelector('.body--wrapper>.vxe-table--body tbody'), {
                  handle: '.drag-btn',
                  onEnd: ({ newIndex, oldIndex }) => {
                    const currRow = this.tableData.splice(oldIndex, 1)[0]
                    this.tableData.splice(newIndex, 0, currRow)
                  }
                })
              })
            },
        }
    }
</script>

<style lang="less" scoped>
.reportEdit{
    .progressTool{
        display: flex;
        justify-content: center;
        .progressbtn{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            margin-right: 25px;
            width: 140px;
            height:38px;
            border:1px solid rgb(217, 217, 217);
            background-color: #d8d8d8;
            color:#666;
            cursor: pointer;
            user-select: none;
            &:hover{
                color: #f1f1f1;
                border:1px solid  #1890ff;
                background-color: #1890ff;
            }
            
        }
        .checked{
            color: #f1f1f1;
            border:1px solid  #1890ff;
            background-color: #1890ff;
        }
    }
    .content{
        display: flex;
    }
}
//vxe
.sortable-row-demo .drag-btn {
    cursor: move;
    font-size: 12px;
}
.sortable-row-demo .vxe-body--row.sortable-ghost,
.sortable-row-demo .vxe-body--row.sortable-chosen {
    background-color: #dfecfb;
}
</style>