<template>
  <div class="user-list">
    <h2>Add User</h2>
    <form @submit.prevent="addUser">
      <label>
        ID:
        <input type="text" v-model="newUser.id" required>
      </label>
      <label>
        Name:
        <input type="text" v-model="newUser.name" required>
      </label>
      <label>
        Email:
        <input type="email" v-model="newUser.email" required>
      </label>
      <button type="submit">Add User</button>
    </form>
    <h2>User List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      newUser: {
        id: '',
        name: '',
        email: '',
      },
      userList: [],
    };
  },
  methods: {
    listUsers() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`;
      axios.get('http://localhost:8080/internalusers')
      .then(response => {
        this.userList = response.data;
        console.log(this.userList);
      })
      .catch(error => {
        console.log(error);
      });
    },
    addUser() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`;
      axios.post('http://localhost:8080/internalusers', {
        name: this.newUser.name,
        email: this.newUser.email
      })
      .then(response => {
        console.log(response.status);
        this.listUsers();
      })
      .catch(error => {
        console.log(error);
      });
      this.newUser = {
        id: '',
        name: '',
        email: '',
      };
    },
  },
  mounted() {
    this.listUsers();
  },
};
</script>

<style scoped>
.user-list {
  max-width: 600px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  height: 40px;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #4CAF50;
  color: white;
}
</style>