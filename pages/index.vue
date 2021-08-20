<template>
  <b-card
    class="w-100 mb-4"
    header-tag="header"
    header-class="d-flex align-items-center justify-content-between"
    body-class="custom-body p-0"
    footer-tag="footer"
    footer-class="custom-footer bt-1"
    data-test="service-account"
  >
    <template #header>
      <h5 class="mb-0">
        <strong>Users</strong>
      </h5>

      <b-button variant="primary">Create User</b-button>
    </template>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>example</td>
          <td>example</td>
          <td>example</td>
          <td>example</td>
          <td>example</td>
          <td>example</td>
        </tr>
      </tbody>
    </table>
  </b-card>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('getUserList')
  },
  data() {
    return {
      userList: this.$store.getters.userList,
    }
  },
}
</script>
