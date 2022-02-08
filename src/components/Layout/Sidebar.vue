<template>
    <v-navigation-drawer v-model="drawer" class="_navigation" app>
        <div class="text-center pa-4 _logoH">
            <v-avatar class="mb-4" color="grey darken-1" size="64">
                <img aspect-ratio="40" src="https://randomuser.me/api/portraits/women/2.jpg">
            </v-avatar>

            <div>Kang So Ra</div>
        </div>

        <!-- <v-divider></v-divider> -->

        <v-list>
            <v-list-item-group v-for="[icon, text, link] in links"
                :key="icon">
                <v-list-item
                :to="link"
                link
                >
                    <v-list-item-icon>
                        <v-icon small class="mr-n4 _icon">{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="_text">{{ text }}</v-list-item-title>
                    </v-list-item-content>
                    <!-- <v-spacer></v-spacer> -->
                    <!-- <v-badge offset-y="10" offset-x="10" color="red" :content="nbr"></v-badge> -->
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props:['drawer'],
    name: "Sidebar",

    components: {},

    mounted (){
		this.$store.dispatch('loadPosts')
    },
	computed: {
		posts() { return this.$store.state.posts }
	},

    data(){
        return {
            links: [
                ['fas fa-dashboard', 'Dashboard', '/'],
                ['fas fa-list', 'Posts', '/posts'],
                ['fas fa-cog', 'System setting', '/settings'],
                ['fas fa-users', 'Users',  '/users'],
            ],
        }
    }
}
</script>

<style scoped>
    .border{
        margin-left: 12px;
        margin-right: 12px;
        background: #4bb9e5;
        border-radius: 50%;
        text-decoration: none;
    }

    .v-list-item-group .v-list-item--active{
        color: #fff !important;
    }
    ._navigation{
        background: rgb(6, 60, 83) !important;
        color: #fff;
    }
    ._logoH{
        background-color: rgb(6, 60, 83);
    }
    ._icon{
        color: #fff !important;
    }
    ._text{
        color: #fff;
    }

    .v-item--active .v-list-item--active{
        color: #fff;
    }
</style>
