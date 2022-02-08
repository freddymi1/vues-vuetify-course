<template>
    <div class="_aside">
        <v-toolbar color="white" flat class="mt-n1">
            <v-toolbar-title class="_title">Epics</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="#4bb9e5" class="rounded-lg _btn" small>
                See All
            </v-btn>
        </v-toolbar>

        <v-list subheader two-line>
            <v-list-item v-for="file in files" :key="file.title" class="mt-n2">
                <v-list-item-avatar>
                    <v-icon :class="file.color" dark v-text="file.icon" small></v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="title_" v-text="file.title"></v-list-item-title>
                    <v-list-item-subtitle class="_subtitle" v-text="file.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">fas fa-ellipsis-h</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-toolbar color="white" flat class="mt-n6">
            <v-toolbar-title class="_title">Project statistic</v-toolbar-title>
        </v-toolbar>

        <v-card class="mx-2 rounded-l-xl pb-1" flat color="#EEEEEE">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                            <v-list-item-title>Project</v-list-item-title>
                            <v-list-item-subtitle class="">
                                progress
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-progress-circular :size="50" :width="4" :value="75" color="teal" class="ml-n5 mt-n1 _percent">
                        75%
                    </v-progress-circular>
                </v-col>
                
            </v-row>
        </v-card>

        <v-card class="mx-2 rounded-l-xl pb-1 mt-5" flat color="#EEEEEE">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                            <v-list-item-title>Business</v-list-item-title>
                            <v-list-item-subtitle class="">
                                goals
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-progress-circular :size="50" :width="4" :value="42" color="orange" class="ml-n5 mt-n1 _percent">
                        42%
                    </v-progress-circular>
                </v-col>
                
            </v-row>
        </v-card>

        <v-card class="mx-2 rounded-l-xl pb-1 mt-5" flat color="#EEEEEE">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                            <v-list-item-title>Budget</v-list-item-title>
                            <v-list-item-subtitle class="">
                                used
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-progress-circular :size="50" :width="4" :value="55" color="blue" class="ml-n5 mt-n1 _percent">
                        55%
                    </v-progress-circular>
                </v-col>
                
            </v-row>
        </v-card>

        <div class="my-2 mx-2 pb-4">
            <v-btn rounded small block>
                Project Details
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarRight',
    data: ()=>({
        files: [
            {
                color: 'green',
                icon: 'fas fa-phone',
                subtitle: 'Design',
                title: 'Mobile Onboarding'
            },
            {
                color: 'red',
                icon: 'fas fa-address-card',
                subtitle: 'Developpment',
                title: 'Adding Item'
            },
            {
                color: 'orange',
                icon: 'fas fa-user-shield',
                subtitle: 'Developpment',
                title: 'Admin Panel'
            },
            {
                color: 'purple',
                icon: 'fas fa-drafting-compass',
                subtitle: 'Design & Developpment',
                title: 'Mobile App'
            },
            {
                color: 'blue',
                icon: 'fas fa-file-code',
                subtitle: 'ResearchMobi',
                title: 'QR Scann'
            }
        ]
    })
}
</script>

<style>
    ._aside{
        background: #fff;
    }
    ._btn{
        font-weight: 600;
        color: #fff !important;
    }
    .title_{
        font-weight: 900 !important;
        font-size: 0.8rem !important;
        color: rgb(14, 29, 37);
    }
    ._title{
        font-weight: 900;
        font-size: 1rem !important;
        color: rgb(11, 52, 68);
    }

    ._percent{
        font-weight: 600;
        font-size: 0.8rem !important;
    }
</style>