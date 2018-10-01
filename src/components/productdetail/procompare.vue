<style>
	.choice-cont .ivu-row{
		width: 100%!important;
	}
	.choice-cont .ivu-select-single .ivu-select-selection{
		height: 24px;
	}
</style>
<style scoped>
	.procompare-cont{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.name-cont{
		width: 100%;
		padding: 4px 10px;
		color: #fff;
		font-size: 12px;
		flex-shrink: 0;
		/* background-color: #fff; */
	}
	.value-cont{
		width: 100%;
		/* background-color: rgba(210, 200, 246, 0.4); */
		text-align: center;
	}
	/* 全球生产总量展示板块 */
	.world-pro-value-cont{
		width: 100%;
		height: auto;
		/* background-color: rgba(56, 48, 246, 0.4); */
		flex-shrink: 0;
	}
	.world-pro-value-cont .name-cont{
		padding-bottom: 0;
	}
	.world-pro-value-cont .value-cont{
		padding: 5px;
		font-size: 40px;
		line-height: 40px;
		color: #f00;
	}
	/* 全球生产总量展示板块 end*/
	/* 地区占比查询板块 start */
	.query-local-pro-cont{
		width: 100%;
		height: 100%;
		/* background-color: rgba(56, 48, 246, 0.4); */
		display: flex;
		flex-direction: column;
	}
	.query-middle-cont{
		width: 100%;
		height: 66px;
		/* background-color: #33f; */
		display: flex;
		justify-content: space-around;
		flex-shrink: 0;
	}
		/* 查询筛选条件栏 */
		.query-item{
			width: 40%;
			height: 100%;
			/* background-color: #ff3; */
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.query-item .name-cont{
			padding: 0;
			text-align: center;
		}
		.query-item .choice-cont{
			width: 100%;
			height: auto;
		}
		.query-item .value-cont{
			font-size: 12px;
			padding: 0;
			color: #ff0;
		}
		/* 查询筛选条件栏 end */

	.pie-cont{
		width: 100%;
		height: auto;
		flex-shrink: 0;
	}
	/* 地区占比查询板块 end */
	
</style>

<template>
	<div class="procompare-cont">
		<div class="world-pro-value-cont">
			<div class="name-cont">全球生产总量</div>
			<div class="value-cont">{{worldCount}}</div>
		</div>
		<div class="query-local-pro-cont">
			<div class="name-cont">地区占比查询</div>
			<div class="query-middle-cont">
				<div class="query-item">
					<div class="name-cont">地区一</div>
					<div class="choice-cont">
						<Row style="width: 150px; margin-right:5px;"><Cascader :data="countryData" v-model="countryvalue1" @on-change="changeSelect1"></Cascader></Row>
					</div>
					<div class="value-cont">{{areaCount1}}</div>
				</div>
				<div class="query-item">
					<div class="name-cont">地区二</div>
					<div class="choice-cont">
						<Row style="width: 150px; margin-right:5px;"><Cascader :data="countryData" v-model="countryvalue2" @on-change="changeSelect2"></Cascader></Row>
					</div>
					<div class="value-cont">{{areaCount2}}</div>	
				</div>
			</div>
			<div class="pie-cont">
				<pro-compare-pie :areaCount1="areaCount1" :areaCount2="areaCount2"></pro-compare-pie>
			</div>
		</div>	
	</div>
</template>

<script>
	import request from '../../request/prodetail.js'
	import requestSelect from "../../request/select.js"
	import ProComparePie from './map/procomparepie.vue'

	export default {
		props: {
			aliveproductmapdata: {
				type: Array,
				default: null
			},
			choiceitem: {
				type: Object,
				default: null
			},
			choiceyear: {
				type: Number,
				default: 0
			}
		},
		watch: {
			aliveproductmapdata: function(newValue, oldValue){
				this.getWorldCount(newValue);
			},
			choiceitem: function(newValue, oldValue){
			},
		},
		components: {
			ProComparePie,
		},
		data(){
			return {
				
                continents: [],

                worldCount: 0,
                areaCount1: 0,
                areaCount2: 0,

				countryvalue1: [],								//大洲--国家(1)
				countryvalue2: [],								//大洲--国家(2)
                countryData: [{value: null, label: '全球'}],				//选择的国家信息，默认为null，全球

                areaProData1: [],										//限定范围内的生产数据
                areaProData2: [],										//限定范围内的生产数据

                
			}
		},
		mounted(){		//async 异步请求
			this.countryselect();
			// this.changeSelect1();
			// this.changeSelect2();
		},
		methods: {
			// 计算生产总量
			getProCount(proData){
				var count = 0;
				for (var i = 0; i < proData.length; i++) {
					count += proData[i].value;
				}
				return count;
			},
			// 计算全球生产总量
			getWorldCount(aliveproductdata){
				this.worldCount = 0;
				this.worldCount = this.getProCount(aliveproductdata)
			},
			// 计算区域1生产总量
			getAreaCount1(){
				this.areaCount1 = 0;
				this.areaCount1 = this.getProCount(this.areaProData1)
			},
			// 计算区域2生产总量
			getAreaCount2(){
				this.areaCount2 = 0;
				this.areaCount2 = this.getProCount(this.areaProData2)
			},
			// 下拉框改变函数
			async changeSelect1(value){
				this.countryvalue1 = value;
				if(this.choiceitem.type == 0){
					await this.queryAreaLiveList(this.countryvalue1[0], this.countryvalue1[1], this.choiceitem.faoid, this.choiceyear);
				}else if(this.choiceitem.type == 1){
					await this.queryAreationList(this.countryvalue1[0], this.countryvalue1[1], this.choiceitem.faoid, this.choiceyear);
				}
				this.getAreaCount1();
			},
			async changeSelect2(value){
				this.countryvalue2 =value;
				if(this.choiceitem.type == 0){
					await this.queryAreaLiveList2(this.countryvalue2[0], this.countryvalue2[1], this.choiceitem.faoid, this.choiceyear);
				}else if(this.choiceitem.type == 1){
					await this.queryAreationList2(this.countryvalue2[0], this.countryvalue2[1], this.choiceitem.faoid, this.choiceyear);
				}
				this.getAreaCount2();
			},

			//查询大洲-国家
    		async countryselect(){
    			var data = await requestSelect.countryselect();
    			this.continents = data;
    			this.getCountryData()
    		},

    		//select1查询限定范围的活体动物生产数据
 			async queryAreaLiveList(conname, countryid, itemid, year){
    			var data = await request.queryAreaLiveList(conname, countryid, itemid, year);
    			this.areaProData1 = data;
    		},   
    		//select1查询限定范围的加工产品生产数据
 			async queryAreationList(conname, countryid, itemid, year){
    			var data = await request.queryAreationList(conname, countryid, itemid, year);
    			this.areaProData1 = data;
    		}, 		
    		//select2查询限定范围的活体动物生产数据
 			async queryAreaLiveList2(conname, countryid, itemid, year){
    			var data = await request.queryAreaLiveList(conname, countryid, itemid, year);
    			this.areaProData2 = data;
    		},   
    		//select2查询限定范围的加工产品生产数据
 			async queryAreationList2(conname, countryid, itemid, year){
    			var data = await request.queryAreationList(conname, countryid, itemid, year);
    			this.areaProData2 = data;
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
		},
	}
</script>