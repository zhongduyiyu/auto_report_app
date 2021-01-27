<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-26 13:42:51
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-27 20:24:10
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
            :show-header="false"
            show-overflow
            border="none"
            row-key
            ref="xTable1"
            class="sortable-row-demo"
            :scroll-y="{enabled: false}"
            :data="tableData"
            :tree-config="{children: 'children'}"
            :edit-config="{trigger: 'click', mode: 'row'}"
            row-id="id"
            keep-source
            >
               
                <vxe-table-column 
                field="name" 
                width="auto" 
                tree-node 
                :edit-render="{name: 'input'}" 
                />
                <vxe-table-column  width="100" show-overflow>
                    <template v-slot="{ row }">
                        <a-button 
                        icon="delete" 
                        size="small"
                        shape="circle"
                        @click="handleDel(row)"></a-button>
                    </template> 
                </vxe-table-column>
            </vxe-table>
            </a-card>
       </div>
    </div>
</template>

<script>
    //引入拖动插件
    import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

    export default {
        data(){
            return{
                //vxe
                showHelpTip1: false,
                tableData: [
                    { 
                        id: 10001, 
                        name: 'Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1',
                        children: [
                        { id: 100011, name: 'Test3' },
                        { id: 100012, name: 
                        'vxe-table 从入门到放弃4',
                        children: [
                        { id: 1000121, name: 'Test3' },
                        { id: 1000122, name: 'vxe-table 从入门到放弃4' },
                        ]
                        },
                        ]
                    },
                    { id: 10002, name: 'Test2Test1Test1Test1Test1Test1Test1Test1Test1Test1' },
                    { id: 10003, name: 'Test3Test1Test1Test1Test1Test1Test1Test1Test1Test1' },
                    { id: 10004, name: 'Test4Test1Test1Test1Test1Test1Test1Test1Test1Test1' },
                    { id: 10005, name: 'Test5Test1Test1Test1Test1Test1Test1Test1Test1Test1' },
                    
                ],
                //vxe
                editFrame:true,
                choose:false,
                editItem:false,
                //存储移动前和移动后的信息
                moveStartArr:[],
                moveEndArr:[],
                confirmMoveArr:[]//移动成功的数据
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
            handleDel(row){            
                function deepFilter(arr,key){
                    //深度递归过滤
                    if(!Array.isArray(arr)){return arr}
                    
                    arr.forEach((item,index)=>{
                        if(item.id ===key){
                            arr.splice(index,1)
                        }else{
                            if(Array.isArray(item.children)){
                                deepFilter(item.children,key)
                            }else{
                                if(item.id===key){
                                    arr.splice(index,1)
                                }
                            }
                        }
                       
                    })
                }
                deepFilter(this.tableData,row.id) 
            },
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
             //边界判断的思路主要是对比之前位置的rowId和现在移动那个对应位置的rowId长度是否一致
              this.$nextTick(() => {
                const xTable = this.$refs.xTable1
                //拖动插件初始化
                let element,nextElement
                this.sortable1 = new Sortable(xTable.$el.querySelector('.body--wrapper>.vxe-table--body tbody'), {
                    handle: '.vxe-cell--label',
                    group: { name: "...", pull: [true], put: [true] },
                    // filter: `.vxe-body--row`,
                    // swapThreshold: 1,
                    sort: true,
                    
                    onStart:(e)=>{
                        this.moveStartArr=[]
                        let expandTr = xTable.$el.querySelectorAll('.body--wrapper>.vxe-table--body tbody>tr')
                        expandTr.forEach((item,index)=>{
                            this.moveStartArr.push({rowId:item.attributes[0].value,index})
                        })
                       nextElement = expandTr[e.oldIndex+1]
                    },
                    onEnd: (e) => {
                        this.moveEndArr=[]
                        let expandTr = xTable.$el.querySelectorAll('.body--wrapper>.vxe-table--body tbody>tr')
                        expandTr.forEach((item,index)=>{
                            this.moveEndArr.push({rowId:item.attributes[0].value,index})
                        })
                        // console.log("当前数组",this.moveEndArr)
                        // console.log("当前索引",e.newIndex,"旧索引",e.oldIndex);
                        // console.log(this.moveEndArr[e.newIndex]);
                        // console.log("当前rowId长度",this.moveEndArr[e.newIndex].rowId.length);
                        // console.log("旧的rowId长度",this.moveStartArr[e.oldIndex].rowId.length);
                        if(this.moveEndArr[e.newIndex].rowId.length!==this.moveStartArr[e.newIndex].rowId.length){
                            // console.log("跨级加载");
                            //需要删除的节点
                            element =  expandTr[e.newIndex]
                            // console.log(element);
                            // //删除节点未改变位置前，后一位节点
                            // console.log(nextElement);
                            nextElement.parentNode.insertBefore( element,nextElement)
                            // element.parentNode.removeChild(element)

                            this.$notification.warning({
                                message: '禁止跨级移动',
                                description:
                                '仅支持同级之间进行切换',
                            });
                        }else{
                            //如果合规，则更改数据 
                            expandTr = xTable.$el.querySelectorAll('.body--wrapper>.vxe-table--body tbody>tr')
                            expandTr.forEach((item,index)=>{
                            this.moveEndArr.push({rowId:item.attributes[0].value,index})
                            })
                            // dodo
                        }

                    // const currRow = this.tableData.splice(oldIndex, 1)[0]
                    // this.tableData.splice(newIndex, 0, currRow)
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

.sortable-row-demo .vxe-body--row.sortable-ghost,
.sortable-row-demo .vxe-body--row.sortable-chosen {
    background-color: #dfecfb;
    
}
</style>