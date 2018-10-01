<style>

</style>
<style scoped>

/* 页面主体结构start */
	html, body{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.main-containner{
		width: 100%;
		height: 100vh;
		background:#05121A url('../../assets/main-background.jpg') no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
	}
	.header{
		width: 100%;
		height: 60px;
		background-color: rgba(24, 24, 64, 0.8);
		text-align: center;
	}
	.header span{
		line-height: 60px;
		color: #fff;
		font-size: 1.6em;
	}
	.body-containner{
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.body-top-containner {
		width: 100%;
		height: 18%;
		display: flex;
		justify-content: space-between;
	}
	.body-bottom-containner{
		width: 100%;
		height: 30%;
		background-color: #fff;
	}
	.body-center-containner{
		width: 100%;
		height: 50.3%;
		display: inline-flex;
		justify-content: space-between;
	}
	.top-left-cont{
		width: 22%;
		height: 100%;
		background-color: #f4f;
	}
	.top-middle-cont{
		width: 55%;
		height: 100%;
		background-color: #f44;
	}
	.top-right-cont{
		width: 22%;
		height: 100%;
		background-color: #44f;
	}
	.center-middle-cont{
		width: 36%;
		height: 100%;
	}
	.center-left-cont, .center-right-cont{
		width: 32%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.name-cont{
		height: 20px;
		width: 100%;
		background-color: #fff;
	}
	.center-left-item, .center-right-item{
		width: 100%;
		height: 50%;
		background-color: #ff0;
		display: flex;						
	}
	.center-button-cont{
		background-color: #fff;
		flex-shrink: 0;
		height: 100%;
		width: 30vh;
		
	}


/* 页面主体结构end */

	/* 分页start */
	.page-cont{
		height: 27px;
		width: 90%;
		margin: 0 auto;
		margin-bottom: 1%;
		background-color: #fff;
  		border-radius: 5px;
  		display: flex;
	}
	.totalcont{
		line-height: 27px;
		margin-left: 4%;
	}
	.pagebar{
		width: 60%;
		margin-left: 4%;
	}
	.erro-show-cont{
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: lightskyblue;
		font-size: 1.6em;
	}
	.erro-show{
		text-align: center;
	}
	/* 分页end */

/* 左半边部分start */
/* 左半边部分end */

/* 右半边部分start */
/* 右半边部分end */

/* 中间部分start */
	
/* 中间部分end */
	
	
	
	
</style>

<template>
	<div class="main-containner">
		<header class="header">
			<span>综合分析</span>
		</header>
		<div class="body-containner">
			<div class="body-top-containner">
				<div class="top-left-cont"></div>
				<div class="top-middle-cont"></div>
				<div class="top-right-cont"></div>
			</div>

			<div class="body-center-containner">	
				<div class="center-left-cont">
					<div class="name-cont"></div>
					<div class="center-left-item">
						123
					</div>
					<div class="center-left-item">
						123
					</div>
				</div>
				<div class="center-middle-cont">
					
				</div>
				<div class="center-right-cont">
					<div class="name-cont"></div>
					<div class="center-right-item">
						123
					</div>
					<div class="center-right-item">
						123
					</div>
				</div>
			</div>

			<div class="body-bottom-containner">
				
			</div>
		</div>
	</div>
</template>

<script>
	// import request from '../request/prospecial.js'
	// import PdetailWorldMap from './map/pdetailworldmap.vue'

	
	export default {
		components: {
			// PdetailWorldMap,
		},
		data(){
			return {
				
			}
		},
		mounted(){		//async 异步请求
		
		},
		methods: {
			
			// 报道类型格式标准化
			getReportTypeStr(row) {
			    switch (row.reportype) {
			        case 0:
			        	return "首次报告";
			        	break;
			        case 1:
			        	return `后续报告 ` + row.orderno;
			        	break;
			        case 2:
			        	return `后续报告 ${row.orderno} (终报)`;
			         	break;
			        default:
			       		break;
		     	}
			 	return "未知";
		    },
			// 页码改变函数
		    async productpageChanged(page) {
		    	this.propageNo = page;
		     	await this.queryProData();
		    },
		    async diseasepageChanged(page){
		    	this.diseasepageNo = page;
		     	await this.queryReportByAnimalfamily();
		    }

		},
	}
</script>