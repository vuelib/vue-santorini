/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */

import {
  get, has, drop, isEmpty,
} from 'lodash';

import Screen from './Screen';

export default class Resizable {
  private screen: Screen = new Screen();

  private target!: HTMLElement;

  private size: Array<number> = [];
  private position: Array<number> = [];
  private edges: Array<HTMLElement> = [];
  private vertices: Array<HTMLElement> = [];

  private onClickSize: Array<number> = [];
  private onClickPosition: Array<number> = [];
  private onClickMousePosition: Array<number> = [];

  private mouseUpEventListener: EventListener;
  private mouseDownEventListener: EventListener;
  private mouseMoveEventListener: EventListener;

  /**
   * Draggable element.
   */
  private el: HTMLElement;

  /**
   *  Draggable element.
   */
  private parent: HTMLElement;

  /**
   * Draggable element.
   *
   * [ 'left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
   */
  private positions: Array<string> = [];

  /**
   * Draggable element.
   *
   * { width, height }
   */
  private minSize = { width: 40, height: 40 };

  /**
   * Draggable element.
   *
   * { width, height }
   */
  private maxSize = { };

  /**
   * Draggable element.
   */
  private enabled = true;

  /**
   * Draggable element.
   */
  private visible = true;

  /**
   * Draggable element.
   */
  private resizeByEdges = false;

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
    this.parent = get(config, 'parent', null);
    this.minSize = get(config, 'minSize', this.minSize);
    this.maxSize = get(config, 'maxSize', this.maxSize);
    this.enabled = get(config, 'enabled', this.enabled);
    this.visible = get(config, 'visible', this.visible);
    this.positions = get(config, 'positions', this.positions);
    this.resizeByEdges = get(config, 'resizeByEdges', this.resizeByEdges);
    this.animationDuration = get(config, 'animationDuration', this.animationDuration);
    this.respectCanvasDimensions = get(config, 'respectCanvasDimensions', this.respectCanvasDimensions);

    this.mouseDownEventListener = (e: any) => this.init(e);
    this.mouseMoveEventListener = (e: any) => this.action(e);
    this.mouseUpEventListener = (e: any) => this.stop(e);

    this.drawVertices();

    if (this.resizeByEdges) {
      this.drawEdges();
    }

    this.listen();

    if (!this.enabled) {
      this.disable();
    }

    if (!this.visible) {
      this.hide();
    }

    this.resizeTo(
      get(this.minSize, 'width'),
      get(this.minSize, 'height'),
    );
  }

  /**
   *
   * @param width
   */
  private calcWidth(width: number): number {
    if (has(this.minSize, 'width') && width <= get(this.minSize, 'width')) {
      return get(this.minSize, 'width');
    }

    if (has(this.maxSize, 'width') && width >= get(this.maxSize, 'width')) {
      return get(this.maxSize, 'width');
    }

    return width;
  }

  /**
   *
   * @param height
   */
  private calcHeight(height: number): number {
    if (has(this.minSize, 'height') && height <= get(this.minSize, 'height')) {
      return get(this.minSize, 'height');
    }

    if (has(this.maxSize, 'height') && height >= get(this.maxSize, 'height')) {
      return get(this.maxSize, 'height');
    }

    return height;
  }

  /**
   *
   * @param width
   * @param height
   */
  private setSize(width: number, height: number): void {
    this.size = [
      this.calcWidth(width),
      this.calcHeight(height),
    ];
  }

  /**
   *
   * @param left
   * @param top
   */
  private setPosition(left: number, top: number): void {
    const width: number = this.el.getBoundingClientRect().width;
    const height: number = this.el.getBoundingClientRect().height;

    let l: number = left;
    let t: number = top;

    if (has(this.minSize, 'width') && width <= get(this.minSize, 'width')) {
      l = this.el.getBoundingClientRect().left;
    }

    if (has(this.maxSize, 'width') && width >= get(this.maxSize, 'width')) {
      l = this.el.getBoundingClientRect().left;
    }

    if (has(this.minSize, 'height') && height <= get(this.minSize, 'height')) {
      t = this.el.getBoundingClientRect().top;
    }

    if (has(this.maxSize, 'height') && height >= get(this.maxSize, 'height')) {
      t = this.el.getBoundingClientRect().top;
    }

    this.position = [l, t];
  }

  /**
   *
   * @param position
   */
  private createVertex(position: string) {
    const vertex: HTMLElement = document.createElement('div');

    vertex.classList.add('ess', 'resizer', position);

    this.vertices.push(vertex);

    return vertex;
  }

  /**
   *
   * @param position
   */
  private createEdges(position: string) {
    const edge: HTMLElement = document.createElement('div');

    edge.classList.add('ess', 'resizer', 'edge', position);

    this.edges.push(edge);

    return edge;
  }

  /**
   *
   */
  private drawVertices(): void {
    this.positions.forEach((position: string) => {
      this.el.appendChild(this.createVertex(position));
    });
  }

  /**
   *
   */
  private drawEdges(): void {
    const positions: Array<string> = ['left', 'top', 'right', 'bottom'];

    positions.forEach((position: string) => {
      this.el.appendChild(this.createEdges(position));
    });
  }

  /**
   *
   */
  private update(): void {
    this.el.style.left = `${this.position[0]}px`;
    this.el.style.width = `${this.size[0]}px`;
    this.el.style.top = `${this.position[1]}px`;
    this.el.style.height = `${this.size[1]}px`;
  }

  private calcLeft(e: any): void {
    let left: number = this.el.getBoundingClientRect().left;
    let width: number = this.el.getBoundingClientRect().width;

    const top: number = this.el.getBoundingClientRect().top;
    const height: number = this.el.getBoundingClientRect().height;

    if (this.respectCanvasDimensions) {
      if (e.clientX >= 0) {
        left = this.onClickPosition[0] + (e.clientX - this.onClickMousePosition[0]);
        width = this.onClickSize[0] - (e.clientX - this.onClickMousePosition[0]);
      }
    }

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcTop(e: any): void {
    const left: number = this.el.getBoundingClientRect().left;
    const width: number = this.el.getBoundingClientRect().width;

    let top: number = this.el.getBoundingClientRect().top;
    let height: number = this.el.getBoundingClientRect().height;

    if (this.respectCanvasDimensions) {
      if (e.clientY >= 0) {
        top = this.onClickPosition[1] + (e.clientY - this.onClickMousePosition[1]);
        height = this.onClickSize[1] - (e.clientY - this.onClickMousePosition[1]);
      }
    }

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcRight(e: any): void {
    const left: number = this.el.getBoundingClientRect().left;
    let width: number = this.el.getBoundingClientRect().width;

    const top: number = this.el.getBoundingClientRect().top;
    const height: number = this.el.getBoundingClientRect().height;

    if (this.respectCanvasDimensions) {
      if (e.clientX <= (this.screen.width)) {
        width = this.onClickSize[0] + (e.clientX - this.onClickMousePosition[0]);
      }
    }

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcBottom(e: any): void {
    const left: number = this.el.getBoundingClientRect().left;
    const width: number = this.el.getBoundingClientRect().width;

    const top: number = this.el.getBoundingClientRect().top;
    const height: number = this.onClickSize[1] + (e.clientY - this.onClickMousePosition[1]);

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcTopLeft(e: any): void {
    const left: number = this.onClickPosition[0] + (e.clientX - this.onClickMousePosition[0]);
    const width: number = this.onClickSize[0] - (e.clientX - this.onClickMousePosition[0]);

    const top: number = this.onClickPosition[1] + (e.clientY - this.onClickMousePosition[1]);
    const height: number = this.onClickSize[1] - (e.clientY - this.onClickMousePosition[1]);

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcTopRight(e: any): void {
    const left: number = this.el.getBoundingClientRect().left;
    const width: number = this.onClickSize[0] + (e.clientX - this.onClickMousePosition[0]);

    const top: number = this.onClickPosition[1] + (e.clientY - this.onClickMousePosition[1]);
    const height: number = this.onClickSize[1] - (e.clientY - this.onClickMousePosition[1]);

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcBottomLeft(e: any): void {
    const left: number = this.onClickPosition[0] + (e.clientX - this.onClickMousePosition[0]);
    const width: number = this.onClickSize[0] - (e.clientX - this.onClickMousePosition[0]);

    const top: number = this.el.getBoundingClientRect().top;
    const height: number = this.onClickSize[1] + (e.clientY - this.onClickMousePosition[1]);

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private calcBottomRight(e: any): void {
    const left: number = this.el.getBoundingClientRect().left;
    const width = this.onClickSize[0] + (e.clientX - this.onClickMousePosition[0]);

    const top: number = this.el.getBoundingClientRect().top;
    const height = this.onClickSize[1] + (e.clientY - this.onClickMousePosition[1]);

    this.setSize(width, height);
    this.setPosition(left, top);
  }

  /**
   *
   */
  private listen(): void {
    Array.from(this.vertices).forEach((vertex: Element) => {
      vertex.addEventListener('mousedown', this.mouseDownEventListener);
    });

    if (this.resizeByEdges) {
      Array.from(this.edges).forEach((edge: Element) => {
        edge.addEventListener('mousedown', this.mouseDownEventListener);
      });
    }
  }

  /**
   *
   * @param e
   */
  private init(e: any): void {
    const elTop: number = this.el.getBoundingClientRect().top;
    const elLeft: number = this.el.getBoundingClientRect().left;
    const elWidth: number = this.el.getBoundingClientRect().width;
    const elHeight: number = this.el.getBoundingClientRect().height;

    e.preventDefault();
    e.stopPropagation();

    this.target = e.target;
    this.onClickSize = [elWidth, elHeight];
    this.onClickPosition = [elLeft, elTop];
    this.onClickMousePosition = [e.clientX, e.clientY];

    document.addEventListener('mouseup', this.mouseUpEventListener);
    document.addEventListener('mousemove', this.mouseMoveEventListener);
  }

  /**
   *
   * @param e
   */
  private action(e: any): void {
    if (this.target.classList.contains('left')) {
      this.calcLeft(e);
    }

    if (this.target.classList.contains('top')) {
      this.calcTop(e);
    }

    if (this.target.classList.contains('right')) {
      this.calcRight(e);
    }

    if (this.target.classList.contains('bottom')) {
      this.calcBottom(e);
    }

    if (this.target.classList.contains('top-left')) {
      this.calcTopLeft(e);
    }

    if (this.target.classList.contains('top-right')) {
      this.calcTopRight(e);
    }

    if (this.target.classList.contains('bottom-left')) {
      this.calcBottomLeft(e);
    }

    if (this.target.classList.contains('bottom-right')) {
      this.calcBottomRight(e);
    }

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
   * @param width
   * @param height
   */
  public resizeTo(width: number, height: number): void {
    this.el.style.transition = `all ${this.animationDuration}ms ease-in`;

    this.setSize(width, height);
    this.update();

    setTimeout(() => { this.el.style.transition = ''; }, this.animationDuration);
  }

  /**
   *
   */
  public enable(): void {
    this.vertices.forEach((vertex: HTMLElement) => {
      vertex.classList.add('enabled');
      vertex.classList.remove('disabled');
    });

    this.edges.forEach((edge: HTMLElement) => {
      edge.classList.add('enabled');
      edge.classList.remove('disabled');
    });
  }

  /**
   *
   */
  public disable(): void {
    this.vertices.forEach((vertex: HTMLElement) => {
      vertex.classList.add('disabled');
      vertex.classList.remove('enabled');
    });

    this.edges.forEach((edge: HTMLElement) => {
      edge.classList.add('disabled');
      edge.classList.remove('enabled');
    });
  }

  /**
   *
   */
  public show(): void {
    this.vertices.forEach((vertex: HTMLElement) => {
      vertex.classList.add('show');
      vertex.classList.remove('hide');
    });

    this.edges.forEach((edge: HTMLElement) => {
      edge.classList.add('show');
      edge.classList.remove('hide');
    });
  }

  /**
   *
   */
  public hide(): void {
    this.vertices.forEach((vertex: HTMLElement) => {
      vertex.classList.add('hide');
      vertex.classList.remove('show');
    });

    this.edges.forEach((edge: HTMLElement) => {
      edge.classList.add('hide');
      edge.classList.remove('show');
    });
  }
}
