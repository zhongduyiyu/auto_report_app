<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-26 09:59:10
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-26 14:18:58
-->

<template>
    <div>
        <page-header-wrapper />
            <a-card :bordered="false" :bodyStyle="{ padding: '0 0', height: '100%' }" :style="{ height: '100%' }">
                <a-table 
                    :columns="reportTableConfig" 
                    :data-source="data" 
                    >
                        <span slot="action" slot-scope="text, record"
                        class="action"
                        >
                            <a 
                            @click="handleBasicEdit(record)"
                            >基础配置</a>
                            
                            <a 
                            @click="handleEdit(record)"
                            >报告配置</a>
                        </span>
                </a-table>
            </a-card>
    </div>
</template>

<script>
import { reportTableConfig } from "@/config/tableConfig"

    export default {
       data(){
           return{
               reportTableConfig,
               data:[
                        {
                            key: '1',
                            reportName: "哈佛短期",
                            schoolNum:"1",
                            schoolName:"哈佛大学",
                            educationLevel:"本科",
                            from:"admin",
                            status:"处理中",
                            createTime:"2021/01/01",
                            updateTime:"2021/01/01",
                        },
                          {
                            key: '2',
                            reportName: "牛津中期",
                            schoolNum:"2",
                            schoolName:"牛津大学",
                            educationLevel:"本科",
                            from:"admin",
                            status:"生成中",
                            createTime:"2021/01/01",
                            updateTime:"2021/01/01",
                        }            
                ],
           }
       },
       methods: {
           handleBasicEdit(record){
                this.$router.push({
                    path:"/report/basicEdit",
                    query:{key:record.key}
               })
           },
           handleEdit(record) {
               this.$router.push({
                    path:"/report/edit",
                    query:{key:record.key}
               })
           }
       },
    }
</script>

<style lang="less" scoped>
.action{
    a{
        margin-right: 15px;
    }
}
</style>