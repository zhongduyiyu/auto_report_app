/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-25 10:47:12
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 10:47:13
 */

/*
 * @Description: 滚动条配置
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-08 15:17:20
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 10:44:56
 */
const scrollBarOptions = {
    rail: {
      background: "rgba(0,0,0,0)",
      opacity: 1,
      size: "12px",
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: "0px",
      keepShow: false,
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: "rgba(0, 0, 0, 0.46)",
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: "8px",
      disable: false,
    },
      scrollPanel: {
      scrollingX: false,
      scrollingY: true,
    },
    breadcrumbList: [],
  }

  export default scrollBarOptions