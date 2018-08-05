<template>
  <i :class="className"></i>
</template>
<script>
import '../stylesheets/font-awesome-4.7.0/scss/font-awesome'
export default {
  name: 'm-icon',
  props: {
    type: String
  },
  computed: {
    className() {
      return ['m-icon', 'fa', 'fas', `fa-${this.type}`];
    }
  }
}
</script>
<style lang="scss">
  .m-icon { width: 1em; height: 1em; }
</style>




