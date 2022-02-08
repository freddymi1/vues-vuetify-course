<template>
    <v-list subheader two-line>
		<v-list-item>
			<v-badge bordered bottom color="#49D9A0" dot offset-x="28" offset-y="22">
			<v-list-item-avatar>
				<v-avatar size="40">
				<v-img src="https://randomuser.me/api/portraits/women/2.jpg"></v-img>
				</v-avatar>
			</v-list-item-avatar>
			</v-badge>
			<v-list-item-content>
			<v-list-item-title class="title_">{{member.name}}</v-list-item-title>
			<v-list-item-subtitle>{{member.storyPoint}} Story point</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>

<script>
export default {
    props:["member"]
}
</script>

<style>

</style>