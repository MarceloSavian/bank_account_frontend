<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-5">
      <login-form :model="model">
      </login-form>
    </div>
  </div>
</template>
<script>
  import LoginForm from './Login/LoginForm';
  export default {
    components: {
      LoginForm
    },
    data() {
      return {
        model: {
          email: '',
          password: '',
        }
      }
    }
  }
</script>
<style>
</style>
