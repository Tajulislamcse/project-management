import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-buttons-bs4";
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";

createApp(App).use(router).use(store).mount('#app')



// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// // use router
// app.use(router)
// app.mount('#app')