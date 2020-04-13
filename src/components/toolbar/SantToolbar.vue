<template>
  <div class="ess toolbar shadow-dp-1 light">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import EssToolbar from './EssToolbar';

Component({
  name: 'SantToolbar',
});
export default class SantToolbar extends EssToolbar {}
</script>

<style>
  .ess.toolbar {
    width: 100%;
    height: 60px;
    padding: 16px;
    /* background: red; */
    position: relative;
    display: inline-flex;
    align-items: center;
  }
</style>
