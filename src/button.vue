<template>
  <button class="m-button" :class="{[`icon--${iconPosition}`]: true}">
    <m-icon v-if="icon&&!loading" class="icon icon__position" :type="icon" />
    <m-icon class="icon loading" type="spinner"></m-icon>
    <div class="content">
       <slot />
    </div>
   
  </button>
</template>
<script>
import Icon from './icon.vue'
export default {
  components: {
    'm-icon': Icon
  },
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        const may = ['left', 'right']
        return !!may.includes(val)
      }
    }
  }
}
</script>

<style lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
  .m-button {
      height: var(--button-height); border-radius: var(--border-radius);
      border: 1px solid var(--border-color); background: var(--button-bg);
      padding: 0 1em;
      font: inherit;text-align: center;vertical-align: middle;
      display: inline-flex; justify-content: center; align-items: center;
      &:hover { 
        border-color: var(--border-color-hover);
      }
      &:active {
        background: var(--button-active-bg);
      }
      &:focus {
        outline: none;
      }
      > .icon { margin-right: .3em; }
      > .loading {
        animation: spin 1.5s infinite linear;
      }
      &.icon--left {
        > .content { order: 2; }
        > .icon__position { order: 1;  margin-right: .3em; }
      }
      &.icon--right {
        > .content { order: 1; }
        > .icon__position { order: 2;  margin-left: .3em; margin-right: 0;  }
      }
    }
    
</style>
