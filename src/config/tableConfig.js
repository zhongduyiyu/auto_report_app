/*
 * @Description: 数据清理与检查数据的table的表头配置
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-23 17:52:58
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-26 13:25:31
 */

export const projectListTableConfig = [
    { title: '任务状态',  width: 100,dataIndex: 'projectStatus',  },
    { title: '项目名称',  width: 140,dataIndex: 'projectName',  },
    { title: '项目类型', dataIndex: 'projectType',  },
    { title: '当前届次/学年', width: 140,dataIndex: 'currentYear', },
    { title: '学校名称', dataIndex: 'schoolName',},
    { title: '学历层次', width: 150,dataIndex: 'level', },
    { title: '分配人', width: 100,dataIndex: 'from',  },
    { title: '分配时间', width: 130,dataIndex: 'allotTime',  },
    { title: '更新时间', width: 130,dataIndex: 'updateTime',  },  
    {
        title: '操作',
        key: 'operation',
        width: 320,
        scopedSlots: { customRender: 'action' },
    },
    ]
export const reportTableConfig = [
    { title: '报告名称',  width: 140,dataIndex: 'reportName',  },
    { title: '学校编码',  width: 100,dataIndex: 'schoolNum',  },
    { title: '学校名称', dataIndex: 'schoolName',  },
    { title: '学历层次', width: 140,dataIndex: 'educationLevel', },
    { title: '分配人', dataIndex: 'from',},
    { title: '状态', width: 100,dataIndex: 'status',  },
    { title: '创建时间', width: 130,dataIndex: 'createTime',  },
    { title: '最后更新时间', width: 130,dataIndex: 'updateTime',  },  
    {
        title: '操作',
        key: 'operation',
        width: 320,
        scopedSlots: { customRender: 'action' },
    },
    ]

