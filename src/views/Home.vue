<template>
  <v-container>
    <h2>Best Sellers</h2>
    <v-row>
      <v-col cols="6" sm="3" md="3" v-for="(tShirt, i) in tShirts" :key="i">
        <Product :name="tShirt.name" :price="tShirt.price" :actualPrice="tShirt.actualPrice" :url="tShirt.url" />
      </v-col>
    </v-row>
     <h2>Pajamas</h2>
    <v-row>
      <v-col cols="6" sm="3" md="3" v-for="(Pajama, i) in Pajamas" :key="i">
        <Product :name="Pajama.name" :price="Pajama.price" :actualPrice="Pajama.actualPrice" :url="Pajama.url" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from '../components/Product/Card'

export default {
  components:{
    Product
  },
  data(){
    return{
      tShirts:[
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 249, actualPrice: 449, url: 'https://images.bewakoof.com/t320/biker-swag-half-sleeve-t-shirt-men-s-printed-t-shirts-228467-1566295529.jpg' },
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 275, actualPrice: 499, url: 'https://images.bewakoof.com/t320/airplane-mode-on-half-sleeve-t-shirt-men-s-printed-t-shirts-224952-1563776435.jpg' },
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 299, actualPrice: 499, url: 'https://images.bewakoof.com/t320/peek-out-half-sleeve-t-shirt-men-s-printed-t-shirts-211979-1552462834.jpg' },
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 325, actualPrice: 499, url: 'https://images.bewakoof.com/t320/superman-faster-stronger-half-sleeve-t-shirt-sml-men-s-printed-t-shirts-232576-1567224724.jpg' }
      ],
      Pajamas:[
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 249, actualPrice: 449, url: 'https://images.bewakoof.com/t320/nebula-blue-plain-pyjama-men-s-plain-pyjamas-232459-1570097153.jpg' },
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 275, actualPrice: 499, url: 'https://images.bewakoof.com/t320/red-passion-plain-pyjama-men-s-plain-pyjamas-232491-1570097353.jpg' },
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 299, actualPrice: 499, url: 'https://images.bewakoof.com/t320/black-plain-pyjama-men-s-plain-pyjamas-234116-1570167223.jpg' },
        { name: 'Biker Swag Half Sleeve T-Shirt', price: 325, actualPrice: 499, url: 'https://images.bewakoof.com/t320/merlin-blue-plain-pyjama-men-s-plain-pyjamas-232432-1570097127.jpg' }
      ]
    }
  }
};
</script>
