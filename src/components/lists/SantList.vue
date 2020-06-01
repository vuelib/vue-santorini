<template>
  <ul class="ess" :class="[theme]">
    <slot></slot>
  </ul>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import { Component } from 'vue-property-decorator';
import EssList from './EssList';

@Component({
  name: 'SantList',
})
export default class SantList extends EssList {}
</script>
