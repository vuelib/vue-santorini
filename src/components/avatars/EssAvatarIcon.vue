<template>
  <div class="ess avatar" :class="[type, shape, size, color]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Avatar from './Avatar';

@Component({
  name: 'EssAvatarIcon',
})
export default class EssAvatarIcon extends Avatar {}
</script>
