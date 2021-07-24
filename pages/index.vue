<template>
  <section id="app" class="app">
    <header class="header">
      <NavBar />
      <Header />
    </header>
    <Slider />
    <HydrodynamicShock />
    <Faq />
    <Feedback />
    <Footer />
  </section>
</template>

<script>
import Feedback from '../components/Feedback/Feedback.vue'

export default {
  components: { Feedback },
}
</script>
