import Vue from 'vue';
import { createPopper } from '@popperjs/core';
import { Component, Prop } from 'vue-property-decorator';
@Component({
  name: 'Tooltip',
})
export default class Tooltip extends Vue {
  private fadeIn: boolean;

  private menuVisible: boolean;

  private targetEl!: HTMLElement;

  constructor() {
    super();
    this.fadeIn = false;
    this.menuVisible = false;
  }

  @Prop({ required: true })
  target!: string;

  /**
   * This possibles themes
   *
   * light, dark
   */

  @Prop({ default: 'light' })
  theme!: string;
  /**
   * This possibles placements
   *
   * top-start, top, top-end
   * right-start, right, right-end,
   * bottom-start, bottom, bottom-end,
   * left-start, left, left-end,
   */

  @Prop({ default: 'bottom' })
  placement!: string;

  /**
   * This possibles offsets
   *
   * [top, left]
   */

  @Prop({ default: () => [0, 0] })
  offset!: Array<number>;

  get popperConf(): {} {
    return {
      placement: this.placement,
      modifiers: [
        { name: 'offset', options: { offset: this.offset } },
      ],
    };
  }

  /**
   * This possibles shadows
   *
   * shadow-dp-1,
   * shadow-dp-2.
   * shadow-dp-3,
   * shadow-dp-4,
   * shadow-dp-5
   */
  @Prop({ default: 'shadow-dp-1' })
  shadow!: string;

  get animation(): string {
    if (this.fadeIn) {
      return 'fadeIn';
    }
    return 'fadeOut';
  }

  created() {
    this.$nextTick(() => {
      this.targetEl = document.getElementById(this.target) as HTMLElement;
      this.registryShowListener();
      this.registryHideListener();
    });
  }

  beforeDestroy() {
    this.$nextTick(() => {
      this.removeShowListener();
      this.removeHideListener();
    });
  }

  private registryShowListener(): void {
    this.targetEl.addEventListener('mouseover', (e) => this.show(e));
  }

  private registryHideListener(): void {
    this.targetEl.addEventListener('mouseout', (e) => this.hide(e));
  }

  private removeShowListener(): void {
    this.targetEl.addEventListener('mouseover', (e) => this.show(e));
  }

  private removeHideListener(): void {
    this.targetEl.removeEventListener('mouseout', (e) => this.hide(e));
  }

  public show(e: Event): void {
    e.preventDefault();
    this.fadeIn = true;
    this.menuVisible = true;
    createPopper(this.targetEl, this.$el as HTMLElement, this.popperConf);
  }

  public hide(e: Event): void {
    if (this.menuVisible) {
      this.fadeIn = false;
      setTimeout(() => { this.menuVisible = false; }, 500);
    }
  }
}
