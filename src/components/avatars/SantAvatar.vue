<template>
  <img :src="src" class="ess avatar" :class="[type, shape, color]" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import EssAvatar from './EssAvatar';

@Component({
  name: 'SantAvatar',
})
export default class SantAvatar extends EssAvatar {}
</script>
