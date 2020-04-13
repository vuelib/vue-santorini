/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */

import { get, has, drop } from 'lodash';
import Screen from './Screen';

export default class Draggable {
  private screen: Screen = new Screen();

  private position: Array<number> = [];
  private onClickElPosition: Array<number> = [];

  private diffMousePosition: Array<number> = [];
  private onClickMousePosition: Array<number> = [];
  private currentMousePosition: Array<number> = [];

  private mouseUpEventListener: EventListener;
  private mouseDownEventListener: EventListener;
  private mouseMoveEventListener: EventListener;

  /**
   *  Draggable element.
   */
  private el: HTMLElement;

  /**
   *  Draggable element.
   */
  private child: HTMLElement;

  /**
   *  Draggable element.
   */
  private parent: HTMLElement;

  /**
   * Draggable element.
   *
   * { width, height }
   */
  private initialPos: any = { left: 0, top: 0 };

  /**
   *  Draggable element.
   */
  private respectCanvasDimensions = false;

  /**
   * Draggable element.
   */
  private animationDuration = 300;

  /**
   *
   * @param config
   */
  constructor(config: any) {
    this.el = get(config, 'el', null);
    this.child = get(config, 'child', null);
    this.parent = get(config, 'parent', null);
    this.initialPos = get(config, 'initialPos', this.initialPos);
    this.animationDuration = get(config, 'animationDuration', this.animationDuration);
    this.respectCanvasDimensions = get(config, 'respectCanvasDimensions', this.respectCanvasDimensions);

    this.mouseDownEventListener = (e) => this.init(e);
    this.mouseMoveEventListener = (e) => this.action(e);
    this.mouseUpEventListener = (e) => this.stop(e);

    this.listen();

    // this.moveTo(
    //   get(this.initialPos, 'left'),
    //   get(this.initialPos, 'top'),
    // );

    if (this.parent) {
      if (this.initialPos) {
        this.moveTo(
          this.parent.getBoundingClientRect().left + get(this.initialPos, 'left'),
          this.parent.getBoundingClientRect().top + get(this.initialPos, 'top'),
        );
      } else {
        this.moveTo(
          this.parent.getBoundingClientRect().left,
          this.parent.getBoundingClientRect().top,
        );
      }
    } else {
      this.moveTo(
        get(this.initialPos, 'left'),
        get(this.initialPos, 'top'),
      );
    }
  }

  /**
   *
   * @param left
   */
  private calcLeft(left: number): number {
    const elLeft = this.el.getBoundingClientRect().left;
    const elWidth = this.el.getBoundingClientRect().width;

    if (this.parent) {
      const parentLeft = this.parent.getBoundingClientRect().left;
      const parentWidth = this.parent.getBoundingClientRect().width;

      if (left <= parentLeft) {
        return parentLeft;
      }

      if (left >= (parentWidth + parentLeft) - elWidth) {
        return (parentWidth + parentLeft) - elWidth;
      }
    }

    if (this.respectCanvasDimensions) {
      if (left <= 0) {
        return 0;
      }

      if ((left + elWidth) >= this.screen.width) {
        return (this.screen.width - elWidth);
      }
    }

    return left;
  }

  /**
   *
   * @param top
   */
  private calcTop(top: number): number {
    const elTop = this.el.getBoundingClientRect().top;
    const elHeight = this.el.getBoundingClientRect().height;

    if (this.parent) {
      const parentTop = this.parent.getBoundingClientRect().top;
      const parentHeight = this.parent.getBoundingClientRect().height;

      if (top <= parentTop) {
        return parentTop;
      }

      if (top >= (parentHeight + parentTop) - elHeight) {
        return (parentHeight + parentTop) - elHeight;
      }
    }

    if (this.respectCanvasDimensions) {
      if (top <= 0) {
        return 0;
      }

      if ((top + elHeight) >= this.screen.height) {
        return (this.screen.height - elHeight);
      }
    }

    return top;
  }

  /**
   *
   * @param left
   * @param top
   */
  private setPosition(left: number, top: number) {
    this.position = [
      this.calcLeft(left),
      this.calcTop(top),
    ];
  }

  /**
   *
   */
  private update() {
    this.el.style.top = `${this.position[1]}px`;
    this.el.style.left = `${this.position[0]}px`;
  }

  /**
   *
   */
  private listen(): void {
    if (this.child) {
      this.child.addEventListener('mousedown', this.mouseDownEventListener);
    } else {
      this.el.addEventListener('mousedown', this.mouseDownEventListener);
    }
  }

  /**
   *
   * @param e
   */
  private init(e: any): void {
    const elTop: number = this.el.getBoundingClientRect().top;
    const elLeft: number = this.el.getBoundingClientRect().left;

    e.preventDefault();
    e.stopPropagation();

    this.onClickElPosition = [elLeft, elTop];
    this.onClickMousePosition = [e.clientX, e.clientY];

    document.addEventListener('mouseup', this.mouseUpEventListener);
    document.addEventListener('mousemove', this.mouseMoveEventListener);
  }

  /**
   *
   * @param e
   */
  private action(e: any): void {
    this.currentMousePosition = [e.clientX, e.clientY];

    this.diffMousePosition = [
      this.currentMousePosition[0] - this.onClickMousePosition[0],
      this.currentMousePosition[1] - this.onClickMousePosition[1],
    ];

    this.setPosition(
      this.diffMousePosition[0] + this.onClickElPosition[0],
      this.diffMousePosition[1] + this.onClickElPosition[1],
    );

    this.update();
  }

  /**
   *
   * @param e
   */
  private stop(e: any): void {
    document.removeEventListener('mouseup', this.mouseUpEventListener);
    document.removeEventListener('mousemove', this.mouseMoveEventListener);
  }

  /**
   *
   * @param left
   * @param top
   */
  public moveTo(left: number, top: number) {
    this.el.style.transition = `all ease-in ${this.animationDuration}ms`;

    this.setPosition(left, top);
    this.update();

    setTimeout(() => { this.el.style.transition = ''; }, this.animationDuration);
  }
}
