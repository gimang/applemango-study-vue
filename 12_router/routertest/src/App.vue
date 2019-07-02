<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주)OpenSG</h1>
      <nav>
        <ul>
          <li>
            <!-- <router-link to="/home">Home</router-link> -->
            <router-link :to="{ name:'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name:'about'}">About</router-link>
          </li>
          <li>
            <router-link :to="{ name:'contacts'}">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>
    
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contact';
import ContactByNo from './components/ContactByNo';
import NotFound from './components/NotFound';
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    // { path: '/contacts', component: Contacts },
    // { path: '/contacts/:no', component: ContactByNo }
    {
      path: '/contacts', name: 'contacts', component: Contacts,
      children: [
        { path: ':no', name: 'contactbyno', component: ContactByNo, props: true }
      ]
    },
    { path: '*', component: NotFound}
  ]
})

export default {
  name: 'app',
  router
}
</script>

<style>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
  .header { background-color:aqua; padding: 10px 0px 0px 0px; }
  .headerText { padding: 0px 20px 0px 20px; } 
  ul { list-style-type: none; margin: 0; padding: 0;
      overflow: hidden; background-color: purple;  }
  li { float: left; }
  li a { display: block; color: yellow; text-align: center;
      padding: 14px 16px; text-decoration: none;  }
  li a:hover { background-color: aqua; color:black; }
</style>
