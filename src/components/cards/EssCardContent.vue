<template>
  <div class="ess container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import Card from './Card';

@Component({
  name: 'EssCardContent',
})
export default class EssCardContent extends Card {}
</script>
