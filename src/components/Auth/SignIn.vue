<template>
<v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on }">
        <v-btn text class="text-capitalize ml-3" color="white" dark v-on="on">LogIn</v-btn>
    </template>
    <v-card>
        <v-card-title class="primary--text pb-0 px-8">
            <span class="headline font-weight-medium">Log In</span>
        </v-card-title>
        <v-card-text class="pb-0">
            <v-container>
                <v-alert v-show="alert" text prominent type="error" icon="mdi-cloud-alert">
                    {{ text }}
                </v-alert>
                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                    <v-row>
                        <v-col cols="12" class="pt-0">
                            <v-text-field @keyup.enter="logIn" type="email" :rules="emailRules" v-model="SignIn.Email" label="Email" required></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-text-field @keyup.enter="logIn" :append-icon="icon ? 'visibility' : 'visibility_off'" :type="icon ? 'text' : 'password'" @click:append="icon = !icon" :rules="passwordRules" v-model="SignIn.Password" label="Password" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" class="px-4 text-capitalize" text @click="Close">Close</v-btn>
            <v-btn color="primary" class="px-4 text-capitalize" dark :loading="loading" @click="logIn">Login</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import {
    auth
} from "../../config/fbConfig";

export default {
    data: () => ({
        alert: false,
        text: '',
        loading: false,
        icon: false,
        dialog: false,
        lazy: false,
        valid: true,
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        passwordRules: [v => !!v || "Password is required"],
        SignIn: {
            Email: "",
            Password: ""
        }
    }),
    methods: {
        logIn() {
            if (this.$refs.form.validate()) {
                this.loading = true
                auth.signInWithEmailAndPassword(this.SignIn.Email, this.SignIn.Password)
                    .then(res => {
                        this.loading = false
                        this.dialog = false
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
