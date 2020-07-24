<template>
  <label class="ess checkbox">
    <input class="ess" type="checkbox" :name="name" :id="id" :disabled="disabled">
    <span class="ess checkmark"></span>
    <span class="ess ripple"></span>
    <label class="ess label checkbox" :for="id"> <slot></slot> </label>
  </label>
</template>

<script lang="ts">

  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class EssCheckbox extends Vue {

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
