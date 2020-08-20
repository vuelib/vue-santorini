import EssAvatar from './src/components/avatars/EssAvatar.vue';
import EssAvatarIcon from './src/components/avatars/EssAvatarIcon.vue';
import EssBadge from './src/components/badges/EssBadge.vue';
import EssButton from './src/components/buttons/EssButton.vue';
import EssFloatButton from './src/components/buttons/EssFloatButton.vue';
import EssCard from './src/components/cards/EssCard.vue';
import EssCardHeader from './src/components/cards/EssCardHeader.vue';
import EssCardContent from './src/components/cards/EssCardContent.vue';
import EssCardFooter from './src/components/cards/EssCardFooter.vue';
import EssList from './src/components/lists/EssList.vue';
import EssListItem from './src/components/lists/EssListItem.vue';
import EssMenu from './src/components/menu/EssMenu.vue';
import EssSeparator from './src/components/separator/EssSeparator.vue';
import EssTab from './src/components/tabs/EssTab.vue';
import EssTabs from './src/components/tabs/EssTabs.vue';
import EssInput from './src/components/input/EssInput.vue';
import EssToolbar from './src/components/toolbar/EssToolbar.vue';
import EssTooltip from './src/components/tooltip/EssTooltip.vue';
import EssWindow from './src/components/window/EssWindow.vue';

const components = [
  EssAvatar,
  EssAvatarIcon,
  EssBadge,
  EssButton,
  EssFloatButton,
  EssCard,
  EssCardHeader,
  EssCardContent,
  EssCardFooter,
  EssList,
  EssListItem,
  EssMenu,
  EssSeparator,
  EssTab,
  EssTabs,
  EssInput,
  EssToolbar,
  EssTooltip,
  EssWindow,
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
