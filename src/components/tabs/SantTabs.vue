<template>
  <nav class="ess tabs" :class="[color]" @changeTab="console.log('foi')" >
    <ul> <slot></slot> </ul>
    <div class="ess indicator" :style="indicatorStyle"></div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import EssTabs from '@/components/tabs/EssTabs';

import { find } from 'lodash';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'SantTabs',
})
export default class SantTabs extends EssTabs {

  /**
   *
   */
  private indicatorLeft: number;

  /**
   *
   */
  private indicatorWidth: number;

  /**
   *
   */
  constructor() {
    super();

    this.indicatorLeft = 0;
    this.indicatorWidth = 0;
  }

  /**
   *
   */
  public get indicatorStyle() {
    return {
      left: `${this.indicatorLeft}px`,
      width: `${this.indicatorWidth}px`,
    };
  }

  /**
   *
   */
  public mounted() {
    this.$nextTick(() => {
      this.indicatorLeft = 0;
      this.indicatorWidth = 0;
    });
  }

  /**
   *
   */
  private refreshIndicator(tab: Vue) {
    const el: HTMLElement = tab.$el as HTMLElement;

    this.indicatorLeft = el.offsetLeft;
    this.indicatorWidth = el.offsetWidth;
  }

  /**
   *
   */
  public change(id: string): void {
    const tab: Vue = find(this.tabs, ['id', id]);

    super.change(id);
    this.refreshIndicator(tab);
  }
}
</script>
