import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

export default class List extends Vue {
  @Prop({ default: 'light' })
  theme!: string;
}
