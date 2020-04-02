<template>
  <span class="ess badge" :class="[type, shape, color]">
    <slot></slot>
  </span>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import EssBadge from '@/components/badges/EssBadge';

@Component({
  name: 'SantBadge',
})
export default class SantBadge extends EssBadge {}
</script>
