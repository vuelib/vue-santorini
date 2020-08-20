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
import Input from './Input';

Component({
  name: 'EssInput',
});
export default class EssInput extends Input {}
</script>
