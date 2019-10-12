<template>
<div>

    <v-card>
        <v-toolbar dark flat color="primary" class="d-block d-lg-none" dense>
            <v-toolbar-title>
                <span class="font-regular">e-</span>
                <span class="font-weight-medium">Commerce</span>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <SignIn v-if="checkLogIn" />
            <Register v-if="checkLogIn" />
            <v-btn v-if="!checkLogIn" @click="LogOut" text class="text-capitalize" color="white" dark>LogOut</v-btn>
        </v-toolbar>
        <v-toolbar dark flat color="primary pa-0">
            <v-app-bar-nav-icon v-if="!checkLogIn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="d-none d-lg-block">
                <span class="font-regular">e-</span>
                <span class="font-weight-medium">Commerce</span>
            </v-toolbar-title>
            <div class="flex-grow-1 d-none d-lg-block"></div>
            <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" flat hide-details label="Search by product, category or collection" solo-inverted></v-autocomplete>
            <div class="d-none d-lg-block ">
                <SignIn v-if="checkLogIn" />
                <Register v-if="checkLogIn" />
                <v-btn v-if="!checkLogIn" @click="LogOut" text class="ml-3 text-capitalize" color="white" dark>LogOut</v-btn>
            </div>
        </v-toolbar>
    </v-card>

    <v-navigation-drawer v-model="drawer" floating fixed temporary>
        <v-list-item class="primary">
            <v-list-item-avatar class="white primary--text text-uppercase font-weight-bold">
                {{ name[0] + last[0]  }}
            </v-list-item-avatar>
            <v-list-item-content class="white--text text-capitalize font-weight-bold">
                <v-list-item-title>{{ name + " " + last }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list rounded dense>
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
import SignIn from "../Auth/SignIn";
import Register from "../Auth/Register";
import {
    auth,
    db
} from "../../config/fbConfig";

export default {
    components: {
        SignIn,
        Register
    },
    data() {
        return {
            name: 'slasfl',
            last: 'sjdfla',
            checkLogIn: false,
            drawer: null,
            Sidebar: [{
                    title: "Orders",
                    icon: "account_balance_wallet"
                },
                {
                    title: "Wishlist",
                    icon: "favorite"
                },
                {
                    title: "My Chats",
                    icon: "chat"
                },
                {
                    title: "Coupins",
                    icon: "local_activity"
                },
                {
                    title: "Notifications",
                    icon: "notifications"
                }
            ],
            loading: false,
            items: [],
            search: null,
            select: null,
            states: [
                "Alabama",
                "Alaska",
                "American Samoa",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "District of Columbia",
                "Federated States of Micronesia",
                "Florida",
                "Georgia",
                "Guam",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Marshall Islands",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Northern Mariana Islands",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Palau",
                "Pennsylvania",
                "Puerto Rico",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virgin Island",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming"
            ]
        };
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val);
        }
    },
    methods: {
        querySelections(v) {
            this.loading = true;
            setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
                });
                this.loading = false;
            }, 500);
        },
        LogOut() {
            auth.signOut()
        }
    },
    created: function () {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.checkLogIn = false
            } else {
                this.checkLogIn = true
            }
        })
        db.collection('products').get().then(res => {
            res.forEach(doc => {
                this.name = doc.data().name
                this.last = doc.data().last
            });
        })
    }
};
</script>
