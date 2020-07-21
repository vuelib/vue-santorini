
# Essência Santorini

### Clone project
First let's clone the project using the branch feature/restructuring
```
git clone git@github.com:essencia-ui/vue-santorini.git -b feature/restructuring
```

### Install dependencies
Then we will install your dependencies
```
npm install
```

### Build bundle
We will run the command below whenever there are new changes. This will generate a new bundle with the new changes.
```
npm run build
```

### Usage lib to dev
To test the changes we create a link to our project via npm.
```
npm link
```

Then we will link the lib to our project vue that we will use it.
```
cd ~/path/project && npm link @essencia-ui/vue-santorini
```

### Config Essência in Vue project

Enter the file src/main.js or src/main.ts and paste the following codes.
```javascript
import Vue from 'vue';

// Essência
import Essencia from '@essencia-ui/vue-santorini';
import '@essencia-ui/vue-santorini/dist/essencia-santorini.css';

Vue.use(Essencia);
```