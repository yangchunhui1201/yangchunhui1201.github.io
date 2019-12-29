<template id="n6">
	<div style="background-color: rgba(255,255,255,0);
	background-image: url(http://5a1e724f0220d.t73.qifeiye.com/qfy-content/uploads/2017/11/0a65024f53cb23c2e9b72dab762cc4a4.jpg);
	background-position:0% 22%;    background-repeat: no-repeat;
	background-attachment: scroll; min-height:1000px;
	">
		<div style="background-color:#fff;border:1px #ccc solid;padding-top:50px;width:1183px;margin:0 auto;padding-bottom:50px;">
			<div style="width:1213px;height:240px;padding-left:50px;overflow:hidden;">
		<div style="float:left;">
			<h2 style="font-family: 微软雅黑;    font-weight: 700;    color: #696969;font-size:16px;line-height:2;">健身中心网站模板</h2>
			<p style="font-family: 微软雅黑;font-size: 13px;color: rgb(136, 136, 136);line-height: 2.4;" v-for="i in arr3" :key="i">
				{{i}}
			</p>
		</div>
		<div style="float:left;width:880px;margin-left:80px;">
			<input type="text" v-for="i in arr4" :key="i" :placeholder="i" style="border:none;width:429px;height:30px;border-bottom:1px #ccc solid;margin-right:10px;background-color:transparent;margin-bottom:20px;">
			<input type="text" style="width:900px;height:63px;border:none;border-bottom:1px #ccc solid;background-color:transparent;" placeholder="详情">
			<p style="margin-top:20px;width:100px;height:32px;text-align:center;line-height:32px;background-color: #595959;color:#fff;cursor:pointer;font-size:14px;">发送</p>
			
		</div>
	</div>
	<div style="width:1183px;height:80px;padding:0 56px;">
		<div style="float:left;margin-right:10px;width:25px;height:30px;background-image:url(http://fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png);background-position:9% 70%;"></div>
		<div style="float:left;margin-right:10px;width:14px;height:30px;background-image:url(http://fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png);background-position:19% 70%;"></div>
		<div style="float:left;margin-right:10px;width:25px;height:30px;background-image:url(http://fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png);background-position:27.5% 70%;"></div>
		<div style="float:left;margin-right:10px;width:25px;height:30px;background-image:url(http://fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png);background-position:36% 70%;"></div>
		<p style="float:left;margin-left:120px;font-family: 微软雅黑;    font-size: 13px;    color: #666666;">
<span style="font-weight:bold;">温馨提示</span>：使用表单之前需要配置表单的收件邮箱和网站的发件邮箱。详情请参考教程《如何设置表单中的邮箱》</p>
	</div>
	<div style="width:1010px;height:460px;margin:0 auto;">
	<iframe src="https://map.baidu.com/@12748538.99,4559724.44,12z" width="100%" height="100%"></iframe></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components:{
		
		},
		data(){
			return{
				arr3:[
				'地址：苏州市金鸡湖大道00号',
				'邮编：200000',
				'电话：400-8000-8000',
				'手机：133-0000-0000',
				'传真：000-8000-8000',
				'邮箱：info@email.com'
			],
			arr4:[
				'姓名',
				'电话','地址','邮箱'
			]
			}
		}
	}
</script>
