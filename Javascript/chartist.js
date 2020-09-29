function to_zero(invalid_value) {
	invalid_value = invalid_value || 0;
	if (isNaN(invalid_value)) invalid_value = 0;
	return invalid_value;
}

function build_charts(winner_factions, loser_factions, maps, host) {
	
	var gondor_wins = to_zero(winner_factions.Gondor);
	var gondor_loses = to_zero(loser_factions.Gondor);
	var gondor_label = " ";
	var rohan_wins = to_zero(winner_factions.Rohan);
	var rohan_loses = to_zero(loser_factions.Rohan);
	var rohan_label = " ";
	var imladris_wins = to_zero(winner_factions.Imladris);
	var imladris_loses = to_zero(loser_factions.Imladris);
	var imladris_label = " ";
	var lothlorien_wins = to_zero(winner_factions.Lothlorien);
	var lothlorien_loses = to_zero(loser_factions.Lothlorien);
	var lothlorien_label = " ";
	var erebor_wins = to_zero(winner_factions.Erebor);
	var erebor_loses = to_zero(loser_factions.Erebor);
	var erebor_label = " ";
	var iron_hills_wins = to_zero(winner_factions["Iron Hills"]);
	var iron_hills_loses = to_zero(loser_factions["Iron Hills"]);
	var iron_hills_label = " ";
	var ered_luin_wins = to_zero(winner_factions["Ered Luin"]);
	var ered_luin_loses = to_zero(loser_factions["Ered Luin"]);
	var ered_luin_label = " ";
	var mordor_wins = to_zero(winner_factions.Mordor);
	var mordor_loses = to_zero(loser_factions.Mordor);
	var mordor_label = " ";
	var isengard_wins = to_zero(winner_factions.Isengard);
	var isengard_loses = to_zero(loser_factions.Isengard);
	var isengard_label = " ";
	var angmar_wins = to_zero(winner_factions.Angmar);
	var angmar_loses = to_zero(loser_factions.Angmar);
	var angmar_label = " ";
	
	var gondor_winrate = to_zero((gondor_wins/(gondor_wins + gondor_loses) * 100).toFixed(1));
	if (gondor_winrate!=0) gondor_label = 'Gondor: ' + gondor_wins + '/' + (gondor_wins + gondor_loses) + ' (' + gondor_winrate + '%)';

	var rohan_winrate = to_zero((rohan_wins/(rohan_wins + rohan_loses) * 100).toFixed(1));
	if (rohan_winrate!=0) rohan_label = 'Rohan: ' + rohan_wins + '/' + (rohan_wins + rohan_loses) + ' (' + rohan_winrate + '%)';
	
	var imladris_winrate = to_zero((imladris_wins/(imladris_wins + imladris_loses) * 100).toFixed(1));
	if (imladris_winrate!=0) imladris_label = 'Imladris: ' + imladris_wins + '/' + (imladris_wins + imladris_loses) + ' (' + imladris_winrate + '%)';
	
	var lothlorien_winrate = to_zero((lothlorien_wins/(lothlorien_wins + lothlorien_loses) * 100).toFixed(1));
	if (lothlorien_winrate!=0) lothlorien_label = 'Lothlorien: ' + lothlorien_wins + '/' + (lothlorien_wins + lothlorien_loses) + ' (' + lothlorien_winrate + '%)';
	
	var erebor_winrate = to_zero((erebor_wins/(erebor_wins + erebor_loses) * 100).toFixed(1));
	if (erebor_winrate!=0) erebor_label = 'Erebor: ' + erebor_wins + '/' + (erebor_wins + erebor_loses) + ' (' + erebor_winrate + '%)';
	
	var iron_hills_winrate = to_zero((iron_hills_wins/(iron_hills_wins + iron_hills_loses) * 100).toFixed(1));
	if (iron_hills_winrate!=0) iron_hills_label = 'Iron Hills: ' + iron_hills_wins + '/' + (iron_hills_wins + iron_hills_loses) + ' (' + iron_hills_winrate + '%)';
	
	var ered_luin_winrate = to_zero((ered_luin_wins/(ered_luin_wins + ered_luin_loses) * 100).toFixed(1));
	if (ered_luin_winrate!=0) ered_luin_label = 'Ered Luin: ' + ered_luin_wins + '/' + (ered_luin_wins + ered_luin_loses) + ' (' + ered_luin_winrate + '%)';
	
	var mordor_winrate = to_zero((mordor_wins/(mordor_wins + mordor_loses) * 100).toFixed(1));
	if (mordor_winrate!=0) mordor_label = 'Mordor: ' + mordor_wins + '/' + (mordor_wins + mordor_loses) + ' (' + mordor_winrate + '%)';
	
	var isengard_winrate = to_zero((isengard_wins/(isengard_wins + isengard_loses) * 100).toFixed(1));
	if (isengard_winrate!=0) isengard_label = 'Isengard: ' + isengard_wins + '/' + (isengard_wins + isengard_loses) + ' (' + isengard_winrate + '%)';
	
	var angmar_winrate = to_zero((angmar_wins/(angmar_wins + angmar_loses) * 100).toFixed(1));
	if (angmar_winrate!=0) angmar_label = 'Angmar: ' + angmar_wins + '/' + (angmar_wins + angmar_loses) + ' (' + angmar_winrate + '%)';
	
	var winrate_statistics = [
		{label: gondor_label, winrate: gondor_winrate},
		{label: rohan_label, winrate: rohan_winrate},
		{label: imladris_label, winrate: imladris_winrate},
		{label: lothlorien_label, winrate: lothlorien_winrate},
		{label: erebor_label, winrate: erebor_winrate},
		{label: iron_hills_label, winrate: iron_hills_winrate},
		{label: ered_luin_label, winrate: ered_luin_winrate},
		{label: isengard_label, winrate: isengard_winrate},
		{label: mordor_label, winrate: mordor_winrate},
		{label: angmar_label, winrate: angmar_winrate}
	]
	winrate_statistics.sort((a, b) => (a.winrate < b.winrate) ? 1 : (a.winrate === b.winrate) ? ((a.label < b.label) ? 1 : -1) : -1 )
	console.log(winrate_statistics);
	
	var winrate_data = {};
	for (var i = 0; i < winrate_statistics.length; i++) {
			var pair = { [winrate_statistics[i].label] : winrate_statistics[i].winrate};
			Object.assign(winrate_data, pair);														  
	}
	
	var winrate_chart_data = {
		labels: Object.keys(winrate_data),
		series: Object.values(winrate_data)
	  };

	var maps_chart_data = {
		labels: Object.keys(maps),
		series: Object.values(maps)
	  };

	var data3 = {
		labels: Object.keys(host),
		series: Object.values(host)
	  };

	var options = {
		labelInterpolationFnc: function(value) {
			return value[0]
		},
	};

	var responsiveOptions = [
	  ['screen and (min-width: 640px)', {
		labelOffset: 100,
		labelDirection: 'explode',
		labelInterpolationFnc: function(value) {
		  return value;
		}
	  }],
	  ['screen and (min-width: 1024px)', {
		labelOffset: 130,
		chartPadding: 80
	  }]
	];

	new Chartist.Pie('#statistics_winrates', winrate_chart_data, options, responsiveOptions);
	new Chartist.Pie('#statistics_maps', maps_chart_data, options, responsiveOptions);
	new Chartist.Pie('#statistics_host', data3, options, responsiveOptions);
}