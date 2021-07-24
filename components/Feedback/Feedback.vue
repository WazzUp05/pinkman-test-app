<template>
  <section class="section black consultation">
    <b-container fluid="md">
      <b-row>
        <b-col>
          <h1 class="consultation__title">Проконсультируем вас</h1>
        </b-col>
        <b-col md="12">
          <div class="consultation-box">
            <b-row>
              <b-col lg="6">
                <p class="consultation-box__title">Свяжитесь со мной</p>
              </b-col>
              <b-col lg="6">
                <Form />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Form from './Form.vue'
export default {
  name: "FeedBack",
  components: { Form },
}
</script>

<style></style>
