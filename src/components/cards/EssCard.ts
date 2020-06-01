import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

export default class EssCard extends Vue {
  @Prop({ default: 'light' })
  protected theme!: string;

  @Prop({ default: '20px' })
  protected padding!: string;

  @Prop({ default: 'rounded' })
  protected shape!: string;

  @Prop()
  protected color!: string;

  @Prop()
  protected shadow!: boolean;

  protected get style() {
    return {
      padding: this.padding,
    };
  }

  protected get canShape() {
    const validShapes = ['square', 'rounded'];

    if (validShapes.includes(this.shape)) {
      return this.shape;
    }

    return 'rounded';
  }

  protected get canColor() {
    if (this.color) {
      return `bg-${this.color}`;
    }

    return null;
  }

  protected get canShadow() {
    if (this.shadow) {
      return (this.theme === 'light') ? 'shadow-light' : 'shadow-dark';
    }

    return null;
  }
}
