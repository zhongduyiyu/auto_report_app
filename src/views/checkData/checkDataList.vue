<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 15:05:31
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 18:48:31
-->
<template>
    <a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">

    <div class="checkDataList">
        <div class="listHeader">
            <span
            v-for="item in projectType"
            :key="item"
            :class="['projectTypeList',{active:item==defaultCheckedType}]"
            @click="handleProjectTypeClick(item)"
            >{{item}}</span>
        </div>
        <div class="filter">
            <div class="left">
                <div>
                    <span class="planStatus">任务状态：</span>
                    <a-dropdown 
                    :trigger="['click']"
                    >
                    <a-menu slot="overlay" @click="handleMenuClick">
                        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
                        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
                        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
                    </a-menu>
                    <a-button style="margin-left: 8px"> 全部 <a-icon type="down" /> </a-button>
                    </a-dropdown>
                </div>
                <div>
                    <span class="schoolName">学校名称/编码：</span>
                    <a-input-search placeholder="请输入学校名称或编码" style="width: 200px" @search="onSearch" />
                    
                </div>
            </div>
            <div class="right">
                
                <!-- <ui-reload :stopLoading ="stopLoading"/>
        
                <ui-select-wrapper>

                    <a-checkbox>
                        Checkbox1s
                    </a-checkbox>
                    
                </ui-select-wrapper> -->
            </div>
        </div>
        <div class="table">
            <a-table 
            :columns="columnConfig" 
            :data-source="data" 
            >
                <span slot="action" slot-scope="text, record"
                >
                    <!-- <a @click="handlePush(record.id)">详情</a>

                    <a 
                    @click="handleTaskAssign"
                    v-if="record.projectStatus=='待分配'"
                    > 分配任务 </a>
                    <a 
                    v-if="record.projectStatus=='已分配'||record.projectStatus=='已检查'"
                    @click="handleMark(record.projectStatus,record.id)">
                    标记为{{record.projectStatus=="已检查"?"未检查":"已检查"}} </a>
                    
                    <a
                    v-if="record.projectStatus=='已分配'||record.projectStatus=='已检查'"
                    @click="handleGivePermissionAgain">再次赋权</a> -->
                    <a 
                    @click="handleDownload(record)"
                    >下载</a>
                    <a 
                    @click="handleUpload(record)"
                    >导入</a>
                </span>
            </a-table>
            
            <a-modal 
            v-model="showModal" 
            :title="modalInfo.title"
            ok-text="确认" cancel-text="取消"
            @ok="handleOk"
            @cancel="handleCancel"
            v-if="modalInfo.id == 'MultipleFileDownload'"
            >
                <!-- <a-tree-select
                    v-if="modalInfo.id == 'taskAssign'"
                    show-search
                    style="width: 100%"
                    :value="treeValue"
                    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                    placeholder="请选择分配对象"
                    allow-clear
                    multiple
                    @change="handleTreeChange"
                >
                    <a-tree-select-node 
                    v-for="fatherItem in userList"
                    :key="fatherItem.category" :value="fatherItem.category" :title="fatherItem.category">

                        <a-tree-select-node 
                        v-for="sonItem in fatherItem.list"
                        :key="sonItem.category" :value="sonItem.category" :title="sonItem.category">

                            <a-tree-select-node 
                            v-for="grandSon in sonItem.list"
                            :key="grandSon.userName" :value="grandSon.userName" :title="grandSon.userName">
                            </a-tree-select-node>

                        </a-tree-select-node>

                    </a-tree-select-node>
                </a-tree-select> -->
                <MultipleFileDownload 
            :checkedKey="modalInfo.checkedKey"
            :isDownload = "isDownload"
                />

            </a-modal>
            <!-- 采用两个modal的原因是modal组件去掉下面按钮后，无法恢复原装胎 -->
            <a-modal 
            v-model="showModal" 
            :title="modalInfo.title"
            v-if="modalInfo.id == 'CommonUpload'"
            :footer="null"
            >

            <CommonUpload />
            
            </a-modal>
        </div>

    </div>
    </a-card>
</template>

<script>
import columnConfig from "@/config/dataTableConfig"
import {projectType,defaultCheckedType} from "@/systemEnum/projectType"
// import uiSelectWrapper from "@/components/UI/ui-select-wrapper"
import MultipleFileDownload from "@/components/Download/MultipleFileDownload"
import CommonUpload from "@/components/Upload/CommonUpload"

//接口
import {getList} from "@/api/checkData"
    export default {
        components: {
            // 'ui-select-wrapper':uiSelectWrapper,
            MultipleFileDownload,
            CommonUpload
        },
 
        data(){
            return {
                isDownload:false,//触发下载
                treeValue:undefined,//树状控件已选分支的值
                stopLoading:false,//赋值为true 暂停图标
                push:false,//触发跳转
                showModal:false,//模态框的显示与否
                defaultCheckedType,//表头上默认选中的类型
                projectType,//项目类型的enum对象
                columnConfig,//table控件的表配置
                modalInfo:{},//模态框信息
                userList:[],//用于存储分配任务获取到的用户列表
                data:[
                         {
                            key: '1',
                            projectStatus: "调查中",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:1
                        },
                        {
                            key: '2',
                            projectStatus: "待分配",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:12
                        },
                         {
                            key: '3',
                            projectStatus: "已分配",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:121
                        },
                         {
                            key: '4',
                            projectStatus: "已检查",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:1213
                        },                   
                ],
            
            }
        },
        methods:{
            //文件上传处理
            handleUpload(record){
                this.isShowModal({id:"CommonUpload",title:"导入",checkedKey:record.id}) 
                
            },
            //文件下载处理
            handleDownload(record){
               this.isShowModal({id:"MultipleFileDownload",title:"多级下载",checkedKey:record.id}) 
               this.showModal = true 
            },
            handleTreeChange(value){
                this.treeValue=value
                this.handleTaskAssign
            },
            handleProjectTypeClick(typeName){
                this.defaultCheckedType = typeName
            },
            handleMenuClick(){},
            onSearch(){},
            isShowModal(modalInfo){
                this.modalInfo = modalInfo//把当前点击对象的信息给到模态框
                this.showModal = true
            },
            handlePush(id){
                 this.$router.push(`/checkData/detail?id=${id}`)
            },
            // async handleTaskAssign(){
            //     this.isShowModal({id:"taskAssign",title:"分配任务"})
            //     //获取用户列表
            //     let res = await getList({})
            //     console.log(res)
            //     this.userList = res.data.data 
            // },
            // handleMark(status,id){
            //     if(status=="已检查"){

            //     }
            //     //问题，标记未未检查后的状态是什么？
            //     //发起请求，标记成功后，直接修改本地数据，并不需要重复请求完整数据
            // },
            // handleGivePermissionAgain(){
            //     this.isShowModal({id:"givePermissionAgain",title:"再次赋权"})
            // },
            // handleTaskAssignUserCheck(checkedValues){
            //     console.log('checked = ', checkedValues);
            // },
            handleOk(e) {
                console.log("ok")
                this.isDownload = true
                this.showModal = false 
                setTimeout(()=>{
                    this.isDownload = false
                },50)
            },
            handleCancel(e) {
                this.showModal = false 
            },

        }
    }
</script>

<style lang="less" scoped>
@import url("./checkDataList");
</style>