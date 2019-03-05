<template lang="html">
  <div class="h-full flex flex-column items-center justify-start">
    <h1 class="font-5xl w-full">Alojamiento</h1>
    <ul :key="listKey" id="hotel-list" class="h-4/5 justify-items-center align-items-center container1">
      <li v-for="item in this.items">
        <card :title="item.name" :description="item.description" :rating="item.rating" :link="item.link"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card';
import { HTTP } from '../config/http-constants';

let items, listkey;

export default {
  components: {
    Card,
  },
  data: () => ({
    items: [{ name: "Nombre 1", description: "Desc 1", rating: "10"}],
    listKey: 0,
  }),
  methods: {
    getHotels: function() {
      HTTP.get('/booking')
        .then((response) => {
          this.items = response.data;
          this.reRenderComponent();
        })
        .catch(error => {
            if (!error.response) {
                console.log('Error: Network Error', error);
            } else {
                console.log(error.response.data.message);
            }
          })
    },
    reRenderComponent: function() { this.listKey += 1 },
  },
  mounted() {
    this.getHotels();
  }
};
</script>

<style lang="css" scoped>
.box {
  box-shadow: 0px 0px 10px 1px #888888;
  border-radius: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
}

::-webkit-scrollbar {
    display: none;
}

h1 {
  background-color: blueviolet;
  color:white;
  padding-bottom: 15px;
}

#hotel-list {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-left: 5px;
  padding-right: 5px;
}

#hotel-list li {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
