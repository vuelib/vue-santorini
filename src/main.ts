import EssButton from './components/buttons/EssButton.vue';

const Components: any = {
  EssButton,
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
