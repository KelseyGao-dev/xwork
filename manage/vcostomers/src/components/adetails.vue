<template>
  <div class="adetails container">
      <router-link to="/" class="btn btn-default">返回</router-link>
      <h1 class="page-header">
          {{customers.name}}
          <span class="pull-right">
              <router-link class="btn btn-primary" :to="'/edit/'+customers.id">编辑</router-link>
              <button class="btn btn-danger" @click="deleteItem(customers.id)">删除</button>
          </span>
          
          </h1>

      <ul class="list-group">
          <li class="list-group-item"><span>{{customers.phone}}</span></li>
          <li class="list-group-item"><span>{{customers.email}}</span></li>
          
      </ul>
       <ul class="list-group">
          <li class="list-group-item"><span>{{customers.website}}</span></li>
          <li class="list-group-item"><span>{{customers.education}}</span></li>
          <li class="list-group-item"><span>{{customers.profession}}</span></li>
          <li class="list-group-item"><span>{{customers.profile}}</span></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      customers: {},
    };
  },
  methods: {
    searchCustomer(id) {
      this.$http.get("http://localhost:3000/users/" + id).then((res) => {
          console.log(res.body);
        this.customers = res.body;
        //   console.log(this.customers);
      });
    },
    deleteItem(id){
        this.$http.delete("http://localhost:3000/users/" + id).then((res) => {
         this.$router.push({path:"/",query:{alert:"pjc删完了"}})
      })
    }
  },
  created() {
        this.searchCustomer(this.$route.params.id)
    },
};
</script>

<style >
</style>