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

  <template align-h="center" #header>
      <h5 class="mb-0">
        <strong>Users</strong>
      </h5>

      <b-button
        variant="primary"
        >Create User</b-button
      >
    </template>

  </b-card>
</template>

<script>
export default {}
</script>
