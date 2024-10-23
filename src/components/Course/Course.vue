<template>
  <div class="course">
    <div class="container clearfix">
      <ul class="coursebox">
        <li
          v-for="(item, index) in categorylist"
          :key="categorylist.id"
          :class="{ active: index === currentIndex }"
          @click="getcurrentCategoryCouses(index)"
        >
          {{ item.name }}
        </li>
        <!-- <li>Python</li> -->
      </ul>

      <el-row :gutter="10">
        <el-col
          :span="8"
          class="grid-content bg-purple"
          v-for="item in currentCategoryCouses"
          :key="item.id"
        >
          <!-- <div
            class="courseList"
            v-for="item in currentCategoryCouses"
            :key="item.id"
          > -->
          <!-- 课程卡 -->
          <div class="detail" @click="getCourseDetails(item.id)">
            <div class="head">
              <img :src="item.course_img" alt="" class="backImg" />
              <b class="mask"></b>
              <p>{{ item.name }}</p>
            </div>
            <div class="content">
              <p>
                {{ item.course_slogan }}
              </p>
              <div class="content-detail">
                <div>
                  <span>{{ item.learn_count }}</span>
                  <span>{{ item.level }}</span>
                  <!-- <span class="span3">
                  <span class="s">{{item.}}</span>
                  <span class="t">免费</span>
                </span> -->
                  <!-- <span class="span4">¥29</span> -->
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
  data() {
    return {
      categorylist: [],
      currentIndex: 0,
      currentID: 0,
      currentCategoryCouses: [],
    };
  },
  methods: {
    getcurrentCategoryCouses(index, id) {
      this.currentID = id;
      this.currentIndex = index;
      // this.currentID = id;
      console.log(index);
      if (index === 0) {
        this.currentCategoryCouses = [];
        for (let i = 0; i < this.categorylist.length; i++) {
          if (i > 0) {
            // console.log(this.categorylist[i].courses);
            for (let j = 0; j < this.categorylist[i].courses.length; j++) {
              console.log(j);
              this.currentCategoryCouses.push(this.categorylist[i].courses[j]);
            }
          }
        }
      } else {
        this.currentCategoryCouses = [];
        for (let j = 0; j < this.categorylist[index].courses.length; j++) {
          // console.log(this.categorylist[index].courses[j]);
          this.currentCategoryCouses.push(this.categorylist[index].courses[j]);
        }
      }
      console.log(this.currentCategoryCouses);
    },
    getCategorylist(url) {
      this.$https
        .categorylist()
        .then((res) => {
          if (res.code === 0) {
            // console.log(res);
            this.categorylist = res.data;
            console.log(this.categorylist);
            let firstCategory = {
              id: 0,
              name: "全部",
              // category: 0,
              courses: [],
            };
            this.categorylist.unshift(firstCategory);
            this.getcurrentCategoryCouses(0);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCourseDetails(couseid) {
      this.currentID = couseid;
      // console.log(
      //   this.currentCategoryCouses,
      //   this.currentIndex,
      //   this.currentID
      // );
      var url = `/course/free/${this.currentID}/?courseType=free&id=${this.currentID}`;
      console.log(url);
      this.$router.push({
        name: "course_detail",
        params: { courseID: couseid },
        query: {
          courseType: "free",
          id: couseid,
        },
      });
    },
  },
  created() {
    this.getCategorylist();
  },
};
</script>

<style lang="css" scoped>
.course {
  width: 70%;
  height: 1000px;
  background: #e8e8e8;
  /* width: 50%; 或者你想要的任何宽度   */
  margin-left: auto;
  margin-right: auto;
}
.coursebox {
  width: 100%;
  padding: 24px 1px;
  font-size: 16px;
  /* color: #666; */
  letter-spacing: 0.41px;
  font-family: PingFangSC-Regular;
  overflow: hidden;
  /* background-color: hsl(0, 3%, 72%); */
}
ul li {
  float: left;
  margin-right: 24px;
  cursor: pointer;
}

ul li.active {
  color: #00b4e4;
}
.courseList {
  width: 100%;
  height: auto;
  /* overflow: hidden; */
  /* position: relative; */
  /* background-color: #fc0107; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.detail {
  float: left;
  width: 248px;
  height: auto;
  margin-right: 16px;
  margin-bottom: 30px;
  position: relative;
  /* z-index: 100; */
  padding: 0 20px;

  box-shadow: 0 2px 6px 0 #e8e8e8;
  transition: all 0.2s linear;
  cursor: pointer;
}
.detail:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -3px, 0);
}
.detail:nth-of-type(4n) {
  margin-right: 0;
}
.head {
  width: 100%;

  height: 144px;
}
.detail .head img {
  width: 100%;
  height: 144px;
  position: absolute;
  left: 0;
  top: 0;
}
.detail .head b {
  width: 100%;
  height: 144px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.9;
  background: #56cbc4;
}
.detail .head p {
  position: absolute;
  width: 248px;
  height: 144px;
  left: 0;
  top: 0;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-around;
}
.content {
  width: 248px;

  height: 118px;
  padding-top: 30px;
}
.content p {
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  letter-spacing: 0.6px;
  margin-bottom: 20px;
  font-family: PingFangSC-Regular;
  overflow: hidden;
}
.content-detail {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.content-detail .span3 {
  position: absolute;
  right: 0;
}
.content-detail .span3 .s {
  text-decoration: line-through;
}
.content-detail .span4 {
  /*margin-left: 100px;*/
  position: absolute;
  right: 0;
  color: #fc0107;
}
.content-detail .span3 .t {
  color: #000;
  margin-left: 5px;
  text-decoration: none !important;
  color: #fc0107;
}

/*  */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /* background: #99a9bf; */
}
.bg-purple {
  /* background: #d3dce6; */
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
