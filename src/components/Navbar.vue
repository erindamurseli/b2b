<template>
  <div id="app">
    <!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
	<div class="container">
		<a class="navbar-brand js-scroll-trigger" href=""><img src="../assets/img/logo.svg" alt=""></a>
    
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <i class="fa-solid fa-bars"></i> </button>


		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav text-uppercase ml-auto">
				<li class="nav-item">
					<router-link to="/" class="nav-link js-scroll-trigger">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/companies" class="nav-link js-scroll-trigger">COMPANIES</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/about_us" class="nav-link js-scroll-trigger">ABOUT US</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/for_businesses" class="nav-link js-scroll-trigger">FOR BUSINESSES</router-link>
				</li>
				<div class="border-nav"></div>
				<li class="nav-item">
					<router-link to="/sign_up" class="nav-link js-scroll-trigger">SIGN UP</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/login" class="nav-link js-scroll-trigger border">LOG IN</router-link>
				</li>
			</ul>
		</div>
	</div>
</nav>


  </div>

</template>
<script>



export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}
</style>
