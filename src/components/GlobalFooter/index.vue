<!--
 * @Description: 更改footer
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-21 15:53:34
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-24 21:34:28
-->
<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="http://www.mycos.com.cn/" target="_blank">MyCOS  高等教育·人力资源</a>
    </template>
    <template v-slot:copyright>
      <p>Copyright © 2021 麦可思</p>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
