<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-5">
      <sign-up-form :model="model">
      </sign-up-form>
    </div>
  </div>
</template>
<script>
  import SignUpForm from './SignUp/SignUpForm';
  export default {
    components: {
      SignUpForm
    },
    data() {
      return {
        model: {
          email: '',
          password: '',
          confirmedPassword: '',
        }
      }
    }
  }
</script>
<style>
</style>
