<template>
  <div
    class="app-wrapper"
    data-app
  >
    <header-bar>
      <template slot="content-left">Task Manager</template>
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
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'app',
  components: {
    HeaderBar,
  },
  computed: {
    state () {
      return this.$store.getters.state;
    },
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
}

.file-input {
  height: 25px;
  opacity: 0;
  position: absolute;
  width: 80px;
}
</style>
