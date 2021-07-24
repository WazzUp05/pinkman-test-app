<template>
  <b-container fluid="lg">
    <b-row>
      <b-col class="p-0">
        <b-navbar
          toggleable="lg"
          class="header__navbar"
          type="dark"
          variant="transparent"
          :class="{ open: isMenu }"
        >
          <b-navbar-brand href="#"
            ><img src="../assets/img/logo.svg" alt=""
          /></b-navbar-brand>
          <b-navbar-toggle
            target="nav-collapse"
            class="btn-burger"
            @click=";(isMenu = !isMenu), (isBurger = !isBurger)"
            ><button class="burger" :class="{ active: isBurger }"></button
          ></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <NuxtLink class="nav-link" to="/">Частица</NuxtLink>
              <NuxtLink class="nav-link" to="/asd">Частица</NuxtLink>
              <NuxtLink class="nav-link" to="/asd">Частица</NuxtLink>
              <NuxtLink class="nav-link" to="/asd">Частица</NuxtLink>
              <NuxtLink class="nav-link" to="/asd">Частица</NuxtLink>
            </b-navbar-nav>
            <a href="#slider" class="ml-auto"
              ><UiButton title="Квантовый характер"
            /></a>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    isMenu: false,
    isBurger: false,
  }),
}
</script>

<style></style>
