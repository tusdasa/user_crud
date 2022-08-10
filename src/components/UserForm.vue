<template>
<div>
  <div class="row">
    <div class="col-sm">
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{errorMessage}}
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          required
        >
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <select id="role"  class="form-control" v-model="user.role">
          <option selected value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          :readonly="updateMode"
          required
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
        >
      </div>
      <div class="form-group">
        <label for="password">Repeat Password</label>
        <input
          v-model="repeatPassword"
          type="password"
          class="form-control"
          id="repeatPassword"
          placeholder="Password"
          required
        >
      </div>
      <div style="margin-top:10px;">
        <button class="btn btn-primary" v-on:click="save">{{updateMode ? 'Update' : 'Save'}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserForm',
  data(){
    return {
        errorMessage:"",
        user:{}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
