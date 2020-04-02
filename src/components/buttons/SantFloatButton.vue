<template>
  <button class="ess float-button" :class="[type, shape, color]">
    <slot></slot>
  </button>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import EssButton from '@/components/buttons/EssButton';

@Component({
  name: 'SantFloatButton',
})
export default class SantFloatButton extends EssButton {}
</script>
