<template>
  <li class="ess" :class="[theme]">
    <slot></slot>
  </li>
</template>

<script lang="ts">

/* eslint-disable lines-between-class-members */

import { Component } from 'vue-property-decorator';
import ListItem from './ListItem';

@Component({
  name: 'EssListItem',
})
export default class EssListItem extends ListItem {}
</script>
