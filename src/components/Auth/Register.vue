<template>
<v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on }">
        <v-btn text class="text-capitalize" color="white" dark v-on="on">Register</v-btn>
    </template>
    <v-card>
        <v-card-title class="primary--text pb-0 px-8">
            <span class="headline font-weight-medium">Register</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-container>
                <v-alert v-show="alert" text prominent type="error" icon="mdi-cloud-alert">
                    {{ text }}
                </v-alert>
                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                    <v-row>
                        <v-col cols="12" md="6" class="pt-0">
                            <v-text-field v-model="SignUp.firstName" :rules="nameRules" label="First Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" class="pt-0">
                            <v-text-field v-model="SignUp.lastName" :rules="lastRules" label="Last Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-text-field v-model="SignUp.email" :rules="emailRules" label="Email" required></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-text-field v-model="SignUp.password" :append-icon="icon ? 'visibility' : 'visibility_off'" :rules="passwordRules" :type="icon ? 'text' : 'password'" @click:append="icon = !icon" label="New Password" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" class="px-4 text-capitalize" text @click="Close">Close</v-btn>
            <v-btn color="primary" class="px-4 text-capitalize" dark :loading="loading" @click="Register">Register</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import {
    db,
    auth
} from "../../config/fbConfig";

export default {
    data: () => ({
        alert: false,
        text: '',
        loading: false,
        icon: false,
        confirnIcon: false,
        dialog: false,
        lazy: false,
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
        ],
        lastRules: [
            v => !!v || 'Last is required',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Min 8 characters',
        ],
        SignUp: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }),
    methods: {
        Register() {
            if (this.$refs.form.validate()) {
                this.loading = true
                auth
                    .createUserWithEmailAndPassword(
                        this.SignUp.email,
                        this.SignUp.password
                    )
                    .then(res => {
                        return db
                            .collection("users")
                            .doc(res.user.uid)
                            .set({
                                firstName: this.SignUp.firstName,
                                lastName: this.SignUp.lastName
                            });
                        this.loading = false
                    }).catch(err => {
                        this.alert = true
                        this.text = err
                        this.loading = false
                    })
            }
        },
        Close() {
            this.$refs.form.resetValidation();
            this.dialog = false
        }
    }
};
</script>
