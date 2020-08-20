<template>
  <div class="ess menu animated faster" :class="[theme, shadow, animation]" v-show="menuVisible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-self-import
import Component from 'vue-class-component';
// eslint-disable-next-line import/extensions
import Menu from './Menu';

Component({
  name: 'EssMenu',
});
export default class EssMenu extends Menu {}
</script>
