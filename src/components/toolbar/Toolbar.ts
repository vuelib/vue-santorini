import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Toolbar',
})
export default class Toolbar extends Vue {
  @Prop({ default: 'light' })
  theme!: string;
}
