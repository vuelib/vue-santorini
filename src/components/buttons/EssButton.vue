<template>
  <button class="ess" :class="[type, shape, color]">
    <slot></slot>
  </button>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import Button from './Button';

@Component({
  name: 'EssButton',
})
export default class EssButton extends Button {}
</script>
