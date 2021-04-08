<template>
  <card>
    <h5 slot="header" class="title">Sign up</h5>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submit)">
        <div class="row">
          <div class="col-md-12">
            <ValidationProvider
              name="name"
              rules="required|min:5"
              v-slot="{ passed, failed, errors }"
            >
              <base-input
                label="Name"
                placeholder="Name"
                v-model="model.name"
                :error="errors[0]"
                :class="[{ 'has-success': passed }, { 'has-danger': failed }]"
              >
              </base-input>
            </ValidationProvider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ passed, failed, errors }"
            >
              <base-input
                label="Email"
                placeholder="E-mail"
                v-model="model.email"
                :error="errors[0]"
                :class="[{ 'has-success': passed }, { 'has-danger': failed }]"
              >
              </base-input>
            </ValidationProvider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ValidationProvider
              name="password"
              rules="required|min:5"
              v-slot="{ passed, failed, errors }"
              vid="password"
            >
              <base-input
                label="Password"
                placeholder="Password"
                type="password"
                v-model="model.password"
                :error="errors[0]"
                :class="[{ 'has-success': passed }, { 'has-danger': failed }]"
              >
              </base-input>
            </ValidationProvider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ValidationProvider
              name="passwordConfirmation"
              rules="required|confirmed:password"
              v-slot="{ passed, failed, errors }"
            >
              <base-input
                label="Confirmed Password"
                placeholder="Confirmed Password"
                type="password"
                v-model="model.passwordConfirmation"
                :error="errors[0]"
                :class="[{ 'has-success': passed }, { 'has-danger': failed }]"
              >
              </base-input>
            </ValidationProvider>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <base-button
            type="submit"
            native-type="submit"
            class="btn btn-fill btn-info btn-wd"
            >Sign Up</base-button
          >
        </div>
      </form>
    </ValidationObserver>
  </card>
</template>
<script>
import { extend } from 'vee-validate'
import { mapState, mapActions } from 'vuex'
import { required, email, min, confirmed } from 'vee-validate/dist/rules'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

extend('email', email)
extend('required', required)
extend('min', min)
extend('confirmed', confirmed)

export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      modelValidations: {
        email: {
          required: true,
          email: true
        }
      }
    }
  },
  computed: {
    ...mapState('users', ['status'])
  },
  created() {
    this.logout()
  },
  methods: {
    ...mapActions('users', ['register', 'logout']),
    submit(e) {
      this.submitted = true
      const { name, email, password, passwordConfirmation } = this.model
      if (email && password && passwordConfirmation) {
        this.register({
          name,
          email,
          password,
          passwordConfirmation,
          roles: ['user']
        })
      }
    }
  }
}
</script>
<style>
</style>
