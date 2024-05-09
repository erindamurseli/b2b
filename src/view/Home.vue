<template>
	<!-- Header -->
<div id="app">
		<header class="home">
			<div class="container">
				<div class="intro-text">
					<div class="row d-flex justify-content-between align-items-center ">
						<div class="intro-heading col-lg-8 ">Let your business be<br> seen worldwide!</div>
						<a class=" logo col-lg-4 " href=""><img src="../assets/img/clickus.svg" alt=""></a>
					</div>
				</div>
			</div>
			<div class="img"> </div>
               <div class="section">
      <!--///////Card, Category and Logo///////-->
				<div>
					<div class="d-flex justify-content-center align-items-center ">
                            <a class=" logo1 " href=""><img src="../assets/img/clickus2.svg" alt=""></a>
						<div class=" text">Explore by category</div>
					</div>
				</div>

    <!--///////////////////////////Card///////////////////////////-->
      <div class="container section1">
        <div class="row">
          <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
            <div class="card">
              <a class="link" href="https://vuejs.org/guide/introduction.html" target="_blank">
                <div class="card-body">
                  <p class="card-text img-icon"><img src="../assets/img/setting.svg" alt=""></p>
                  <h5 class="card-title">Machinery </h5>
                </div>
                </a>
              </div>
          </div>
          <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
              <div class="card">
               <a class="link" href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">
              <div class="card-body ">
                <p class="card-text"><img src="../assets/img/home.svg" alt=""></p>
                <h5 class="card-title">Home & Garden </h5>
              </div>
               </a>
              </div>
          </div>
          <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
              <div class="card">
                <a class="link" href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">
                <div class="card-body ">
                  <p class="card-text"><img src="../assets/img/game.svg" alt=""></p>
                  <h5 class="card-title">Electronics </h5>
                </div>
                </a>
              </div>
          </div>
        </div>
          <div class="row section2">
          <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
            <div class="card">
              <a class="link" href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">
                <div class="card-body">
                  <p class="card-text"><img src="../assets/img/bag.svg" alt=""></p>
                  <h5 class="card-title">Fashion Design </h5>
                </div>
               </a>
              </div>
          </div>
          <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
            <div class="card">
              <a class="link" href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">
                <div class="card-body">
                  <p class="card-text"><img src="../assets/img/frame.svg" alt=""></p>
                  <h5 class="card-title">Furniture </h5>
                </div>
               </a>
              </div>
          </div>
          <div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
            <div class="card">
              <a class="link" href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">
                <div class="card-body">
                  <p class="card-text"><img src="../assets/img/frame1.svg" alt=""></p>
                  <h5 class="card-title">Textile </h5>
                </div>
                </a>
              </div>
          </div>
        </div>
  </div>
 </div>
<div class="section3">
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-lg-12 col-md-10 col-xl-10">
			<h2 class="h2section3">Trusted by</h2>
			<p class="psection3">Find a company you need</p>
		</div>
		<router-link class="routerLink" to="/companies">
			<li class=" nav-item">
				<a class="nav-link js-scroll-trigger ">
					<p class="arrow">Browse All</p>
				</a>
			</li>
		</router-link>
	</div>
</div>
<div class="section31 py-5">
<div class="container"> 
<div class="row">
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4">
					<div class="col-md-4"> <img src="../assets/img/eksimor.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Eksimor Group</h2>
					<p class="contry "><span class="ml-3">Gilan, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border2 ml-4" style="background-color:#1E802826">
					<div class="col-md-4 ml-4"> <img  src="../assets/img/lonidekor.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<router-link class=" nav-link " to="loni_decor">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Loni Dekor</h2>
					<p class="contry " ><span class="ml-3">Mitrovica, Kosovo</span></p>
				</div>
				</router-link>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4" style="background-color:#D1710026">
					<div class="col-md-4 ml-2"> <img src="../assets/img/comodita.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Comodita Home</h2>
					<p class="contry "><span class="ml-3">Prishtina, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
</div>


<div class="row mt-4">
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4" style="background-color:#FFD38F4D;">
					<div class="col-md-4 ml-3"> <img src="../assets/img/m&s.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">M&Sillosi Finnesa</h2>
					<p class="contry "><span class="ml-3">Rahovec, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4" style="background-color:#FDCC254D;">
					<div class="col-md-4 ml-4"> <img src="../assets/img/golden-e.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Golden Eagle</h2>
					<p class="contry "><span class="ml-3">Prishtina, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4" style="background-color:#034DA133">
					<div class="col-md-4 ml-2"> <img src="../assets/img/rugove.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Uji Rugova</h2>
					<p class="contry "><span class="ml-3">Prishtina, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
 </div>
 <div class="row mt-4">
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4" style="background-color:#ED1B2426">
					<div class="col-md-4 ml-3"> <img src="../assets/img/meka.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Meka</h2>
					<p class="contry "><span class="ml-3">Gilan, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border2 ml-4" style="background-color:#1E802826">
					<div class="col-md-4 ml-4"> <img  src="../assets/img/lonidekor.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Loni Dekor</h2>
					<p class="contry " ><span class="ml-3">Mitrovica, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-12 col-lg-12 col-md-4 col-xl-4">
	<div class="card borderss">
		<div class="row no-gutters ">
			<div class="height  ">
				<div class="border1 ml-4" style="background-color:#D1710026">
					<div class="col-md-4 ml-2"> <img src="../assets/img/comodita.svg" alt=""> </div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="card-body1 ">
					<h2 class="card-eksimor ">Comodita Home</h2>
					<p class="contry "><span class="ml-3">Prishtina, Kosovo</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
</div>

<div class="section4">
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-lg-12 col-md-8 col-xl-12">
				<div class="textsection4 ">
					<h2 class="h2section4">Why choose ClickusB2B</h2>
					<p class="psection4">B2B Online is a bridge that unites all companies all over the world, no matter in which country or in which field of industry, they can be together all in one single platform, so we freely can say that our company helps to develop businesses and facilitate the path to success.
						<br> </p>
					<p class="psection5"> Enter the future of success with us.</p>
				</div>
			</div>
			<div class="logo-section4">
				<a href=""><img src="../assets/img/section3.svg" alt=""></a>
			</div>
		</div>
	</div>
</div>


<div class="section5">
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-lg-12 col-md-8 col-xl-12 group-section5">
			<h2 class="heading5">Simple, transparent pricing</h2>
			<p class="paragraph55 pt-2">We believe Untitled should be accessible to all companies, no matter the size.</p>
	    </div>
      </div>
	<div class="row">
	   <div class="col-lg-4 col-md-4 col-sm-12 container1  container12  ">
            <div class="featured pt-5 ">
              <h2 class="price1">$10<span> / mth</span></h2>
			  <h3 class="basic">Basic plan</h3>
			  <p class="billed">Billed annually.</p>	  
              <div class="pt-5 paragraph5">
                <p class="beforee">Access to all basic features</p>
				<p class="beforee">Basic reporting and analytics</p>
				 <p class="beforee">Up to 10 individual users</p>
			     <p class="beforee">20GB individual data each user</p>
			     <p class="beforee">Basic chat and email support</p>    
                </div>
                 <div class="">
                <router-link class="butoni nav-link mt-5" to="#">Buy Now</router-link>
              </div>
            </div>
          </div>
		  <div class="col-lg-4 col-md-4 col-sm-12 container1   ">
            <div class="featured pt-5 ">
              <h2 class="price1">$20<span> / mth</span></h2>
			  <h3 class="basic">Basic plan</h3>
			  <p class="billed">Billed annually.</p>  
              <div class="pt-5 paragraph5">
                <p class="beforee">200+ integrations</p>
				<p class="beforee">Advanced reporting and analytics</p>
				 <p class="beforee">Up to 20 individual users</p>
			     <p class="beforee">40GB individual data each user</p>
			     <p class="beforee">Priority chat and email support</p>    
                </div>
                 <div class="">
                <router-link class="butoni nav-link mt-5" to="#">Buy Now</router-link>
              </div>
            </div>
          </div>
		  <div class="col-lg-4 col-md-4 col-sm-12 container1  ">
            <div class="featured pt-5  ">
              <h2 class="price1">$40<span> / mth</span></h2>
			  <h3 class="basic">Enterprise plan</h3>
			  <p class="billed">Billed annually.</p>			  
              <div class="pt-5 paragraph5">
                <p class="beforee">Advanced custom fields</p>
				<p class="beforee">Audit log and data history</p>
				 <p class="beforee">Unlimited individual users</p>
			     <p class="beforee">Unlimited individual data</p>
			     <p class="beforee">Personalised+priotity service</p>    
                </div>
                <div class="">
                <router-link class="butoni nav-link mt-5" to="#">Buy Now</router-link>
              </div>
            </div>
          </div>
</div>
</div>
</div>


<div class="section6">
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-lg-12 col-md-8 col-xl-12 ">
			<h2 class="heading5">What clients say about us:</h2> </div>
	</div>
</div>


</div>


<!-- //////SLIDERI//////// -->
<div class="slider">
     <p>----------Slideri----------------</p>	
</div>




<!-- /////FOOTER///////// -->
<Footer></Footer>


 </header> 
 </div>
</template>






<script >
import Footer from "../components/Footer.vue"
export default {
  name: 'app',
  components: {
	  Footer,
  }
}








</script>