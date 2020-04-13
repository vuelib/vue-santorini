import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// import SantAvatar from './components/avatars/SantAvatar.vue';
// import SantAvatarIcon from './components/avatars/SantAvatarIcon.vue';
// import SantBadge from './components/badges/SantBadge.vue';
// import SantButton from './components/buttons/SantButton.vue';
// import SantFloatButton from './components/buttons/SantFloatButton.vue';
// import SantCard from './components/cards/SantCard.vue';
// import SantCardHeader from './components/cards/SantCardHeader.vue';
// import SantCardContent from './components/cards/SantCardContent.vue';
// import SantCardFooter from './components/cards/SantCardFooter.vue';
// import SantList from './components/lists/SantList.vue';
// import SantListItem from './components/lists/SantListItem.vue';
// import SantTab from './components/tabs/SantTab.vue';
// import SantTabs from './components/tabs/SantTabs.vue';

// const components = [
//   SantAvatar,
//   SantAvatarIcon,
//   SantBadge,
//   SantButton,
//   SantFloatButton,
//   SantCard,
//   SantCardHeader,
//   SantCardContent,
//   SantCardFooter,
//   SantList,
//   SantListItem,
//   SantTab,
//   SantTabs,
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
