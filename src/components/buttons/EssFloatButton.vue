<template>
  <button class="ess float-button" :class="[type, shape, color]">
    <slot></slot>
  </button>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import Button from './Button';

@Component({
  name: 'EssFloatButton',
})
export default class EssFloatButton extends Button {}
</script>
