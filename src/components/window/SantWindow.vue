<template>
  <div class="pai">
    <div
      :id="`${id}-box`"
      style="position: absolute; width: 100px; height: 100px; background: white; z-index: 9999; border-radius: 11px;"
    >
      <div
        :id="`${id}-child`"
        style="position: relative; background: #222; border-radius: 10px 10px 0 0;
        width: 100%; height: 40px; cursor: move"
      >
        <div style="width: 15px; height: 15px; background: #950100; border-radius: 100%; margin: 10px 6px; float: right;"></div>
        <div style="width: 15px; height: 15px; background: #F2C229; border-radius: 100%; margin: 10px 6px; float: right;"></div>
        <div style="width: 15px; height: 15px; background: #006300; border-radius: 100%; margin: 10px 6px; float: right;"></div>
      </div>
      <div ref="slotContainer">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Draggable from './Draggable';
import Resizable from './Resizable';

@Component({
  name: 'SantWindow',
})
export default class SantWindow extends Vue {
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

}
</script>
