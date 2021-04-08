<template>
  <div>
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">
                  {{ $t('dashboard.totalShipments') }}
                </h5>
                <h2 class="card-title">{{ balance | toCurrency }}</h2>
              </div>
              <div class="col-sm-6">
                <div
                  class="btn-group btn-group-toggle"
                  :class="isRTL ? 'float-left' : 'float-right'"
                  data-toggle="buttons"
                >
                  <label
                    v-for="(option, index) in bigLineChartCategories"
                    :key="option"
                    class="btn btn-sm btn-primary btn-simple"
                    :class="{ active: bigLineChart.activeIndex === index }"
                    :id="index"
                  >
                    <input
                      type="radio"
                      @click="initBigChart(index)"
                      name="options"
                      autocomplete="off"
                      :checked="bigLineChart.activeIndex === index"
                    />
                    {{ option }}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <line-chart
              style="height: 100%"
              ref="bigChart"
              chart-id="big-line-chart"
              :chart-data="bigLineChart.chartData"
              :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <card class="card" :header-classes="{ 'text-right': isRTL }">
          <h4 slot="header" class="card-title">
            {{ $t('dashboard.usersTable.title') }}
          </h4>
          <div class="table-responsive">
            <user-table></user-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from '@/components/Charts/LineChart'
import BarChart from '@/components/Charts/BarChart'
import * as chartConfigs from '@/components/Charts/config'
import TaskList from './Dashboard/TaskList'
import UserTable from './Dashboard/UserTable'
import config from '@/config'
import { mapActions } from 'vuex'

export default {
  components: {
    LineChart,
    BarChart,
    TaskList,
    UserTable
  },
  data() {
    return {
      balance: 0,
      bigLineChart: {
        allData: [[100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]],
        activeIndex: 0,
        chartData: {
          datasets: [{}],
          labels: [
            'JAN',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEP',
            'OCT',
            'NOV',
            'DEC'
          ]
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      }
    }
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL
    },
    isRTL() {
      return this.$rtl.isRTL
    },
    bigLineChartCategories() {
      return this.$t('dashboard.chartCategories')
    }
  },
  methods: {
    ...mapActions('accounts', ['getAccount']),
    getAccountRequest() {
      this.getAccount()
    },
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OCT',
          'NOV',
          'DEC'
        ]
      }
      this.$refs.bigChart.updateGradients(chartData)
      this.bigLineChart.chartData = chartData
      this.bigLineChart.activeIndex = index
    }
  },
  created() {
    this.getAccount().then((data) => {
      this.balance = data.balance
    })
  },
  mounted() {
    this.i18n = this.$i18n
    if (this.enableRTL) {
      this.i18n.locale = 'ar'
      this.$rtl.enableRTL()
    }
    this.initBigChart(0)
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = 'en'
      this.$rtl.disableRTL()
    }
  }
}
</script>
<style>
</style>
