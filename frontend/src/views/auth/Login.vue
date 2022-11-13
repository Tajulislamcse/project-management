<template>
	<div class="hold-transition login-page">
		<div class="login-box">
			<div class="login-logo">
				<a href="../../index2.html">Project Management</a>
			</div>
			<!-- /.login-logo -->
			<div class="card">
				<div class="card-body login-card-body">
					<p class="login-box-msg">Sign in to start your session</p>
						<!-- <span v-if="errors.message" class="text-danger">{{errors.message}}</span> -->
					   <!-- <span v-if="errors"></span> -->
					   <template v-for="(error,index) in errors" :key="index">
					   	<span v-if="errors.message" class="text-danger">{{errors.message}}
					   	</span>
					   	<span v-else="error[0]" class="text-danger">{{error[0]}}</span><br>
					   </template>

					<form @submit.prevent="login" method="post">
						<div class="input-group mb-3">
							<input type="email" class="form-control" placeholder="Email" v-model="formData.email">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-envelope"></span>
								</div>
							</div>
						</div>
						<!-- <span v-if="errors.email[0]" class="text-danger">{{errors.email[0]}}</span> -->

						<div class="input-group mb-3">
							<input type="password" class="form-control" placeholder="Password" v-model="formData.password">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-lock"></span>
								</div>
							</div>
						</div>
<!-- 						<span v-if="errors.password[0]" class="text-danger">{{errors.password[0]}}</span>
 -->						<div class="row">

							<!-- /.col -->
							<div class="col-4">
								<button type="submit" class="btn btn-primary btn-block">Sign In</button>
							</div>
							<!-- /.col -->
						</div>
					</form>

<!-- 					<div class="social-auth-links text-center mb-3">
						<p>- OR -</p>
						<a href="#" class="btn btn-block btn-primary">
							<i class="fab fa-facebook mr-2"></i> Sign in using Facebook
						</a>
						<a href="#" class="btn btn-block btn-danger">
							<i class="fab fa-google-plus mr-2"></i> Sign in using Google+
						</a>
					</div> -->
					<!-- /.social-auth-links -->

<!-- 					<p class="mb-1">
						<a href="forgot-password.html">I forgot my password</a>
					</p> -->
					<p class="mb-0">
						<router-link :to="{name:'Registration'}" class="text-center">Registration</router-link>
					</p>
				</div>
				<!-- /.login-card-body -->
			</div>
		</div>
		<!-- /.login-box -->
	</div>
</template>
<script>
//import axios from 'axios'

	export default {
		data()
		{
			return {
				formData: {
                    name:'',
					email:'',
					password:''
				},
				errors:{}
			}
		},
		methods:
		{
			login()
			{
			 this.$store.dispatch('login',this.formData)
			 	.then((response)=>{
				//console.log(response.data)
				this.$router.push({name:'Home'}) 
			})
			.catch((error)=>{
                 this.errors = error.response.data
             
			})

			}
		}
	}
</script>