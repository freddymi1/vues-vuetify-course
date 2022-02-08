<template>
    <v-card>
		<v-card-title class="_title">Activities</v-card-title>
		<v-timeline
			align-top
			dense
		>
			<v-timeline-item
				color="blue"
				small
			>
				<v-row class="pt-1">
					<v-col>
						<strong>New Icon</strong>
						<div class="text-caption">
							60 minutes ago!
						</div>
					</v-col>
				</v-row>
			</v-timeline-item>

			<v-timeline-item
				color="teal lighten-3"
				small
			>
				<v-row class="pt-1">
					<v-col>
						<strong>New Icon</strong>
						<div class="text-caption">
							45 minutes ago!
						</div>
					</v-col>
				</v-row>
			</v-timeline-item>

			<v-timeline-item
				color="pink"
				small
			>
				<v-row class="pt-1">
					<v-col>
						<strong>New Icon</strong>
						<div class="text-caption">
							30 minutes ago!
						</div>
					</v-col>
				</v-row>
			</v-timeline-item>

		</v-timeline>
	</v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>