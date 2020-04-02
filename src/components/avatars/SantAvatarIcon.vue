<template>
  <div class="ess avatar" :class="[type, shape, size, color]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import EssAvatar from '@/components/avatars/EssAvatar';

@Component({
  name: 'SantAvatarIcon',
})
export default class SantAvatarIcon extends EssAvatar {}
</script>
