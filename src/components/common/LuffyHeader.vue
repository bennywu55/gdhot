<template>
  <el-container>
    <el-header height="80px">
      <div class="header">
        <div class="nav-left">
          <img
            src="https://hcdn2.luffycity.com/media/frontend/activity/head-logo_1564141048.3435316.svg"
            alt=""
          />
        </div>
        <div class="nav-center">
          <ul>
            <li v-for="(list, i) in headerList" :key="list.id">
              <router-link :to="{ name: list.name }">
                {{ list.title }}
                <span v-if="i === 2">new</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- <el-dropdown> -->
        <div class="nav-right" v-if="isShow">
          <span class="el-dropdown-link">学习中心</span>
          <span class="user">老村长</span>
          <img src="" alt="" />
          <ul class="my_account">
            <li>
              我的账户
              <i>></i>
            </li>
            <li>
              我的订单
              <i>></i>
            </li>
            <li>
              我的优惠券
              <i>></i>
            </li>
            <li>
              我的消息<span class="msg">(44)</span>
              <i>></i>
            </li>
            <li>
              购物车<span class="count">(1)</span>
              <i>></i>
            </li>
            <li>
              退出
              <i>></i>
            </li>
          </ul>
        </div>
        <!-- </el-dropdown> -->
        <div class="nav-right" v-else="isShow">
          <span>登录</span>
          &nbsp;| &nbsp;
          <span>注册</span>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "LuffyHeader",
  data() {
    return {
      isShow: false,
      headerList: [
        { id: "1", name: "Home", title: "首页" },
        { id: "2", name: "Course", title: "免费课程" },
        { id: "3", name: "LightCourse", title: "轻课" },
        { id: "4", name: "Micro", title: "学位课程" },
        { id: "5", name: "Cart", title: "购物车" },
        { id: "6", name: "Login", title: "登录" },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.el-header {
  border-bottom: #c9c9c9;
  box-shadow: 0 0.5px 0.5px 0 #c9c9c9;
}
.header {
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.nav-left {
  float: left;
  margin-top: 10px;
}
.nav-center {
  float: left;
  margin-left: 100px;
}
.nav-center ul {
  overflow: hidden;
}
.nav-center ul li {
  float: left;
  margin: 0 5px;
  /*width: 100px;*/
  padding: 0 20px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  position: relative;
}
.nav-center ul li span {
  color: red;
  position: absolute;
  font-size: 12px;
  right: 0;
  top: -12px;
}
.nav-center ul li a {
  color: #4a4a4a;
  width: 100%;
  height: 60px;
  display: inline-block;
}
.nav-center ul li a:hover {
  color: #b3b3b3;
}
.nav-center ul li a.is-active {
  color: #4a4a4a;
  border-bottom: 4px solid #ffc210;
}
.nav-center ul li a.is-active {
  color: #4a4a4a;
  border-bottom: 4px solid #ffc210;
}
.nav-right {
  float: right;
  position: relative;
  z-index: 100;
}
.nav-right span {
  cursor: pointer;
}
.nav-right .user {
  margin-left: 15px;
}
.nav-right img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}
.nav-right ul {
  position: absolute;
  width: 221px;
  z-index: 100;
  font-size: 12px;
  top: 80px;
  background: #fff;
  border-top: 2px solid #d0d0d0;
  box-shadow: 0 2px 4px 0 #e8e8e8;
}
.nav-right ul li {
  height: 40px;
  color: #4a4a4a;
  padding-left: 30px;
  padding-right: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s linear;
}
.nav-right ul li span.msg {
  margin-left: -80px;
  color: red;
}
.nav-right ul li span.count {
  margin-left: -100px;
  color: red;
}
</style>
