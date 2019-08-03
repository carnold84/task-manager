<template>
  <div
    class="app-wrapper"
    data-app
  >
    <header-bar>
      <template slot="content-left">
        <span
          class="icon"
          v-if="task"
        >
          <router-link to="/">
            <arrow-back-icon />
          </router-link>
          {{task.title}}
        </span>
        <div
          class="logo"
          else
        >
          <img
            height="24"
            src="img/icons/icon-32x32.png"
          />
          {{ appName }}
        </div>
      </template>
      <template slot="content-right">
        <v-menu
          bottom
          left
          offset-y
        >
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list
            dense
            :dark="theme === 'dark'"
          >
            <v-list-tile @click="onClearAll">
              <v-list-tile-title>Clear All Tasks</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="onExportJSON">
              <v-list-tile-title>Export JSON</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Import JSON</v-list-tile-title>
              <input
                class="file-input"
                type="file"
                v-on:change="onFileSelect"
              />
            </v-list-tile>
            <v-list-tile @click="onToggleTheme">
              <v-list-tile-title>{{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>
    </header-bar>
    <div class="app-content">
      <router-view name="list" />
      <router-view name="details" />
    </div>
  </div>
</template>

<script>
import ArrowBackIcon from '@/components/icons/ArrowBack.vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'app',
  components: {
    ArrowBackIcon,
    HeaderBar,
  },
  computed: {
    task () {
      const id = this.$route.params.id;
      return id ? this.$store.getters.task(id) : undefined;
    },
    state () {
      return this.$store.getters.state;
    },
    theme () {
      return this.$store.getters.theme;
    },
  },
  data () {
    return {
      appName: 'Task Manager',
    };
  },
  methods: {
    downloadObjectAsJson (exportObj, exportName) {
      var dataStr = `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(exportObj))}`;
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href', dataStr);
      downloadAnchorNode.setAttribute('download', exportName + '.json');
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    onClearAll () {
      this.$store.dispatch('removeAllTasks');
    },
    onExportJSON () {
      this.downloadObjectAsJson(this.state, 'task-manager');
    },
    onToggleTheme () {
      this.$store.dispatch('setTheme', this.theme === 'dark' ? 'light' : 'dark');
    },
    onFileSelect (evt) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = evt => {
        const data = JSON.parse(event.target.result);

        this.$store.dispatch('addData', data);
      };
      reader.readAsText(file);
    },
    updateTheme (theme) {
      if (theme === 'light') {
        document.querySelector('html').classList.remove('theme-dark');
        document.querySelector('html').classList.add('theme-light');
      } else if (theme === 'dark') {
        document.querySelector('html').classList.remove('theme-light');
        document.querySelector('html').classList.add('theme-dark');
      }
    },
  },
  mounted () {
    this.$store.dispatch('init');

    document.querySelector('title').innerHTML = this.appName;

    this.updateTheme(this.theme);
  },
  updated () {
    this.updateTheme(this.theme);
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";

.app-wrapper {
  background-color: var(--app-theme1);
  color: var(--text-color1);
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-family-primary);
  font-size: 15px;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.app-content {
  display: flex;
  flex-grow: 1;
  position: relative;
}

.icon {
  align-items: center;
  display: none;
  margin: 0 5px 0 0;

  a {
    align-items: center;
    display: flex;
  }

  @media (max-device-width: 1024px) {
    display: flex;
  }
}

.logo {
  align-items: center;
  display: flex;

  img {
    margin: 0 8px 0 0;
  }
}

.file-input {
  height: 25px;
  opacity: 0;
  position: absolute;
  width: 80px;
}
</style>
