<template>
  <section class="section black faq">
    <b-container fluid="md">
      <b-row>
        <b-col>
          <p class="section-title">Вопросы и ответы</p>
          <div class="accordion faq__accordion" role="tablist">
            <b-card v-for="(faq, idx) in allFaqs" :key="idx" no-body>
              <b-card-header header-tag="header">
                <a v-b-toggle :href="'#faq' + idx" @click.prevent>
                  <b-button class="btn"
                    >{{ faq.question }}
                    <div class="arrow-faq">
                      <img
                        src="../assets/img/slider-arrow.svg"
                        alt=""
                      /></div></b-button
                ></a>
              </b-card-header>
              <b-collapse :id="'faq' + idx">
                <b-card-body>
                  <b-card-text>{{ faq.answer }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Faq',
  computed: mapGetters(['allFaqs']),
  async mounted() {
    await this.fetchFaqs()
  },
  methods: mapActions(['fetchFaqs']),
}
</script>

<style></style>
