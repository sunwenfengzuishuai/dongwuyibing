<style>
.body-right-right-cont .ivu-select{
	/* margin: 10px auto; */
	width: 80px!important;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
	box-shadow:0px 0px 20px 8px #ff0000; /*#58E7E7*/
	box-sizing: border-box;
}
.body-right-right-cont .ivu-select-selection{
	width: 80px;
	height: 80px;
	border: 0px;
	/* background-color: #aaa; */
}
.body-right-right-cont .ivu-select-single .ivu-select-selection .ivu-select-placeholder,.body-right-right-cont .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
	height: 80px;
	width: 80px;
	line-height: 80px;
	font-size: 16px;
	color: #fff;
	font-weight: bold;
	text-align: center;	
	padding: 0;
	background-color: #032d60;
}
.body-right-right-cont .ivu-select-placeholder{
	background-color: #032d60;
}
.body-right-right-cont .ivu-select-arrow{
	color: #fff;
	font-size: 14px;
	top: 70px;
	right: 33px;
}
.prodetail-year-cont .ivu-col-span-12{
	width: 100%;
}
.prodetail-year-cont .ivu-date-picker{
	width: 100%;
}
.prodetail-year-cont .ivu-icon, .prodetail-year-cont .ivu-input-icon{
	height: 42px;
	color: #fff;
	line-height: 42px;
	font-size: 20px;
	margin-right: 10px;
}
.prodetail-year-cont .ivu-input-icon-normal+.ivu-input{
	height: 42px;
	background-color: #032d60;
	border: 0px;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	padding-left: 20px;
}

	.pro-area-select .ivu-input-default{
        background-color: #032d60;
        border: 0px;
        font-size: 14px;
        color: #fff;
    }
    .pro-area-select .ivu-cascader-arrow{
        color: #fff;
        font-size: 16px;
    }
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
    	background-color: rgba(24, 24, 64, 0.5);
	}
	.body-left-cont{
		width: 26%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.body-right-cont{
		width: 74%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.body-right-right-cont{
		width: 200px;
		height: 100%;
		padding: 4px;
		flex-shrink: 0;
		position: relative;
	}
	.body-left-item1{
		width: 100%;
		height: auto;
		background-color: rgba(24, 24, 64, 0.5);
		padding: 4px;
		position: relative;
	}
	.body-left-item2{
		width: 100%;
		height: 30%;
    	background-color: rgba(24, 24, 64, 0.5);
    	display: flex;
    	flex-direction: column;
    	position: relative;
    	padding: 4px;
	}
	.body-right-top{
		width: 100%;
		height: 75%;
		display: flex;
	}
	.body-right-bottom{
		width: 100%;
		height: 25%;
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
	.pro-compare-cont{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: solid 1px #032d60;
		background-color: rgba(0, 12, 59, 0.3);
		box-shadow:0px 0px 50px 10px #032d60 inset;
	}
	.pro-year-out-cont{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: solid 1px #032d60;
		background-color: rgba(0, 12, 59, 0.3);
		box-shadow:0px 0px 50px 10px #032d60 inset;
	}
	.pro-area-select{
        position: absolute;
        top: 10px;
        left: 5px;
        z-index: 10;
        box-shadow:0px 0px 20px 8px #58E7E7;
        box-sizing: border-box;
        border-radius: 5px;
    }

/* 左半边部分end */

/* 右半边部分start */
	/* 地图部分start */
		.world-map-cont{
			position: relative;
			width: 100%;
			height: 100%;
		}
		/* 地图上方显示筛选栏筛选条件 */
		.lable-cont{
			height: 42px;
			position: absolute;
			top: 20px;
			left: 10px;
			display: flex;
			z-index: 10;
		}
		.lable-item{
			/* width: 120px; */
			background-color: #032d60;
			box-shadow:0px 0px 20px 8px #58E7E7;
			box-sizing: border-box;
			height: 42px;
			padding: 10px 20px;
			font-size: 16px;
			font-weight: bold;
			border-radius: 6px;
			letter-spacing:5px;
			margin-right: 20px;
			color: #fff;
		}
		/* 地图上方筛选时间下拉框 */
		.prodetail-year-cont{
			width: 160px;
			height: 42px;
			position: absolute;
			top: 20px;
			right: 20px;
			background-color: #032d60;
			box-shadow:0px 0px 20px 8px #ffff00; /*#58E7E7*/
			border-radius: 6px;
			box-sizing: border-box;
			z-index: 10;
		}
		/* 地图右侧显示单位按钮 */
		.prodetail-units-button-cont{
			width: 50px;
			height: 250px;
			position: absolute;
			top: 80px;
			right: 10px;
			z-index: 2;
			display: flex;
			flex-direction: column;
			justify-content: space-around
		}
		.prodetail-units-button-cont button{
			width: 50px;
			height: 50px;
			padding: 5px 10px;
			border-radius: 50%;
			border-width: 0px; /* 边框宽度 */
			background-color: rgba(0, 12, 59, 0.3);	/* 背景颜色 */
			box-shadow:0px 0px 20px 4px #233d70 inset; 	/*阴影*/
			cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
			outline: none; /* 不显示轮廓线 */
			font-family: Microsoft YaHei; /* 设置字体 */
			color: #ccc; /* 字体颜色 */
			/* 超出范围用省略号显示 */
			text-overflow:ellipsis;		/*表示文本超出用省略号代替*/
			white-space:nowrap;						/*表示文本不换行*/
			overflow:hidden;
		}
		.prodetail-units-button-cont button:focus{
			/* background:#58e7e7; */
			box-shadow:0px 0px 20px 4px #58e7e7 inset; 	/*阴影*/
			/* color: #000; */
    	}
		/* 右侧下拉框及筛选栏板块 */
		.right-choice-out-cont{
			width: 100%;
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			box-sizing: border-box;
			border: solid 1px #032d60;
			background-color: rgba(0, 12, 59, 0.3);
			box-shadow:0px 0px 50px 10px #032d60 inset;
		}
		.right-choice-cont{
			width: 100%;
			height: auto;
		}
		.select-cont{
			width: 80px;
			height: 80px;
			margin: 15px auto;
		}
		.animal-cont, .product-cont{
			width: 100%;
		}
		.right-name-cont{
			width: 100%;
			height: 30px;
			line-height: 30px;
			padding-left: 10px;
			margin-top: 10px;
			border-radius: 5px;
			box-sizing: border-box;
			border: solid 1px #032d60;
			background-color: rgba(0, 12, 59, 0.3);
			box-shadow:0px 0px 20px 5px #032d60;
			color: #fff;
		}
		.right-show-cont{
			width: 100%;
			flex-wrap: wrap;
			display: flex;
			justify-content: space-around;
			/* flex-flow: row || wrap; */
		}
		.right-show-cont button{
			margin: 2px 0;
			padding: 5px 10px;
			border-radius: 5px;
			border-width: 0px; /* 边框宽度 */
			background-color: rgba(0, 12, 59, 0.3);	/* 背景颜色 */
			box-shadow:0px 0px 20px 4px #233d70 inset; 	/*阴影*/
			cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
			outline: none; /* 不显示轮廓线 */
			font-family: Microsoft YaHei; /* 设置字体 */
			color: #ccc; /* 字体颜色 */
		}
		.right-show-cont button:focus{
			/* background:#8753e2; */
			box-shadow:0px 0px 20px 4px #58e7e7 inset; 	/*阴影*/	
    	}
	/* 地图部分end */
/* 右半边部分end */

/* 中间部分start */

/* 中间部分end */
	
	
	
	
</style>

<template>
	<div class="main-containner">
		<header class="header">
			<span>生产详情</span>
		</header>
		<div class="body-containner">
			<div class="body-left-cont">
				<div class="body-left-item1">
					<div class="pro-compare-cont">
						<div class="border-top-left"></div>
				        <div class="border-top-right"></div>
				        <div class="border-bottom-left"></div>
				        <div class="border-bottom-right"></div>
						<pro-compare :aliveproductmapdata="aliveproductmapdata" :choiceitem="choiceitem" :choiceyear="choiceyear"></pro-compare>
					</div>
				</div>
				<div class="body-left-item2">
					<div class="pro-year-out-cont">
						<div class="border-top-left"></div>
				        <div class="border-top-right"></div>
				        <div class="border-bottom-left"></div>
				        <div class="border-bottom-right"></div>
				        <Row style="width: 150px; margin-right:5px;" class="pro-area-select"><Cascader :data="countryData" v-model="countryvalue" @on-change="changeSelect"></Cascader></Row>
						<pro-year-line :animalYearCount="animalYearCount" :choiceitem="choiceitem"></pro-year-line>
					</div>
				</div>
			</div>
			<div class="body-right-cont">
				<div class="body-right-top">
					<div class="world-map-cont">
						<div class="lable-cont">
							<div class="lable-item">{{oiefname}}</div>
							<div class="lable-item">{{choiceitem.namecn}}<span>({{prounitcn}})</span></div>
						</div>
						<div class="prodetail-year-cont">
							<Row>
								<Col span="12">
									<DatePicker type="year" value="2016" placeholder="Select year" @on-change="choiseYear"></DatePicker>
								</Col>
							</Row>
						</div>
						<div class="prodetail-units-button-cont">
							<button v-for="item in units" @click="unitClick(item)">{{item}}</button>
						</div>
						<pdetail-world-map :aliveproductmapdata="aliveproductmapdata"></pdetail-world-map>
					</div>
				</div>
				<div class="body-right-bottom">
					<product-bar :aliveproductmapdata="aliveproductmapdata" :choiceyear="choiceyear"></product-bar>
				</div>
			</div>
			<div class="body-right-right-cont">
				<div class="right-choice-out-cont">
					<div class="border-top-left"></div>
			        <div class="border-top-right"></div>
			        <div class="border-bottom-left"></div>
			        <div class="border-bottom-right"></div>
					<div class="right-choice-cont">
						<div class="select-cont">
							<Select v-model="epidAnimalValue" @on-change="epidAnimalSelect">
						        <Option v-for="item in epidAnimalData" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
						</div>
					    <div class="animal-cont">
					    	<div class="right-name-cont">活体动物</div>
					    	<div class="right-show-cont">
					    		<button @click="aliveClick(item)" class="right-show-item" v-for="item in aliveAniaml">{{item.namecn}}</button>
					    	</div>
					    </div>
					    <div class="product-cont">
					    	<div class="right-name-cont">加工产品</div>
					    	<div class="right-show-cont">
					    		<button @click="proClick(item)" class="right-show-item" v-for="item in animalProduct">{{item.namecn}}</button>
					    	</div>
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import request from '../request/prospecial.js'
	import request from '../../request/prodetail.js'
    import requestSelect from "../../request/select.js"
	import ProCompare from './procompare.vue'
	import PdetailWorldMap from './map/pdetailworldmap.vue'
	import ProductBar from './map/productbar.vue'
	import ProYearLine from './map/proyearline.vue'

	
	export default {
		components: {
			ProCompare,
			ProYearLine,
			PdetailWorldMap,
			ProductBar,
		},
		data(){
			return {				
                allEpidAnimal: [],				//动物科动物以及加工产品总数据
                animalAndPro: [],				//该科活体动物以及动物产品

                aliveAniaml: [],				//活体动物
                animalProduct: [],				//加工产品
                
                epidAnimalData: [],				//动物科下拉框数据
                epidAnimalValue: [],

                continents: [],											//生产曲线列表数据
                countryvalue: [null,-1],                           		//大洲--国家
                countryData: [{value: null, label: '全球'}],
				
				allAnimalYearCount: [],					//生产曲线总数据（全单位）
				animalYearCount: [],					//生产曲线按单位筛选数据
                
                allproductmapdata: [],					//各地区活体动物或加工产品生产数据(筛选单位之前的)
                aliveproductmapdata: [],				//各地区活体动物或加工产品生产数据(筛选单位之后的)

                oiefname: '',
                choiceitem: {},
                units: [],						//生产产品的单位数组
                prounitcn: '',					//生产的单位

                choiceyear: 2016,
			}
		},
		mounted(){		//async 异步请求
			this.requestAnimalSelect();
			this.countryselect();
			this.initialize();
		},
		methods: {
			// 查询下拉框列表,活体动物以及加工产品
			async requestAnimalSelect(){
    			var data = await request.requestaniamlselect(9);
    			this.allEpidAnimal = data;
    			this.getEpidAnimalData();
    		},
    		// 按照动物科id查询活体动物和动物产品
			async animalButtonByAfid(){
    			var data = await request.animalButtonByAfid(this.epidAnimalValue);
    			this.animalAndPro = data;
    			this.getAliveAndPro();
    		},
    		//查询大洲-国家
            async countryselect(){
                var data = await requestSelect.countryselect();
                this.continents = data;
                this.getCountryData()
            },
           

    		// 列表畜牧生产活体动物不分页
    		async queryProductLiveList(itemid, year){
    			var data = await request.queryProductLiveList(itemid, year);
    			this.allproductmapdata = data;
    		},
    		// 列表畜牧生产产品不分页
    		async queryProducttionList(itemid, year){
    			var data = await request.queryProducttionList(itemid, year);
    			this.allproductmapdata = data;
    		},
 			// 根据科/动物查询活体动物生产走势 
            async queryAnimalYearCount(){
                var data = await request.queryAnimalYearCount(this.countryvalue[0], this.countryvalue[1], -1, this.choiceitem.faoid);
            	this.units = data.Unitcn;
                this.allAnimalYearCount = data.list;
                this.getProUnitcn(this.allproductmapdata)
                this.getAnimalYearCount(this.prounitcn);
            },
             // 根据科/动物查询动物产品生产走势 
            async queryAnimalProductYearCount(){
                var data = await request.queryAnimalProductYearCount(this.countryvalue[0], this.countryvalue[1], -1, this.choiceitem.faoid);
            	this.units = data.Unitcn;
                this.allAnimalYearCount = data.list;
                this.getProUnitcn(this.allproductmapdata)
                this.getAnimalYearCount(this.prounitcn);
            },



    		// 单位处理的方法
	    		// 获取单位数组
	    		// getUnitsData(units){
    			// 	this.units = units;
	    		// },
	    		// 单位格式化
    			getProUnitcn(productmapdata){
    				if (productmapdata.length>0) {
    					this.prounitcn = productmapdata[0].unitcn;
    				}
    				else{
    					this.prounitcn = this.units[0];
    				}
    			},


    		// 数据格式化start
    			//动物科下拉框数据格式化(只存id以及名字)
	    		getEpidAnimalData(){
					// 初始化
					this.epidAnimalData = [];
					for (var i = 0; i < this.allEpidAnimal.length; i++) {	
						var obj = {};
						Object.assign(obj,{
							value: this.allEpidAnimal[i].id,
							label: this.allEpidAnimal[i].oiefnamecn,
						});
						this.epidAnimalData.push(obj);
					}
				},
				//动物科下活体动物和动物产品数据格式化
				getAliveAndPro(){
					// 初始化
					this.aliveAniaml = [];
					this.animalProduct = [];
					this.oiefname = this.animalAndPro[0].oiefnamecn;
					var arr = this.animalAndPro[0].faoitems;
					for (var i = 0; i < arr.length; i++) {	
						var obj = {};
						Object.assign(obj,{
							faoid: arr[i].faoid,
							namecn: arr[i].namecn,
							type: arr[i].type,
						});
						if (arr[i].type == 0) {
							this.aliveAniaml.push(obj);
						}else if(arr[i].type == 1){
							this.animalProduct.push(obj);
						}
					}
				},
				 // 大洲-国家格式标准化
	            getCountryData(){
	                for (var i = 0; i < this.continents.length; i++) {
	                    var obj={};
	                    Object.assign(obj,{
	                        value: this.continents[i].continentcn,
	                        label: this.continents[i].continentcn,
	                        children: [{value:-1, label:'当前大洲'}],
	                    });
	                    for (var j = 0; j < this.continents[i].countrys.length; j++) {
	                        obj.children.push({value: this.continents[i].countrys[j].id, label: this.continents[i].countrys[j].shortnamecn,})
	                    }
	                    this.countryData.push(obj);
	                }
	            },
				// 根据单位对allproductmapdata数据进行分组
				getAliveProductMapData(unit){
					this.aliveproductmapdata = [];
					for (var i = 0; i < this.allproductmapdata.length; i++) {
						if (this.allproductmapdata[i].unitcn == unit) {
							this.aliveproductmapdata.push(this.allproductmapdata[i]);
						}
					}
				},
				// 根据单位筛选生产走势
	            getAnimalYearCount(unit){
	                this.animalYearCount = [];
                    for (var i = 0; i < this.allAnimalYearCount.length; i++) {
                        if (this.allAnimalYearCount[i].unitcn == unit) {
                            this.animalYearCount.push(this.allAnimalYearCount[i])
                        }
                    }
	            },

			// 按钮鼠标点击事件
			async aliveClick(item){
				await this.queryProductLiveList(item.faoid, this.choiceyear);
				this.choiceitem = item;
    			this.getAliveProductMapData(this.prounitcn);
    			await this.queryAnimalYearCount();
			},
			async proClick(item){
				await this.queryProducttionList(item.faoid, this.choiceyear);
				this.choiceitem = item;
    			this.getAliveProductMapData(this.prounitcn);
    			await this.queryAnimalProductYearCount();
			},
			// 单位选择按钮的点击事件
			unitClick(item){
				this.prounitcn = item;
				this.getAliveProductMapData(item);
				this.getAnimalYearCount(item);
			},
			// 下拉框改变函数
				//动物科下拉框改变函数
			epidAnimalSelect(){
				this.animalButtonByAfid();
			},
			async choiseYear(year){
				this.choiceyear = parseInt(year);
				if (this.choiceitem.type == 0) {
					await this.queryProductLiveList(this.choiceitem.faoid, this.choiceyear);
				}else if (this.choiceitem.type == 1) {
					await this.queryProducttionList(this.choiceitem.faoid, this.choiceyear);
				}
				// 如果之前默认年份没有数据，那么prounitcn即为空，此时需要对prounitcn初始化再分组
				if (this.prounitcn == '') {
    				this.getProUnitcn(this.allproductmapdata);
					this.getAliveProductMapData(this.prounitcn);
				}else {
					this.getAliveProductMapData(this.prounitcn);
				}
			},
			// 生产曲线地区下拉框改变函数
            async changeSelect(value){
                this.countryvalue = value;
                if (this.choiceitem.type == 0) {
                    await this.queryAnimalYearCount(); 
                }else if (this.choiceitem.type == 1){
                    await this.queryAnimalProductYearCount();
                }  
            },

			//初始化方法
			async initialize(){
				var oiefid = parseInt(this.$route.query.oiefid);
				var itemid = parseInt(this.$route.query.itemid);
				var itemcn = this.$route.query.itemcn;
				var unitcn = this.$route.query.unitcn;
				var animaltype = this.$route.query.animaltype;
				// choiceitem，其中封装了faoid,namecn,type
				var citem = {faoid:itemid, namecn:itemcn, type:animaltype};
				this.epidAnimalValue.push(oiefid);
				this.prounitcn = unitcn;
				this.choiceitem = citem;
				if (animaltype == 0) {
					await this.queryProductLiveList(itemid, this.choiceyear);
					await this.queryAnimalYearCount();
				}else if (animaltype == 1) {
					await this.queryProducttionList(itemid, this.choiceyear);
					await this.queryAnimalProductYearCount();
				}
				this.getAliveProductMapData(this.prounitcn);
			}
		},
	}
</script>