<template>
<v-card hover outlined flat>
    <v-img :src="url"></v-img>
    <v-card-text class="pa-2 grey lighten-4">
        <h3 class="body-2">{{ name }}</h3>
        <span class="font-weight-bold">₹ {{ price }}</span>
        <span class="text-decoration overline">₹ {{ actualPrice }}</span>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    props: ['name', 'price', 'actualPrice', 'url'],
    data: () => ({
        loading: false,
        selection: 1,
    })
}
</script>

<style scoped>
.height-card {
    height: 150px
}

.text-decoration {
    padding: 0 5px;
    text-decoration: line-through;
}
</style>
