import BMap from 'BMap'
<template>
	<div class="main5">
		<div class="stu-top">
			<img class="dw-1" src="../img/24.gif" />
			<input class="stu-1" type="text" placeholder="搜索商家、分类或产品" />
		   <a href="javascript:void(0)"> <lable style="font-size:34px;margin-left: 23px;color:#95cc3b;vertical-align: middle;">全部分类</lable>
		   <img src="../img/26.gif" />
		   </a>
		<div class="stu-2">
			<ul class="ul-3">
				<li><a href="javascript:void(0)">智能排序</a></li>
				<li><a href="javascript:void(0)">离我最近</a></li>
				<li><a href="javascript:void(0)">评价最高</a></li>
				<li><a href="javascript:void(0)">人均消费</a></li>
			</ul>
		</div>
		</div>
		
		<div class="fgx-2"></div><!--设置外边距推下来213PX-->
		<div class="fgx3"></div>
		<div id="allmap"></div>
		
		
		
	</div>
</template>

<script>
	import BMap from 'BMap'
	export default {
		data() {
			return {
				type: 'tab',
				address_detail: null,
				center: {
					lng: 116.40387397,
					lat: 39.91488908
				}
			}
		},
		mounted() {
			this.ready()
		},
		methods: {
			ready() {
				let map = new BMap.Map('allmap')
				let point = new BMap.Point(this.center.lng, this.center.lat)
				map.centerAndZoom(point, 10)
				map.enableScrollWheelZoom(true)
				map.enableDoubleClickZoom(true)
				var geolocation = new BMap.Geolocation()
				geolocation.getCurrentPosition((r) => {
					if (r.point) {
						this.center.lng = r.longitude
						this.center.lat = r.latitude
						let markers = new BMap.Marker(r.point)
						map.addOverlay(markers)
						map.panTo(r.point)
						map.centerAndZoom(r.point, 16)
					}
				}, {
					enableHighAccuracy: true
				})
			}
		}
	}
</script>

<script>
	
	export default {
		data() {
			return {
				locationCity:'加载中...'
			}
		},
		mounted() {
			this.dz()
		},
		methods: {
			 dz() {
				var that=this
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function getinfo(position) {
					let city = position.address.city; //获取城市信息       
					let province = position.address.province;
					// console.log(city+'--'+province)
					that.locationCity=city		//将城市名称保存到locationCity中
					that.$store.commit('hqwz',city)
				}, function(e) {        
					that.locationCity='定位失败'
				}, {
					provider: 'baidu',
				});
			}
		}
	}

</script>

<style>
	#allmap{
		width: 150px;
		height: 80px;
	}
	.fgx3{
		float: left;
		width: 1080px;
		height: 4px;
		background:#d8d8d8;
	}
	.fgx-2{
		float: left;
		width: 1080px;
		height: 1px;
		margin-top: 212px;		
	}
	.ul-3 li a:hover{
		color:#96c946;
	}
	.ul-3 li a{
			color:#000000;
	}
	.ul-3 li{
		float: left;
		width: 270px;
		line-height: 87px;
		text-align: center;
		font-size: 28px;
	
	}
	.stu-2{
	
		width: 1080px;
		height: 87px;
		/*background: chartreuse;*/
	}
	.dw-2{
		float: right;
		position: absolute;
		top: 40px;
		left: 705px;
	}
	.dw-1{
		position: absolute;
		top: 40px;
		left: 55px;
	}
	.stu-1{
		margin-top: 15px;
		width: 756px;
		height: 96px;
		margin-left: 30px;
		border-radius: 50px;
		border: none;
		outline: none;
		text-indent: 73px;
		font-size: 28px;
		background:#ebecee;
	
	}
	.stu-top{
		position: fixed;
		width: 1080px;
		height: 213px;/*126*/
		line-height: 126px;
		text-align: left;
	
	}
.main5{
	margin: 0 auto;
	width: 1080px;
	min-height: 1000px;
	padding: 0;
}
*{
	list-style-type: none;
	text-decoration: none;
	margin: 0;
	padding: 0;
}
</style>