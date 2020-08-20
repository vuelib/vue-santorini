<template>
  <div class="ess footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import Card from './Card';

@Component({
  name: 'EssCardFooter',
})
export default class EssCardFooter extends Card {}
</script>
