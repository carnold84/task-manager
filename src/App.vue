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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              d="M0 0h24v24H0V0z"
            />
            <path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
          </svg>
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

          <v-list dense>
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
    onFileSelect (evt) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = evt => {
        const data = JSON.parse(event.target.result);

        this.$store.dispatch('addData', data);
      };
      reader.readAsText(file);
    },
  },
  mounted () {
    this.$store.dispatch('init');

    document.querySelector('title').innerHTML = this.appName;
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";

.app-wrapper {
  background-color: #ffffff;
  color: var(--font-color-primary);
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

  svg {
    fill: var(--font-color-alt1);
    margin: 0 5px 0 0;
  }
}

.file-input {
  height: 25px;
  opacity: 0;
  position: absolute;
  width: 80px;
}
</style>
