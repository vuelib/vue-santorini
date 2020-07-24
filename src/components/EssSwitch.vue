<template>
  <label class="ess switch">
    <input class="ess" type="checkbox" :name="name" :id="id" :disabled="disabled">
    <span class="ess slider"></span>
    <span class="ess ripple"></span>
    <label class="ess label checkbox" :for="id"> <slot></slot> </label>
  </label>
</template>

<script lang="ts">

  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class EssSwitch extends Vue {

    // /**
    //  *
    //  */
    // @Model('change', { type: Boolean })
    // readonly value!: boolean

    /**
     *
     */
    // @Prop()
    // value!: boolean;

    /**
     *
     */
    @Prop()
    id!: string;

    /**
     *
     */
    @Prop()
    name!: string;

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
