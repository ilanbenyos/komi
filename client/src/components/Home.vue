<template>
  <div class="home container">
    <h1>שירה עובדיה המלכה!!!</h1>
  
    <button @click="getAll()">קרן ברגר- תביאי לי בבקשה את כל המספרים</button>

    <div class="alert alert-primary" role="alert">
        {{msg}}
    </div>

    <div class="input-group my-4" style="width:250px">

      <input type="text" class="form-control" aria-label="Default" v-model="plateNumber">
        <div class="input-group-prepend">
          <button type="button" class="btn btn-primary" @click="checkPlate()">בדוק מספר</button>
        </div>
    </div>
    <br>
          <button type="button" class="btn btn-primary" @click="getAllReports()">קבל את כל הדוחות</button>
           <ul class="list-group">
              <li v-for="(item, idx) in reports" class="list-group-item d-flex justify-content-between" :key="idx">{{item}}
              </li>
           </ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data(){
    return{
      plateNumber:null,
      msg:'',
      reports:null,
    }
  },
  methods:{
    async getAllReports(){
      this.$loader(true);
      try{
        let res = await axios.get('/reports/getAllReports');
        this.reports = res;
        console.log('getAll:res',this.reports);

      }finally{
        this.$loader(false)
      }
    },
    async getAll(){
      this.$loader(true);
      try{
        let res = await axios.get('/plates/getAll')
        console.log('getAll:res',res);
        this.msg = res;
        this.$toast.add({severity:'success', summary: 'התקבלו נתוני רישוי', detail:'got them', life: 2000});

      }finally{
        this.$loader(false)
      }
    },
    async checkPlate(){
      let res = await axios.get('/plates/is_valid/'+ this.plateNumber)
      console.log(res);
      this.msg = res
    },
    
  }
}
</script>

<style lang="scss" scoped>

</style>
