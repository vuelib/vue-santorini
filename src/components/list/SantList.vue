<template>
  <ul class="ess" :class="[theme]">
    <slot></slot>
  </ul>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'EssList',
})
export default class EssList extends Vue {
  @Prop({ default: 'light' })
  theme!: string;
}
</script>
