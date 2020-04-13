<template>
  <div class="ess menu animated faster" :class="[theme, shadow, animation]" v-show="menuVisible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-self-import
import Component from 'vue-class-component';
// eslint-disable-next-line import/extensions
import EssMenu from './EssMenu';

Component({
  name: 'SantMenu',
});
export default class SantMenu extends EssMenu {}
</script>
