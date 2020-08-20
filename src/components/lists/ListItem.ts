import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

export default class ListItem extends Vue {
  @Prop({ default: 'light' })
  theme!: string;
}
