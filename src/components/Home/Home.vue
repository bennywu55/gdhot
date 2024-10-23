<template>
  <el-carousel
    indicator-position="outside"
    height="400px"
    :interval="5000"
    arrow="always"
  >
    <el-carousel-item v-for="item in lunboImgs" :key="item.id">
      <img :src="item.imgSrc" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      lunboImgs: [
        {
          id: 1,
          imgSrc:
            "https://hcdn2.luffycity.com/media/frontend/index/pythonbanner.png",
        },
        {
          id: 2,
          imgSrc:
            "https://hcdn2.luffycity.com/media/frontend/index/18361725274692_.pic_6mdQVGs.jpg",
        },
      ],
    };
  },
  created() {
    // console.log(localStorage);
  },
};
</script>

<style lang="css" scoped>
img {
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
