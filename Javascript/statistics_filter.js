// JavaScript Document
$(document).ready(filter_query);
$(".select_small3, .input_small4").change(filter_query);
function filter_query(){
	console.log("New query:");
	
	var query_parameters = {};
	
	var player = $("#filter_players").val();
	var map = $("#filter_map").val();
	var host = $("#filter_host").val();
	var version = $("#filter_version").val();
	var event = $("#filter_event").val();
	var winner_max_elo = $('[name="winner_max_elo"]').val();
	if (winner_max_elo == "" || isNaN(winner_max_elo)) winner_max_elo = 5000;
	var winner_min_elo = $('[name="winner_min_elo"]').val();
	if (winner_min_elo == "" || isNaN(winner_min_elo)) winner_min_elo = 0;
	var loser_max_elo = $('[name="loser_max_elo"]').val();
	if (loser_max_elo == "" || isNaN(loser_max_elo)) loser_max_elo = 5000;
	var loser_min_elo = $('[name="loser_min_elo"]').val();
	if (loser_min_elo == ""  || isNaN(loser_min_elo)) loser_min_elo = 0;
	var winner_random = $("#filter_winner_random").val();
	var loser_random = $("#filter_loser_random").val();
	
	
	query_parameters.player = player;
	query_parameters.map = map;
	query_parameters.host = host;
	query_parameters.version = version;
	query_parameters.event = event;
	query_parameters.winner_max_elo = winner_max_elo;
	query_parameters.winner_min_elo = winner_min_elo;
	query_parameters.loser_max_elo = loser_max_elo;
	query_parameters.loser_min_elo = loser_min_elo;
	query_parameters.winner_random = winner_random;
	query_parameters.loser_random = loser_random;
	
	console.log(query_parameters);
	var json_query = JSON.stringify(query_parameters);
	
	$.post("https://crehw12bu8.execute-api.eu-central-1.amazonaws.com/Beta/display-statistics", json_query, function(data){
		console.log("Result from post request");
		console.log(data);
		
		var winner_factions = {};
		for (var i = 0; i < data[0].length; i++) {
			var pair = { [data[0][i].Winner_Faction] : data[0][i].count};
			Object.assign(winner_factions, pair);														  
		}
		
		var loser_factions = {};
		for (var i = 0; i < data[1].length; i++) {
			var pair = { [data[1][i].Loser_Faction] : data[1][i].count};
			Object.assign(loser_factions, pair);														  
		}
		
		var maps = {};
		for (var i = 0; i < data[2].length; i++) {
			var pair = { [data[2][i].Map + ": " + data[2][i].count] : data[2][i].count};
			Object.assign(maps, pair);														  
		}
		
		var host = {};
		for (var i = 0; i < data[3].length; i++) {
			var pair = { [data[3][i].Host + ": " + data[3][i].count] : data[3][i].count};
			Object.assign(host, pair);														  
		}
		
		console.log(winner_factions, loser_factions, maps, host);
		build_charts(winner_factions, loser_factions, maps, host)
		
	}, "json");
	
}
//https://crehw12bu8.execute-api.eu-central-1.amazonaws.com/Beta/display-statistics
