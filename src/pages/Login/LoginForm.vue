<template>
  <card>
    <h5 slot="header" class="title">Login</h5>
    <form>
      <div class="row">
        <div class="col-md-12">
          <base-input label="Email"
                    placeholder="E-mail"
                    v-model="model.email"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <base-input label="Password"
                    placeholder="Password"
                    type='password'
                    v-model="model.password">
          </base-input>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <base-button slot="footer" type="primary" @click="handleSubmit" fill>Login</base-button>
        <base-button slot="footer" type="secondary" fill>Sign Up</base-button>
      </div>
    </form>
  </card>
</template>
<script>
 import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    computed: {
        ...mapState('users', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('users', ['login', 'logout']),
        handleSubmit (e) {
            this.submitted = true;
            const { email, password } = this.model;
            console.log(email, password)
            if (email && password) {
                this.login({ email, password })
            }
        }
    }
  }
</script>
<style>
</style>
