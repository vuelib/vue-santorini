/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */

export default class Screen {
  private vw: number;
  private vh: number;

  constructor() {
    this.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  public get width(): number {
    return this.vw;
  }

  public get height(): number {
    return this.vh;
  }
}
