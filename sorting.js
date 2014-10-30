function bubble_sort(input){
	var sorted_input = input;
	for (var i=0; i< input.length; i++){
		for (var j=1; j<(input.length-i); j++){
			if ( sorted_input[j-1] > sorted_input[j] ){
				var temp = sorted_input[j-1];
				sorted_input[j-1] = input[j];
				sorted_input[j] = temp;
			}
		}

	}
	return sorted_input;
}

function merge_sort(input){
	if (input.length <=1) { return input; }
	var left =[];
	var right=[];
	for (var i=0; i<input.length; i++){
		if (i < input.length/2){
			left.push(input[i]);
		}
		else{ 
			right.push(input[i]); 
		}
	}
	left = merge_sort(left);
	right = merge_sort(right);
	return merge(left,right);
}

function merge(left, right){
	var leftHand = 0;  
	var rightHand = 0; 
	var sorted = [];
	for (var i=0; i<(left.length + right.length); i++){
		if (leftHand===left.length) {
		    sorted.push(right[rightHand]);
		    rightHand++; 
		} else if (rightHand===right.length) {
		        sorted.push(left[leftHand]);
		        leftHand++;
		} else {
		        if (left[leftHand] < right[rightHand]){
		            sorted.push( left[leftHand]);
		            leftHand++;
		        } else {
		            sorted.push(right[rightHand]);
		            rightHand++;
		        };
		};
	};
	return sorted;
	// if (left===[]) return right
	// 	else if (right===[]) return left
	// 		else{
	// 			if (left[0]<right[0]){
	// 				return merge(left.splice(0,1),right).unshift(left[0]);
	// 			} else {
	// 				return merge(left, right.splice(0,1)).unshift(right[0]);
	// 			}
	// 		};
	// this is using recursive with merge function as well. Pretty cool and short, however error
	// Maximum call stack size exceeded.		
}; 

// for(var i=10; i < 20; i++) {
//     var num_items = Math.pow(2,i);
//     var native_test_array = [];
//     var b_test_array = [];
//     var m_test_array = []
//     for(var j=0; j < num_items; j++) {
//         var rand = Math.floor(Math.random() * num_items);
//         native_test_array.push(rand);
//         b_test_array.push(rand);
//         m_test_array.push(rand);
//     }
 
//     console.time(num_items + "native");
//     native_test_array.sort();
//     console.timeEnd(num_items + "native");
 
//     console.time(num_items + "bubble");
//     if (i<15) {bubble_sort(b_test_array);} 
//     console.timeEnd(num_items + "bubble");
 
//     console.time(num_items + "merge");
//     merge_sort(m_test_array);
//     console.timeEnd(num_items + "merge"); 
//     console.log('Next test'); 
// }
// testing suit in html file. Cool !

