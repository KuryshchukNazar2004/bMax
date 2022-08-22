<template>
  <div class="home">
    <MainContainer>
      <section class="tariffs">
        <div class="tariffs__text">
          <div class="tariffs__box">
            <h3 class="tariffs__box_title">Self-guided course</h3>
            <div class="tariffs__box_main_text">
              <i class=" tariffs__check fa fa-check"></i><p class=" tariffs__box_text">Price: 1 500 ₴/month</p>
              <i class="fa fa-check tariffs__check"></i><p class=" tariffs__box_text">Access to educational materials</p>
              <i class="fa fa-check tariffs__check"></i><p class=" tariffs__box_text">Lives: videos</p>
              <i class="fa fa-check tariffs__check"></i><p class=" tariffs__box_text">8 study projects</p>
              <i class="fa fa-check tariffs__check"></i><p class=" tariffs__box_text">Mentor support: in the training chat</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Checking homework: video debriefing</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Grading</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Certificate</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Work experience:<br> post-pay ISA model :pay after<br> employment</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Job quarantee: ISA post-paid model: pay after employment</p>
            </div> 
            <p class="tariffs__box_link"><a href="#">Sing up for a cource</a></p>
          </div>
          <div class="tariffs__box">
            <h3 class="tariffs__box_title">Full course</h3>
            <div class="tariffs__box_main_text">
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Price: 11 500 ₴/month</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Access to educational materials</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Lives: live participation</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">9 study projects</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Mentor support: <br> 30 hours of consultation with a personal mentor</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Checking homework: analysis from a personal mentor</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Grading</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Certificate</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Work experience</p>
              <i class="fa fa-check tariffs__check"></i><p class="tariffs__box_text">Job quarantee</p>
            </div> 
            <p class="tariffs__box_link"><a href="#">Sing up for a cource</a></p>
          </div>
        </div>
      </section>
    </MainContainer>
  </div>
</template>
<script>
import MainContainer from '@/components/MainContainer.vue'
  export default{
    name:'HomeView',
    components:{
    MainContainer,
},
  }
</script>
