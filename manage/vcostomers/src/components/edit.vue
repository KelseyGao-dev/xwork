<template>
  <div class="edit container">
    <h1 class="page-header">修改用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="number" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮件</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>网址</label>
          <input type="text" class="form-control" placeholder="website" v-model="customer.website" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {},
    };
  },
  methods: {
    updateCustomer(e) {
      // console.log(123);
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        alert("请添加对应的信息");
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          website: this.customer.website,
          education: this.customer.education,
          profession: this.customer.profession,
          profile: this.customer.profile,
        };
        this.$http.put("http://localhost:3000/users/" + this.$route.params.id,updateCustomer)
          .then((res) => {
            // console.log(res);
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功" },
            });
          });
      }
      e.preventDefault();
    },
    fillCustomer(id) {
      this.$http.get("http://localhost:3000/users/" + id).then((res) => {
        //   console.log(res);
        this.customer = res.body;
        //   console.log(this.customers);
      });
    },
  },
  created() {
    this.fillCustomer(this.$route.params.id);
  },
};
</script>

<style >
</style>