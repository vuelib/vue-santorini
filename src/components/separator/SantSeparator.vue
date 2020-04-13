<template>
  <div class="ess separator" :class="[theme]"></div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import EssSeparator from './EssSeparator';

Component({
  name: 'SantSeparator',
});
export default class SantSeparator extends EssSeparator {}
</script>
