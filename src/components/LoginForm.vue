<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Email:
        <input type="email" v-model="email" required>
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required>
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        console.error('Email and password are required');
        return;
      }
      try {
        const response = await axios.post('http://localhost:8080/api/login', {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
            this.$store.dispatch('setToken', response.data.token)
            this.$router.push('/users')
            } else {
            // Handle error
            console.error('Invalid credentials');
        }        
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>