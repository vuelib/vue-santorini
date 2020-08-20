import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component({
  name: 'Separator',
})
export default class Separator extends Vue {
  @Prop({ default: 'light' })
  theme!: string;

  @Prop({ default: '1rem' })
  vspace!: string;

  @Prop({ default: '.05rem' })
  hspace!: string;

  @Prop({ required: false, default: false, type: Boolean })
  contextMenu!: boolean;

  get style() {
    return {
      margin: `${this.vspace} ${this.hspace}`,
    };
  }
}
