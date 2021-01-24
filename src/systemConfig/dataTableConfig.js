/*
 * @Description: 数据清理与检查数据的table的表头配置
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-23 17:52:58
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-08 15:17:26
 */

const columnConfig = [
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

export default columnConfig