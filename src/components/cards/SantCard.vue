<template>
  <div class="ess card" :class="[theme]" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'EssCard',
})
export default class EssCard extends Vue {
  @Prop({ default: 'light' })
  theme!: string;

  @Prop({ default: '20px' })
  padding!: string;

  private get style() {
    return {
      padding: this.padding,
    };
  }
}
</script>
