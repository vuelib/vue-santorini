<template>
  <div
    :id="`${id}-box`"
    style="position: absolute; width: 800px; height: 600px; background: white; z-index: 9999; border-radius: 11px;"
  >
    <div
      :id="`${id}-child`"
      style="position: relative; background: #222; border-radius: 10px 10px 0 0;
      width: 100%; height: 50px; cursor: move; padding-right: 90px"
    >
      <div class="title" @click="setActive">
        <i class="window-back fas fa-angle-left" @click="back"></i>
        <p class="window-title">{{ title }}</p>
      </div>

      <div style="background: #950100; right: 10px;" class="action-buttons" @click="close"></div>
      <div style="background: #F2C229; right: 35px;" class="action-buttons"></div>
      <div style="background: #006300; right: 60px;" class="action-buttons" @click="minimize"></div>
    </div>
    <div ref="slotContainer" @click="setActive">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .action-buttons {
    width: 15px;
    height: 15px;
    top: 6px;
    background: #950100;
    border-radius: 100%;
    margin: 10px 6px;
    position: absolute;
    cursor: pointer;
    display: inline-block;
  }
  .title {
    text-align: left;
  }
  .window-back{
    font-size: 20px;
    display: inline-block;
    margin-left: 15px;
    color: #eee;
    border-radius: 100px;
    cursor: pointer;
  }
  .window-title {
    color: #eee;
    margin: 0;
    margin-left: 20px;
    display: inline-block;
    text-align: left;
    line-height: 50px;;
    font-size: 18px;
  }

</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Draggable from './Draggable';
import Resizable from './Resizable';

@Component({
  name: 'EssWindow',
})
export default class EssWindow extends Vue {
  @Prop({ default: 0 })
  private id!: any;

  private box!: HTMLElement;

  private child!: HTMLElement;

  private parent!: HTMLElement;

  private draggable!: Draggable;

  private resizable!: Resizable;

  @Prop({ default: 0 })
  private positionX!: number;

  @Prop({ default: 0 })
  private positionY!: number;

  @Prop({ default: '' })
  private title!: string;

  // fixSlot(): void {
  //   this.refs = this.$refs;
  //   // remove all the innerHTML that vue has place where the slot should be
  //   this.refs.slotContainer.innerHTML = '';
  //   // replace it with a new slot, if you are using named slot you can just add attributes to the slot
  //   this.refs.slotContainer.append(document.createElement('slot'));
  // }

  mounted() {
    this.$nextTick()
      .then(() => {

        this.box = document.getElementById(`${this.id}-box`) as HTMLElement;
        this.child = document.getElementById(`${this.id}-child`) as HTMLElement;
        this.parent = document.getElementById('parent') as HTMLElement;

        this.draggable = new Draggable({
          el: this.box,
          child: this.child,
          // parent: this.parent,
          respectCanvasDimensions: true,
          initialPos: { left: this.positionX, top: this.positionY },
        });

        this.resizable = new Resizable({
          el: this.box,
          enabled: true,
          visible: true,
          resizeByEdges: true,
          // parent: this.parent,
          respectCanvasDimensions: true,
          minSize: { width: 800, height: 600 },
          // maxSize: { width: 600, height: 600 },
          positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        });
        // this.fixSlot.bind(this);
      });
  }

  /**
   *
   */
  back() {
    this.$emit('back');
  }

  /**
   *
   */
  minimize() {
    this.$emit('minimize', `${this.id}-box`);
  }

  /**
   *
   */
  close() {
    this.$emit('close', `${this.id}-box`);
  }

  /**
   *
   */
  setActive() {
    this.$emit('setActive', `${this.id}`);
  }
}
</script>
