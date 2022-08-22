import {createI18n} from "vue-i18n";
import en from './en.json';
import ua from './ua.json'
const i18n = createI18n({
    locale: 'en',
    messages:{
        en,
        ua
    }
});
export default i18n;