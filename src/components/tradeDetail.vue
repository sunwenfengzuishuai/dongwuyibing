<style>

</style>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .illdetails-containner {
    width: 100%;
    height: 100vh;
    background: #05121A url('../assets/main-background.jpg') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
  }
  .header {
    width: 100%;
    height: 46px;
    background-color: rgba(24, 24, 64, 0.8);
    text-align: center;
  }
  .header span {
    line-height: 46px;
    color: #fff;
    font-size: 1.6em;
  }
  .body-containner {
    width: 100%;
    height: 90%;
    display: inline-flex;
  }

  /* 右半边部分内容start */
  .body-left-cont {
    position: relative;
    width: 60%;
    height: 100%;
    display: flex;
    box-shadow:0px 0px 50px 10px #032d60 inset ;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(24, 24, 64, 0.8);
  }
  .body-left-cont .tip{
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 25%;
    padding: 15px;
    border: solid 1px #58e7e7;
    border-radius:5px;
  }
  .body-left-cont .tip>div{
    color: #fff;
    border-bottom: 1px solid yellow;
  }
  /* 查询条件择栏start */
  .ill-search-cont {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 70%;
    height: 40px;
    border-radius:5px;

    font-size: 1em;
    color: #666;
    display: flex;
    flex-shrink: 0;
  }

  .ill-search-cont .search-cont {
    display: flex;
    height: 30px;
    margin-top: 5px;
    margin-left: 10px;
  }

  /* 查询条件选择栏end */
  /*单选框start*/
  .animaltype-cont {
    width: 180px;
    height: 20px;
    background-color: #ccc;
    position: absolute;
    top: 15px;
    right: 10px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }

  .jinchukou-icon {
    left: 10px;
  }
  /*单选框end*/

  /* 左半边部分内容start */
  .body-right-cont {
    width: 40%;
    height: 100%;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    background-color: rgba(24, 24, 64, 0.8);
    box-sizing: border-box;
    /* border: solid 7px rgba(88, 231, 231, 0.6); */
    /* 	border-radius: 10px; */
    overflow: hidden;
    padding: 7px;
    position: relative;
  }
  .body-right-cont .item1,.body-right-cont .item2{
    position: relative;
    width: 100%;
    height: 50%;
    box-shadow:0px 0px 50px 10px #032d60 inset ;
  }

  /*下半边部分内容start */
  .body-bottom-cont{
    margin-top: 1%;
    width: 100%;
    height: 38%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(24, 24, 64, 0.8)
  }
  .body-bottom-cont>div{
    position: relative;
    display: flex;
    width: 33%;
    height: 100%;
    box-shadow: 0px 0px 50px 10px #032d60 inset ;
  }
  .body-bottom-cont .left,.body-bottom-cont .right{
    width: 50%;
    height: 100%;
  }
/*疫病表格start*/
  .smallfont{
    font-size: 12px;
  }
  .disreport-cont {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }
  .disreport-cont .tablecontent td:nth-child(3) {
    width: 15%;
  }

  .trade-cont {
    width: 50%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    border-right: solid 1px #58e7e7;
    flex-direction: column;
    position: relative;
  }
  .module-name {
    width: 100%;
    height: 36px;
    color: #fff;
    font-size: 1.2em;
    display: flex;
    flex-shrink: 0;
    background-color: #141738;
    justify-content: space-between;
  }

  .module-name span {
    display: inline-block;
    line-height: 36px;
    width: 90px;
    margin-left: 20px;
    flex-shrink: 0;
  }

  .module-name .choise-cont {
    width: 200px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-right: 8px;
    flex-shrink: 0;
  }

  .tabletitle-cont {
    width: 100%;
    height: 24px;
    flex-shrink: 0;
  }
  .tabletitle-cont tr td{

  }
  .tabletitle{
    width: 100%;
    padding-left: 30px;
  }
  .tabletitle tr {
    height: 100%;
  }
  .tabletitle tr td {
    font-size: 0.8em;
    color: #217197;
  }
  .tablecontent-cont {
    color: white;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .tablecontent{
    width:100%;
    padding-left: 5px;
  }
  .tablecontent tr {
    width: 100%;
    height: auto;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .tablecontent tr:nth-child(2n-1) {
    background-color: #122648;
  }

  .tablecontent tr:hover {
    background-color: #4666ee;
    cursor: pointer;
  }
  /* 滚动条设置start */
  /*高宽分别对应横竖滚动条的尺寸*/
  .scorllbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /*滚动条里面小方块*/
  .scorllbar::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(50, 200, 200, 0.6);
    background: rgba(50, 200, 200, 0.5);
  }

  /*滚动条里面轨道*/
  .scorllbar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    border-radius: 5%;
    background: rgba(255, 255, 255, 0.1);
  }

  /* 滚动条设置end */
  /* 分页start */
  .page-cont {
    height: 27px;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 1%;
    color:black;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
  }

  .totalcont {
    line-height: 27px;
    margin-left: 4%;
  }

  .pagebar {
    width: 60%;
    margin-left: 10%;
  }
  .pagebar.left-top{
    margin-left: 20%;
  }
  .erro-show-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: lightskyblue;
    font-size: 1.6em;
  }

  .erro-show {
    text-align: center;
  }

  /* 分页end */
/*疫病表格end*/
</style>

<template>
  <div class="illdetails-containner ">
    <header class="header">
      <span>贸易详情</span>
    </header>
    <div class="body-containner">
      <div class="body-right-cont ">
        <div class="border-top-left big-border"></div>
        <div class="border-top-right big-border"></div>
        <div class="border-bottom-left big-border"></div>
        <div class="border-bottom-right big-border"></div>
        <div class="item1">
          <div class="border-bottom-left"></div>
          <div class="border-name-top">
            <span>时间-贸易国家图</span>
          </div>
          <tradeleftmap1 :countryCountToMapL1="countryCountToMapL1"></tradeleftmap1>
        </div>
        <div class="item2">
          <div class="border-top-right"></div>
          <div class="border-name-top">
            <span>时间-贸易值图</span>
          </div>
          <tradeleftmap2 :countryCountToMapL2="countryCountToMapL2"></tradeleftmap2>
        </div>
      </div>
      <div class="body-left-cont">
        <div class="border-top-left "></div>
        <div class="border-top-right "></div>
        <div class="border-bottom-left "></div>
        <div class="border-bottom-right "></div>
        <div class="border-name-top">
          <span>各国贸易图示</span>
        </div>
        <traderightmap1 :countryCountToMapR="countryCountToMapR"
                        :centerCountryEN="centerCountryEN"
        :countryCountToMapRTwo="countryCountToMapRTwo" :elementid="elementidFromRoute"></traderightmap1>
        <div class="tip">
          <div class="centerCountry">中心国家：<span>{{centerCountry}}</span></div>
          <div class="tradeYear">年份：<span>{{yearFromRouter}}</span></div>
          <div class="tradeType">贸易类型：<span>{{elementidFromRoute=='5608'?'进口':'出口'}}</span></div>
          <div class="animalType">商品：<span>{{pinzhong}}</span></div>
          <div class="tradeSum">贸易量：<span style="color: yellowgreen;font-size: 36px">{{sum}}</span></div>
        </div>
        <div class="ill-search-cont">
          <div class="search-cont">
            <!-- 选择大洲国家 -->
            <Row style="width: 150px; margin-right:5px;">
              <Cascader :data="countryData" v-model="countryvalue"></Cascader>
            </Row>
            <Row v-if="animaltype == '0'" style="width: 150px; margin-right:5px;">
              <Cascader :data="animalData" v-model="animalvalue"></Cascader>
            </Row>
            <Row v-if="animaltype == '1'" style="width: 150px; margin-right:5px;">
              <Cascader :data="proanimalData" v-model="proanimalvalue"></Cascader>
            </Row>
            <Row style="width: 150px; margin-right:5px;">
              <Col span="12">
                <DatePicker type="year" :value="$route.query.year" placeholder="Select year" style="width: 150px"
                            @on-change="choiseYear"></DatePicker>
              </Col>
            </Row>
            <Button shape="circle" icon="ios-search" @click="queryTradeData"></Button>
          </div>
        </div>
        <div class="animaltype-cont">
          <RadioGroup v-model="animaltype" @on-change="proChoiseValue">
            <Radio label="0">活体动物</Radio>
            <Radio label="1">加工产品</Radio>
          </RadioGroup>
        </div>
        <div class="animaltype-cont jinchukou-icon">
          <RadioGroup v-model="elementid" @on-change="">
            <Radio label="5608">进口</Radio>
            <Radio label="5909">出口</Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
    <div class="body-bottom-cont">
      <div class="item1">
        <div class="border-top-left "></div>
        <div class="border-top-right "></div>
        <div class="border-bottom-left "></div>
        <div class="border-bottom-right "></div>
        <div class="border-name-top">
          <span>一级贸易</span>
        </div>
        <div class="left">
          <tradecountryleft :countryCountToMapR="countryCountToMapR" @changeCenterCountry="handleChangeCenterCountry"></tradecountryleft>
          <!--<tradecountryleft1></tradecountryleft1>-->
          <showCountryList :currentCountryMsg="currentCountryMsg"></showCountryList>
        </div>
        <div class="right">
          <tradecountryright :countryCountToMapR="countryCountToMapR" :centerCountry="centerCountry"></tradecountryright>
        </div>
      </div>
      <div class="item2">
        <div class="border-top-left "></div>
        <div class="border-top-right "></div>
        <div class="border-bottom-left "></div>
        <div class="border-bottom-right "></div>
        <div class="border-name-top">
          <span>二级贸易</span>
        </div>
        <div class="left">
          <tradecountryleft :countryCountToMapR="countryCountToMapRTwo"  @changeCenterCountry="handleChangeCenterCountry1"></tradecountryleft>
          <!--<tradecountryleft1 :countryCountToMapR="countryCountToMapRTwo" ></tradecountryleft1>-->
          <showCountryList :currentCountryMsg="currentCountryMsg1"></showCountryList>
        </div>
        <div class="right">
          <tradecountryright1 :centerCountry="leftCenterToLeft" :countryCountToMapR="toLeftCountryList"></tradecountryright1>
        </div>
      </div>
      <div class="item3">
        <div class="border-top-left "></div>
        <div class="border-top-right "></div>
        <div class="border-bottom-left "></div>
        <div class="border-bottom-right "></div>
        <div class="border-name-top">
          <span>疫病预警</span>
        </div>
        <div class="disreport-cont">
          <!--<div class="module-name">-->
            <!--<span>疫病快报</span>-->
          <!--</div>-->
          <div class="tabletitle-cont">
            <table class="tabletitle" cellspacing="0" cellpadding="0">
              <tr>
                <td></td>
                <td>国家</td>
                <td>疫病</td>
                <td>危险等级</td>
                <td>报道时间</td>
                <td>报道类型</td>
              </tr>
            </table>
          </div>
          <div class="tablecontent-cont scorllbar">
            <div v-if="diseasereports.length!=0">
              <table class="tablecontent" cellspacing="0" cellpadding="0">
                <tr v-for="(report, index) in diseasereports" class="smallfont">
                  <td>{{index+1}}</td>
                  <td>{{report.country}}</td>
                  <td>{{report.diease}}
                  <td v-if="countryCountToMapRName.indexOf(report.country)!==-1" style="color: red;">一级警告</td>
                  <td v-else="" style="color: orangered;">二级警告</td>
                  <td>{{report.reportdate}}</td>
                  <td>{{getReportTypeStr(report)}}</td>
                </tr>
              </table>
              <div class="page-cont">
                <div class="totalcont">
                  共{{diseasetotalCount}}条
                </div>
                <div class="pagebar">
                  <Page :current="diseasepageNo" :page-size="diseasepageSize" :total="diseasetotalCount" show-total
                        @on-change="diseasepageChanged" simple/>
                </div>
              </div>
            </div>
            <div style="color: yellowgreen;font-size: 36px;margin-top:20px;" v-else >
              没有疫病警告
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tradeleftmap1 from './tradeDetail/map/tradeleftmap1'
  import tradeleftmap2 from './tradeDetail/map/tradeleftmap2'
  import traderightmap1 from './tradeDetail/map/traderightmap1'
  import tradecountryleft from './tradeDetail/tradeCountryleft'
  import tradecountryleft1 from './tradeDetail/tradeCountryleft1'
  import showCountryList from './tradeDetail/showCountryList'
  import tradecountryright from './tradeDetail/map/tradeCountryright'
  import tradecountryright1 from './tradeDetail/map/tradeCountryright1'

  import request from '../request/prospecial.js'
  import requestTrade from '../request/tradeSpecial'
  import requestSelect from "../request/select"
  export default {
    data () {
      return {
        animaltype:'0',
        countryData: [{value: null, label: '全球'}],
        continents: [],			//从后台查询的大洲-国家信息，处理后赋值给countryData
        epidAnimal: [],		//从后台查询的动物科-动物信息，处理后赋值给animalData
        animalData: [{value: -1, label: '全部动物'}],	//选择的动物信息，默认为-1，全部动物(活体动物)
        proanimalData: [{value: -1, label: '全部产品'}],	//选择的产品信息，默认为-1，全部产品(加工产品)
        elementid: '5608',
        countryvalue: [null,-1],
        animalvalue: [-1,-1],							//动物科--动物
        proanimalvalue: [-1,-1],							//动物科--产品
        tradeYear:'2013',
        /*从路由取出来的数据*/
        itemidFromRoute:'',//动物个体
        oiefidFromRoute:'',//动物科
        countryidFromRoute:'',//国家id
        elementidFromRoute:'',//进出口
        continentcnFromRoute:'',//大洲
        animaltypeFromRoute:'',//大洲
        centerCountryEN:'',
        centerCountry:'',
        yearFromRouter:'',
        pinzhong:'',
        sum:'',
        danwei:'',
        /*传给map的数据*/
        countryCountToMapL1:[],
        countryCountToMapL2:[],
        countryCountToMapR:[],//一级贸易国家列表(右一，下左左)
        countryCountToMapRName:[],//一级贸易国家列表(右一，下左左)
        countryCountToMapRID:[],//一级贸易国家id列表(右一，下左左)
        countryCountToMapRTwo:[],//二级贸易国家列表(下中左)
        countryCountToMapRTwoName:[],//二级贸易国家列表(下中左)
        countryCountToMapRTwoID:[],//二级贸易国家id列表(下中左)
        secondCountryCountToMapR:'',

        leftCenterToLeft:'',//传给下中右的中心贸易国家
        toLeftCountryList:[],//根据一级中心贸易国家过滤出二级贸易国家，传给下中右的贸易国家
        currentCountryMsg:{},
        currentCountryMsg1:{},
        /*疫病列表模块*/
        diseasereports:[],
        diseasepageNo: 1,						//总条数
        diseasepageSize: 15,
        								//疫病列表
        diseasetotalCount: 0,
      }
    },
    computed: {

    },
    watch:{
      countryCountToMapR:{
        handler(newval,oldval){
          //console.log(newval)
          if(newval.length!=0){
            this.leftCenterToLeft = newval[0].partnercountry
          }else{
            this.leftCenterToLeft = ''
          }

        },
        deep:true
      }
    },
    mounted () {
      this.itemidFromRoute = this.$route.query.itemid
      this.oiefidFromRoute = this.$route.query.oiefid
      this.countryidFromRoute = this.$route.query.countryid
      this.elementidFromRoute = this.$route.query.elementid
      this.continentcnFromRoute = this.$route.query.continentcn
      this.animaltypeFromRoute = this.$route.query.animaltype
      this.centerCountryEN = this.$route.query.countruyEnglishName
      this.centerCountry = this.$route.query.country
      this.yearFromRouter = this.$route.query.year
      this.pinzhong = this.$route.query.pinzhong
      this.sum = this.$route.query.sum
      this.danwei = this.$route.query.danwei
      /*级联选择器显示路由中带过来的参数start*/
      let newCountryvalue = []
      newCountryvalue[0] = this.continentcnFromRoute
      newCountryvalue[1] = parseInt(this.countryidFromRoute)
      this.countryvalue = newCountryvalue
      if(this.animaltypeFromRoute=='0'){
        this.animalvalue[0] = Number(this.oiefidFromRoute)
        this.animalvalue[1] = this.itemidFromRoute
      }else{
        this.animaltype = this.animaltypeFromRoute
        this.proanimalvalue[0] = Number(this.oiefidFromRoute)
        this.proanimalvalue[1] = this.itemidFromRoute
      }
      /*级联选择器显示路由中带过来的参数end*/
      this.countryselect()
      this.requestAnimalSelect()
      this.queryTradeCountrySum()
      this.queryDetailTrade()
      this.queryCountryOnworldMap()
    },
    methods: {
      queryTradeData(){  //点击搜索按钮的回调函数
        this.queryTradeCountrySum1()
        this.queryDetailTrade1()
        this.queryCountryOnworldMap1()
        /*根据国家ID查找国家英文名传给世界地图*/
        //alert(this.countryvalue[1])
        //console.log(this.continents)
        this.continents.forEach(item=>{
          item.countrys.forEach(country =>{
            if(country.id == this.countryvalue[1]){
              //alert(country.shortnameen)
              this.centerCountryEN = country.shortnameen
            }

          })
        })
        this.elementidFromRoute = this.elementid
      },
      async countryselect(){  //获得国家-大洲下拉数据
        var data = await requestSelect.countryselect();
        this.continents = data;

        this.getCountryData()
      },
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
      async requestAnimalSelect(){  //获得动物科-动物下拉数据
        var data = await request.requestaniamlselect(this.animaltype);
        this.epidAnimal = data;
        this.getAnimalData();
      },
      getAnimalData(){
        // 初始化
        this.animalData = [{value: -1, label: '全部动物'}];
        this.proanimalData = [{value: -1, label: '全部产品'}];
        //console.log(this.epidAnimal)
        for (var i = 0; i < this.epidAnimal.length; i++) {
          var obj={};
          Object.assign(obj,{
            value: this.epidAnimal[i].id,
            label: this.epidAnimal[i].oiefnamecn,
            children: [{value:-1, label:'当前科'}],
          });
          if (this.epidAnimal[i].faoitems != undefined) {
            for (var j = 0; j < this.epidAnimal[i].faoitems.length; j++) {
              obj.children.push({value: this.epidAnimal[i].faoitems[j].faoid, label: this.epidAnimal[i].faoitems[j].namecn,})
            }
            if (this.animaltype == 0) {
              this.animalData.push(obj);
            }else {
              this.proanimalData.push(obj);
            }
          }
        }
      },
      async proChoiseValue(){
        //alert('改变动物下拉框')
        this.requestAnimalSelect();//改变动物下拉框

        //await this.queryTradeData();

      },
      async queryTradeCountrySum(){//左一，统计活体动物科进出口贸易量
        let data = await requestTrade.queryTradeCountrySum(this.elementidFromRoute,this.itemidFromRoute, this.countryidFromRoute,this.oiefidFromRoute)
        this.countryCountToMapL1 = data
      },
      async queryTradeCountrySum1(){//左一，统计活体动物科进出口贸易量,点击搜索按钮调用
        if(this.animaltype=='0'){//统计活体动物
          let data = await requestTrade.queryTradeCountrySum(this.elementid,this.animalvalue[1], this.countryvalue[1],this.animalvalue[0])
          this.countryCountToMapL1 = data
        }else{
          let data = await requestTrade.queryTradeCountrySum(this.elementid,this.proanimalvalue[1], this.countryvalue[1],this.proanimalvalue[0])
          this.countryCountToMapL1 = data
        }
      },
      async queryDetailTrade(){//左二
        let data = await requestTrade.queryDetailTrade(this.elementidFromRoute,this.itemidFromRoute, this.countryidFromRoute,this.oiefidFromRoute)
        this.countryCountToMapL2 = data
      },
      async queryDetailTrade1(){//左二,点击搜索按钮调用
        if(this.animaltype=='0'){
          let data = await requestTrade.queryDetailTrade(this.elementid,this.animalvalue[1], this.countryvalue[1],this.animalvalue[0])
          this.countryCountToMapL2 = data
        }else{
          let data = await requestTrade.queryDetailTrade(this.elementid,this.proanimalvalue[1], this.countryvalue[1],this.proanimalvalue[0])
          this.countryCountToMapL2 = data
        }

      },
      async queryCountryOnworldMap() {
        let data = await requestTrade.queryCountryOnworldMap(this.yearFromRouter, this.elementidFromRoute, this.itemidFromRoute, this.countryidFromRoute, this.oiefidFromRoute)
        this.countryCountToMapR = data
        if (this.countryCountToMapR.length != 0) {
          this.countryCountToMapRName = this.countryCountToMapR.map(item=>item.partnercountry)
          this.currentCountryMsg = this.countryCountToMapR[0]
          let arrayId = data.map(item => item.parcountryid)
          this.countryCountToMapRID = arrayId

          //console.log(arrayId)
          let data1 = await requestTrade.queryCountryOnworldMapTwo(this.yearFromRouter, this.elementidFromRoute, this.itemidFromRoute, arrayId, this.oiefidFromRoute)
          this.countryCountToMapRTwo = data1
          this.toLeftCountryList = data1.filter(item => item.reportercountry == this.leftCenterToLeft)
          //console.log(data1)
          if (this.countryCountToMapRTwo.length != 0) {
            this.countryCountToMapRTwoID = this.countryCountToMapRTwo.map(item=>item.parcountryid)
            this.countryCountToMapRTwoName = this.countryCountToMapRTwo.map(item=>item.partnercountry)
            this.currentCountryMsg1 = this.countryCountToMapRTwo[0]
          }else{
            this.countryCountToMapRTwoID = []
            this.countryCountToMapRTwoName = []
          }
        }else{
          this.countryCountToMapRID = []
          this.countryCountToMapRName = []
        }

        this.queryreport()
      },
      async queryCountryOnworldMap1(){//点击搜索按钮调用

        if(this.animaltype=='0'){
          let data = await requestTrade.queryCountryOnworldMap(this.tradeYear,this.elementid,this.animalvalue[1], this.countryvalue[1],this.animalvalue[0])
          this.countryCountToMapR = data
          // alert(this.countryCountToMapR.length)
          if(this.countryCountToMapR.length!=0){
            this.centerCountry = data[0].reportercountry
            //得到一级贸易国IDparcountryid

            //alert('一级贸易国家不为空')
            let arrayId = data.map(item=>item.parcountryid)
            this.countryCountToMapRID = arrayId
            this.countryCountToMapRName = this.countryCountToMapR.map(item=>item.partnercountry)
            let data1 =await  requestTrade.queryCountryOnworldMapTwo(this.tradeYear,this.elementid,this.animalvalue[1], arrayId,this.animalvalue[0])
            this.countryCountToMapRTwo = data1
            this.currentCountryMsg = this.countryCountToMapR[0]
            // console.log('-----------------------------')
            // console.log(this.currentCountryMsg)
            this.toLeftCountryList = data1.filter(item=>item.reportercountry == this.leftCenterToLeft )
            if(this.countryCountToMapRTwo.length!=0){
              this.countryCountToMapRTwoID = this.countryCountToMapRTwo.map(item=>item.parcountryid)
              this.currentCountryMsg1 = this.countryCountToMapRTwo[0]
              this.countryCountToMapRTwoName = this.countryCountToMapRTwo.map(item=>item.partnercountry)
            }else{
              this.currentCountryMsg1 ={}
              this.countryCountToMapRTwoID = []
              this.countryCountToMapRTwoName = []
            }
          }else{
            //alert('一级贸易国家为空')
            this.countryCountToMapR = []
            this.countryCountToMapRID = []
            this.countryCountToMapRName = []
            this.countryCountToMapRTwo = []
            this.countryCountToMapRTwoID = []
            this.countryCountToMapRTwoName = []
            this.centerCountry = ''
            this.leftCenterToLeft=''
            this.toLeftCountryList = []
            this.currentCountryMsg1={}
            this.currentCountryMsg={}
          }
        }else{//产品
          let data = await requestTrade.queryCountryOnworldMap(this.tradeYear,this.elementid,this.proanimalvalue[1], this.countryvalue[1],this.proanimalvalue[0])
          this.countryCountToMapR = data
          // alert(this.countryCountToMapR.length)
          if(this.countryCountToMapR.length!=0){
            this.centerCountry = data[0].reportercountry
            //alert('一级贸易国家不为空')
            let arrayId = data.map(item=>item.parcountryid)
            let data1 =await  requestTrade.queryCountryOnworldMapTwo(this.tradeYear,this.elementid,this.proanimalvalue[1], arrayId,this.proanimalvalue[0])
            this.countryCountToMapRTwo = data1
            this.currentCountryMsg = this.countryCountToMapR[0]
            // console.log('-----------------------------')
            // console.log(this.currentCountryMsg)
            this.toLeftCountryList = data1.filter(item=>item.reportercountry == this.leftCenterToLeft )
            if(this.countryCountToMapRTwo.length!=0){
              this.currentCountryMsg1 = this.countryCountToMapRTwo[0]
            }else{
              this.currentCountryMsg1 ={}
            }
          }else{
            //alert('一级贸易国家为空')
            this.countryCountToMapR = []
            this.countryCountToMapRTwo = []
            this.centerCountry = ''
            this.leftCenterToLeft=''
            this.toLeftCountryList = []
            this.currentCountryMsg1={}
            this.currentCountryMsg={}
          }
        }
        this.queryreport1()
        // //console.log(arrayId)
        // let data1 =await  requestTrade.queryCountryOnworldMapTwo(this.tradeYear,this.elementid,this.animalvalue[1], arrayId,this.animalvalue[0])
        // this.countryCountToMapRTwo = data1
        // this.toLeftCountryList = data1.filter(item=>item.reportercountry == this.leftCenterToLeft )
      },
      async queryreport(){//贸易详情页面跳转进来
        //alert(this.elementidFromRoute)
        let allCountryID = this.countryCountToMapRID.concat(this.countryCountToMapRTwoID)

        if(this.elementidFromRoute=='5608'){//进口的话查一级贸易国家和二级贸易国家
          // alert(this.countryCountToMapRID)
          // alert(this.countryCountToMapRTwoID)
          if(allCountryID.length!=0){
            let data = await requestTrade.queryreport(this.oiefidFromRoute,allCountryID, this.yearFromRouter, this.diseasepageNo, this.diseasepageSize)
            this.diseasereports = data.list;
            this.diseasetotalCount = data.totalCount;
          }

        }else{        //出口的话先查中心贸易国家如果中心贸易国家爆发了疫病，则一级贸易国家为一级警告，二级贸易国家为二级警告
          let data = await requestTrade.queryreport(this.oiefidFromRoute,this.countryidFromRoute, this.yearFromRouter, this.diseasepageNo, this.diseasepageSize)
          this.diseasereports = data.list;
          //console.log(data)
          if(this.diseasereports.length!=0){
            if(allCountryID.length!=0){
              let data = await requestTrade.queryreport(this.oiefidFromRoute,allCountryID, this.yearFromRouter, this.diseasepageNo, this.diseasepageSize)
              this.diseasereports = data.list;
              this.diseasetotalCount = data.totalCount;
            }
          }else{
          }
        }
      },
      async queryreport1(){//双击
        let allCountryID = this.countryCountToMapRID.concat(this.countryCountToMapRTwoID)

        if(this.animaltype=='0'){

          if(this.elementidFromRoute=='5608'){//进口的话查一级贸易国家和二级贸易国家
            // alert(this.countryCountToMapRID)
            // alert(this.countryCountToMapRTwoID)
            if(allCountryID.length!=0){
              let data = await requestTrade.queryreport(this.animalvalue[0],allCountryID, this.tradeYear, this.diseasepageNo, this.diseasepageSize)
              if(data.list){
                this.diseasereports = data.list;
                this.diseasetotalCount = data.totalCount;
              }else{
                this.diseasereports = []
                this.diseasetotalCount = 0
              }


            }else{
              this.diseasereports = []
              this.diseasetotalCount = 0
            }

          }else{        //出口的话先查中心贸易国家如果中心贸易国家爆发了疫病，则一级贸易国家为一级警告，二级贸易国家为二级警告
            let data = await requestTrade.queryreport(this.animalvalue[0],this.countryvalue[1], this.tradeYear, this.diseasepageNo, this.diseasepageSize)
            this.diseasereports = data.list;
            //console.log(data)
            if(this.diseasereports.length!=0){
              if(allCountryID.length!=0){
                let data = await requestTrade.queryreport(this.animalvalue[0],allCountryID, this.tradeYear, this.diseasepageNo, this.diseasepageSize)
                this.diseasereports = data.list;
                this.diseasetotalCount = data.totalCount;
              }
            }else{
              this.diseasereports = []
              this.diseasetotalCount = 0
            }

          }


        }else{ //加工产品
          if(this.elementidFromRoute=='5608'){//进口的话查一级贸易国家和二级贸易国家
            // alert(this.countryCountToMapRID)
            // alert(this.countryCountToMapRTwoID)
            let allCountryID = this.countryCountToMapRID.concat(this.countryCountToMapRTwoID)
            if(allCountryID.length!=0){
              let data = await requestTrade.queryreport(this.proanimalvalue[0],allCountryID, this.tradeYear, this.diseasepageNo, this.diseasepageSize)
              this.diseasereports = data.list;
              this.diseasetotalCount = data.totalCount;
            }

          }else{        //出口的话先查中心贸易国家如果中心贸易国家爆发了疫病，则一级贸易国家为一级警告，二级贸易国家为二级警告

            let data = await requestTrade.queryreport(this.proanimalvalue[0],this.countryvalue[1], this.tradeYear, this.diseasepageNo, this.diseasepageSize)
            this.diseasereports = data.list;
            //console.log(data)
            if(this.diseasereports.length!=0){
              if(allCountryID.length!=0){
                let data = await requestTrade.queryreport(this.proanimalvalue[0],allCountryID, this.tradeYear, this.diseasepageNo, this.diseasepageSize)
                this.diseasereports = data.list;
                this.diseasetotalCount = data.totalCount;
              }
            }else{
              this.diseasereports = []
              this.diseasetotalCount = 0
            }

          }
          }
        },
      choiseYear(year){
        this.tradeYear = year
      },
      /*子组件下左左传给父组件的中心贸易国家*/
      handleChangeCenterCountry(val){
        //alert(val)
        if(this.countryCountToMapRTwo.length!=0){
          this.leftCenterToLeft = val
          this.toLeftCountryList = this.countryCountToMapRTwo.filter(item=>item.reportercountry == this.leftCenterToLeft )
          this.currentCountryMsg = this.countryCountToMapR.filter(item=>item.partnercountry==val)[0]
          //this.currentCountryMsg1 = this.countryCountToMapRTwo.filter(item=>item.partnercountry==val)[0]
        }else{
          this.leftCenterToLeft = ''
        }

      },
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
      async diseasepageChanged(page){//改变疫病列表分液器
        this.diseasepageNo = page;
        await this.queryreport();
      },
      handleChangeCenterCountry1(val){
        //alert(val)
        // this.currentCountryMsg1 = this.countryCountToMapRTwo.filter(item=>item.partnercountry==val)[0]
        // console.log(this.currentCountryMsg1)
        //alert('end')
        if(this.countryCountToMapRTwo.length!=0){
          // this.leftCenterToLeft = val
          // this.toLeftCountryList = this.countryCountToMapRTwo.filter(item=>item.reportercountry == this.leftCenterToLeft )
          // this.currentCountryMsg = this.countryCountToMapR.filter(item=>item.partnercountry==val)[0]
          this.currentCountryMsg1 = this.countryCountToMapRTwo.filter(item=>item.partnercountry==val)[0]
          //console.log(this.currentCountryMsg1)
        }else{
          this.leftCenterToLeft = ''
        }

      },

      },


    components: {
      tradeleftmap1,
      tradeleftmap2,
      traderightmap1,
      tradecountryleft,
      tradecountryleft1,
      showCountryList,
      tradecountryright,
      tradecountryright1
    }
  }

</script>
