<template>
  <div class="ess tooltip animated faster" :class="[theme, shadow, animation]" v-show="menuVisible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import EssTooltip from './EssTooltip';

Component({
  name: 'SantTooltipo',
});
export default class SantTooltip extends EssTooltip {}
</script>
