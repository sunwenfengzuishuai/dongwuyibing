<template>
  <div class="tradeCountryleft">
    <div class="centerCountry">国家：
      <Select v-model="model1" style="width:120px" size="small" @on-change="change" >
        <Option v-for="item in countryList" :value="item.value" :key="item.index">{{ item.label }}</Option>
      </Select>
    </div>
    <div v-if="currentCountryMsg.lenght!=0">
      <div class="tradeYear">年份：<span>{{currentCountryMsg[0].year}}</span></div>
      <div class="tradeType">贸易类型：<span>{{currentCountryMsg[0].element.indexOf('Export')!=-1?'出口':'进口'}}</span></div>
      <div class="animalType">商品：<span>{{currentCountryMsg[0].item}}</span></div>
      <div class="tradeSum">贸易量：<span style="color: yellowgreen">{{currentCountryMsg[0].value}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tradeCountryleft',

    props:{
      countryCountToMapR:{
        type:Array,
        defaule:null
      }
    },
    computed:{
      // currentCountryMsg(){
      //   if(this.countryCountToMapR.length!=0){
      //     return this.countryCountToMapR.filter(item=>item.partnercountry==this.model1)
      //   }else{
      //     return []
      //   }
      //
      // }
    },
    data () {
      return {
        currentCountryMsg:[],
        model1: 'New York',
        countryList:[{
          value: 'New York',
          label: 'New York'
        }],
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
      }
    },
    watch:{
      countryCountToMapR:{
        handler(newval,oldval){

          if(newval.length!=0){
            this.countryList = newval.map((item,index)=>{return {value:item.partnercountry,label:item.partnercountry,index:index}})
            this.model1 = this.countryList[0].value
          }else{
            alert(newval.length)
            this.countryList = []
            this.model1 = ''
          }

        },
        deep:true
      },
      model1(newval ,oldval){
        alert('model的值为'+newval)
        this.currentCountryMsg = this.countryCountToMapR.filter(item=>item.partnercountry==this.model1)
      }
    },
    methods:{
      change(value){
        this.$emit('changeCenterCountry',value)
      }
    }
  }
</script>

<style scoped>
  .tradeCountryleft{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 25px 15px 0px 15px;
    border: 1px solid #000;
  }
  .tradeCountryleft>div{

    padding-bottom: 5px;
    color: #fff;
    border-bottom: 1px solid yellow;
  }
</style>
