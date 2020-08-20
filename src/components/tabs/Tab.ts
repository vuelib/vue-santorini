import Vue from 'vue';
import hash from 'random-hash';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Tab',
})
export default class Tab extends Vue {

  /**
   *
   */
  protected id: string;

  /**
   *
   */
  protected parent: any;

  /**
   *
   */
  @Prop({ default: '' })
  name!: string;

  /**
   *
   */
  constructor() {
    super();

    this.id = '';
    this.parent = null;
  }

  /**
   *
   */
  public mounted() {
    this.$nextTick(() => {
      this.id = hash();
      this.parent = this.$parent;
    });
  }

  /**
   *
   */
  public change(): void {
    const bypass: any = this.$parent;
    bypass.change(this.id);
    // this.$emit('changeTab', this.id);
  }
}
