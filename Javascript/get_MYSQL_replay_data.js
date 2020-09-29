let replay_data;
$( document ).ready(function() {
	$.get("https://crehw12bu8.execute-api.eu-central-1.amazonaws.com/Beta/display-replays", function(data, status){
		buildTable(data);
		replay_data = data;
		return data;
	});
});
