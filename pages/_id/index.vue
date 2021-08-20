<template>
  <b-container>
    <b-row align-h="center mt-5">
      <b-col col lg="8">
        <h5>Edit User</h5>
        <form @submit.prevent="onSubmit">
          <b-form-group id="name" label="Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="surname" label="Surname:" label-for="surname">
            <b-form-input
              id="surname"
              v-model="form.surname"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="email" label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="username" label="Username:" label-for="username">
            <b-form-input
              id="username"
              v-model="form.username"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="password" label="Password:" label-for="password">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="company" label="Company:" label-for="company">
            <b-form-input
              id="company"
              v-model="form.company"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="number" label="Number:" label-for="number">
            <b-form-input
              id="number"
              v-model="form.phone_number"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="phone_country_code"
            label="Phone Country Code:"
            label-for="phone_country_code"
          >
            <b-form-input
              id="phone_country_code"
              v-model="form.phone_country_code"
              type="phone_country_code"
              required
            ></b-form-input>
          </b-form-group>
          <div class="text-center pb-1 pt-4">
            <b-button type="submit" variant="primary">Save</b-button>
          </div>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    await store.dispatch('getUser', route.params.id)
  },
  data() {
    return {
      form: Object.assign({}, this.$store.getters.user),
    }
  },
  methods: {
    onSubmit() {
      const edit = { id: this.$route.params.id, data: this.form }
      this.$store.dispatch('editUser', edit).then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
