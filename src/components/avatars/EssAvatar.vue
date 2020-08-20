<template>
  <img :src="src" class="ess avatar" :class="[type, shape, color]" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Avatar from './Avatar';

@Component({
  name: 'EssAvatar',
})
export default class EssAvatar extends Avatar {}
</script>
