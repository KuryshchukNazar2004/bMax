<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <Header/>
    <main class="flex-fill">
      
      <router-view/> 
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/FooterMain.vue'
  export default{
    components:{
    Header,
    Footer,
},
  }
</script>
<style lang="scss">
  .wrap{
    border: 2px solid #fff;
    margin: 30px 150px;
    border-radius: 10px;
  }
</style>