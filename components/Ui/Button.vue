<template>
  <button class="btn-menu">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: 'Кнопка',
    },
  },
}
</script>

<style lang="scss">
.btn-menu {
  background: rgba(239, 246, 255, 0.15);
  border-radius: 18px;
  padding: 15px 20px;
  height: 45px;
  color: #eff6ff;
  font-size: 13px;
  transition: 0.3s;
  text-transform: uppercase;
  border: none;
  &:hover {
    color: #121416;
    background: #eff6ff;
  }
}
</style>
