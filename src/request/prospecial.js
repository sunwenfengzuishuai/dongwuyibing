var http = require('superagent')
var base = require('./base').default
var url = base.root


export default {
    // 动物类型动物选择下拉框  POST /api/v1/animal/family/animalSelect
	async requestaniamlselect(animaltype){
        var resp = await http.post(url + 'animal/family/animalSelect').query({animaltype:animaltype});
        return resp.body;
    },
    // 根据选择条件查询生产结果 POST /api/v1/product/special/product/query
    async queryProData(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/product/query').query({pageNo:pageNo, pageSize:pageSize, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 查询畜牧生产产品 POST /api/v1/product/special/product/queryProducttion
    async queryProducttion(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/product/queryProducttion').query({pageNo:pageNo, pageSize:pageSize, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 查询根据畜牧生产畜牧贸易(活体动物)   POST /api/v1/product/special/trade/query
    async queryTradData(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/trade/query').query({pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 查询根据畜牧生产畜牧贸易(加工产品)   POST /api/v1/product/special/trade/queryTradeProduct
    async queryTradeProduct(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/trade/queryTradeProduct').query({pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 根据筛选条件按照动物科查询疫病  POST /api/v1/product/special/report/queryReportByAnimalfamily
    async queryReportByAnimalfamily(afid, name, oiecountryid, year, pageNo, pageSize,){
        var resp = await http.post(url + 'product/special/report/queryReportByAnimalfamily').query({ afid:afid, name:name, oiecountryid:oiecountryid, year:year, pageNo:pageNo, pageSize:pageSize});
        return resp.body;
    },

    //根据范围时间查询各科动物生产总数 POST /api/v1/product/special/product/queryAnimalLiveCount
    async queryAnimalLiveCount(name, countryid, years){
        var resp = await http.post(url + 'product/special/product/queryAnimalLiveCount').query({ name:name, countryid:countryid, years:years});
        return resp.body;
	},
    //根据动物科/动物id查询 活体动物生产年走势 POST /api/v1/product/special/product/queryAnimalYearCount
    async queryAnimalYearCount(name, countryid, oiefid, itemid){
        var resp = await http.post(url + 'product/special/product/queryAnimalYearCount').query({ name:name, countryid:countryid, oiefid:oiefid, itemid:itemid});
        return resp.body;
    },
    //根据动物科id与年份查询 动物科下动物产量 POST /api/v1/product/special/product/queryAnimalByFamily
    async queryAnimalByFamily(name, countryid, oiefid, years){
        var resp = await http.post(url + 'product/special/product/queryAnimalByFamily').query({ name:name, countryid:countryid, oiefid:oiefid, years:years});
        return resp.body;
    },
    //根据动物科id与年份查询 当年全快报数与影响该科动物的报道数的占比及相应疫病快报数 POST /api/v1/product/special/product/queryReportProportion
    async queryReportProportion(name, oiecountryid, afid, year){
        var resp = await http.post(url + 'product/special/product/queryReportProportion').query({ name:name, oiecountryid:oiecountryid, afid:afid, year:year});
        return resp.body;
    },
}
