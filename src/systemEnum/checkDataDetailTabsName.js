/*
 * @Description: 检查数据详情，各个父tab及其子tab的数据
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-25 11:21:03
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-25 17:15:17
 */

 const tabsName ={
    userAnswer:{
     firstTabName:"用户答题情况",
     key:1,
     secondTabs:[
         {
            secondTabName:"答题IP统计情况",
            key:1,
            thirdTabs:[
                {
                    thirdTabName:"用户答题情况",
                    key:1,
                    fieldConfig:[
                        {
                          title: '用户号',
                          dataIndex: 'name',
                          key: 'name',
                          width: 200,
                        },
                        {
                          title: '操作系统',
                          dataIndex: 'age',
                          key: 'age',
                          width: 200,
                        },
                        {
                          title: '第一次答题日期',
                          dataIndex: 'address',
                          key: 'address 1',
                          width: 200,
                          
                        },
                        {
                          title: '最后一次答题日期',
                          dataIndex: 'address',
                          key: 'address 2',
                          width: 200,
                          
                        },
                        {
                          title: '最后一次登录日期',
                          dataIndex: 'address',
                          key: 'address 3',
                          width: 200,
                          
                        },
                        {
                          title: '答题IP_1',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                          
                        },
                        {
                          title: '答题IP_1_登录时间',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                          
                        },
                        {
                          title: '答题IP_2',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                          
                        },
                        {
                          title: '答题IP_2_登录时间',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                          
                        },
                        {
                          title: '答题IP_3',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                        {
                          title: '答题IP_3_登录时间',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                        {
                          title: '答题IP_4',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                        {
                          title: '答题IP_4_登录时间',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                        {
                          title: '答题IP_5',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                        {
                          title: '答题IP_5_登录时间',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                        {
                          title: '备注',
                          dataIndex: 'address',
                          key: 'address 4',
                          width: 200,
                        },
                      ]
                },
                {
                    thirdTabName:"单个IP多次答题情况",
                    key:2,
                    fieldConfig:[
                        {
                          title: '字段一',
                          dataIndex: 'name',
                          key: 'name',
                        },
                        {
                          title: '字段一',
                          dataIndex: 'age',
                          key: 'age',
                          width: 80,
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 1',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 2',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 3',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 4',
                          
                        },
                      ]
                },
                {
                    thirdTabName:"重复IP专业分布",
                    key:3,
                    fieldConfig:[
                        {
                          title: '字段一',
                          dataIndex: 'name',
                          key: 'name',
                        },
                        {
                          title: '字段一',
                          dataIndex: 'age',
                          key: 'age',
                          width: 80,
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 1',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 2',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 3',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 4',
                          
                        },
                      ]
                },
                {
                    thirdTabName:"重复IP学院分布",
                    key:4,
                    fieldConfig:[
                        {
                          title: '字段一',
                          dataIndex: 'name',
                          key: 'name',
                        },
                        {
                          title: '字段一',
                          dataIndex: 'age',
                          key: 'age',
                          width: 80,
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 1',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 2',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 3',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 4',
                          
                        },
                      ]
                }
            ]
         },
         {
            secondTabName:"答题时间统计情况",
            key:2,
            thirdTabs:[
                {
                    thirdTabName:"每个人答题时间分布",
                    key:1,
                    fieldConfig:[
                        {
                          title: '字段一',
                          dataIndex: 'name',
                          key: 'name',
                        },
                        {
                          title: '字段一',
                          dataIndex: 'age',
                          key: 'age',
                          width: 80,
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 1',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 2',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 3',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 4',
                          
                        },
                      ]
                },
                {
                    thirdTabName:"每周、每月的答题人群数分布",
                    key:2,
                    fieldConfig:[
                        {
                          title: '字段一',
                          dataIndex: 'name',
                          key: 'name',
                        },
                        {
                          title: '字段一',
                          dataIndex: 'age',
                          key: 'age',
                          width: 80,
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 1',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 2',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 3',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 4',
                          
                        },
                      ]
                },
                {
                    thirdTabName:"首末次答题时间差",
                    key:3,
                    fieldConfig:[
                        {
                          title: '字段一',
                          dataIndex: 'name',
                          key: 'name',
                        },
                        {
                          title: '字段一',
                          dataIndex: 'age',
                          key: 'age',
                          width: 80,
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 1',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 2',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 3',
                          
                        },
                        {
                          title: '字段一',
                          dataIndex: 'address',
                          key: 'address 4',
                          
                        },
                      ]
                },
                
            ]
         },
     ]
     
    },
    sampleCollection:{
    firstTabName:"样本回收情况",
     key:2,
     secondTabs:[
         {
            secondTabName:"数据采集样本回收情况表",
            key:1,
            thirdTabs:[],
            fieldConfig:[
                {
                  title: '字段一',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '字段一',
                  dataIndex: 'age',
                  key: 'age',
                  width: 80,
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 1',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 2',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 3',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 4',
                  
                },
              ]
         },
         {
            secondTabName:"各专业对应的主要指标有效样本情况表",
            key:2,
            thirdTabs:[],
            fieldConfig:[
                {
                  title: '字段一',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '字段一',
                  dataIndex: 'age',
                  key: 'age',
                  width: 80,
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 1',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 2',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 3',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 4',
                  
                },
              ]
         },
         {
            secondTabName:"各专业能够分析的主要指标一览表",
            key:3,
            thirdTabs:[],
            fieldConfig:[
                {
                  title: '字段一',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '字段一',
                  dataIndex: 'age',
                  key: 'age',
                  width: 80,
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 1',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 2',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 3',
                  
                },
                {
                  title: '字段一',
                  dataIndex: 'address',
                  key: 'address 4',
                  
                },
              ]
         },
     ]
    },
    addOrModeifyQuestion:{
    firstTabName:"新增/修改问题",
     key:3,
     secondTabs:[
        {
           secondTabName:"特殊需求",
           key:1,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
        {
           secondTabName:"数据集",
           key:2,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
        {
           secondTabName:"子问题",
           key:3,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
        {
           secondTabName:"子问题回答",
           key:4,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
        {
           secondTabName:"单选",
           key:5,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
        {
           secondTabName:"多选",
           key:6,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
        {
           secondTabName:"编辑",
           key:7,
           thirdTabs:[],
           fieldConfig:[
            {
              title: '字段一',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '字段一',
              dataIndex: 'age',
              key: 'age',
              width: 80,
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 1',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 2',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 3',
              
            },
            {
              title: '字段一',
              dataIndex: 'address',
              key: 'address 4',
              
            },
          ]
        },
      
    ]
    },
    checkResearchData:{
    firstTabName:"调研数据检查",
     key:4,
     secondTabs:[]
    },
 }

export default tabsName