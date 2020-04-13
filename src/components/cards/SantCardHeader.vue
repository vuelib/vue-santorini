<template>
  <div class="ess header" :class="[canShape, canColor, theme]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import EssCard from './EssCard';

@Component({
  name: 'SantCardHeader',
})
export default class SantCardHeader extends EssCard {}
</script>
