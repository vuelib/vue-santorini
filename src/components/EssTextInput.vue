<template>
  <div>
    <label class="ess label text-input" v-if="label" :for="id">
      {{ label }}
    </label>
    <input
      class="ess"
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :class="[shape, theme, color]"
      :disabled="disabled"
      :readonly="readonly"
    />
    <!-- <input
      class="ess"
      :type="type"
      :id="id"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :class="[shape, theme, color]"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input', $event.target.value)"
    /> -->
  </div>
</template>

<script lang="ts">

  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class EssTextInput extends Vue {

    // /**
    //  *
    //  */
    // @Model('input', { type: String })
    // readonly value!: string

    /**
     *
     */
    // @Prop()
    // value!: string;

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
    @Prop()
    placeholder!: string;

    /**
     *
     */
    @Prop({ default: 'text' })
    type!: string;

    /**
     *
     */
    @Prop({ default: false })
    disabled!: boolean;

    /**
     *
     */
    @Prop({ default: false })
    readonly!: boolean;

    /**
     *
     */
    @Prop({ default: 'rounded' })
    shape!: string;

    /**
     *
     */
    @Prop({ default: null })
    label!: string;

    /**
     *
     */
    @Prop({ default: 'medium' })
    size!: string;

    /**
     *
     */
    @Prop({ default: 'light' })
    theme!: string;

    /**
     *
     */
    @Prop()
    color!: string;
  }
</script>
