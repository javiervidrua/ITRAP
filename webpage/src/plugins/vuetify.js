import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      /*light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },*/
      light: {
        primary: '#3495dd', // '#207BBE',
        secondary: '#b0bec5',
        accent: '#822cb1', //'#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
