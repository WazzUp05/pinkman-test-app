<template>
  <footer class="footer">
    <b-container fluid="md">
      <b-row>
        <b-col md="6" lg="3" class="mb-5 text-left text-md-center text-lg-left">
          <p class="green-text">Техническая поддержка 24/7</p>
          <a class="tel" href="tel:+">0-000-00-00-000 </a>
        </b-col>
        <b-col md="6" lg="3" class="text-left text-md-center">
          <ul class="footer-links">
            <p v-b-toggle.collapse-1 class="footer-links__title">
              Частица
              <img
                class="footer-links__title-arrow"
                src="../assets/img/arrow.svg"
                alt=""
              />
            </p>
            <div class="footer-links__wrapper">
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
            </div>
            <b-collapse id="collapse-1" class="footer-collapse">
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
            </b-collapse>
          </ul>
        </b-col>
        <b-col md="6" lg="3" class="text-left text-md-center">
          <ul class="footer-links">
            <p v-b-toggle.collapse-2 class="footer-links__title">
              Частица
              <img
                class="footer-links__title-arrow"
                src="../assets/img/arrow.svg"
                alt=""
              />
            </p>
            <div class="footer-links__wrapper">
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
            </div>
            <b-collapse id="collapse-2" class="footer-collapse"
              ><li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li></b-collapse
            >
          </ul>
        </b-col>
        <b-col md="6" lg="3" class="text-left text-md-center">
          <ul class="footer-links">
            <p v-b-toggle.collapse-3 class="footer-links__title">
              Частица
              <img
                class="footer-links__title-arrow"
                src="../assets/img/arrow.svg"
                alt=""
              />
            </p>
            <div class="footer-links__wrapper">
              <li><a href="#">Частица</a></li>
            </div>
            <b-collapse id="collapse-3" class="footer-collapse">
              <li><a href="#">Частица</a></li>
            </b-collapse>
          </ul>
        </b-col>
        <b-col
          md="6"
          lg="3"
          class="text-left text-md-center"
          offset="0"
          offset-lg="3"
        >
          <ul class="footer-links">
            <p v-b-toggle.collapse-4 class="footer-links__title">
              Частица
              <img
                class="footer-links__title-arrow"
                src="../assets/img/arrow.svg"
                alt=""
              />
            </p>
            <div class="footer-links__wrapper">
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
            </div>
            <b-collapse id="collapse-4" class="footer-collapse">
              <li><a href="#">Частица</a></li>
              <li><a href="#">Частица</a></li>
            </b-collapse>
          </ul>
        </b-col>
        <b-col md="6" lg="3" class="text-left text-md-center">
          <ul class="footer-links">
            <p v-b-toggle.collapse-5 class="footer-links__title">
              Частица
              <img
                class="footer-links__title-arrow"
                src="../assets/img/arrow.svg"
                alt=""
              />
            </p>
            <div class="footer-links__wrapper">
              <li><a href="#">Частица</a></li>
            </div>
            <b-collapse id="collapse-5" class="footer-collapse">
              <li><a href="#">Частица</a></li>
            </b-collapse>
          </ul>
        </b-col>
        <b-col> </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col md="12">
          <div
            class="
              d-flex
              align-item-end align-item-md-center
              justify-content-center justify-content-md-between
              flex-column-reverse flex-md-row
            "
          >
            <p class="mr-3">
              Россия, Москва, 0000000, ул. Пушкина, 19 <br /><br />
              © 1c950—2021 Жидкость заряжает электронный гамма-квант, при этом
              дефект массы не образуется. Излучение восстанавливает
              циркулирующий квазар, и это неудивительно, если вспомнить
              квантовый характер явления.
            </p>
            <a href="#app" class="my-3"
              ><img src="../assets/img/buttons-arrow.svg" alt=""
            /></a>
          </div>
        </b-col>
        <b-col>
          <div
            class="
              footer-footer
              d-flex
              justify-content-between
              align-items-start align-items-md-end
            "
          >
            <div class="links d-flex">
              <a href="#">Частица</a>
              <a href="#">Частица</a>
              <a href="#">Частица</a>
              <a href="#">Частица</a>
            </div>
            <div class="partners d-flex align-items-end">
              <a href="#"><img src="../assets/img/logo/visa.svg" alt="" /></a>
              <a href="#"
                ><img src="../assets/img/logo/mastercard.svg" alt=""
              /></a>
              <a href="#"><img src="../assets/img/logo/mir.svg" alt="" /></a>
              <a href="#"><img src="../assets/img/logo/jcb.svg" alt="" /></a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style></style>
