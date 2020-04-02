<template>
  <img :src="src" class="ess avatar" :class="[type, shape, color]" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import EssAvatar from '@/components/avatars/EssAvatar';

@Component({
  name: 'SantAvatar',
})
export default class SantAvatar extends EssAvatar {}
</script>
