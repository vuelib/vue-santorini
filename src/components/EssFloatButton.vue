<template>
  <button class="ess float" :class="[type, shape, size, color]" :disabled="disabled">
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
    @Prop({ default: 'circle' })
    shape!: string;

    /**
     *
     */
    @Prop({ default: 'small' })
    size!: string;

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
