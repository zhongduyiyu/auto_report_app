/*
 * @Description: menu参数
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-18 10:25:28
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-11 14:15:19
 */

const menuConfig={
    singleType:{
      list:[
        {
        key:"parentMenu1",
        parentName:"首页",
        //图标 类型为antd内置的icon type
        icon:"home",
        // key:"childMenu11",
        // childName:"个人中心",
        path:"/dashBoard/personal"
        },
        {
          key:"parentMenu2",
          parentName:"数据检查",
          icon:"file-search",
          // key:"childMenu12",
          // childName:"全部数据",
          path:"/dashBoard/checkDataList"
        },
        {
          key:"parentMenu3",
          parentName:"数据清理",
          icon:"filter",
          path:"/dashBoard/cleanDataList"
        
        },
        {
          key:"parentMenu4",
          parentName:"配置报告",
          icon:"form",
          path:"/dashBoard/setForm"
        
        },
        {
          key:"parentMenu5",
          parentName:"报告检查",
          icon:"check-square",
          path:"/dashBoard/checkForm"
        }
    ]
    },
    multipleType:{
      list:[
          {
            key:"parentMenu6",
            parentName:"设置管理",
            icon:"setting",
            child:[
              {
                key:"childMenu16",
                childName:"儿子1",
                path:"/dashBoard/systemSetup"
              },
              {
                key:"childMenu26",
                childName:"儿子2",
                path:"/dashBoard/systemSetup"
              },
              {
                key:"childMenu36",
                childName:"儿子3",
                path:"/dashBoard/systemSetup"
              },
            ]
          },
      ]
    }
}

export default menuConfig