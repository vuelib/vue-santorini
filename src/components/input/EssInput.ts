import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'EssInput',
})
export default class EssInput extends Vue {
  @Prop()
  id!: string;

  @Prop()
  name!: string;

  @Prop()
  placeholder!: string;

  @Prop()
  type!: string;

  @Prop({ default: 'rounded' })
  shape!: string;

  @Prop({ default: 'medium' })
  size!: string;

  @Prop({ default: 'light' })
  theme!: string;

  @Prop()
  color!: string;
}
