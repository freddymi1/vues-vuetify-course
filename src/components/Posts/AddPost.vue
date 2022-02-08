<template>
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
</template>

<script>
export default {
    name: "AddPost",
    props: ['dialog']
}
</script>

<style>

</style>