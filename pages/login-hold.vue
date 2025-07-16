<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        });

        const result = await response.json();
        if (response.ok) {
          this.message = result.message;
          localStorage.setItem('token', result.token.access_token);
          this.$router.push('/profile');
        } else {
          this.message = result.message || 'Login failed';
        }
      } catch (err) {
        this.message = 'Error occurred during login';
      }
    }
  }
};
</script>
