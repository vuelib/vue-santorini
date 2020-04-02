<template>
  <li class="ess tab" :id="id" @click="change">
    <span><slot></slot></span>
  </li>
</template>

<script lang="ts">
import EssTab from '@/components/tabs/EssTab';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'SantTab',
})
export default class SantTab extends EssTab {}
</script>
