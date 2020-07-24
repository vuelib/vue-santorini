<template>
  <button class="ess" :class="[type, shape, color]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">

  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class EssButton extends Vue {

    /**
     *
     */
    @Prop({ default: 'filled' })
    type!: string;

    /**
     *
     */
    @Prop({ default: 'rounded' })
    shape!: string;

    /**
     *
     */
    @Prop({ default: 'primary' })
    color!: string;

    /**
     *
     */
    @Prop({ default: false })
    disabled!: boolean;
  }
</script>
