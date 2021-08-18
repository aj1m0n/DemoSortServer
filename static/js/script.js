const timer = 5000;
window.addEventListener('load', function() {
	setInterval('location.reload()',timer);
	getDataList();
      });

function getDataList() {
	var url = '/data';
	fetch(url)
	.then(function (data) {
		return data.json(); // 読み込むデータをJSONに設定
	      })
	.then(function (json) {
		var id_list = json.id_list;
		var data_list = json.date_list;
		var direction_list = json.direction;

		for (var i = 0; i < json.id_list.length; i++){
			var row = document.getElementById('id-list').insertRow();
			row.insertCell().textContent = id_list[i];
			row.insertCell().textContent = data_list[i];
			row.insertCell().textContent = direction_list[i];
		}
	});

	
	}
