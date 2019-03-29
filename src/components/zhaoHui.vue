<template lang="html">
	   <!--
        	作者：283887620@qq.com
        	时间：2019-03-11
        	描述：哎！！
        -->
	<div class="main1">
		<!----------------------1------------------------------>
	 <div class="top-1" style="width: 1080px;border-bottom: 6px solid #e0e0e0;">
	 	<div class="top1-1"><a href="#" style="font-size: 42px;color:#333333;"><</a></div>
	 	<div class="top1-2">找回密码</div>
	 </div>
	 <!-------------------------2------------------------------->
	 <div class="top-2">
	 	<input class="top2-1" type="text"  placeholder="请输入手机号码"v-model="sjh"/>
	 	
	 	<div class="top2-2">
	 		<input class="top2-3" type="text" placeholder="请输入验证码" />
	 		<div class="top2-4"><a href="javascript:void(0)" style="color:#fffff6;">获取验证码</a></div>
	 	</div>
	 	
	 	<div class="top2-5">
	 		<input class="top2-6"  type="password" placeholder="新密码(不少于6个字符)"v-model="xmm"/>
	 		<input class="top2-6-0"  type="text" placeholder="新密码(不少于6个字符)"v-model="xmm"/><!--隐藏 为显示密码做铺垫-->
	 		<div class="top2-7">
	 		<a  href="javascript:void(0)"><img src="../img/01.gif"></a>
	 		</div>
	 	</div>
	 	
	 	<div class="top2-8">
	 		<form action="" >
	 			<a href="javascript:void(0)" style="color:#f4f7ec;">点击找回</a>
	 		</form>
	 	</div>
	 	
	 </div>
	</div>
</template>

<script>
	export default{	
	}
</script>
<style lang="css" scoped>
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
.top2-4{
	float: left;
	margin-left: 30px;
	width: 236px;
	height: 120px;
	line-height: 120px;
	text-align: center;
	background:#bfe18b;/*背景颜色*/
	border: none;
	border-radius: 15px;
	
	
}
.top2-3{
	padding: 0;
	float: left;
	width: 630px;
	height: 120px;
	line-height: 120px;
	outline: none;
	border: none;
	font-size: 38px;
	text-indent: 20px;
	background:#f0f0f0;
}
.top2-2{
	padding: 0;
	float: left;
	width: 900px;
	height: 120px;
	/*background: darkblue;/**/*/
	margin-top: 60px;
	margin-left: 90px;
	margin-top: 60px;
	
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
.top-2{
	text-align: left;/*首页默认居中*/
	width: 1080px;
	height: 912px;
background:#ffffff;
}



.top1-1{
	float: left;
	width: 144px;
	height: 141px;
	line-height: 141px;
	
}
.top1-2{
	float: left;
	width: 936px;
	height: 141px;
	line-height: 141px;
	font-size: 34px;
	font-weight: bold;
	color:#333333;
}
.top-1{
	width: 1080px;
	height: 141px;
	border-bottom: 6px solid #e0e0e0;
	background:#ffffff;
	border-bottom: 60px;
}

*{
	text-decoration: none;
	list-style-type: none;
}
   .main1{
   	margin: 0 auto;
   	width: 1080px;
   	height: 1720px;
   /*	background: red;*/
   	font-size: 32px;
   }
</style>