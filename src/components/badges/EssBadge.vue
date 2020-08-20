<template>
  <span class="ess badge" :class="[type, shape, color]">
    <slot></slot>
  </span>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import Badge from './Badge';

@Component({
  name: 'EssBadge',
})
export default class EssBadge extends Badge {}
</script>
