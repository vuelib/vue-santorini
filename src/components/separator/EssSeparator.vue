<template>
  <div class="ess separator" :class="[theme]"></div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Separator from './Separator';

Component({
  name: 'EssSeparator',
});
export default class EssSeparator extends Separator {}
</script>
