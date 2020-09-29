// JavaScript Document
$(document).ready(filter_query);
$(".select_small3, .input_small4").change(filter_query);
function filter_query(){
	
	console.log("New query:");
	
	var query_parameters = {};
	
	var faction = $("#filter_faction").val();
	
	//hides chart container of the selected faction and shows the other ones
	$("#faction_statistics_title").html(faction + " winrate");
	$(".chart_faction_container").show();
	$("#" + faction.toLowerCase().replace(" ", "_") + "_chart").hide();
	
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
	
	query_parameters.faction = faction;
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
	
	$.post("https://crehw12bu8.execute-api.eu-central-1.amazonaws.com/Beta/display-statistics-factions", json_query, function(data){
		console.log("Result from post request");
		console.log(data);
		
		var wins_factions = {};
		for (var i = 0; i < data[0].length; i++) {
			var pair = { [data[0][i].Loser_Faction] : data[0][i].count};
			Object.assign(wins_factions, pair);														  
		}
		
		var losses_factions = {};
		for (var i = 0; i < data[1].length; i++) {
			var pair = { [data[1][i].Winner_Faction] : data[1][i].count};
			Object.assign(losses_factions, pair);														  
		}
		
		console.log(wins_factions, losses_factions);
		build_charts(wins_factions, losses_factions);
		fill_chart_data(wins_factions, losses_factions);
		
	}, "json");
	
}

function fill_chart_data(wins_factions, losses_factions) {
	build_data_text("Gondor", wins_factions.Gondor, losses_factions.Gondor);
	build_data_text("Rohan", wins_factions.Rohan, losses_factions.Rohan);
	build_data_text("Imladris", wins_factions.Imladris, losses_factions.Imladris);
	build_data_text("Lothlorien", wins_factions.Lothlorien, losses_factions.Lothlorien);
	build_data_text("Erebor", wins_factions.Erebor, losses_factions.Erebor);
	build_data_text("Iron_Hills", wins_factions["Iron Hills"], losses_factions["Iron Hills"]);
	build_data_text("Ered_Luin", wins_factions["Ered Luin"], losses_factions["Ered Luin"]);
	build_data_text("Mordor", wins_factions.Mordor, losses_factions.Mordor);
	build_data_text("Isengard", wins_factions.Isengard, losses_factions.Isengard);
	build_data_text("Angmar", wins_factions.Angmar, losses_factions.Angmar);
	/*build_data_text("Misty_Mountains", wins_factions["Misty Mountains"], losses_factions["Misty Mountains"]);*/
}
		
function build_data_text(faction_name, wins, losses) {
	$("#" + faction_name.toLowerCase() + "_chart .chart_faction_text").html(
		"vs " + faction_name.replace("_", " ") + ":<br>" +
		to_zero(wins) + "/" +
		(to_zero(wins) + to_zero(losses)) + " (" +
		(to_zero(to_zero(wins) / (to_zero(wins) + to_zero(losses))) * 100).toFixed(0) + "%)"
	);
}