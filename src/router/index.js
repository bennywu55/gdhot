import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home.vue'
import Course from '@/components/Course/Course'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'
import CourseDetail from '@/components/Course/CourseDetail'
import Login from '@/components/Login/Login'
import Cart from '@/components/Cart/Cart'
Vue.use(Router)


export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',//改成history模式
  routes: [
    {
      path: '/',
      redirect: '/home'
      // component: HelloWorld
    },
    {
      path: "/home",
      name: 'Home',
      component: Home
    },
    {
      path: "/course/free",
      name: 'Course',
      component: Course
    },
    {
      path: "/light-course",
      name: 'LightCourse',
      // component: LightCourse
    },
    {
      path: "/micro",
      name: 'Micro',
      component: Micro
    },
    // 课程详情
    {

      path: "/course/free/:courseID/",
      name: 'course_detail',
      component: CourseDetail
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 购物车的页面
    {
      path: "/cart",
      name: 'Cart',
      component: Cart
    }
  ]
})
