<template>
  <div class="home">
    <MainContainer>
      <section class="first">
        <div class="first_main_text">
          <h1 class = "first__title_main"><b>{{$t('professionMsg')}}</b></h1>
          <h1 class="first__title_main"><b>{{$t('professName')}}</b></h1>
          <p  class= "first__text_home" v-html="$t('titleDesc')"></p>
          <div class="first__sing_up_main">
            <a href="#" class="first__sing_up">{{$t('singUp')}}</a>
          </div>
        </div>
        <img src="../assets/images/header.jpg" alt="header" class="first__img">
      </section>
      <section class="second">
        <h1 class="second__title">
          {{$t('aboutProfTitle')}}
        </h1>
        <div class="second__text">
          <p class="second__text_accessary" v-html="$t('aboutProfDesc')">
          </p>
          <p class="second__text_accessary" v-html="$t('aboutProfDescTwo')"></p>
          <h4 class="second__title_mail">
            <b>{{$t('according')}}</b>
          </h4>
          <div class="second__couter">
            <div class="second__box">
              <span><b>6 660</b></span>
              <p v-html="$t('accordingDescOne')"></p>
            </div>
            <div class="second__box">
              <span><b>30 000</b></span>
              <p v-html = "$t('accordingDescTwo')"></p>
            </div>
          </div>
        </div>
        <h1 class="second__title">
          {{$t('benefits')}}
        </h1>
        <div class="second__text">
          <div class="second__couter">
            <div class="second__box">
              <h4><b>{{$t('priceTitle')}}</b></h4>
              <p>{{$t('priceDesc')}}</p>
            </div>
            <div class="second__box">
              <h4><b>{{$t('transition')}}</b></h4>
              <p>
                {{$t('transitionDesc')}}
              </p>
            </div>
            <div class="second__box">
              <h4><b>{{$t('convenient')}}</b></h4>
              <p>
                {{$t('convenientDesc')}}
              </p>
            </div>
            <div class="second__box">
              <h4><b>{{$t('certeficate')}}</b></h4>
              <p>
               {{$t('certeficateDesc')}}
              </p>
            </div>
            <div class="second__box">
              <h4><b>{{$t('accelerator')}}</b></h4>
              <p v-html="$t('acceleratorDesc')"></p>
            </div>
            <div class="second__box">
              <h4><b>{{$t('internship')}}</b></h4>
              <p>
                {{$t('internshipDesc')}}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="third">
        <h1 class="third__title">
          {{$t('thisCourse')}}
        </h1>
        <div class="third__box">
          <span class="third__begin">
            {{$t('beginner')}}
            <div class="third__descrbeg" v-html="$t('beginnerDesc')"></div>
          </span>
          <span class="third__programm">
            {{$t('programmer')}}
            <div class="third__descrprog" v-html="$t('programmerDesc')"></div>
          </span>
        </div>
      </section>
      <section class="fourth">
         <h1 class="fourth__title">{{$t('whtCourseTitle')}}</h1> 
          <div class="fourth__text">
            <div class="fourth__couter">
              <div class="fourth__box">
                <h4><b>{{$t('educationalTitle')}}</b></h4>
                <p>{{$t('educationalDesc')}}</p>
              </div>
              <div class="fourth__box">
                <h4><b>{{$t('recordengs')}}</b></h4>
                <p>{{$t('recordengsDesc')}}</p>
              </div>
              <div class="fourth__box">
                <h4><b>{{$t('simulatortTitle')}}</b></h4>
                <p>{{$t('simulatortDesc')}}</p>
              </div>
              <div class="fourth__box">
                <h4><b>{{$t('supportTitle')}}</b></h4>
                <p>{{$t('supportDesc')}}</p>
              </div>
            </div>
          </div>
      </section>
      <section class="fiveth">
        <h1 class="fiveth__title">{{$t('courseProgramTitle')}}</h1> 
        <div class="fiveth__text">
          <div class="fiveth__box">
            <h4 class="fiveth__title_box">{{$t('section1')}}</h4>
            <p class="fiveth__text_box">{{$t('section1Desc')}}</p>
            <p v-if = "showVisibility1">...</p>
            <button 
            class="fiveth__icon" 
            v-on:click = "showVisibility1 = !showVisibility1" v-text="BtnText1"></button>
          </div>
          <div class="fiveth__box">
            <h4 class="fiveth__title_box">{{$t('section2')}}</h4>
            <p class="fiveth__text_box">{{$t('section2Desc')}}</p>
            <p v-if = "showVisibility2">...</p>
            <button 
            class="fiveth__icon" 
            v-on:click = "showVisibility2 = !showVisibility2" v-text="BtnText2"></button>
          </div>
          <div class="fiveth__box">
            <h4 class="fiveth__title_box">{{$t('section3')}}</h4>
            <p class="fiveth__text_box">{{$t('section3Desc')}}</p>
            <p v-if = "showVisibility3">...</p>
            <button 
            class="fiveth__icon" 
            v-on:click = "showVisibility3 = !showVisibility3" v-text="BtnText3"></button>
          </div>
          <div class="fiveth__box">
            <h4 class="fiveth__title_box">{{$t('section4')}}</h4>
            <p class="fiveth__text_box">{{$t('section4Desc')}}</p>
            <p v-if = "showVisibility4">...</p>
            <button 
            class="fiveth__icon" 
            v-on:click = "showVisibility4 = !showVisibility4" v-text="BtnText4"></button>
          </div>
          <div class="fiveth__box">
            <h4 class="fiveth__title_box">{{$t('section5')}}</h4>
            <p class="fiveth__text_box">{{$t('section5Desc')}}</p>
            <p v-if = "showVisibility5">...</p>
            <button 
            class="fiveth__icon" 
            v-on:click = "showVisibility5 = !showVisibility5" v-text="BtnText5"></button>
          </div>
          <div class="fiveth__box">
            <h4 class="fiveth__title_box">{{$t('certification')}}</h4>
            <p class="fiveth__text_box">{{$t('certifiationDesc')}}</p>
            <p v-if = "showVisibility6" v-html="$t('certifiationDescText')"></p>
            <button 
            class="fiveth__icon" 
            v-on:click = "showVisibility6 = !showVisibility6" v-text="BtnText6"></button>
          </div>
        </div>
      </section>
      <section class="sixth">
        <h1 class="sixth__title">{{$t('learningTitle')}}</h1> 
        <div class="sixth__text">
          <div class="sixth__box">
            <h3 class="sixth__box_title">{{$t('self-guidedTitle')}}</h3>
            <div class="sixth__box_main_text">
              <i class=" sixth__check fa fa-check"></i><p class=" sixth__box_text">{{$t('self-guidedTitleDesc1')}}</p>
              <i class="fa fa-check sixth__check"></i><p class=" sixth__box_text">{{$t('self-guidedTitleDesc2')}}</p>
              <i class="fa fa-check sixth__check"></i><p class=" sixth__box_text">{{$t('self-guidedTitleDesc3')}}</p>
              <i class="fa fa-check sixth__check"></i><p class=" sixth__box_text">{{$t('self-guidedTitleDesc4')}}</p>
              <i class="fa fa-check sixth__check"></i><p class=" sixth__box_text">{{$t('self-guidedTitleDesc5')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('self-guidedTitleDesc6')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('self-guidedTitleDesc7')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('self-guidedTitleDesc8')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('self-guidedTitleDesc9')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('self-guidedTitleDesc10')}}</p>
            </div> 
            <p class="sixth__box_link"><a href="#">{{$t('self-guidedTitleDescSingUp')}}</a></p>
          </div>
          <div class="sixth__box">
            <h3 class="sixth__box_title">{{$t('fullCourse')}}</h3>
            <div class="sixth__box_main_text">
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc1')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc2')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc3')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc4')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc5')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc6')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc7')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc8')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc9')}}</p>
              <i class="fa fa-check sixth__check"></i><p class="sixth__box_text">{{$t('fullCourseDesc10')}}</p>
            </div> 
            <p class="sixth__box_link"><a href="#">{{$t('fullCourseDescSingUp')}}</a></p>
          </div>
        </div>
      </section>
      <section class="seventh">
        <h1 class="seventh__title">{{$t('speakersTitle')}}</h1> 
        <div class="seventh__text">
          <div class="seventh__box">
            <img src="../assets/images/speakers/Sergei.jpg" alt="Sergei">
            <h2>{{$t('speakersOne')}}</h2>
            <p>{{$t('speakersOneDesc')}}</p>
          </div>
          <div class="seventh__box">
            <img src="../assets/images/speakers/Alexey.jpg" alt="alaxey">
            <h2>{{$t('speakersTwo')}}</h2>
            <p>{{$t('speakersTwoDesc')}}</p>
          </div>
          <div class="seventh__box">
            <img src="../assets/images/speakers/Maxim.jpg" alt="Maxim">
            <h2>{{$t('speakersThree')}}</h2>
            <p>{{$t('speakersThreeDesc')}}</p>
          </div>
          <div class="seventh__box">
            <img src="../assets/images/speakers/Max.jpg" alt="Max">
            <h2>{{$t('speakersFour')}}</h2>
            <p>{{$t('speakersFourDesc')}}</p>
          </div>
        </div>
      </section>
      <section class="eighth">
        <h1 class="eighth__title">{{$t('reviewsTitle')}}</h1> 
        <div class="eighth__students">
          <div class="eighth__text_one">
            <img src="../assets/images/1.jpg" alt="1">
            <h4>{{$t('student')}}</h4>
            <p>@a_makarov</p>
          </div>
          <div class="eighth__text_two">
            <p>{{$t('studentDesc')}}</p>
          </div>
        </div>
      </section>
      <section class="register">
        <div class="register__text_main">
          <div class="register__box">
            <i class="fa fa-check register__check"></i>
              <h3 class="register__box_text">{{$t('registerPriceOne')}}</h3>
              <p v-html="$t('registerPriceOneDesc')"></p>
          </div>
          <div class="register__box">
            <i class="fa fa-check register__check"></i><h3 class="register__box_text">27 000 ₴</h3>
            <p v-html="$t('registerPriceTwoDesc')"></p>
          </div>
        </div>
        <div class="form">
          <form action="" id="form" class="form__body">
                <div class="form__title">{{$t('formTitle')}}</div>
                <div class="form__item_text">
                  <input type="text" placeholder="Name" class="form__box">
                  <input type="text" placeholder="Phone" class="form__box">
                </div>
                <input type="email" placeholder="E-Mail" class="form__email">
                <div class="form__item">
                  <div class="form__checkbox">
                    <input id="formAgreement" checked type="checkbox" name="agreement" class="form__checkbox__input ._req">
                    <label for="formAgreement" class="form__checkbox__label ._req"><span>{{$t('agree')}}</span>
                    </label>
                  </div>
                </div>
                <button type="sumbit" class="form__button">{{$t('send')}}</button>
            </form>
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
  data(){
    return {
      showVisibility1:false,showVisibility2:false,showVisibility3:false,
    showVisibility4:false,showVisibility5:false,showVisibility6:false,
    }
  },

  computed:{
    BtnText1(){
      return (this.showVisibility1) ? 'Hide' : 'Show'
    },
    BtnText2(){
      return (this.showVisibility2) ? 'Hide' : 'Show'
    },
    BtnText3(){
      return (this.showVisibility3) ? 'Hide' : 'Show'
    },
    BtnText4(){
      return (this.showVisibility4) ? 'Hide' : 'Show'
    },
    BtnText5(){
      return (this.showVisibility5) ? 'Hide' : 'Show'
    },
    BtnText6(){
      return (this.showVisibility6) ? 'Hide' : 'Show'
    }
  },
  
}
</script>
