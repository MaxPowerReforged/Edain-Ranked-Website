function to_zero(invalid_value) {
	invalid_value = invalid_value || 0;
	if (isNaN(invalid_value)) invalid_value = 0;
	return invalid_value;
}

function build_charts(wins_factions, losses_factions) {
	var data_gondor = {
	  series: [{value: to_zero(wins_factions.Gondor), className: "gondor_chart_win"}, 
			   {value: to_zero(losses_factions.Gondor), className: "gondor_chart_lose"}]
	};

	var data_rohan = {
	  series: [{value: to_zero(wins_factions.Rohan), className: "rohan_chart_win"}, 
			   {value: to_zero(losses_factions.Rohan), className: "rohan_chart_lose"}]
	};

	var data_imladris = {
	  series: [{value: to_zero(wins_factions.Imladris), className: "imladris_chart_win"}, 
			   {value: to_zero(losses_factions.Imladris), className: "imladris_chart_lose"}]
	};

	var data_lothlorien = {
	  series: [{value: to_zero(wins_factions.Lothlorien), className: "lothlorien_chart_win"}, 
			   {value: to_zero(losses_factions.Lothlorien), className: "lothlorien_chart_lose"}]
	};

	var data_erebor = {
	  series: [{value: to_zero(wins_factions.Erebor), className: "erebor_chart_win"}, 
			   {value: to_zero(losses_factions.Erebor), className: "erebor_chart_lose"}]
	};

	var data_iron_hills = {
		series: [{value: to_zero(wins_factions["Iron Hills"]), className: "iron_hills_chart_win"}, 
			   {value: to_zero(losses_factions["Iron Hills"]), className: "iron_hills_chart_lose"}]
	};

	var data_ered_luin = {
		series: [{value: to_zero(wins_factions["Ered Luin"]), className: "ered_luin_chart_win"}, 
				 {value: to_zero(losses_factions["Ered Luin"]), className: "ered_luin_chart_lose"}]
	};

	var data_mordor = {
		series: [{value: to_zero(wins_factions.Mordor), className: "mordor_chart_win"}, 
			   {value: to_zero(losses_factions.Mordor), className: "mordor_chart_lose"}]
	};

	var data_isengard = {
	  series: [{value: to_zero(wins_factions.Isengard), className: "isengard_chart_win"}, 
			   {value: to_zero(losses_factions.Isengard), className: "isengard_chart_lose"}]
	};

	var data_angmar = {
		series: [{value: to_zero(wins_factions.Angmar), className: "angmar_chart_win"},
			   {value: to_zero(losses_factions.Angmar), className: "angmar_chart_lose"}]
	};

	var data_misty_mountains = {
		series: [{value: to_zero(wins_factions["Misty Mountains"]), className: "misty_mountains_chart_win"},
			   {value: to_zero(losses_factions["Misty Mountains"]), className: "misty_mountains_chart_lose"}]
	};

	// Create a new line chart object where as first parameter we pass in a selector
	// that is resolving to our chart container element. The Second parameter
	// is the actual data object. As a third parameter we pass in our custom options.
	new Chartist.Pie('#gondor_chart_container', data_gondor);
	new Chartist.Pie('#rohan_chart_container', data_rohan);
	new Chartist.Pie('#imladris_chart_container', data_imladris);
	new Chartist.Pie('#lothlorien_chart_container', data_lothlorien);
	new Chartist.Pie('#erebor_chart_container', data_erebor);
	new Chartist.Pie('#iron_hills_chart_container', data_iron_hills);
	new Chartist.Pie('#ered_luin_chart_container', data_ered_luin);
	new Chartist.Pie('#mordor_chart_container', data_mordor);
	new Chartist.Pie('#isengard_chart_container', data_isengard);
	new Chartist.Pie('#angmar_chart_container', data_angmar);
	new Chartist.Pie('#misty_mountains_chart_container', data_misty_mountains);
}