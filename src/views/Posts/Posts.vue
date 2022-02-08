<template>
	<v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
		<v-container>
			<v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2 mx-0">
				<v-toolbar-title class="_title">All posts <em class="_nbrPost">{{posts.length}}</em> </v-toolbar-title>
				<v-spacer></v-spacer>
				<v-dialog
					v-model="dialog"
					persistent
					max-width="600px"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
						color="#4bb9e5"
						dark
						class="rounded-lg _btn"
						v-bind="attrs"
						v-on="on"
						small
						rounded
						>
						Add posts
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
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field
									label="Descriprion*"
									required
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

			<v-item-group mandatory class="mt-n4">
				<v-row justify="space-between" class="space">
					<v-col cols="12" md="3" sm="12" class="mt-0"  v-for="post in posts" :key="post.name">
						<PostsLists :post="post"></PostsLists>
					</v-col>
				</v-row>
			</v-item-group>
		</v-container>
	</v-app>
</template>

<script>
	// import Api from '../services/api'
	import PostsLists from '../../components/Posts/PostsLists.vue'
	export default {
		name: 'Posts',

		components: {
			PostsLists,
		},
		// mounted(){
		//   Api().get('/posts').then((responses)=>{
		//     this.posts = responses.data
		//   })
		// },
		// OR
		
		// methods: {
		// 	async loadPosts() {
		// 		const responses = await Api().get('/posts')
		// 		this.posts = responses.data
		// 	}
		// },
		// OR
		mounted(){
			this.$store.dispatch('loadPosts')
		},

		computed: {
			posts() { return this.$store.state.posts }
		},
		data(){
			return{
				// posts: [],
				dialog: false,
			}
		}
	}
</script>
<style>
	._title{
		font-weight: 600;
		font-size: 1rem !important;
	}

	.title{
		color: #0d1927;
	}
	._nbrPost{
		color: #4bb9e5;
	}
	/* .v-application--wrap {
		flex: 1 1 auto;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		display: flex;
		flex-direction: column;
		min-height: auto !important;
		max-width: 100%;
		position: relative;
	} */

</style>