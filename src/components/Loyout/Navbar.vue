<template>
<div>
    <v-card>
        <v-toolbar dark color="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-medium">E-</span>
                <span class="font-weight-light">Commerce</span>
            </v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" cache-items class="mx-4" flat hide-no-data hide-details label="What state are you from?" solo-inverted></v-autocomplete>
            <SignIn />
            <Register />
        </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in Sidebar" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
import SignIn from '../Auth/SignIn'
import Register from '../Auth/Register'

export default {
    components:{
        SignIn,
        Register
    },
    data() {
        return {
            drawer: null,
            Sidebar: [{
                    title: "Home",
                    icon: "dashboard"
                },
                {
                    title: "About",
                    icon: "question_answer"
                }
            ],
            loading: false,
            items: [],
            search: null,
            select: null,
            states: [
                'Alabama',
                'Alaska',
                'American Samoa',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District of Columbia',
                'Federated States of Micronesia',
                'Florida',
                'Georgia',
                'Guam',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Marshall Islands',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Northern Mariana Islands',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Palau',
                'Pennsylvania',
                'Puerto Rico',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virgin Island',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming',
            ],
        }
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val)
        },
    },
    methods: {
        querySelections(v) {
            this.loading = true
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
            }, 500)
        },
    },
}
</script>
