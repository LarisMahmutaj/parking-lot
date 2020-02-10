<template>
  <div id="app">
    <Navbar />
    <router-view class="container-fluid" />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";

export default {
  components: {
    Navbar: Navbar
  }
};
</script>

<style>
.container {
  margin: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
