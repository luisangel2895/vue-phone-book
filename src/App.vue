<template>
  <div id="app" class="container text-center">
    <h2 class="my-5">Add a new contact:</h2>
    <div>
      <label
        >First Name: <input type="text" class="userFirstname" v-model="name"
      /></label>
      <br />
      <label
        >Last Name: <input type="text" class="userLastname" v-model="lastname"
      /></label>
      <br />
      <label
        >Phone: <input type="number" class="userPhone" v-model="phone"
      /></label>
      <br />
      <button class="submitButton btn btn-primary my-5" @click="submit">
        Add New Contactss
      </button>
    </div>
    <div class="container">
      <table id="phoneBookItems" class="informationTable table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Phone</th>
          </tr>
          <tr v-for="(contact, index) in contacts" :key="index">
            <td>{{ contact.name }}</td>
            <td>{{ contact.lastname }}</td>
            <td>{{ contact.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      name: "Coder",
      lastname: "Byte",
      phone: 8885559999,
      contacts: [],
    };
  },
  methods: {
    createContact() {
      const contact = {};
      contact.name = this.name;
      contact.lastname = this.lastname;
      contact.phone = this.phone;
      this.contacts.push(contact);
    },
    sortedContacts() {
      this.contacts.sort(function (a, b) {
        if (a.lastname > b.lastname) {
          return 1;
        }
        if (a.lastname < b.lastname) {
          return -1;
        }
        return 0;
      });
      console.log(this.contacts);
    },
    submit() {
      this.createContact();
      this.sortedContacts();
    },
  },
};
</script>
