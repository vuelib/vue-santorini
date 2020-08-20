import Vue from 'vue';
import { find } from 'lodash';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Tabs',
})
export default class Tabs extends Vue {
  /**
   *
   */
  protected tabs: Array<Vue>;

  /**
   *
   */
  protected currentTab: string;

  /**
   *
   */
  @Prop({ default: true })
  value!: string;

  /**
   *
   */
  @Prop({ default: '' })
  color!: string;

  /**
   *
   */
  constructor() {
    super();

    this.tabs = [];
    this.currentTab = '';
  }

  /**
   *
   */
  public mounted() {
    this.$nextTick(() => {
      this.tabs = this.$children;
      this.currentTab = this.value;
    });
  }

  /**
   *
   * @param id
   */
  public change(id: string): void {
    console.log(`T2: ${this.tabs}`);
    // const tab: any = find(this.tabs, ['id', id]);

    // console.log(this.tabs);
    // console.log(tab);

    // this.currentTab = tab.name;
    // this.$emit('input', this.currentTab);
  }
}
