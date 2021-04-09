<template>
  <div class="row">
    <div class="col-md-12">
      <add-movement-form :model="model"> </add-movement-form>
    </div>
  </div>
</template>
<script>
import AddMovementForm from './AddMovement/AddMovementForm'
export default {
  components: {
    AddMovementForm
  },
  data() {
    return {
      model: {}
    }
  }
}
</script>
<style>
</style>
