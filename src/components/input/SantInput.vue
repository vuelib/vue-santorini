<template>
  <input
    class="ess"
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="[shape, theme, color]"
  />
</template>

<script lang="ts">
import Component from 'vue-class-component';
import EssInput from './EssInput';

Component({
  name: 'SantInput',
});
export default class SantInput extends EssInput {}
</script>
