<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2 mx-0">
          <v-toolbar-title class="_title">Settings</v-toolbar-title>
          
          <v-spacer></v-spacer>
          <v-btn color="#4bb9e5" class="rounded-lg _btn" small dark >
          Add setting
          </v-btn> 
      </v-toolbar>
    </v-container>
  </v-app>
</template>

<script>
export default {
    name: 'Settings'
}
</script>

<style>

</style>