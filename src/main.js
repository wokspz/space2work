import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

/* code from our Firebase console */
var firebaseConfig = {
  apiKey: "AIzaSyBKR_g__SCayO7bKPzpVJeGFOh13J_RME8",
  authDomain: "worxpro-30fce.firebaseapp.com",
  projectId: "worxpro-30fce",
  storageBucket: "worxpro-30fce.appspot.com",
  messagingSenderId: "265518371428",
  appId: "1:265518371428:web:7f8baa8477261a8348c571",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
