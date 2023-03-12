function lab5 () {
	let column_1 = [10, 7, 2, 10, 4, 10, 5, 9, 2, 7, 8, 4, 1, 10, 10, 1, 2, 2, 8, 5, 6, 2, 6, 7, 6, 6, 3, 10, 1, 6];
	let column_2 = [8, 7, 10, 1, 4, 9, 8, 2, 10, 9, 9, 7, 1, 3, 4, 2, 9, 8, 10, 6, 9, 9, 1, 10, 2, 6, 2, 6, 6, 10];
	let column_3 = [81, 66, 68, 91, 56, 72, 54, 77, 43, 98, 77, 62, 78, 50, 98, 81, 62, 64, 79, 56, 98, 83, 70, 100, 44, 52, 42, 67, 73, 68];
	let column_4 = [82, 99, 53, 83, 61, 48, 83, 63, 91, 49, 65, 41, 66, 45, 85, 54, 63, 61, 86, 63, 80, 100, 97, 62, 60, 65, 77, 57, 93, 48];
	sum_1 = 0;
	for (i=0; i<column_1.length; i++) {
		sum_1 = sum_1 + column_1[i];
	}
	sum_2 = 0;
	for (i=0; i<column_2.length; i++) {
		sum_2 = sum_2 + column_2[i];
	}
	sum_3 = 0;
	for (i=0; i<column_3.length; i++) {
		sum_3 = sum_3 + column_3[i];
	}
	sum_4 = 0;
	for (i=0; i<column_4.length; i++) {
		sum_4 = sum_4 + column_4[i];
	}
	let sums = [sum_1, sum_2, sum_3, sum_4];
	sum_all = 0;
	for (i=0; i<sums.length; i++) {
		sum_all = sum_all + sums[i];
	}
	const results = {
		col1 : column_1,
		col2 : column_2,
		col3 : column_3,
		col4 : column_4,
		sums : sums,
		total_score : sum_all
	}

	console.log (results)
}