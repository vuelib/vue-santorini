<template>
  <div class="ess footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import EssCard from './EssCard';

@Component({
  name: 'SantCardFooter',
})
export default class SantCardFooter extends EssCard {}
</script>
