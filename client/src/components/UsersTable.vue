  <template>
    <div class="container">
      <h3 class="mt-2 mb-3 float-left text-primary">Users</h3>
      <!-- Tabel users -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, index) in clients.clients" :key="client._id" class="m-5">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ client.first_name }}</td>
            <td>{{ client.last_name }}</td>
            <td>{{ client.phone }}</td>
            
            <td>
              <form>
                <button v-on:click.prevent="emitShowModal(client)" class="btn btn-sm btn-info mr-1">Edit</button>
                <button v-on:click="deleteUser(client._id)" type="submit" class="btn btn-sm btn-danger">Delete</button>
              </form>
            </td>
          </tr>
          <!--  end "v-for" -->
        </tbody>
      </table>
      <!-- end tabel -->
    </div>
  </template>

  <script>
  import { EventBus } from '../main.js';

  export default {
    name: 'UsersTable',
    data() {
      return {
        clients: [],
        showModal: false
      }
    },
  
    async created() {
      await fetch('http://localhost:3000/api/clients/')
      .then(response => response.json())
      .then(data => {
        this.clients = data;
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    },

    methods: {
      // Delete users
      async deleteUser(id) {
        if (!confirm("Are You Sure To this record ?")) {
        return;
      }
        await fetch(`http://localhost:3000/api/clients/delete/${id}`, {
          method: 'DELETE'
        })
        .then((response) => response.json())
        .catch((err) => {
          console.error(err);
        });
      },

      emitShowModal(client) {
        this.client = client;
        EventBus.$emit('click', this.showModal, this.client);
        
        console.log(this.client);
        console.log('UsersTable:', this.showModal);
      }
    }
  }
  </script>

  <style scoped>
  th {
    padding-left: 1.2rem;
  }
  </style>
