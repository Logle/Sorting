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
		if (i < input.length/2) { left.push(input[i]) }
		else { right.push(input[i]) }
	}
	left = merge_sort(left);
	right = merge_sort(right);

	return merge(left,right);
}

function merge(left, right) {

	var lh = 0;  // lh : left_head variable
	var rh = 0;  // rh : right_head variable
	var sorted = [];

	for (var i = 0; i < (left.length + right.length); i++) {
		if (lh === left.length) {
		    sorted.push( right[rh] );
		    rh++; 
		} else if (rh === right.length) {
		        sorted.push( left[lh] );
		        lh++;
		} else {
		        if (left[lh] < right[rh]) {
		            sorted.push( left[lh] );
		            lh++;
		        } else {
		            sorted.push( right[rh] );
		            rh++;
		        }

		}
	}
	return sorted;
}            