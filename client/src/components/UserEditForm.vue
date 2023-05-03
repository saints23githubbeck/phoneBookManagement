<template>
  <div class="container">
    <!-- Edit modal "show" -->
    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3 class="text-info">Edit User</h3>
        <form>
          <div class="form-group">
            <label for="">Fist Name</label>
            <input v-bind:value="client.first_name" required type="text" id="first_name" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="">Last Name</label>
            <input v-bind:value="client.last_name" required type="text" id="last_name" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="">Phone</label>
            <input v-bind:value="client.phone" required type="number" id="phone" class="form-control"/>
          </div>

          <button v-on:click.prevent="showModal = !showModal" class="btn btn-danger mr-1">Close</button>
          <button v-on:click="updateUser(client._id)" type="submit" class="btn btn-primary">Update</button> 
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'UserEditForm',
  data() {
    return {
      clients: [],
      client: '',
      showModal: false
    }
  },
  methods: {
    // Update User
    async updateUser(id) {
      await fetch(`http://localhost:3000/api/clients/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
          first_name: document.getElementById('first_name').value,
          last_name: document.getElementById('last_name').value,
          phone: document.getElementById('phone').value
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        this.clients = data;
        this.showModal=false
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },

  created() {
    // event  click
    EventBus.$on('click', (modal, client) => {
      this.showModal = !modal;
      this.client = client;
      console.log('showModal', this.showModal);
      console.log('modal', modal)
    })
  },
  // "show" else dont show Modal
  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
  
};
</script>

<style>

</style>
