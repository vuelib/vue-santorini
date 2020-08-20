<template>
  <div class="ess card" :class="[theme, canShape, canColor, canShadow]" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import Card from './Card';

@Component({
  name: 'EssCard',
})
export default class EssCard extends Card {}
</script>
