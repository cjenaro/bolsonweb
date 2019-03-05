<template lang="html">
  <div class="box">
    <div class="container">
      <h1 class="title font-2xl">{{ title }}</h1>
      <p class="rating"> Rating: {{ rating }} </p>
      <p class="desc font-2xl">{{ description }}</p>
      <a class="btn" v-on:click="window.open(link)"> Ver en booking </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'rating'],
  data: () => ({
    window: window,
  }),
};
</script>

<style lang="css" scoped>
.box {
  box-shadow: 0px 0px 80px 1px #888888;
  border-radius: 10px;
  padding: 5px;
  height: 250px;
  max-width: 300px;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  padding-left: 5px;
  padding-right: 5px;
}

.title {
  text-align: left;
  font-size: 18px;
  grid-area: title;
}

.bottom {
  width: 100%;
  height: 80%;
  display: flex;
  padding: 5px;
  text-overflow: ellipsis;
}

.desc {
  text-align: left;
  font-size: 14px;
  grid-area: description;
}


.btn {
  height: 42px;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  background-color: blue;
  cursor: pointer;
  color: white;
  padding: 5px;
  grid-area: btn;
}

.rating {
  font-size: 14px;
  border-radius: 10px;
  background-color: blue;
  display: flex;
  color: white;
  text-align: center;
  align-items: center;
  padding: 5px;
  grid-area: rating;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas: "title rating"
                        "description btn";
  row-gap: 10px;

}

</style>
