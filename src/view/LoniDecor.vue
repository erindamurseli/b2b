<template>
  <!-- Header -->
  <div id="app">
    <header class="home">
      <div class="lonidecor">
        <div class="loni-decor">
          <div class="container">
            <div class="loni-decor-text">
              <div class="row ">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h2 class="pt-4">LONI DEKOR!</h2>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                  <router-link class="btn-loni-decor nav-link" to="#">Visit Website</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12">
                <p class="text">LONI DEKOR is a business that has been serving since 2008 until today. <br> It was created with a clear objective to meet the conditions and needs of consumers in the best way <br> and with the most prestigious conditions achievable. The first steps started with a small workforce, in limited <br> production facilities, but the great desire to work and to meet market demand pushes us to climb to the top of the business of this profile </p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div>
                  <img src="../assets/img/work.svg" width="25px" height="25px" alt="">
                  <span class="work">INDUSTRY</span>
                  <p class="p-work ">Home & Garden</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div>
                  <img src="../assets/img/locationn.svg" width="25px" height="25px" alt="">
                  <span class="work">LOCATION</span>
                  <p class="p-work ">Mitrovicë, Kosovo</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div>
                  <img src="../assets/img/user.svg" width="25px" height="25px" alt="">
                  <span class="work">SIZE</span>
                  <p class="p-work ">50-200 Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section1">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <img class="kuzhina" src="../assets/img/kuzhina.png" width="590px" height="475px" alt="">
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                  <!-- <a class="link" href="#" target="_blank"> -->
                  <div class="card-body">
                    <p class="d-flex justify-content-center ">
                      <img src="../assets/img/lonidec.svg" alt="">
                    </p>
                    <p class="card-text ">The people behind ClickusB2B are a dedicated staff down to the last detail. <br>
                      <br> ClickusB2B is a company that rushes every day to advance their mission. <br> Their mission is to provide everything that cooperative businesses need to succeed in their field.
                    </p>
                  </div>
                  <!-- </a> -->
                </div>
                <div class="row">
                  <img class="flower" src="../assets/img/flower.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p d-flex justify-content-center ">PRODUCTS</div>
        <div class="section22">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <p class="d-flex justify-content-center">
                  <img src="../assets/img/rectangle.svg" alt="">
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section33">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm 12">
                <p class="pt-5">//////////FILTERI////////////</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section44">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm 12">
                <p class="pt-5">//////////slideri////////////</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section55">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm 12">
                <h2 class="lonidec">LONI DEKOR</h2>
                <p class="p-loni">Mitrovicë, Kosovo</p>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46801.59619179414!2d20.890072582852802!3d42.84962664081372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535b9916b9deb1%3A0xb5ff09843263d548!2sLoni%20Dekor!5e0!3m2!1sen!2sus!4v1648124834052!5m2!1sen!2sus" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="section66">
          <div class="container">
            <h2 class="d-flex justify-content-center p-follow">FOLLOW US ON SOCIAL MEDIA</h2>
            <div class="d-flex justify-content-center">
              <a class=" m-4" href="#">
                <img src="../assets/img/fbloni.svg" width="40" />
              </a>
              <a class=" m-4" href="#">
                <img src="../assets/img/twloni.svg" width="40" />
              </a>
              <a class=" m-4" href="#">
                <img src="../assets/img/igloni.svg" width="40" />
              </a>
            </div>
          </div>
        </div>
        <FooterLoniDec></FooterLoniDec>
      </div>
    </header>
  </div>
</template>
<script>
  import FooterLoniDec from "../components/FooterLoniDec.vue"
  export default {
    name: 'app',
    components: {
      FooterLoniDec,
    }
  }
</script>