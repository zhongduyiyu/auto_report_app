<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-26 14:16:57
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-26 15:28:31
-->
<template>
  <div>
    <page-header-wrapper />
    <a-card>
    <!-- value值暂未设置 -->
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">

          <a-card title="基本信息" :bordered="false">
            <a-form-model-item label="选择学校">
                <a-select v-model="form.region" placeholder="请选择学校">
                    <a-select-option   a-select-option value="北大">
                    北大
                    </a-select-option>
                    <a-select-option value="清华">
                    清华
                    </a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="报告名称">
            <a-input v-model="form.name" />
            </a-form-model-item>

            <a-form-model-item label="分析范围">
                <a-select v-model="form.region" placeholder="请选择范围">
                    <a-select-option value="短期">
                    短期
                    </a-select-option>
                    <a-select-option value="中期">
                    中期
                    </a-select-option>
                </a-select>
            </a-form-model-item>
        </a-card>

        <a-card title="通用限制条件" :bordered="false">
            <a-form-model-item label="保留小数规则">
                <a-radio-group v-model="form.resource">
                    <a-radio value="1">
                    保留整数
                    </a-radio>
                    <a-radio value="2">
                    保留两位小数
                    </a-radio>
                    <a-radio value="3">
                    保留一位小数
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="主题选择">
                <a-radio-group v-model="form.resource">
                    <a-radio value="4">
                    蓝色
                    </a-radio>
                    <a-radio value="5">
                    绿色
                    </a-radio>
                    <a-radio value="6">
                    红色
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>
        </a-card>
        <a-card title="项目设置" :bordered="false">
            <a-form-model-item label="选择项目">
                <a-select v-model="form.region" placeholder="请选择">
                    <a-select-option   a-select-option value="xxxxxx噢噢噢噢">
                    xxxxxx噢噢噢噢
                    </a-select-option>
                    <a-select-option value="xxxxxx噢噢噢噢">
                    xxxxxx噢噢噢噢
                    </a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="学历层次">
                <a-radio-group v-model="form.resource">
                    <a-radio value="6">
                    本科
                    </a-radio>
                    <a-radio value="7">
                    高职
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="展示届次">
                <a-checkbox-group v-model="form.type">
                    <a-checkbox value="8" name="type">
                    2020届
                    </a-checkbox>
                    <a-checkbox value="9" name="type">
                    2021届
                    </a-checkbox>
                    <a-checkbox value="10" name="type">
                    2022届
                    </a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>
            
            <a-form-model-item label="数据合并方式">
                <a-select v-model="form.region" placeholder="请选择">
                    <a-select-option   a-select-option value="xxxxxx噢噢36噢噢">
                    xxxxxx噢噢噢g噢
                    </a-select-option>
                    <a-select-option value="xxxxxx噢噢6噢噢">
                    xxxxxx噢噢j噢噢
                    </a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="合并内容">
                <a-checkbox-group v-model="form.type">
                    <a-checkbox value="8" name="type">
                    2020届
                    </a-checkbox>
                    <a-checkbox value="9" name="type">
                    2021届
                    </a-checkbox>
                    <a-checkbox value="10" name="type">
                    2022届
                    </a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>

            <a-form-model-item label="对比参照系">
                <a-select v-model="form.region" placeholder="请选择">
                    <a-select-option   a-select-option value="xxxxxx噢1噢噢噢">
                    xxxxxx噢噢噢1噢
                    </a-select-option>
                    <a-select-option value="xxxxxx噢噢2噢噢">
                    xxxxxx噢噢3噢噢
                    </a-select-option>
                </a-select>
            </a-form-model-item>
        </a-card>
        <a-divider dashed />
        <a-button icon="plus">
            添加项目
        </a-button>
        <a-card :bordered="false" :style="{display:'flex',justifyContent:'center'}">
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" size="large"  @click="onSubmit"> 
                开始配置
            </a-button>
            </a-form-model-item>
        </a-card>

      </a-form-model>
    </a-card>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form)
    }
  }
}
</script>

<style lang="less" scope>

</style>
