<style>
  ul.ivu-cascader-menu {
    background-color: #fff;
  }

  .ivu-select-dropdown {
    height: 240px;
    background-color: #fff;
  }

  .ivu-select-dropdown span {
    color: #666;
    font-size: 14px;
  }

  .choise-cont ul.ivu-cascader-menu {
    background-color: #141738;
  }
</style>
<style scoped>
  html, body, div {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .main-containner {
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
    height: 60px;
    background-color: rgba(24, 24, 64, 0.8);
    text-align: center;
  }

  .header span {
    line-height: 60px;
    color: #fff;
    font-size: 1.6em;
  }

  .body-containner {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }

  .body-right-cont {
    width: 50%;
    height: 100%;
  }
  .body-right-cont .body-right-item2 .right,.body-right-cont .body-right-item2 .left{
    position: relative;
  }
  /* 分页start */
  .page-cont {
    height: 27px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1%;
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

  /* 左半边部分内容start */
  .body-left-cont {
    width: 48%;
    height: 100%;
  }

  /* 疫病列表start */
  .body-left-item1 {
    width: 100%;
    height: 60%;
    margin-top: -10px;
    background-color: rgba(24, 24, 64, 0.8);
    box-sizing: border-box;
    border: solid 1px #58e7e7;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .ill-cont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* 查询条件择栏start */
  .ill-search-cont {
    width: 100%;
    height: 40px;
    background-color: #fff;
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
  /* 查询结果显示start */
  .ill-show-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .tabletitle-cont {
    width: 100%;
    height: 24px;
    flex-shrink: 0;
  }

  .tabletitle tr {
    height: 100%;
  }

  .tablecontent-cont {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  table {
    height: 100%;
    width: 100%;
  }

  table tr {
    display: flex;
    padding-top: 0.5%;
  }

  table td {
    font-size: 0.8em;
    color: #fff;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 20%;
    flex-shrink: 1;
  }

  table td:nth-child(1) {
    width: 5%;
  }

  .tabletitle tr td {
    font-size: 0.8em;
    color: #217197;
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

  /* 查询结果显示end */
  .animaltype-cont {
    width: 180px;
    height: 20px;
    background-color: #ccc;
    position: absolute;
    bottom: 8px;
    right: 10px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }

  .jinchukou-icon {
    left: 10px;
  }

  /* 疫病列表end */
  /* 畜牧生产贸易列表start */
  .body-left-item2 {
    width: 100%;
    height: 40%;
    margin-top: 10px;
    display: flex;
    background-color: rgba(24, 24, 64, 0.8);
    box-sizing: border-box;
    border: solid 1px #58e7e7;
    border-radius: 10px;
  }

  .disreport-cont {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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

  /* 畜牧生产列表end */
  /* 左半边部分内容end */

  /* 右半边部分内容start */
  .body-right-cont {
    width: 52%;
    height: 100%;
    margin-left: 15px;
  }

  /* 地图展示部分start */
  .body-right-item1 {
    width: 100%;
    height: 69%;
    margin-top: -10px;
    overflow: hidden;
    position: relative;
    background-color: rgba(24, 24, 64, 0.8);
    box-sizing: border-box;

  }

  .body-right-item1 .top, .body-right-item1 .down {
    position: relative;
    width: 100%;
    height: 48%;
    border: solid 1px #58e7e7;
    border-radius: 10px;
  }

  .body-right-item1 .down {
    margin-top: 12px;
  }

  .topten-reviews-cont {
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  .topten-reviews {
    width: 90%;
    height: 40px;
    border-radius: 20px;
    z-index: 999;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #cc0000;
    display: flex;
  }

  .topten-reviews:nth-child(2) {
    background-color: #cece00;
  }

  .topten-reviews:nth-child(3) {
    background-color: #b0b0b0;
  }

  .hot {
    width: 34px;
    height: 34px;
    margin-left: 2%;
    margin-top: 3px;
    border-radius: 50%;
    flex-shrink: 0;
    background: #eee url('../assets/top1.png') no-repeat center;
    -webkit-background-size: 90%;
    background-size: 90%;
  }

  .topten-reviews:nth-child(2) .hot {
    background: #eee url('../assets/top2.png') no-repeat center;
    -webkit-background-size: 90%;
    background-size: 90%;
  }

  .topten-reviews:nth-child(3) .hot {
    background: #eee url('../assets/top3.png') no-repeat center;
    -webkit-background-size: 140%;
    background-size: 140%;
  }

  .topshow {
    width: 100%;
    height: 100%;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-left: 10px;
  }

  /* 地图展示部分end */
  /* 爆发点详情展示部分start */
  .body-right-item2 {
    position: relative;
    width: 100%;
    height: 31%;
    background-color: rgba(24, 24, 64, 0.8);
    box-sizing: border-box;
    border: solid 1px #58e7e7;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    overflow: hidden;
  }
  .body-right-item2 .line-chart-cont{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .body-right-item2 .line-chart-cont .left,.body-right-item2 .line-chart-cont .right{
    width: 50%;
    height: 100%;

  }
  .body-right-item2 .line-chart-cont .left{
    border-right: 1px solid #58e7e7;
  }

  .piemap-cont span {
    display: inline-block;
    color: #fff;
    font-size: 16px;
    margin-top: 8px;
    padding-left: 10px;
  }

  .pie-cont {
    margin-bottom: 1%;
    width: 100vh;
    height: 22vh;
    margin: 0 auto;
    overflow: hidden;
  }

  .pie-item:nth-child(1)  {
    background-color: #ff0000;
  }

  .pie-item:nth-child(2)  {
    background-color: #ff4400;
  }

  .pie-item:nth-child(3) {
    background-color: #ff8800;
  }

  .pie-item:nth-child(4)  {
    background-color: #ffcc00;
  }

  .item-value span:nth-child(3) {
    color: #ff0000
  }

  /* outbreak表格start */
  .outbreak-details-cont table td:nth-child(n+5) {
    width: 10%;
  }

  /* outbreak表格end */
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
  .body-left-item2 .trade-cont .choise-cont,.body-left-item2 .disreport-cont .choise-cont{
    margin-left: -22px;
  }
  /* 爆发点详情展示部分end */
  /* 右半边部分内容end */
  .border-name-top {
    width: 120px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%);
    background-color: #0f122a;
    box-sizing: border-box;
    border-left: 3px solid #58e7e7;
    border-right: 3px solid #58e7e7;
  }


</style>
<template>
  <div class="main-containner">
    <header class="header">
      <span>贸易专题</span>
    </header>
    <div class="body-containner">
      <div class="body-left-cont">
        <div class="body-left-item1">
          <!--全球活体产品总搜索列表表头-->
          <div class="ill-cont">
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
                    <DatePicker type="year" value="2013" placeholder="Select year" style="width: 150px"
                                @on-change="choiseYear"></DatePicker>
                  </Col>
                </Row>
                <Button shape="circle" icon="ios-search" @click="queryTradeData"></Button>
              </div>
            </div>
            <div class="ill-show-cont">
              <div class="tabletitle-cont">
                <table class="tabletitle" cellspacing="0" cellpadding="0">
                  <tr>
                    <td></td>
                    <td>大洲</td>
                    <td>国家</td>
                    <td>时间</td>
                    <td>产品名称</td>
                    <td>进出口数量</td>
                    <td>单位</td>
                  </tr>
                </table>
              </div>
              <div class="tablecontent-cont scorllbar" v-if="productInfor!=undefined">
                <table class="tablecontent" cellspacing="0" cellpadding="0">
                  <tr v-for="(pro_item, index) in productInfor" @click="      "
                      @dblclick="gottradedetails(pro_item)">
                    <td>{{index+1}}</td>
                    <td>{{pro_item.continentcn}}</td>
                    <td>{{pro_item.country}}</td>
                    <td>{{pro_item.year}}</td>
                    <td>{{pro_item.itemcn?pro_item.itemcn:pro_item.item}}</td>
                    <td>{{pro_item.value}}</td>
                    <td>{{pro_item.unitcn}}</td>
                  </tr>
                </table>
                <div class="page-cont">
                  <div class="totalcont">
                    共{{prototalCount}}条
                  </div>
                  <div class="pagebar left-top">
                    <Page :current="propageNo" :page-size="propageSize" :total="prototalCount" show-total
                          @on-change="productpageChanged" simple/>
                  </div>
                </div>
              </div>
              <div class="animaltype-cont">
                <RadioGroup v-model="animaltype" @on-change="proChoiseValue">
                  <Radio label="0">活体动物</Radio>
                  <Radio label="1">加工产品</Radio>
                </RadioGroup>
              </div>
              <div class="animaltype-cont jinchukou-icon">
                <RadioGroup v-model="elementid" @on-change="tradeChoiseValue">
                  <Radio label="5608">进口</Radio>
                  <Radio label="5909">出口</Radio>
                </RadioGroup>
              </div>
              <div class="tablecontent-cont" v-if="productInfor==undefined">
                <div class="erro-show-cont">
                  <span class="erro-show">暂未查询到数据，请换个条件查询吧！</span>
                </div>
              </div>
            </div>
          </div>
          <!--全球活体产品总搜索列表表头结束-->
        </div>
        <div class="body-left-item2">
          <div class="trade-cont">
            <div class="module-name">
              <span>畜牧生产</span>
              <div class="choise-cont">
                <Row style="margin-top:2px;">
                  <Col span="12">
                    <DatePicker type="year" value="2013" placeholder="Select year" style="width: 150px"
                                @on-change="tradeChoiseYear"></DatePicker>
                  </Col>
                </Row>
              </div>
            </div>

            <div class="tabletitle-cont">
              <table class="tabletitle" cellspacing="0" cellpadding="0">
                <tr>
                  <td></td>
                  <td>大洲</td>
                  <td>国家</td>
                  <td>产品</td>
                  <td>进出口值</td>
                  <td>单位</td>
                </tr>
              </table>
            </div>
            <div class="tablecontent-cont scorllbar">
              <table class="tablecontent" cellspacing="0" cellpadding="0">
                <tr v-for="(trade, index) in trades">
                  <td>{{index+1}}</td>
                  <td>{{trade.continentcn}}</td>
                  <td>{{trade.country}}</td>
                  <td>{{trade.itemcn!=''? trade.itemcn:trade.item}}</td>
                  <td>{{trade.value}}</td>
                  <td>{{trade.unitcn}}</td>
                </tr>
              </table>
              <div class="page-cont">
                <div class="totalcont">
                  共{{leftdowntotalCount}}条
                </div>
                <div class="pagebar">
                  <Page :current="leftdownpageNo" :page-size="leftdownpageSize" :total="leftdowntotalCount" show-total
                        @on-change="changeXuMuPro" simple/>
                </div>
              </div>
            </div>
            <!--<div class="element-cont">-->
            <!--<RadioGroup v-model="elementid" @on-change="tradeChoiseValue">-->
            <!--<Radio label="5608">进口</Radio>-->
            <!--<Radio label="5909">出口</Radio>-->
            <!--</RadioGroup>-->
            <!--</div>-->
          </div>
          <div class="disreport-cont">
            <div class="module-name">
              <span>疫病快报</span>
              <div class="choise-cont">
                <Row style="margin-top:2px;">
                  <Col span="12">
                    <DatePicker type="year" value="2016" placeholder="Select year" style="width: 100px"
                                @on-change="diseaseChoiseYear"></DatePicker>
                  </Col>
                </Row>
              </div>
            </div>
            <div class="tabletitle-cont">
              <table class="tabletitle" cellspacing="0" cellpadding="0">
                <tr>
                  <td></td>
                  <td>大洲</td>
                  <td>国家</td>
                  <td>疫病</td>
                  <td>报道时间</td>
                  <td>报道类型</td>
                </tr>
              </table>
            </div>
            <div class="tablecontent-cont scorllbar">
              <table class="tablecontent " cellspacing="0" cellpadding="0">
                <tr v-for="(report, index) in diseasereports" >
                  <td>{{index+1}}</td>
                  <td>{{report.continentcn}}</td>
                  <td>{{report.country}}</td>
                  <td>{{report.diease}}</td>
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
          </div>

        </div>
      </div>

      <div class="body-right-cont">
        <div class="body-right-item1">
          <div class="top">
            <div class="border-name-top">
              <span>动物-贸易量图</span>
            </div>
            <div class="line-chart-cont">
              <traderightmap1 :traderigntmap1animalName="traderigntmap1animalName" :traderigntmap1import="traderigntmap1import"></traderightmap1>
            </div>
          </div>
          <div class="down">
            <div class="border-name-top">
              <span>时间-贸易量图</span>
            </div>
            <div class="line-chart-cont">
              <traderightmap2 :animalYearCount="animalYearCount"></traderightmap2>
            </div>
          </div>
        </div>

        <div class="body-right-item2">

          <div class="line-chart-cont">
            <div class="left">
              <div class="border-name-top">
                <span>贸易量占比图</span>
              </div>
              <traderightmap3 :animalIECount="animalIECount"></traderightmap3>
            </div>
            <div class="right">
              <div class="border-name-top">
                <span>疫病占比图</span>
              </div>
              <traderightmap3R :reportProCount="reportProCount"></traderightmap3R>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import traderightmap1 from './map/traderightmap1'
  import traderightmap2 from './map/traderightmap2'
  import traderightmap3 from './map/traderightlmap3L'
  import traderightmap3R from './map/traderightmap3R'

  import request from '../request/prospecial.js'
  import requestTrade from '../request/tradeSpecial'
  import requestSelect from "../request/select"

  export default {
    data () {
      return {
        animaltype: '0',//0:活体动物；1：加工产品
        elementid: '5608',
        animaltype2: '0',
        animaltype3: '0',
        countryData: [{value: null, label: '全球'}],
        continents: [],			//从后台查询的大洲-国家信息，处理后赋值给countryData
        epidAnimal: [],		//从后台查询的动物科-动物信息，处理后赋值给animalData
        animalData: [{value: -1, label: '全部动物'}],	//选择的动物信息，默认为-1，全部动物(活体动物)
        proanimalData: [{value: -1, label: '全部产品'}],	//选择的产品信息，默认为-1，全部产品(加工产品)
        countryvalue: [null,-1],
        animalvalue: [-1,-1],							//动物科--动物
        proanimalvalue: [-1,-1],							//动物科--产品
        prototalCount: 0,
        productInfor: [],		//根据筛选条件查询出的疫病信息，放在搜索栏下方显示
        proyearvalue: [2013],									//左上主列表时间
        propageNo: 1,								//疫病显示列表的页码
        propageSize: 15,
        //elementid: '5608',
        diseasereports: [],									//疫病列表
        diseasetotalCount: 0,
        diseasepageNo: 1,						//总条数
        diseasepageSize: 15,
        disyearvalue: [2016],   //疫病列表时间
        leftdownyearvalue:[2013],
        trades:[],
        leftdownpageNo: 1,						//总条数
        leftdownpageSize: 15,
        leftdowntotalCount: 0,
        rightTopcount:[],//各科动物进口贸易统计
        rightTopcount1:[],//各科动物出口贸易统计
        /*需要传给map1的值*/
        traderigntmap1import:[],  //进口值
        traderigntmap1animalName:[], //动物科名称
        /*需要传给map2的值*/
        animalYearCount:[],
        defaultoiefid:-1,
        /*需要传给map3d的数据*/
        animalIECount:[],
        reportProCount: {},		//快报占比数据

        isFirstRequst:false
      }
    },
    mounted () {		//async 异步请求
      this.countryselect() //one
      this.requestAnimalSelect()  //one
      this.queryTradeData()  //one
      // this.queryTradeReportByAnimalfamily()//获取疫病报告列表
      //this.queryTradeCountryPro()
      //this.queryTradeAnimalLiveCount()
      // this.queryAnimalYearCount()
    },
    watch:{
      animaltype(newval,oldval){
        this.queryTradeCountryPro()
      },
      elementid(newval,oldval){
        this.queryTradeData()
      },
      defaultoiefid(newval,oldval){

        this.queryAnimalYearCount()
        this.queryReportProportion()
        this.queryAnimalIECount()
      }
    },
    methods:{
      //查询大洲-国家
      async countryselect(){
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
      async queryTradeData(){//点击搜索按钮的回掉函数
        // 如果为动物类型为活体动物则调用活体动物的接口查询活体动物
        if (this.animaltype == 0) {
          var data = await requestTrade.queryTrade(this.propageNo, this.propageSize, this.elementid,this.animalvalue[0], this.animalvalue[1], this.countryvalue[0], this.countryvalue[1], this.proyearvalue);
          //console.log(data)
          //console.log(this.propageNo, this.propageSize, this.elementid, this.animalvalue[0], this.animalvalue[1], this.countryvalue[0], this.countryvalue[1], this.proyearvalue)
          this.productInfor = data.list;
          this.prototalCount = data.totalCount;
        }
        // 如果为加工产品则调用查询加工产品的接口
        else if (this.animaltype == 1) {
          //alert(this.proanimalvalue[0], this.proanimalvalue[1],'====')
          var data = await requestTrade.queryTradePro(this.propageNo, this.propageSize, this.elementid ,this.proanimalvalue[0], this.proanimalvalue[1], this.countryvalue[0], this.countryvalue[1], this.proyearvalue);
          //console.log(this.propageNo, this.propageSize, this.elementid, this.animalvalue[0], this.animalvalue[1], this.countryvalue[0], this.countryvalue[1], this.proyearvalue)
          this.productInfor = data.list;
          this.prototalCount = data.totalCount;
        }

        this.queryTradeReportByAnimalfamily()
        this.queryTradeCountryPro()
        this.queryTradeAnimalLiveCount()

        if(this.isFirstRequst){
          this.queryAnimalIECount()
          this.queryReportProportion()
          this.queryAnimalYearCount()
        }
        this.isFirstRequst = true

      },
      async requestAnimalSelect(){
        var data = await request.requestaniamlselect(this.animaltype);
        this.epidAnimal = data;
        this.getAnimalData();
      },
      getAnimalData(){
        // 初始化
        this.animalData = [{value: -1, label: '全部动物'}];
        this.proanimalData = [{value: -1, label: '全部产品'}];
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
        this.requestAnimalSelect();//改变动物下拉框

        //await this.queryTradeData();

      },
      choiseYear(year){
        this.proyearvalue = year;
      },
      async productpageChanged(page) {
        this.propageNo = page;
        await this.queryTradeData();
      },
      tradeChoiseValue(){//改变进出口值

      },
      async queryTradeReportByAnimalfamily(){//查询疫病列表
        var data = await requestTrade.queryTradeReportByAnimalfamily(this.animalvalue[0], this.countryvalue[0], this.countryvalue[1], this.disyearvalue, this.diseasepageNo, this.diseasepageSize);
        this.diseasereports = data.list;
        this.diseasetotalCount = data.totalCount;

      },
      async queryTradeCountryPro(){//查询贸易生产.列表
        if (this.animaltype == 0) {
          var data = await requestTrade.queryTradeCountryPro(this.leftdownpageNo, this.leftdownpageSize,  this.animalvalue[0], this.animalvalue[1], this.countryvalue[0], this.countryvalue[1], this.leftdownyearvalue)
          this.trades = data.list
          this.leftdowntotalCount = data.totalCount;
        }
        // 如果为加工产品则调用查询加工产品的接口
        else if (this.animaltype == 1) {
          var data = await requestTrade.queryTradeCountryPro1(this.leftdownpageNo, this.leftdownpageSize,  this.proanimalvalue[0], this.proanimalvalue[1], this.countryvalue[0], this.countryvalue[1], this.leftdownyearvalue);
          this.trades = data.list
          this.leftdowntotalCount = data.totalCount;
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

      diseaseChoiseYear(year){
        this.disyearvalue = year;
        this.queryTradeReportByAnimalfamily();
      },
      async diseasepageChanged(page){//改变疫病列表分液器
        this.diseasepageNo = page;
        await this.queryTradeReportByAnimalfamily();
      },

      tradeChoiseYear(year){//改变畜牧生产列表时间选择器的值
        this.leftdownyearvalue = year
        this.queryTradeCountryPro()
      },
      changeXuMuPro(page){//改变畜牧生产分页器的值
        this.leftdownpageNo = page;
        this.queryTradeCountryPro()

      },
      async queryTradeAnimalLiveCount(){//右一，统计活体动物科进出口贸易量
        let data = await requestTrade.queryTradeAnimalLiveCount(this.elementid,this.countryvalue[0], this.countryvalue[1],this.proyearvalue)

        this.rightTopcount = data
        this.defaultoiefid = this.rightTopcount[0].oiefid
        //this.queryAnimalYearCount()
        this.traderigntmap1animalName = this.rightTopcount.map(item => item.oiefnamecn )
        this.traderigntmap1import = this.rightTopcount.map(item => item.unitcn.indexOf('千')==-1?Math.round(item.sum/1000):item.sum)

      },
      // 根据科/动物查询活体动物生产走势
      async queryAnimalYearCount(){
        if (this.animalvalue[0] != -1) {//选择了具体某种科的动物
          var data = await requestTrade.queryTradeAnimalYearCount(this.elementid, this.countryvalue[0], this.countryvalue[1],this.animalvalue[0], this.animalvalue[1]);
        }else {
          var  data = await requestTrade.queryTradeAnimalYearCount(this.elementid, this.countryvalue[0], this.countryvalue[1], this.defaultoiefid, this.animalvalue[1]);
        }
        this.animalYearCount = data;
      },
      // 根据科/动物查询活体动物贸易占比饼状图
      async queryAnimalIECount(){

        if (this.animalvalue[0] != -1) {//选择了具体某种科的动物
          var data = await requestTrade.queryTradeAnimalCount(this.elementid, this.countryvalue[0], this.countryvalue[1],this.animalvalue[0], this.proyearvalue);
        }else { //没选动物科默认是所有科的贸易量占比
          var  data = await requestTrade.queryTradeAnimalCount(this.elementid, this.countryvalue[0], this.countryvalue[1], this.defaultoiefid, this.proyearvalue);
        }
        this.animalIECount = data;
      },

      // 根据动物科id与年份查询 当年全快报数与影响该科动物的报道数的占比及相应疫病快报数
      async queryReportProportion(){
        if (this.animalvalue[0] != -1) {
          // alert(this.animalvalue[0])
          var data = await requestTrade.queryReportProportion( this.animalvalue[0], this.countryvalue[0], this.countryvalue[1],this.proyearvalue);
        }else {
          // alert(this.defaultoiefid)
          var data = await requestTrade.queryReportProportion(this.defaultoiefid, this.countryvalue[0], this.countryvalue[1],this.proyearvalue);
        }
        this.reportProCount = data;
      },
      gottradedetails(pro_item){//oiefid动物科
        //console.log(pro_item)
        this.$router.push('/app/:user/tradedetails?year='+pro_item.year+'&oiefid='+pro_item.oiefid+'&elementid='+this.elementid
          +'&itemid='+pro_item.itemid+'&countryid='+pro_item.faocountryid+'&continentcn='+pro_item.continentcn+'&countruyEnglishName='+pro_item.shortnameen
          +'&country='+pro_item.country+'&animaltype='+this.animaltype+'&pinzhong='+pro_item.itemcn+'&sum='+pro_item.value+'&danwei='+pro_item.unitcn);
      }
    },
    components: {
      // tradeworldmap,
      // tradeanimalsort
      traderightmap1,
      traderightmap2,
      traderightmap3,
      traderightmap3R
    }
  }
</script>
