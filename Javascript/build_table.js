function buildTable(data) {
	var table = document.getElementById('table_body');
	$('#table_body').html('');
	for (var i = 0; i < data.length; i++) {
		var Winner_Faction;
		var Loser_Faction;
		if (data[i].Winner_Random == 0) Winner_Faction = data[i].Winner_Faction + " (P)";
		else Winner_Faction = data[i].Winner_Faction;
		if (data[i].Loser_Random == 0) Loser_Faction = data[i].Loser_Faction + " (P)";
		else Loser_Faction = Loser_Faction = data[i].Loser_Faction;
		var row = `<tr>
					<td><a href="${data[i].Replay_Link}">${data[i].Replay_Name}</a></td>
					<td>${data[i].Winner}</td>
					<td>${Winner_Faction}</td>
					<td>${data[i].Loser}</td>
					<td>${Loser_Faction}</td>
					<td>${data[i].Host}</td>
					<td>${data[i].Map}</td>
					<td>${data[i].Game_Version}</td>
					<td>${data[i].Replay_Event}</td>
					<td>${data[i].Game_Date.substring(8, 10) + data[i].Game_Date.substring(4, 8) + data[i].Game_Date.substring(0, 4)}</td>
					<td>${data[i].Game_Description}</td>
					</tr>`
		table.innerHTML += row;
	}
}

$('th').on('click', function() {
	var column = $(this).data('column')
	var order = $(this).data('order')
	console.log('clicked! ', column, order)
	if (order == 'desc') {
		$(this).data('order', 'asc')
		replay_data = replay_data.sort((a,b) => a[column] > b[column] ? 1 : -1)
	} else {
		$(this).data('order', 'desc')
		replay_data = replay_data.sort((a,b) => a[column] < b[column] ? 1 : -1)
	}
	buildTable(replay_data);
});

$('#search_replays').on('keyup', function() {
	var replay_search = $(this).val()
	console.log('Value: ', replay_search);
	var searched_data = search_data(replay_search, replay_data);
	console.log(searched_data);
	buildTable(searched_data);
})

function search_data(value, data) {
	filteredData = [];
	for (var i = 0; i < data.length; i++) {
		value = value.toLowerCase();
		Replay_Name = data[i].Replay_Name.toLowerCase();
		Winner = data[i].Winner.toLowerCase();
		Winner_Faction = data[i].Winner_Faction.toLowerCase();
		Loser = data[i].Loser.toLowerCase();
		Loser_Faction = data[i].Loser_Faction.toLowerCase();
		Host = data[i].Host.toLowerCase();
		Map = data[i].Map.toLowerCase();
		Game_Version = data[i].Game_Version.toLowerCase();
		Replay_Event = data[i].Replay_Event.toLowerCase();
		Game_Date = data[i].Game_Date.substring(8, 10) + data[i].Game_Date.substring(4, 8) + data[i].Game_Date.substring(0, 4);
		if (data[i].Game_Description) Game_Description = data[i].Game_Description.toLowerCase();
		console.log(name);
		
		if (Replay_Name.includes(value) ||
			Winner.includes(value) ||
			Game_Date.includes(value) ||
			Winner_Faction.includes(value) ||
			Loser.includes(value) ||
			Loser_Faction.includes(value) ||
			Host.includes(value) ||
			Map.includes(value) ||
			Game_Version.includes(value) ||
			Replay_Event.includes(value) ||
			Game_Date.includes(value) ||
			Game_Description.includes(value)
		   ){
			filteredData.push(data[i]);
		}
	}
	return filteredData;
}