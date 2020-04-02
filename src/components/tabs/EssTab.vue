<template>
  <li class="ess tab body-1" :id="id" @click="changeTab">
    <span><slot></slot></span>
  </li>
</template>

<script lang="ts">
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

// UTILS
import hash from 'random-hash';

@Component({
  name: 'EssTab',
})
export default class EssTab extends Vue {
  @Prop({ default: '' })
  name!: string;

  public id: string;
  protected parent: any;

  constructor() {
    super();

    this.id = hash();
    this.parent = this.$parent;
  }

  public changeTab(): void {
    this.parent.changeTab(this.id);
  }
}
</script>
