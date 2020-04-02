import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

export default class EssAvatar extends Vue {
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
  @Prop({ default: 'primary' })
  color!: string;

  /**
   *
   */
  @Prop({ default: '' })
  src!: string;
}
