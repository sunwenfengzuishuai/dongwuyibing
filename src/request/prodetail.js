var http = require('superagent')
var base = require('./base').default
var url = base.root

export default{
	// 动物类型动物选择下拉框  0为活体动物,1为加工产品   POST /api/v1/animal/family/animalSelect
	async requestaniamlselect(animaltype){
        var resp = await http.post(url + 'animal/family/animalSelect').query({animaltype:animaltype});
        return resp.body;
    },
    // 按照筛选动物科id查询下面活体动物以及加工产品 0为活体动物,1为加工产品 POST /api/v1/animal/family/animalButtonByAfid
	async animalButtonByAfid(oiefid){
        var resp = await http.post(url + 'animal/family/animalButtonByAfid').query({oiefid:oiefid});
        return resp.body;
    },
    // 列表畜牧生产活体动物不分页 POST /api/v1/product/detail/product/queryProductLiveList
    async queryProductLiveList(itemid, year){
        var resp = await http.post(url + 'product/detail/product/queryProductLiveList').query({itemid:itemid, year:year});
        return resp.body;
    },
    // 列表畜牧生产产品不分页 POST /api/v1/product/detail/product/queryProducttionList
    async queryProducttionList(itemid, year){
        var resp = await http.post(url + 'product/detail/product/queryProducttionList').query({itemid:itemid, year:year});
        return resp.body;
    },
    //procompary下的俩查询接口
    // 限定地区列表畜牧生产活体动物不分页 POST /api/v1/product/detail/product/queryProductLiveList
    async queryAreaLiveList(name, oiecountryid, itemid, year){
        var resp = await http.post(url + 'product/detail/product/queryProductLiveList').query({name:name, oiecountryid:oiecountryid, itemid:itemid, year:year});
        return resp.body;
    },
    // 列表畜牧生产产品不分页 POST /api/v1/product/detail/product/queryProducttionList
    async queryAreationList(name, oiecountryid, itemid, year){
        var resp = await http.post(url + 'product/detail/product/queryProducttionList').query({name:name, oiecountryid:oiecountryid, itemid:itemid, year:year});
        return resp.body;
    },
    
    //根据动物科/动物id查询 活体动物生产年走势POST /api/v1/product/detail/product/queryAnimalLiveYearCount
    async queryAnimalYearCount(name, countryid, oiefid, itemid){
        var resp = await http.post(url + 'product/detail/product/queryAnimalLiveYearCount').query({ name:name, countryid:countryid, oiefid:oiefid, itemid:itemid});
        return resp.body;
    },
    //动物产品生产年走势（返回单位） POST /api/v1/product/detail/product/queryAnimalProductYearCount
    async queryAnimalProductYearCount(name, countryid, oiefid, itemid){
        var resp = await http.post(url + 'product/detail/product/queryAnimalProductYearCount').query({ name:name, countryid:countryid, oiefid:oiefid, itemid:itemid});
        return resp.body;
    },
    //查询单位 POST /api/v1/product/detail/product/queryUnitcn
    async queryUnitcn(itemid){
        var resp = await http.post(url + 'product/detail/product/queryUnitcn').query({itemid:itemid});
        return resp.body;
    },

}