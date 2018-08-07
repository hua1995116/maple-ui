<template>
  <button class="m-button" :class="buttonClass" @click="emitClick"  :disabled="disabled">
    <m-icon v-if="icon && !loading" class="icon icon__position" :type="icon" />
    <m-icon v-if="loading" class="icon icon__position loading" type="spinner"></m-icon>
    <div class="content">
       <slot />
    </div>
   
  </button>
</template>
<script>
import Icon from './icon.vue'
export default {
  name: 'm-button',
  components: {
    'm-icon': Icon
  },
  computed: {
    buttonClass() {
      return {
        [`icon--${this.iconPosition}`]: true, 
        [`disabled--${!!this.disabled}`]: true,
        [`loading--${this.loading}`]: true,
      }
    }
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick() {
      if(!!this.loading) return;
      else return this.$emit('click')
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
      &:hover { border-color: var(--border-color-hover); position: relative; z-index: 1; cursor: pointer;}
      &:active { background: var(--button-active-bg); }
      &:focus { outline: none; }
      > .icon { margin-right: .3em; }
      > .loading { animation: spin 1.5s infinite linear; }
      &.icon--left {
        > .content { order: 2; }
        > .icon__position { order: 1;  margin-right: .3em; }
      }
      &.icon--right {
        > .content { order: 1; }
        > .icon__position { order: 2;  margin-left: .3em; margin-right: 0;  }
      }
      &.disabled--true { cursor: not-allowed; }
      &.loading--true { cursor: not-allowed; opacity: .5; }
    }
    
</style>
