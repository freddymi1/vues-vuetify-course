<template>
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
        <v-container>
              

            <v-item-group>
                <v-row>
                    <v-col cols="12" md="8">
                        <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2 mx-0">
                            <v-toolbar-title class="_title">Post detail</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" persistent max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
									<v-btn 
									v-bind="attrs" 
									v-on="on" 
									small
									color="#4bb9e5" 
									class="rounded-lg _btn"
									>
										Edit post
									</v-btn>
								</template>
								<v-card>
									<v-card-title>
										<span class="text-h5">Add posts</span>
									</v-card-title>
									<v-card-text>
										<v-container>
											<v-row>
											<v-col
												cols="12"
												sm="6"
												md="6"
											>
												<v-text-field
												label="Title*"
												required
												:value="post.name"
												></v-text-field>
											</v-col>
											
											<v-col
												cols="12"
												sm="6"
												md="6"
											>
												<v-text-field
												label="Icon*"
												hint="example: fas fa-home"
												persistent-hint
												required
												:value="post.imagesTh"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
												label="Descriprion*"
												required
												:value="post.description"
												></v-text-field>
											</v-col>
											
											<v-col
												cols="12"
												sm="6"
											>
												<v-select
												:items="['Active', 'Inactive']"
												label="Status*"
												required
												></v-select>
											</v-col>
											<v-col
												cols="12"
												sm="6"
											>
												<v-autocomplete
												:items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
												label="Interests"
												multiple
												></v-autocomplete>
											</v-col>
											</v-row>
										</v-container>
										<small>*indicates required field</small>
									</v-card-text>
									<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn
										color="blue darken-1"
										text
										@click="dialog = false"
									>
										Close
									</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="dialog = false"
									>
										Save
									</v-btn>
									</v-card-actions>
								</v-card>
                            </v-dialog>
                        </v-toolbar>
						<v-row class="mt-0">
							<v-col cols="12">
								<video controls width="100%">
									<!-- <source :src="post.movieSRC" type="video/mp4"> -->
									<source src="../../assets/movie/1.mp4" type="video/mp4">
									<track aria-describedby="video choree" label="English" kind="subtitles" srclang="en" src="REV_TRANSCRIPTION_V3.vtt" default>
									Désolé, votre navigateur ne prend pas en charge les vidéos intégrées.
								</video>
							</v-col>
						</v-row>
                        <v-card class="rounded-lg my-2 py-n4">
                            <v-list subheader two-line>
								<v-list-item>
									<v-list-item-avatar size="80">
										<v-avatar size="80">
											<v-icon x-large color="#4bb9e5">{{post.imagesTh}}</v-icon>
										</v-avatar>
									</v-list-item-avatar>
									<v-list-item-content >
										<v-list-item-title class="titleDetail_">{{post.name}}</v-list-item-title>
										<v-list-item-subtitle>{{post.description}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <SideBarRight/>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-container>
    </v-app>
</template>

<script>
import SideBarRight from '../../components/Layout/SideBarRight.vue'
export default {
    name: "PostDetail",
    mounted(){
		this.$store.dispatch('loadOnePost')
	},

	computed: {
		post() { return this.$store.state.posts.find(ps => ps.id == this.$route.params.id) || {} }
	},
    components: {
        SideBarRight
    },
	data(){
		return{
			dialog: false,
		}
	}

}
</script>

<style>
    .titleDetail_{
        font-weight: 900 !important;
        font-size: 1rem !important;
        color: rgb(26, 88, 121);
    }
</style>