<!--登录-->
<template lang="html">
	<div class="main2">
		<!----------------------1------------------------------>
	 <div class="d1">
	 	<div class="top1-1"><a href="#" style="font-size: 42px;color:#333333;"><</a></div>
	 	<div class="top1-2">登录</div>
	 	<router-link to="/zhuCe">
	 	<div class="top1-3"><a href="javascript:void(0)"  style="color:#333333;">注册</a></div>
	 </router-link>
	 	</div>
		<!-----------------------2---------------------------->
			<div class="d2">
				<input class="top2-1" type="text"  placeholder="请输入手机号码" v-model="sjh"/>
				
				<div class="top2-5">
	 		<input class="top2-6"  type="password" placeholder="请输入密码" v-model="mm"/>
	 		<input class="top2-6-0"  type="text" placeholder="请输入密码"v-model="mm" /><!--隐藏 为显示密码做铺垫-->
	 		       <div class="top2-7">
	 		           <a  href="javascript:void(0)"><img src="../img/01.gif"></a>
	 		       </div>
	 	       </div>
		      <div class="top2-8">
	 		      <form action="" >
	 			       <a href="javascript:void(0)" style="color:#f4f7ec;">登录</a>
	 		      </form>
	 	      </div>
	 	      <router-link to="/zhaoHui">
	 	      <span style="width: 1080px;margin-top: 40px;float: right;">
	 	      
	 	      	<a style="float: right;margin-right: 100px;font-size: 22px;color:#666666;" href="javascript:void(0)">忘记密码</a>
	 	      </span>
	 	      	</router-link>
			</div>
			
			
			
		
		
	</div>
</template>

<script>
 export default{
 	
 }
</script>

<style lang="css" scoped>
.d2{
	width: 1080px;
	height: 746px;
	text-align: left;/*首页默认居中*/
}
.d1{
	width: 1080px;
	height: 141px;
	border-bottom: 6px solid #e0e0e0;
}











.main2{
	width: 1080px;
	height: 893px;	
	margin: 0 auto;
	}
	*{
	text-decoration: none;
	list-style-type: none;
}
	
.top1-1{
	float: left;
	width: 144px;
	height: 141px;
	line-height: 141px;
	
}
.top1-2{
	float: left;
	width: 672px;
	height: 141px;
	line-height: 141px;
	font-size: 38px;
	font-weight: bold;
	color:#333333;
}
.top1-3{
	float: left;
	width:264px;
	height: 141px;
	line-height: 141px;
	font-size: 34px;
	color:#333333;
}
.top2-1{
	width: 900px;
	height: 120px;
	outline: none;
	font-size: 38px;
	text-indent: 20px;
	background:#f0f0f0;
	margin-top: 121px;
	margin-left: 90px;
	border: none;
}
.top2-7{
	float: left;
	width: 179px;
	height: 130px;
	line-height: 130px;
	text-align: center;
	vertical-align: middle;
	background:#f0f0f0;
	
}
.top2-6{
	float: left;
	width: 720px;
	height: 130px;
	border: none;
	outline: none;
	font-size:38px;
	text-indent: 20px;
	background:#f0f0f0;
	padding: 0;
}
.top2-6-0{
	float: left;
	width: 720px;
	height: 130px;
	border: none;
	outline: none;
	font-size:38px;
	text-indent: 20px;
	background:#f0f0f0;
	display: none;
}
.top2-5{
	float: left;
	width: 900px;
	height: 130px;
	margin-top: 60px;
	margin-left: 90px;
}
.top2-8{
	float: left;
	width: 900px;
	height: 120px;
	line-height: 120px;
	font-size: 38px;
	text-align: center;
	background:#bfe18b;
	margin-top: 60px;
	margin-left: 90px;
	
}

</style>