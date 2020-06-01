<template>
  <nav class="ess tabs" :class="[theme, color]" >
    <ul> <slot></slot> </ul>
    <div class="ess indicator" :style="indicatorStyle"></div>
  </nav>
</template>

<script lang="ts">
/* eslint-disable lines-between-class-members */

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

// UTILS
import { find } from 'lodash';

@Component({
  name: 'SantTabs',
  model: {
    prop: 'value',
    event: 'input',
  },
})
export default class SantTabs extends Vue {
  @Prop({ default: true })
  value!: string;

  @Prop({ default: 'light' })
  theme!: string;

  @Prop({ default: '' })
  color!: string;

  private tabs: Array<Record<string, any>>;
  private currentTab: string;
  private indicatorLeft: number;
  private indicatorWidth: number;

  constructor() {
    super();

    this.tabs = [];
    this.currentTab = '';
    this.indicatorLeft = 0;
    this.indicatorWidth = 0;
  }

  public get indicatorStyle(): Record<string, any> {
    return {
      left: `${this.indicatorLeft}px`,
      width: `${this.indicatorWidth}px`,
    };
  }

  public mounted() {
    this.$nextTick(() => {
      this.tabs = this.$children;
      this.currentTab = this.value;
      this.indicatorLeft = 0;
      this.indicatorWidth = 0;
    });
  }

  public changeTab(id: string): void {
    const tab: any = find(this.tabs, ['id', id]);

    this.currentTab = tab.name;

    this.renderIndicator(tab);
    this.$emit('input', this.currentTab);
  }

  private renderIndicator(t: any) {
    const el: HTMLElement = t.$el as HTMLElement;

    this.indicatorLeft = el.offsetLeft;
    this.indicatorWidth = el.offsetWidth;
  }
}
</script>
