<template>
  <li class="ess" :class="[theme]">
    <slot></slot>
  </li>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'EssListItem',
})
export default class EssListItem extends Vue {
  @Prop({ default: 'light' })
  theme!: string;
}
</script>
