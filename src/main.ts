import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// import EssAvatar from './components/avatars/EssAvatar.vue';
// import EssAvatarIcon from './components/avatars/EssAvatarIcon.vue';
// import EssBadge from './components/badges/EssBadge.vue';
// import EssButton from './components/buttons/EssButton.vue';
// import EssFloatButton from './components/buttons/EssFloatButton.vue';
// import EssCard from './components/cards/EssCard.vue';
// import EssCardHeader from './components/cards/EssCardHeader.vue';
// import EssCardContent from './components/cards/EssCardContent.vue';
// import EssCardFooter from './components/cards/EssCardFooter.vue';
// import EssList from './components/lists/EssList.vue';
// import EssListItem from './components/lists/EssListItem.vue';
// import EssTab from './components/tabs/EssTab.vue';
// import EssTabs from './components/tabs/EssTabs.vue';

// const components = [
//   EssAvatar,
//   EssAvatarIcon,
//   EssBadge,
//   EssButton,
//   EssFloatButton,
//   EssCard,
//   EssCardHeader,
//   EssCardContent,
//   EssCardFooter,
//   EssList,
//   EssListItem,
//   EssTab,
//   EssTabs,
// ];

// const Components = {
//   install(Vue: any) {
//     // eslint-disable-next-line array-callback-return
//     components.map((component) => {
//       Vue.component(component.name, component);
//     });
//   },
// };

// export default Components;
