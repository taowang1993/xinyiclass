<template>
  <Carousel :items-to-show="itemsToShow" :wrap-around="true">
    <Slide v-for="image in images" :key="image.src">
      <div class="carousel__item">
        <img :src="image.src" :alt="image.alt" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'VueCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    itemsToShow: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style>
.carousel__prev,
.carousel__next {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: white;
}
</style>
