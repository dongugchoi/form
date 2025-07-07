<template>
  <v-app>
    <customerPages />
  </v-app>
</template>

<script>
import customerPages from './components/customerPages';

export default {
  name: 'App',

  components: {
    customerPages,
  },

  data: () => ({
    //
  }),
};
</script>

