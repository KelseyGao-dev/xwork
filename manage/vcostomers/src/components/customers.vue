<template>
  <div class="costomers container">
      <alert v-if="alert" v-bind:message="alert"></alert>
    <h1 class="page-header">用户信息管理系统</h1>
    <input type="text" class="form-control" placeholder="按名字搜索" v-model="filterInput">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>网址</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item,key) in filterBy(customers,filterInput)" :key="key">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.website}}</td>
          <td><router-link class="btn btn-info" :to="'/customer/'+item.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alert from './alert'
export default {
  name: "customers",
  data() {
    return {
        customers:[],
        alert:"",
        filterInput:""

    };
 
  },
  components:{
      alert, 
  },
  methods: {
    searchCustomer() {
          this.$http.get("http://localhost:3000/users")
          .then((res)=>{
            //   console.log(res);
              this.customers=res.body;
            //   console.log(this.customers);
          })
      },
      filterBy(customers,value){
        return customers.filter((c)=>{
          return c.name.match(value);
        })
        
      }
  },
  created(){//挂载后
      this.searchCustomer();
      if(this.$route.query.alert){
        this.alert=this.$route.query.alert;
      }
  },
  updated(){//挂载后
      this.searchCustomer();
  },
  
}
</script>

<style>
</style>