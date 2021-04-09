<template>
  <base-table
    :data="data"
    :columns="table.columns"
    thead-classes="text-primary"
  >
  </base-table>
</template>
<script>
import { BaseTable } from '@/components'
export default {
  components: {
    BaseTable
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    table() {
      return this.$t('dashboard.usersTable')
    }
  }
}
</script>
<style>
</style>
