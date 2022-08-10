<template>
  <div>
    <div class="row">
      <div class="col-2">
       <router-link to="/users/new" class="btn btn-primary">Create New User</router-link>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-sm">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.id" width="128px" style="line-height: 120px;">
              <td class="text-center">{{user.id}}</td>
              <td class="text-center">{{user.name}}</td>
              <td>
                <img :src="user.avatar" class="img-thumbnail" alt="avatar" style="width:128px;height:128px;" />
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UserList',
  data(){
    return {
        users:[]
    }
  },
  created(){
    let that = this;
    axios.get("https://api.tusdasa.net/users/all").then(res=>{
      console.log(res.data.models)
      that.users = res.data.models
    }).catch(err=>{
console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
