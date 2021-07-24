<template>
  <div>
    <b-form class="form" @submit="onSubmit">
      <small v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </small>

      <b-form-group id="input-group-1">
        <b-form-input
          id="input-1"
          v-model="name"
          placeholder="Имя и Фамилия"
          type="text"
          name="name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          v-model="email"
          type="email"
          placeholder="E-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-input
          id="input-3"
          v-model="phone"
          v-phone
          placeholder="Телефон"
        ></b-form-input>
      </b-form-group>

      <v-select
        v-model="country"
        :options="options"
        placeholder="Страна"
        class="select-component"
        label="title"
      >
        <template #search="{ attributes, events }">
          <input
            class="vs__search"
            :required="!country"
            v-bind="attributes"
            v-on="events"
          />
        </template>
      </v-select>
      <b-button type="submit" class="btn-main">Получить консультацию</b-button>
      <b-form-text class="mt-5 form-text-small"
        >Нажимая «Получить консультацию» вы соглашаетесь с
        <a href="">политикой конфиденциальности</a></b-form-text
      >
    </b-form>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
export default {
  name: 'Form',
  components: {
    vSelect,
  },
  data() {
    return {
      errors: [],
      email: '',
      name: '',
      country: '',
      phone: '',
    }
  },
  computed: {
    options() {
      return ['Россия', 'Казахстан', 'Украина', 'Армения']
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.errors = []

      if (!this.name) {
        this.errors.push('Требуется указать имя и фамилию.')
      }
      if (!this.email) {
        this.errors.push('Укажите электронную почту.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.')
      }
      if (!this.phone) {
        this.errors.push('Укажите свой телефон')
      } else if (this.phone.length < 11) {
        this.errors.push('Укажите корректный телефон.')
      }
      if (!this.country) {
        this.errors.push('Требуется указать страну.')
      }
      // if (!this.errors.length) {
      //   return true
      // }
      console.log(this.email, this.name, this.country, this.phone)
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
  },
}
</script>

<style></style>
