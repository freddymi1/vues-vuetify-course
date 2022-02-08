<template>
    <v-item v-slot="{active, toggle}">
		<v-card :color="active ? '#4bb9e5' : 'white'"
		class="d-flex align-center rounded-lg"
		dark
		height="150"
		@click="toggle"
		:to="{name: 'PostDetail', params: { id: post.id}}"
		>
			<v-row>
				<v-col cols="12" sm="12">
					<v-list-item three-line class="mt-2">
						<v-list-item-content>
							<div class="mb-4">
								<v-icon x-large :color="active ? 'white' : '#4bb9e5'">
									{{post.imagesTh}}
								</v-icon>
							</div>
							<v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">{{post.description}}</v-list-item-subtitle>
							<v-list-item-title class="headline-4 mb-1" :class="active ? 'white--text' : 'black--text'"><strong>{{post.name}}</strong></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-col>
			</v-row>
		</v-card>
	</v-item>
</template>

<script>
export default {
    name: "PostsLists",
    props: ["post"]
}
</script>

<style>

</style>