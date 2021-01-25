<!--
 * @Description: 文件上传组件
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-25 17:56:28
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 18:34:04
-->
<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :remove="handleRemove"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">
      直接拖入或点击选择需要导入的文件
    </p>
    <p class="ant-upload-hint">
      支持单个或批量上传
    </p>
  </a-upload-dragger>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} 上传成功`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} 上传失败，请重试`)
      }
    },
    handleRemove(file){
        console.log("移除",file);
        this.$message.success(`${file.name} 已移除`)
    }
  }
}
</script>
