<template>
  <div class="m-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'm-button-group',
    mounted () {
      Array.from(this.$el.children).forEach(ele => {
        if(ele.nodeName !== 'BUTTON') {
          console.error(`button-group中slot中必须为m-button,元素错误类型：${ele.nodeName}`)
        }
      });
    }
  }
</script>
<style lang="scss">
  .m-button-group {
    display: inline-flex; vertical-align: middle;
    > .m-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        margin-left: 0;
        border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);}
      &:last-child { 
        border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);}
    }
  }
</style> 