<template>
  <div class="container">
    <!-- "showModal" -->
    <button v-on:click="showModal = !showModal" class="btn btn-lg btn-secondary float-right">Add User</button>
    
    <!-- Addd/remove a classe "show" -->
    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3 class="text-primary">Add User</h3>
        <form>
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input required value="" type="text" id="first_name" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="last_name">Last Name</label>
            <input required value="" type="text" id="last_name" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input required value="" type="number" id="phone" class="form-control"/>
          </div>
          <button v-on:click.prevent="showModal = !showModal" class="btn btn-danger mr-1">Close</button>
          <button v-on:click="createClient()" type="button" class="btn btn-primary">Save</button> 
        </form> 
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserRegisterForm',
  data() {
    return {
      clients: [],
      showModal: false,
    };
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

    // Create Client
    async createClient() {
      await fetch('http://localhost:3000/api/clients/', {
        method: 'POST',
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
       location.reload()
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },

  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
};
</script>

<style>
.modal-container {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.modal-container.show {
  opacity: 1;
  pointer-events: auto;
}

.user-modal {
  color: #535353;
  background-color: #fff;
  background-image: url("../assets/background.jpg");
  width: 450px;
  padding: 40px 50px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.user-modal h1 {
  margin: 0;
}

.user-modal p {
  opacity: 0.9;
}
</style>
