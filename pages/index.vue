<template>
  <b-card
    class="w-100 mb-4"
    header-tag="header"
    header-class="d-flex align-items-center justify-content-between"
    body-class="p-0"
    footer-tag="footer"
  >
    <template #header>
      <h5 class="mb-0">
        <strong>Users</strong>
      </h5>

      <b-button v-b-modal.Create variant="primary">Create User</b-button>
    </template>

    <!-- <table class="table">
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
        <tr v-for="(item, index) in userList" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.surname }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone_number }}</td>
          <td>{{ item.activate ? 'Activated' : 'Disabled' }}</td>
          <td>
            <b-button
              variant="success"
              @click="
                () => {
                  $router.push({
                    name: 'id',
                    params: {
                      id: item.id,
                    },
                  })
                }
              "
              >Edit</b-button
            >
            <b-button variant="danger" @click="onDelete(item.id)"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table> -->
    <!--  -->
    <b-table
      :items="userList"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :bordered="bordered"
      :responsive="responsive"
    >
    <template #cell(activate)="row">
      {{ row.item.activate ? 'Activated' : 'Disabled' }}
    </template>
      <template #cell(Action)="row">
        <b-button
          variant="success"
          @click="
            () => {
              $router.push({
                name: 'id',
                params: {
                  id: row.item.id,
                },
              })
            }
          "
          >Edit</b-button
        >
        <b-button variant="danger" @click="onDelete(row.item.id)">Delete</b-button>
      </template>
    </b-table>
    <template #footer>
      <div class="d-flex align-items-center justify-content-center">
          <b-pagination
            v-if="totalRows > 0"
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            pills
            align="center"
            @change="onPageChange"
          ></b-pagination>
        </div>
    </template>
    <!--  -->
    <b-modal id="Create" ref="Create" title="Create User" hide-footer>
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
    </b-modal>
    <b-modal id="delete" ref="Delete" title="Delete User" @ok="deleteUser">
      Are you sure you want to delete this user?
    </b-modal>
  </b-card>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('getUserList')
  },
  data() {
    return {
      form: {},
      fields: [
        {
          key: 'name',
        },
        {
          key: 'surname',
        },
        {
          key: 'email',
        },
        {
          key: 'phone_number',
        },
        {
          key: 'activate',
        },
        {
          key: 'Action',
        },
      ],
      userList: this.$store.getters.userList,
      deleteId: '',
      currentPage: 1,
      perPage: 5,
    }
  },
  computed:{
    totalRows() {
      return this.userList.length;
    },
  },
  methods: {
    async onSubmit() {
      this.form.id = Math.floor(1000 + Math.random() * 9000).toString()
      this.form.activate = 1
      await this.$store.dispatch('createUserList', this.form).then(() => {
        this.$refs.Create.hide()
        this.$router.go()
      })
    },
    onDelete(id) {
      this.deleteId = id
      this.$refs.Delete.show()
    },
    async deleteUser() {
      await this.$store.dispatch('deleteUser', this.deleteId).then(() => {
        this.$refs.Delete.hide()
        this.$router.go()
      })
    },
  },
}
</script>
