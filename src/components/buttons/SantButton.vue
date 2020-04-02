<template>
  <button class="ess" :class="[type, shape, color]">
    <slot></slot>
  </button>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import EssButton from '@/components/buttons/EssButton';

@Component({
  name: 'SantButton',
})
export default class SantButton extends EssButton {}
</script>
