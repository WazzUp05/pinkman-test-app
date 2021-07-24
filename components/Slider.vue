<template>
  <section id="slider" class="section black slider">
    <b-container fluid="lg">
      <b-row>
        <b-col>
          <b-spinner v-if="$fetchState.pending" class="ml-auto"></b-spinner>
          <VueSlickCarousel v-else class="header-slider" v-bind="settings">
            <div
              v-for="(slide, i) in sliders"
              :key="i"
              :style="{ backgroundImage: 'url(' + slide.image + ' )' }"
              class="header-slider__item"
            >
              <p>{{ slide.title }}</p>
              <div v-html="slide.description"></div>
            </div>
            <!-- <div class="header-slider__item header-slider__item-one">
              <p>квантовый характер</p>
              <h2>
                Жидкость <span class="green-text">заряжает</span> электронный
                <span class="moonWhite-text">гамма-квант</span>, при этом
                <span class="moonWhite-text">дефект массы</span> не образуется
              </h2>
            </div>
            <div class="header-slider__item header-slider__item-two">
              <p>квантовый характер</p>
              <h2>
                Жидкость <span class="green-text">заряжает</span> электронный
                <span class="moonWhite-text">гамма-квант</span>, при этом
                <span class="moonWhite-text">дефект массы</span> не образуется
              </h2>
            </div>
            <div class="header-slider__item header-slider__item-three">
              <p>квантовый характер</p>
              <h2>
                Жидкость <span class="green-text">заряжает</span> электронный
                <span class="moonWhite-text">гамма-квант</span>, при этом
                <span class="moonWhite-text">дефект массы</span> не образуется
              </h2>
            </div> -->
            <template #prevArrow="arrowOption">
              <div class="custom-arrow">
                {{ arrowOption.currentSlide }}
              </div>
            </template>
            <template #nextArrow="arrowOption">
              <div class="custom-arrow">
                {{ arrowOption.currentSlide }}
              </div>
            </template>
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Slider',
  components: { VueSlickCarousel },
  data: () => ({
    sliders: '',
    settings: {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
          },
        },
      ],
    },
  }),
  async fetch() {
    this.sliders = await fetch(
      'http://testwork.unitedplace.ru/api/slider'
    ).then((res) => res.json())
  },
}
</script>

<style></style>
