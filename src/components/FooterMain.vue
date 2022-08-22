<template>
    <footer class="footer footer_bg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="footer__logo">
                        <a class="navbar-brand" href="/"><h3 class="title"><b>bMax</b></h3></a>
                    </div>
                </div>
                <div class="col">
                    <ul class="footer__list footer__list_capitalize">
                        <li v-for = "(menu, i) in footerMenu" :key = "i">
                            <router-link :to="menu.path" class="footer__link">{{ menu.name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="footer__list footer__list_capitalize">
                        <li><a href="#" class="footer__social fa fa-telegram"> Telegram</a></li>
                        <li><a href="#" class="footer__social fa fa-github"> GitHub</a></li>
                        <li><a href="#" class="footer__social fa fa-instagram"> Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import {menuList} from '../constants/menuLinks'
export default {
    data(){
        return{
            footerMenu: menuList,
        }
    }
}
</script>