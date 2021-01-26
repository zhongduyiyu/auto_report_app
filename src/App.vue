<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-23 00:07:55
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-26 13:38:12
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'

export default {

  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }
  }
}
</script>

<style lang="less">
  .ant-pro-page-header-wrap-page-header-warp{
    margin-bottom: 24px;
  .ant-page-header-heading{
    display: none;
  }
  }
</style>
