<template>
  <div class="yaara container" style="height:50vh">
    <h1 >הדף של יערה</h1>
<h3>החברות של יערה</h3>
  <ul class="list-group">
    <li v-for="item in list" class="list-group-item" :key="item">{{item}}</li>
  </ul>

<br>
<footer class="mt-5">
    <button @click="add" class="btn btn-info mx-5">הוסף את  קרן השניה</button>
    <button @click="remove" class="btn btn-info">remove!!</button>
</footer>



  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'yaara',
  data(){
    return{
      list:[
        'שירה11','אורה','קרן','אריאל','עינב','יערה'
      ]
    }
  },
  methods:{
    add(){
      this.list.push('קרן תומר');
    },
    remove(){
     this.list.pop()
    }
  }
}
</script>




<style lang="scss" scoped>
#yoyo{
  border-color:black;
}

</style>
