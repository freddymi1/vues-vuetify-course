<template>
    
    <v-app-bar app
      elevate-on-scroll
      elevation="4"
      class="_navbar"
    >
      <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>



      <v-col lg="4" cols="12">
        <v-form class="mt-6">
          <v-text-field rounded outlined dense placeholder="Search..." append-icon="fas fa-search"/>
        </v-form>
      </v-col>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <span v-bind="attrs" v-on="on" style="cursor: pointer" class="mr-5">
            <v-badge offset-y="10" offset-x="10" color="red" content="5">
              <v-icon>fab fa-facebook-messenger</v-icon>
            </v-badge>
          </span>
        </template>
        <v-list three-line width="300">
          <template v-for="(item, index) in items">
            <v-subheader 
              v-if="item.header" 
              :key="item.header" 
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
              link
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-btn block small class="rounded-sm">See all</v-btn>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <span v-bind="attrs" v-on="on" style="cursor: pointer" class="mr-5 ml-5">
            <v-badge offset-y="10" offset-x="10" color="red" content="10">
              <v-icon>fas fa-bell</v-icon>
            </v-badge>
          </span>
        </template>

        <v-list three-line width="300">
          <template v-for="(item, index) in items">
            <v-subheader 
              v-if="item.header" 
              :key="item.header" 
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
              link
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-btn block small class="rounded-sm">See all</v-btn>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <span v-bind="attrs" v-on="on" style="cursor: pointer" class="mx-5 mr-0">
            <v-chip link>
              <v-badge dot bottom offset-y="10" offset-x="10" color="green">
                <v-avatar size="30">
                  <img aspect-ratio="30" src="https://randomuser.me/api/portraits/women/2.jpg">
                </v-avatar>
              </v-badge>
              <span>kang So Ra</span>
            </v-chip>
          </span>
        </template>
        
        <v-list width="250" class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img aspect-ratio="40" src="https://randomuser.me/api/portraits/women/2.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                Kang So Ra
              </v-list-item-title>

              <v-list-item-subtitle>
                Logged In
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
           <v-divider/>
          <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.link" link>
            <v-list-item-icon>
              <v-icon>{{menu.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-content>
              <v-list-item-title>
                {{menu.title}}
              </v-list-item-title>
            </v-list-content>
          </v-list-item>

        </v-list>
      </v-menu>

    </v-app-bar>
</template>
<script>

export default {
    name: "Header",
    data() {
      return{
        menus: [
          {title: "Profile", icon: "fas fa-user", link:'/my_profile'},
          {title: "Change password", icon: "fas fa-key", link: '/change_password'},
          {title: "Setting", icon: "fas fa-cog", link: '/settings'},
          {title: "Logout", icon: "fas fa-lock"}
        ],
        items: [
          {header: 'Today'},
          {
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            title: 'Brunch this weekend',
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend.`
          },
          { divider: true, inset: true},
          {
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten">4</span>',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
          },
          { divider: true, inset: true},
          {
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten">4</span>',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
          }
        ]
      }
    }
}
</script>

<style scoped>
    ._navbar{
        background: rgb(246, 247, 248) !important;
        color: white;
    }
</style>