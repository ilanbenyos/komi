<template>
  <div class="yaara container" style="height:50vh">
  <h3>החברות של יערה</h3>
  <ul class="list-group">
    <li v-for="(item, idx) in friends" class="list-group-item d-flex justify-content-between" :key="idx">
      <div @click="remove(idx)" class="c-pointer x-close"> X</div>

      <div class="details mr-3">
        <div class="ml-3">{{item.fName}}</div>
        <div class="ml-3">{{item.lName}}</div>
        <div class="ml-3">{{item.phone}}</div>
        <div class="ml-3">{{item.email}}</div>
      </div>
      <img :src="item.image" class="image_avatar rounded-circle ">

    </li>
  </ul>

<br>

<div class="form mt-4 border p-3">
  <label>הוסף חבר</label>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="שם פרטי"  v-model="newFriend.fName">
  </div>

  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="שם משפחה"  v-model="newFriend.lName">
  </div>

  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="טלפון"  v-model="newFriend.phone">
  </div>

  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="אי מייל"  v-model="newFriend.email">
  </div>

  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="תמונה"  v-model="newFriend.image">
  </div>


</div>

<footer class="mt-5">
    <button @click="add" class="btn btn-info mx-5">הוסף</button>
    <button @click="remove" class="btn btn-info">remove!!</button>
</footer>



  </div>
</template>



<script>
// https://jooinn.com/images/at-the-sea-5.jpg
// https://q-cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg
// https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKR-4VR8OyFA0d-hanGVxqSznvP5vJj451Tk29ne0RuK64rK2f&usqp=CAU
import axios from 'axios';

export default {
  name: 'yaara',
  data(){
    return{
      newFriend:{},
      currUser:{
        id:"11",
        fName:'yaara',
        lName:'perelson',
        phone:'050-6667778'
      },
      friends:[
      //   {
      //   fName:'קרן',
      //   lName:'בן שמחון',
      //   phone:'050-6667778',
      //   email:'',
      //   image:' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKR-4VR8OyFA0d-hanGVxqSznvP5vJj451Tk29ne0RuK64rK2f&usqp=CAU'
      // }
        // 'שירה11','אורה','קרן','אריאל','עינב','יערה'
      ]
    }
  },
  methods:{
    async add(){
      let res = await axios.post('/friends', this.newFriend)
      this.friends.push(res);
    },
    remove(idx){
     this.friends.splice(idx,1);
    }
  }
}
</script>




<style lang="scss" scoped>
.image_avatar{
  width:50px;
  height:100%;
}
  .list-group{
    padding-inline-start: 0;
  }

</style>
