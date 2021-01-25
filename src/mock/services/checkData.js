/*
 * @Description: 检查模块数据
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-25 11:45:19
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 13:41:36
 */


import Mock from 'mockjs2'
import { builder } from '../util'
 //检查数据详情页面

       const checkDataDetail = ()=>{
        return builder(
            {
            schoolName:"哈尔滨佛学院",
            schoolNum:10010,
            year:2019,
            ipTotalNum:999,
            lastRefreshTime:"2021/01/01"
            }
        )
        } 

//分配任务的用户数据

        const taskAssignData=[{
            category:"数据分析部",
            id:1,
            list:[
            {
            category:"第一组",
            id:11,
                list:[
                {userName:"张三",userId:"11"},
                {userName:"李四",userId:"12"},
                {userName:"王五",userId:"13"},
                {userName:"赵六",userId:"14"},
                {userName:"钱八",userId:"15"},
                ]
            },
            {
            category:"第二组",
            id:12,
                list:[
                {userName:"张三2",userId:"21"},
                {userName:"李四2",userId:"22"},
                {userName:"王五2",userId:"23"},
                {userName:"赵六2",userId:"24"},
                {userName:"钱八2",userId:"25"},
                ]
            },
            ]
        },]   


        Mock.mock(/getcheckDataDetail/, 'get', checkDataDetail)