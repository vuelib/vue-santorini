<template>
  <div class="ess container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/* eslint-disable lines-between-class-members */
import Component from 'vue-class-component';
import EssCard from './EssCard';

@Component({
  name: 'SantCardContent',
})
export default class SantCardContent extends EssCard {}
</script>
