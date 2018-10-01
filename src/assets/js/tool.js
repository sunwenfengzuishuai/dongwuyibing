export default {
	// 分组
	chunk(arr, size) {
		var arr2=[];
		for(var i=0;i<arr.length;i=i+size){
			arr2.push(arr.slice(i,i+size));
		}
		return arr2;
	},
	// 数组去重
	getSpliceArray(arr){
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length; j++) {
				if (arr[i] == arr[j] && i != j) {
					arr.splice(j,1);
					i--;
				}
			}
		}
		return arr;
	},
	// 比较器-对象数组按属性值排序 降序
	compare(property){
	    return function(a,b){
	        var value1 = a[property];
	        var value2 = b[property];
	        return value2 - value1;
	    }
	}
}