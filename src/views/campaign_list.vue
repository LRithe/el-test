<template>
  <div>
    <el-select
      v-model="status"
      placeholder="请选择">
      <el-option
        v-for="item in statusOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'CampaignList',
  data () {
    return {
      status: ''
    }
  },
  computed: {
    statusOptions () {
      return [{
        value: 'ALL',
        label: '全部'
      }]
    }
  }
}
</script>
