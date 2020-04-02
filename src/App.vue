<template>
  <div id="app">

    <div class="ess container">

      <div class="ess row">
        <div class="ess col lg-12">
          <sant-tabs v-model="tab">
            <sant-tab name="tab1"> Tab 1 </sant-tab>
            <sant-tab name="tab2"> Tab 2 </sant-tab>
            <sant-tab name="tab3"> Tab 3 </sant-tab>
          </sant-tabs>
        </div>
      </div>

      <div class="ess row">
        <div class="ess col lg-12">
          <sant-button type="filled" shape="rounded" color="primary" > Button </sant-button>
          <sant-button type="cleaned" shape="rounded" color="primary" > Button </sant-button>
        </div>
      </div>

      <div class="ess row">
        <div class="ess col lg-12">
          <sant-float-button type="filled" shape="rounded" color="primary"> <i class="fab fa-font-awesome"></i> </sant-float-button>
          <sant-float-button type="cleaned" shape="circle" color="primary"> <i class="fab fa-font-awesome"></i> </sant-float-button>
        </div>
      </div>

      <div class="ess row">
        <div class="ess col lg-12">
          <sant-badge type="filled" shape="rounded" color="primary"> badge </sant-badge>
          <sant-badge type="highlighted" shape="pill" color="primary"> badge </sant-badge>
        </div>
      </div>

      <div class="ess row">
        <div class="ess col lg-12">
          <sant-avatar src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/users/100_1.jpg" shape="rounded" color="primary"> avatar </sant-avatar>
          <sant-avatar src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/users/100_1.jpg" shape="pill" color="primary"> avatar </sant-avatar>
        </div>
      </div>

    </div>

  </div>
</template>

<style lang="scss">
  @import url('https://necolas.github.io/normalize.css/8.0.1/normalize.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

  @import './assets/scss/main';

  *, *:before, *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', sans-serif;
  }
</style>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

// COMPONENTS
import SantTab from '@/components/tabs/SantTab.vue';
import SantTabs from '@/components/tabs/SantTabs.vue';
import SantButton from '@/components/buttons/SantButton.vue';
import SantFloatButton from '@/components/buttons/SantFloatButton.vue';
import SantAvatar from '@/components/avatars/SantAvatar.vue';
import SantAvatarIcon from '@/components/avatars/SantAvatarIcon.vue';
import SantBadge from '@/components/badges/SantBadge.vue';

@Component({
  name: 'App',
  components: {
    SantTab,
    SantTabs,
    SantButton,
    SantFloatButton,
    SantAvatar,
    SantAvatarIcon,
    SantBadge,
  },
})
export default class App extends Vue {
  private tab: string;

  constructor() {
    super();
    this.tab = 'tab2';
  }
}
</script>
