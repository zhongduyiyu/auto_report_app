<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-24 01:26:29
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-24 01:52:17
-->
<template>
    <div>

    </div>
</template>

<script>
    export default {
        created(){
            let goPath = this.$route.query.path
            this.$router.replace({path:goPath})
        }
    }
</script>

<style lang="less" scoped>

</style>