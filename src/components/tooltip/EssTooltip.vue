<template>
  <div class="ess tooltip animated faster" :class="[theme, shadow, animation]" v-show="menuVisible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Tooltip from './Tooltip';

Component({
  name: 'EssTooltipo',
});
export default class EssTooltip extends Tooltip {}
</script>
