import EssButton from './components/EssButton.vue';
import EssSwitch from './components/EssSwitch.vue';
import EssCheckbox from './components/EssCheckbox.vue';
import EssTextInput from './components/EssTextInput.vue';
import EssFloatButton from './components/EssFloatButton.vue';

const Components: any = {
  EssButton,
  EssSwitch,
  EssCheckbox,
  EssTextInput,
  EssFloatButton,
};

const Install: any = (Vue: any, options: any = {}) => {

  Object.keys(Components).forEach((component) => {
    Vue.component(component, Components[component]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {

  Install(window.Vue);
}

export default Install;
