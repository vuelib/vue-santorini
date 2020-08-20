import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

export default class Badge extends Vue {
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
}
