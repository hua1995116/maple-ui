<template>
  <div class="wrapper" :class="{'error': error}">
    <input 
      :value="value" type="text" :disabled="disabled" :readonly="readonly" 
      @change="$emit('change', $event)"
    >
    <template v-if="error">
      <Icon class="icon" type="exclamation-circle"></Icon>
      <span class="message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'm-input',
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $box-error-shadow-color: rgb(245, 188, 194);
  $red: #F1453D;
  .wrapper { font-size: $font-size; display: inline-flex;
    align-items: center;
    > :not(:last-child) {margin-right: .5em; }
    > input { height: 32px; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
      &:hover { border-color: $border-color-hover; }
      &:focus { box-shadow: inset 0 1px 2px $box-shadow-color; outline: none; }
      &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
    }
    &.error {
      > input { border-color: $red; }
      > input:focus { box-shadow: inset 0 1px 2px $box-error-shadow-color; outline: none; }
    }
    .icon { color: $red; margin-right: 0; vertical-align: center;}
    .message { color: $red; vertical-align: center;line-height: $font-size;}
  }
</style>
