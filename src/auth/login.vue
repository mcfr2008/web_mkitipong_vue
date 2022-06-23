<template>
  <div>
    <!-- page-wrapper Start-->
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img
                    class="img-fluid for-light"
                    src="../assets/images/logo/login.png"
                    alt="looginpage"
                  />
                  <img
                    class="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                    alt="looginpage"
                  />
                </a>
              </div>
              <div class="login-main">
                <b-card no-body>
                  <b-tabs pills vertical>
                    <b-tab active>
                      <template #title>
                        <img src="../assets/images/login/jwt.svg" />
                        <span>JWT</span>
                      </template>
                      <b-card-text>
                        <div class="alert alert-info">
                          Email: admin@admin.com<br />
                          Password: admin
                        </div>
                        <form class="theme-form" @submit.prevent="handleSubmit">
                          <div class="form-group">
                            <label for="email">Email</label>
                            <input
                              type="text"
                              v-model="email"
                              name="email"
                              class="form-control"
                              :class="{ 'is-invalid': submitted && !email }"
                            />
                            <div
                              v-show="submitted && !email"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                          </div>
                          <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              v-model="passwordjwt"
                              name="password"
                              class="form-control"
                              :class="{
                                'is-invalid': submitted && !passwordjwt,
                              }"
                            />
                            <div
                              v-show="submitted && !passwordjwt"
                              class="invalid-feedback"
                            >
                              Password is required
                            </div>
                          </div>
                          <div class="form-group mt-3 mb-0">
                            <button
                              class="btn btn-primary btn-block"
                              :disabled="loggingIn"
                            >
                              Login
                            </button>
                          </div>
                          <p class="mt-4 mb-0">
                            Don't have account?
                            <router-link class="ml-2" tag="a" to="/auth/register" >
                            Create Account
                          </router-link>
                          </p>
                        </form>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- latest jquery-->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      type: "password",
      email: "admin@admin.com",
      password: "admin@123456",
      username: "",
      passwordjwt: "",
      submitted: false,
    };
  },
  computed: {
    // JWT authentication
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
  },
  created() {
    // reset login status for JWT
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    // JWT authentication
    handleSubmit() {
      this.submitted = true;
      const { email, passwordjwt } = this;
      const { dispatch } = this.$store;
      if (email && passwordjwt) {
        dispatch("authentication/login", { email, passwordjwt });
      }
    },
    // show/hide password
    showPassword: function () {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>