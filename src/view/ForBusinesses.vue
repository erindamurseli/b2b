<template>
  <div id="app">
    <div class="forbusinesses">
      <div class="for-businesess">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                      <h2 class="text d-flex justify-content-start">Power your business with<br> the All-In-One Platform.</h2>
                      <p class="paragraph">We are dedicated to creating a level playing field for different brands in expanding their business to reach their potential global markets.</p>
                      <router-link class="butoni-about nav-link mt-2" to="#">Create Business Profile</router-link>
                      <router-link class="butoni2-about nav-link mt-2" to="#">Create Client Profile</router-link>
                  </div>
                   <div class="col-lg-6 col-md-6 col-sm-12">
                       <div class="image">   
                       </div>
                   </div>
              </div>
          </div>
      </div>
  

      <Footer></Footer>
    </div>
  </div>
</template>
<script>
  import Footer from "../components/Footer.vue"
  export default {
    name: 'app',
    components: {
      Footer,
    }
  }
</script>