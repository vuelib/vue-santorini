<template>
  <div class="ess header" :class="[canShape, canColor, theme]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import Card from './Card';

@Component({
  name: 'EssCardHeader',
})
export default class EssCardHeader extends Card {}
</script>
