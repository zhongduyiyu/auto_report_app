<!--
 * @Description: 检查数据详情页
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-24 15:44:48
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 13:42:46
-->
<template>
    <a-card>
        <div class="checkDataDetail">
            <div class="title">
                <div class="left">
                    <p class="schoolName">{{projectBasicInfo.schoolName}}</p>
                    <p class="schoolNum">学校编码: {{projectBasicInfo.schoolNum}}</p>
                    <p class="year">年份: {{projectBasicInfo.year}}</p>
                    <p class="ipTotalNum">IP样本总量: {{projectBasicInfo.ipTotalNum}}</p>
                    <p class="lastRefreshTime">最后一次刷新时间: {{projectBasicInfo.lastRefreshTime}}</p>
                    <a-tooltip placement="rightTop" class="tips">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-icon type="question-circle" /> 
                        说明
                    </a-tooltip>
                </div>
                <div class="right">
                    <!-- <ui-reload /> -->
                    <a-button  icon="download" >
                        下载
                    </a-button>
                </div>
                
            </div>

            <div class="content">
                <div>
                    <a-tabs default-active-key="1" tab-position="left">
                        <a-tab-pane key="1" tab="用户答题情况">
                            <DetailForm type="userAnswer"/>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="样本回收情况">
                            <DetailForm type="sampleCollection"/>
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="新增修改问题">
                            <DetailForm type="addOrModeifyQuestion"/>
                        </a-tab-pane>
                        <a-tab-pane key="4" tab="调研数据检查">
                            <DetailForm type="checkResearchData"/>
                        </a-tab-pane>
                    </a-tabs>
                </div>
            </div>
        </div>
    </a-card>
</template>

<script>
import{ getDetail }from "@/api/checkData"
import DetailForm from "./components/DetailForm"
    export default {
        data(){
            return{
                projectBasicInfo:{}
            }
        },
        components: {
            // 'ui-reload':uiReload,
            DetailForm,
        },
         created () {
             getDetail().then(res => {
             this.projectBasicInfo = res.result
            })
            
        },
    }
</script>

<style lang="less" scoped>
@import url("./checkDataDetail.less");
</style>