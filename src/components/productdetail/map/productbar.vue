
<template>
    <div id="productbar"></div>
</template>

<style scoped>
    #productbar{
        width: 100%;
        height: 100%;
    }
</style>

<script>
    import echarts from 'echarts';

    export default {
        props: {
            aliveproductmapdata: {
                type: Array,
                default: null
            },
            choiceyear: {
                type: Number,
                default: 0
            }
        },
        watch: {
            aliveproductmapdata: function(newValue, oldValue){
                this.getAniamlProData(newValue);
                this.drawLine();        
            },
        },
        data() {
            return {
                proName: [],
                proValue: [],
                proyear: [],
            }
        },
        mounted() {            
            // this.drawLine();
        },
        methods: {
        	// 动物科生产标准格式化
        	getAniamlProData(liveCount){
        		this.proName = [];
        		this.proValue = [];
                if (liveCount.length > 30) {
                    for (var i = 0; i < 30; i++) {
                        this.proName.push(liveCount[i].country);
                        this.proValue.push(liveCount[i].value);
                    }
                }else {
                    for (var i = 0; i < liveCount.length; i++) {
                        this.proName.push(liveCount[i].country);
                        this.proValue.push(liveCount[i].value);
                    }
                }
        	},

            async drawLine() {	
                var chart = echarts.init(document.getElementById("productbar"));

                var option = {
                    grid: {  
					    left: '2%',  
					    right: '6%',  
					    bottom: '4%',  
					    top: '30px',
					    containLabel: true  
					},
                    tooltip : {
                        trigger: 'axis'
                    },

               //      legend: {
               //          x: 'left',
               //          y: 'top',
               //          padding: [8,0,0,20],
               //          data: this.proyear,
               //          textStyle: {
			            //     color: '#eee',
			            // }
               //      },

                    calculable : true,

                    xAxis : [
                        {
                        	axisLabel: {
                                rotate: -50,
                                interval: 0
                            },
                            type : 'category',
                            data : this.proName, 
                            axisLine: {
			                	lineStyle: {
			                   		color: '#eee'
			                	}
				            },
				            type: 'category',
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
			            	axisLine: {
				                lineStyle: {
				                    color: '#CECECE'
				                }
			           		},
			           		splitLine:{
						        show:false,  //不显示分割线         
						    },
                        }
                    ],
                    series : [
                        {
                            name:this.choiceyear,
                            type:'bar',
                            color:['#FD824D'],
                            itemStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(
				                        0, 0, 0, 1,
				                        [
				                            {offset: 0, color: '#83bff6'},
				                            {offset: 0.5, color: '#188df0'},
				                            {offset: 1, color: '#188df0'}
				                        ]
				                    )
				                },
				                emphasis: {
				                    color: new echarts.graphic.LinearGradient(
				                        0, 0, 0, 1,
				                        [
				                            {offset: 0, color: '#2378f7'},
				                            {offset: 0.7, color: '#2378f7'},
				                            {offset: 1, color: '#83bff6'}
				                        ]
				                    )
				                }
				            },
                            data: this.proValue,

                        },
                    ]
                };
                //清空画布
                chart.clear();
                // 使用刚指定的配置项和数据显示图表。
                chart.setOption(option);
                // 屏幕自适应
                setTimeout(function (){
                    window.addEventListener('resize',function () {
                        chart.resize();
                    })
                },200)

            },

        }
    }
</script>


