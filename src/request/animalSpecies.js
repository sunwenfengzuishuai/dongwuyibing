var http = require('superagent')
var base = require('./base').default
var url = base.root + "animalSpecies/"
var url2 = base.root


export default {
	async queryAnimalByDiseaseid(id){
        var resp = await http.post(url + 'queryAnimalByDiseaseid').query({diseaseid:id})
        return resp.body
    },
    async detailAnimalByDiseaseid(oiediseaseid, diseaseid){
        var resp = await http.post(url + 'queryAnimalByDiseaseid').query({oiediseaseid:oiediseaseid, diseaseid:diseaseid})
        return resp.body
    },
    //疫病影响动物科疫病id POST /api/v1/animal/family/queryFimilyByDiseaseid
    async queryFimilyByDiseaseid(oiediseaseid, diseaseid){
        var resp = await http.post(url2 + 'animal/family/queryFimilyByDiseaseid').query({oiediseaseid:oiediseaseid, diseaseid:diseaseid})
        return resp.body
    },

}
