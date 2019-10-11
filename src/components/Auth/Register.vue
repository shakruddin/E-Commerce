<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        <template v-slot:activator="{ on }">
            <v-btn text color="white" dark v-on="on">Register</v-btn>
        </template>
        <v-card>
            <v-card-title class="primary--text pb-0 px-8">
                <span class="headline font-weight-medium">Register</span>
            </v-card-title>
            <v-card-text class="pb-0">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6" class="pt-0">
                            <v-text-field label="First Name" autofocus required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" class="pt-0">
                            <v-text-field label="Last Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-text-field label="Email" required></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-text-field label="New Password"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-text-field label="Confirm Password"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" class="px-4" text @click="dialog = false">Close</v-btn>
                <v-btn color="primary" class="px-4" dark @click="dialog = false">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>
