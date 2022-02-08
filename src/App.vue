<template>
	<v-app>
		<Header @handleDrawer="drawer = !drawer"/>
		<Sidebar :drawer="drawer"/>
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
import Sidebar from './components/Layout/Sidebar.vue';
import Header from './components/Layout/Header.vue'
export default {
	name: 'App',
	components: {
		Sidebar,
		Header
	},
	
	data: () => ({
		cards: ['Today', 'Yesterday'],
		drawer: true      
	}),
};
</script>
