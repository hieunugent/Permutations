function getPermutations(array) {
	const permutation = [];
	permutationsfunction(0, array, permutation);
	return permutation;
}
function permutationsfunction(i , array, permutation){
	if(i === array.length -1){
		permutation.push(array.slice());
	}else{
		for(let j = i; j < array.length ; j++  ){
			swap(array, i , j);
			permutationsfunction(i+1, array, permutation);
			swap(array , i, j);
		}
	}
}

function swap (array , i, j){
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
// Do not edit the line below.
exports.getPermutations = getPermutations;
