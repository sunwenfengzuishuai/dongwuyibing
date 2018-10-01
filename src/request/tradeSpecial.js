var http = require('superagent')
var base = require('./base').default
var url = base.root

export default {
  async queryTrade(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){  //左一查询活体动物
    var resp = await http.post(url + 'trade/special/trade/query').query( {pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradePro(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){  //左一查询活体动物
    var resp = await http.post(url + 'trade/special/trade/queryTradeProduct').query( {pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradeReportByAnimalfamily(afid, name, oiecountryid, year, pageNo, pageSize,){
    var resp = await http.post(url + 'trade/special/report/queryReportByAnimalfamily').query({ afid:afid, name:name, oiecountryid:oiecountryid, year:year, pageNo:pageNo, pageSize:pageSize});
    return resp.body;
  },
  async queryTradeCountryPro(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){//畜牧生产模块查询活体动物
    var resp = await http.post(url + 'trade/special/product/query').query({pageNo:pageNo, pageSize:pageSize,oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradeCountryPro1(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){//畜牧生产模块查询活体动物
    var resp = await http.post(url + 'trade/special/product/queryProducttion').query({pageNo:pageNo, pageSize:pageSize,oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  async queryTradeAnimalLiveCount(elementid, name, countryid, years){//活体动物统计（右一）
    var resp = await http.post(url + 'trade/special/trade/queryAnimalLiveCount').query({elementid:elementid, name:name, countryid:countryid, years:years});
    return resp.body;
  },
  async queryTradeAnimalYearCount(elementid, name, countryid,oiefid, itemid){//活体动物统计（右二）
    var resp = await http.post(url + 'trade/special/trade/queryAnimalYearCount').query({elementid:elementid,name:name, countryid:countryid, oiefid:oiefid, itemid:itemid});
    return resp.body;
  },
  async queryTradeAnimalCount(elementid, name, countryid,oiefid, years){//活体动物统计（右三）
    var resp = await http.post(url + 'trade/special/trade/queryAnimalByFamily').query({elementid:elementid,name:name, countryid:countryid, oiefid:oiefid, years:years});
    return resp.body;
  },
  async queryReportProportion(afid,name,oiecountryid,year){//活体动物统计（右三右）
    var resp = await http.post(url + 'trade/special/trade/queryReportProportion').query({afid:afid,name:name, oiecountryid:oiecountryid, year:year});
    return resp.body;
  },
  /*贸易详情页请求start*/
  async queryTradeCountrySum(elementid,itemid,countryid,oiefid){//贸易国家数（左一）
    var resp = await http.post(url + 'trade/detail/tradeMatrix/queryListByCountryCount').query({elementid:elementid,itemid:itemid, countryid:countryid, oiefid:oiefid});
    return resp.body;
  },
  async queryDetailTrade(elementid,itemid,countryid,oiefid){//活体动物统计和产品统计（左二）
    var resp = await http.post(url + 'trade/detail/tradeMatrix/querySumByYear').query({elementid:elementid,itemid:itemid, countryid:countryid, oiefid:oiefid});
    return resp.body;
  },
  async queryCountryOnworldMap(year,elementid,itemid,countryid,oiefid){//世界地图上的一级贸易国家
    var resp = await http.post(url + 'trade/detail/tradeMatrix/queryList').query({year:year,elementid:elementid,itemid:itemid, countryid:countryid, oiefid:oiefid});
    return resp.body;
  },
  async queryCountryOnworldMapTwo(year,elementid,itemid,countryids,oiefid){//世界地图上的一级贸易国家
    var resp = await http.post(url + 'trade/detail/tradeMatrix/queryNextList').query({year:year,elementid:elementid,itemid:itemid, countryids:countryids, oiefid:oiefid});
    return resp.body;
  },
  //获取各国家经纬度列表
  async getAllCountry(){
    var resp = await http.post(url + 'country/queryAll').query();
    return resp.body;
  },
  //疫病列表
  async queryreport(afid,countryids,year,pageNo,pageSize){//世界地图上的一级贸易国家
    var resp = await http.post(url + 'trade/detail/report/queryReportByAnimalfamily').query({afid:afid,countryids:countryids,year:year,pageNo:pageNo, pageSize:pageSize,});
    return resp.body;
  },
  /*贸易详情页请求end*/
}
