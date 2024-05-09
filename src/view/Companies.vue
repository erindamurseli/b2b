<template>
  <!-- Header -->
  <div id="app">
    <header class="home">
      <div class="companies">
        <div class="container">
          <div class="intro-text">
            <div class="row d-flex justify-content-center align-items-center ">
              <div class="intro-heading col-lg-8 ">Your International Partner Network!</div>
            </div>
          </div>
        </div>
        <div class="img"></div>
        <div class="section1">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/eximorlogo.svg" height="75px" width="90px" alt="">
                    </p>
                    <h5 class="card-text ">Eksimor Group is a company located in Kosovo, but whose products can be found in many countries around the world.</h5>
                    <router-link class="btn-companies nav-link d-flex justify-content-center " to="#">VISIT</router-link>
                  </div>
                  <!-- </a> -->
                </div>
              </div>
              <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/lonidec.svg" height="75px" width="90px" alt="">
                    </p>
                    <h5 class="card-text ">Loni Dekor consists of various branches of production of its products such as: Sets, Bedrooms, Kitchens, Room Doors, Tables of various kinds, Halls and many other accessories.</h5>
                    <router-link class="btn-companies nav-link d-flex justify-content-center " to="#">VISIT</router-link>
                  </div>
                  <!-- </a> -->
                </div>
              </div>
              <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/comodita.svg" height="75px" width="90px" alt="">
                    </p>
                    <h5 class="card-text ">Comodita Home has managed to be the first local company that brings original and autochthonous brands which include the group of mattresses, textile lines, kitchen category, groups of various accessories</h5>
                    <router-link class="btn-companies nav-link d-flex justify-content-center" to="#">VISIT</router-link>
                  </div>
                  <!-- </a> -->
                </div>
              </div>
            </div>
            <div class="row section2">
              <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/eximorlogo.svg" height="75px" width="90px" alt="">
                    </p>
                    <h5 class="card-text ">Eksimor Group is a company located in Kosovo, but whose products can be found in many countries around the world.</h5>
                    <router-link class="btn-companies nav-link d-flex justify-content-center " to="#">VISIT</router-link>
                  </div>
                  <!-- </a> -->
                </div>
              </div>
              <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/lonidec.svg" height="75px" width="90px" alt="">
                    </p>
                    <h5 class="card-text ">Loni Dekor consists of various branches of production of its products such as: Sets, Bedrooms, Kitchens, Room Doors, Tables of various kinds, Halls and many other accessories.</h5>
                    <router-link class="btn-companies nav-link d-flex justify-content-center " to="#">VISIT</router-link>
                  </div>
                  <!-- </a> -->
                </div>
              </div>
              <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/comodita.svg" height="75px" width="90px" alt="">
                    </p>
                    <h5 class="card-text ">Comodita Home has managed to be the first local company that brings original and autochthonous brands which include the group of mattresses, textile lines, kitchen category, groups of various accessories</h5>
                    <router-link class="btn-companies nav-link d-flex justify-content-center" to="#">VISIT</router-link>
                  </div>
                  <!-- </a> -->
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <a class=" logo1 " href="">
                  <img src="../assets/img/clickus2.svg" alt="">
                </a>
              </div>
            </div>
            <!-- ///////Footer////////// -->
            <Footer></Footer>
          </div>
        </div>
      </div>
    </header>
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