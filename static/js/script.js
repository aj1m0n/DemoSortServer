const timer = 5000;
window.addEventListener('load', function () {
	// setInterval('location.reload()', timer);
	getDataList();
});
var sort_by = function (field, reverse, primer) {
	reverse = (reverse) ? -1 : 1;
	return function (a, b) {
		a = a[field];
		b = b[field];
		if (typeof (primer) != 'undefined') {
			a = primer(a);
			b = primer(b);
		}
		if (a < b) return reverse * -1;
		if (a > b) return reverse * 1;
		return 0;
	}
}
function getDataList() {
	var url = '/data';
	fetch(url)
		.then(function (data) {
			return data.json(); // 読み込むデータをJSONに設定
		})
		.then(function (json) {
			// json.sort(sort_by('id', false, function(a){return a.toUpperCase()}));
			for (var i = 0; i < json.length; i++) {
                var id = json[i].id;
                var date = json[i].date;
                var direction = json[i].direction;

				var row = document.getElementById('id-list').insertRow();
				row.insertCell().textContent = id;
				row.insertCell().textContent = date;
				row.insertCell().textContent = direction;
			}
		});
}

