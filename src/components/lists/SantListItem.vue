<template>
  <li class="ess" :class="[theme]">
    <slot></slot>
  </li>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import { Component } from 'vue-property-decorator';
import EssListItem from './EssListItem';

@Component({
  name: 'SantListItem',
})
export default class SantListItem extends EssListItem {}
</script>
