<template>
	<v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
		<v-container>
			<v-row>
				<v-col cols="12" md="8">
					<v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2 mx-0">
						<v-toolbar-title class="_title">Dashboard </v-toolbar-title>
					</v-toolbar>
					
					<v-item-group mandatory class="mt-n4">
						<v-container>
							<v-row justify="space-between" class="space">

								<v-col cols="12" md="3" sm="12">
								<v-item v-slot="{active, toggle}">
									<v-card :color="active ? '#4bb9e5' : 'white'"
									class="d-flex align-center rounded-lg"
									dark
									height="150"
									@click="toggle"
									@dblclick="toggleReminder"
									>
									<v-row>
										<v-col cols="12" sm="12">
										<v-list-item three-line class="mt-7">
											<v-list-item-content>
											<div class="mb-4">
												<v-icon x-large :color="active ? 'white' : '#4bb9e5'">fas fa-chart-bar</v-icon>
											</div>
											<v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">Team velocity</v-list-item-subtitle>
											<v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'"><strong>{{posts.length}}</strong></v-list-item-title>
											</v-list-item-content>
										</v-list-item>
										</v-col>
									</v-row>
									</v-card>
								</v-item>
								</v-col>

								<v-col cols="12" md="3">
								<v-item v-slot="{active, toggle}">
									<v-card :color="active ? '#4bb9e5' : 'white'"
									class="d-flex align-center rounded-lg"
									dark
									height="150"
									@click="toggle"
									>
									<v-row>
										<v-col cols="12" sm="12">
										<v-list-item three-line class="mt-7">
											<v-list-item-content>
											<div class="mb-4">
												<v-icon x-large :color="active ? 'white' : '#4bb9e5'">fas fa-user-shield</v-icon>
											</div>
											<v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">Team member</v-list-item-subtitle>
											<v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'"><strong>{{teamMembers.length}}</strong></v-list-item-title>
											</v-list-item-content>
										</v-list-item>
										</v-col>
									</v-row>
									</v-card>
								</v-item>
								</v-col>

								<v-col cols="12" md="3">
								<v-item v-slot="{active, toggle}">
									<v-card :color="active ? '#4bb9e5' : 'white'"
									class="d-flex align-center rounded-lg"
									dark
									height="150"
									@click="toggle"
									>
									<v-row>
										<v-col cols="12" sm="12">
										<v-list-item three-line class="mt-7">
											<v-list-item-content>
											<div class="mb-4">
												<v-icon x-large :color="active ? 'white' : '#4bb9e5'">fas fa-suitcase</v-icon>
											</div>
											<v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">Tasks delivered</v-list-item-subtitle>
											<v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'"><strong>{{tasks.length}}</strong></v-list-item-title>
											</v-list-item-content>
										</v-list-item>
										</v-col>
									</v-row>
									</v-card>
								</v-item>
								</v-col>

								<v-col cols="12" md="3">
								<v-item v-slot="{active, toggle}">
									<v-card :color="active ? '#4bb9e5' : 'white'"
									class="d-flex align-center rounded-lg"
									dark
									height="150"
									@click="toggle"
									>
									<v-row>
										<v-col cols="12" sm="12">
										<v-list-item three-line class="mt-7">
											<v-list-item-content>
											<div class="mb-4">
												<v-icon x-large :color="active ? 'white' : '#4bb9e5'">fas fa-globe-africa</v-icon>
											</div>
											<v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">News events</v-list-item-subtitle>
											<v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'"><strong>15</strong></v-list-item-title>
											</v-list-item-content>
										</v-list-item>
										</v-col>
									</v-row>
									</v-card>
								</v-item>
								</v-col>

							</v-row>
						</v-container>
						
					</v-item-group>

					<v-toolbar color="rgba(0,0,0,0)" flat class="mt-n3">
						<v-toolbar-title class="_title">Tasks stories</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-btn rounded small class="rounded-lg _btn" color="#4bb9e5">See all</v-btn>
					</v-toolbar>

					<v-data-table
						:headers="headers"
						:items="tasks"
						:items-per-page="5"
						class="elevation-1"
					>
						<template v-slot:item.action>
							<div class="d-flex">
								<v-btn color="success" small icon>
								<v-icon x-small>fas fa-eye</v-icon>
								</v-btn>
								<v-btn color="primary" small icon>
								<v-icon x-small>fas fa-pencil</v-icon>
								</v-btn>
								<v-btn color="red" small icon>
								<v-icon x-small>fas fa-trash</v-icon>
								</v-btn>
							</div>
						</template>
					</v-data-table>

					<v-toolbar color="rgba(0,0,0,0)" flat class="mt-1">
						<v-toolbar-title class="_title">Team members</v-toolbar-title>
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
								Add member
								</v-btn>
							</template>
							<v-card>
								<v-card-title>
									<span class="text-h5">User Profile</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
										<v-col
											cols="12"
											sm="6"
											md="4"
										>
											<v-text-field
											label="Legal first name*"
											required
											></v-text-field>
										</v-col>
										<v-col
											cols="12"
											sm="6"
											md="4"
										>
											<v-text-field
											label="Legal middle name"
											hint="example of helper text only on focus"
											></v-text-field>
										</v-col>
										<v-col
											cols="12"
											sm="6"
											md="4"
										>
											<v-text-field
											label="Legal last name*"
											hint="example of persistent helper text"
											persistent-hint
											required
											></v-text-field>
										</v-col>
										<v-col cols="12">
											<v-text-field
											label="Email*"
											required
											></v-text-field>
										</v-col>
										<v-col cols="12">
											<v-text-field
											label="Password*"
											type="password"
											required
											></v-text-field>
										</v-col>
										<v-col
											cols="12"
											sm="6"
										>
											<v-select
											:items="['0-17', '18-29', '30-54', '54+']"
											label="Age*"
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


					<v-card class="rounded-lg my-2">
						<v-row>
							<v-col cols="12" md="4" sm="4"  v-for="member in teamMembers" :key="member.id">
								<TeamMemberList :member="member"/>
							</v-col>
						</v-row>
					</v-card>

				</v-col>
				<v-col cols="12" md="4">
					<SideBarRight/>
					<Activity/>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
import Activity from '../../components/HomeComponents/Activity.vue'
import SideBarRight from '../../components/Layout/SideBarRight.vue'
import TeamMemberList from '../../components/HomeComponents/TeamMemberList.vue'


// import Api from '../services/api'
  export default {
    name: 'Home',

    components: {
		SideBarRight,
		Activity,
		TeamMemberList,
    },
    // mounted (){
	// 	this.loadMembers()
	// 	this.loadDesserts()
    // },
    // methods: {
	// 	toggleReminder(){
	// 		alert(12)
	// 	},
	// 	async loadDesserts(){
	// 		const responses = await Api().get('/desserts')
	// 		this.desserts = responses.data
	// 	},
	// 	async loadMembers(){
	// 		const responses = await Api().get('/teamMembers')
	// 		this.teamMembers = responses.data
	// 	}
    // },
	mounted (){
		this.$store.dispatch('loadMembers')
		this.$store.dispatch('loadDesserts')
		this.$store.dispatch('loadPosts')
    },
	computed: {
		tasks() { return this.$store.state.tasks },
		teamMembers() { return this.$store.state.teamMembers },
		posts() { return this.$store.state.posts }
	},
    methods: {
		toggleReminder(){
			alert(12)
		}		
    },
    data() {
        return{
			dialog: false,
			// teamMembers: [],
			// desserts: [],
            activities:[
                {title: 'Total Products', temps: 'Last 2 weeks', color: 'pink', amounts: 4560},
                {title: 'Total Category', temps: 'Last 1 week', color: 'deep-purple', amounts: 50},
                {title: 'Total Orders', temps: 'Last 4 days', color: 'green', amounts: 120},
                {title: 'Pending Orders', temps: 'Last 4 weeks', color: 'cyan', amounts: 4560},
                {title: 'Total Orders', temps: 'Last 4 days', color: 'primary', amounts: 4560},
                {title: 'Pending Orders', temps: 'Last 4 weeks', color: 'indigo', amounts: 4560},
            ],
            headers: [
                {
                    text: 'Task (Delivered)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Template making', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
                { text: 'Action', value: 'action' },
            ]
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
</style>