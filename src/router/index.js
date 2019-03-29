import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import zhuCe from '@/components/zhuCe'
import index from '@/components/index'
import dengLu from '@/components/dengLu'
import zhaoHui from '@/components/zhaoHui'
import my from '@/components/my'
import shangjia from '@/components/shangjia'

Vue.use(Router)
var mongoose=require('mongoose');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/zhuCe',
    	component: zhuCe,
    	  name:'zc'
    },{
    	path:'/dengLu',
    	component:dengLu,
    	  name:'dl'
    	
    },{
    	path:'/zhaoHui',
    	component: zhaoHui,
    	  name:'zh'
    },{
    	path:'/index',
    	component:index,
    	name:'index'
    },{
    	path:'/my',
    	component:my,
    	name:'my'
    },{
    	path:'/shangjia',
    	component:shangjia,
    	name:'shangjia'
    }
  ]
})
