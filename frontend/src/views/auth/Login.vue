<template>
	<div class="hold-transition login-page">
		<div class="login-box">
			<div class="login-logo">
				<a href="../../index2.html"><b>Admin</b>LTE</a>
			</div>
			<!-- /.login-logo -->
			<div class="card">
				<div class="card-body login-card-body">
					<p class="login-box-msg">Sign in to start your session</p>

					<form @submit.prevent="login" method="post">
						<div class="input-group mb-3">
							<input type="email" class="form-control" placeholder="Email" v-model="form.email">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-envelope"></span>
								</div>
							</div>
						</div>
						<div class="input-group mb-3">
							<input type="password" class="form-control" placeholder="Password" v-model="form.password">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-lock"></span>
								</div>
							</div>
						</div>
						<div class="row">

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
				form: {
					email:'',
					password:''
				}
			}
		},
		methods:
		{
			login()
			{
			 this.$store.dispatch('login',this.form)

			}
		}
	}
</script>