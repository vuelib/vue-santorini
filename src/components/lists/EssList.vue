<template>
  <ul class="ess" :class="[theme]">
    <slot></slot>
  </ul>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import { Component } from 'vue-property-decorator';
import List from './List';

@Component({
  name: 'EssList',
})
export default class EssList extends List {}
</script>
