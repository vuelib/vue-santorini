import SantAvatar from './src/components/avatars/SantAvatar.vue';
import SantAvatarIcon from './src/components/avatars/SantAvatarIcon.vue';
import SantBadge from './src/components/badges/SantBadge.vue';
import SantButton from './src/components/buttons/SantButton.vue';
import SantFloatButton from './src/components/buttons/SantFloatButton.vue';
import SantCard from './src/components/cards/SantCard.vue';
import SantCardHeader from './src/components/cards/SantCardHeader.vue';
import SantCardContent from './src/components/cards/SantCardContent.vue';
import SantCardFooter from './src/components/cards/SantCardFooter.vue';
import SantList from './src/components/lists/SantList.vue';
import SantListItem from './src/components/lists/SantListItem.vue';
import SantMenu from './src/components/menu/SantMenu.vue';
import SantSeparator from './src/components/separator/SantSeparator.vue';
import SantTab from './src/components/tabs/SantTab.vue';
import SantTabs from './src/components/tabs/SantTabs.vue';
import SantInput from './src/components/input/SantInput.vue';
import SantToolbar from './src/components/toolbar/SantToolbar.vue';
import SantTooltip from './src/components/tooltip/SantTooltip.vue';
import SantWindow from './src/components/window/SantWindow.vue';

const components = [
  SantAvatar,
  SantAvatarIcon,
  SantBadge,
  SantButton,
  SantFloatButton,
  SantCard,
  SantCardHeader,
  SantCardContent,
  SantCardFooter,
  SantList,
  SantListItem,
  SantMenu,
  SantSeparator,
  SantTab,
  SantTabs,
  SantInput,
  SantToolbar,
  SantTooltip,
  SantWindow,
];

const Components = {
  install(Vue) {
    // eslint-disable-next-line array-callback-return
    components.map((component) => {
      Vue.component(component.name, component);
    });
  },
};

export default Components;
