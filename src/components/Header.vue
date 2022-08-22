<template>
<nav class="navbar navbar-expand-lg navbar-light p-0">
  <div class="container">
    <a class="navbar-brand" href="/"><h3 class="title"><b>bMax</b></h3></a>
    <div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-lg-0">
        <li class="nav-item menu-link" v-for="(menu, index) in headerMenuList" :key="index">
          <router-link id = "menu-link" class="nav-link active" aria-current="page" :to="menu.path">
            {{menu.name}}
          </router-link>
        </li>
      </ul>
      <div class="flag">
        <a href="#" @click="setLocale('en')"><img src="../assets/images/locale/USA.jpg" alt="usa"></a>
        <a href="#" @click="setLocale('ua')"><img src="../assets/images/locale/Ukraine.jpg" alt="ua"></a>
      </div>
    </div>
  </div>
</nav>

</template>

<script>

import {menuList} from '../constants/menuLinks';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      headerMenuList: menuList,
    }
  },
  methods:{
    setLocale(locale){
      this.$i18n.locale = locale
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/layouts/index.scss';
.title{
  padding-right: 150px;
  color: #fff;
  margin-right: 100px;
}
.flag{
  margin-top: -10px;
}
.flag a img{
  width: 40px;
  height: 30px;
  margin: 10px;
}
.navbar{
  height: 90px;
}
.navbar-nav{
  height: 90px;
}
.collapse-fontsize{
  font-size: 18px;
}

#menu-link{
  padding: 25px 20px;
  color: #fff;
  &:hover{
    background: $grey;
  }
}

</style>
