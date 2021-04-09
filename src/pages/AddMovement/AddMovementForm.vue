<template>
  <card>
    <h5 slot="header" class="title">Make Movement</h5>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <div class="col-md-6 pr-md-1">
            <ValidationProvider
              name="movementType"
              rules="required|min:1"
              v-slot="{ passed, failed, errors }"
            >
              <base-input label="Movement Type">
                <select
                  v-model="movementType"
                  id="inputState"
                  class="form-control"
                  :error="errors[0]"
                  :class="[{ 'has-success': passed }, { 'has-danger': failed }]"
                >
                  <option
                    :selected="movementType == ''"
                    value=""
                    class="text-dark"
                  >
                    Select
                  </option>
                  <option
                    v-for="(item, index) in movementTypes"
                    :value="item.id"
                    :key="index"
                    class="text-dark"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </base-input>
            </ValidationProvider>
          </div>
          <div class="col-md-6 px-md-1">
            <label>Value</label>
            <ValidationProvider
              name="movementType"
              rules="required"
              v-slot="{ passed, failed, errors }"
            >
              <money
                label="Value"
                placeholder="Value"
                v-model="value"
                v-bind="money"
                class="form-control"
                :error="errors[0]"
                :class="[{ 'has-success': passed }, { 'has-danger': failed }]"
              >
              </money>
            </ValidationProvider>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <base-button
            type="submit"
            native-type="submit"
            class="btn btn-fill btn-info btn-wd"
            fill
            >Save</base-button
          >
        </div>
      </form>
    </ValidationObserver>
  </card>
</template>
<script>
import { mapActions } from 'vuex'
import { Money } from 'v-money'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', required)
extend('min', min)

export default {
  data() {
    return {
      movementTypes: [],
      value: 0,
      movementType: '',
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '$ ',
        suffix: ' ',
        precision: 2,
        masked: false
      }
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    Money,
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    ...mapActions('movementTypeModule', ['getMovementTypes']),
    ...mapActions('movements', ['postMovement']),
    onSubmit() {
      if (this.value !== 0 && this.movementType !== '') {
        this.postMovement({
          value: this.value,
          movementType: this.movementType
        })
      }
    }
  },
  created() {
    this.getMovementTypes().then((data) => {
      this.movementTypes = data
    })
  }
}
</script>
<style>
</style>
