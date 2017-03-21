var gdp = d3.select('#gdp');
var ginfo = [[2002, 12.8], [2017, 17]];

var rev = d3.select('#rev');
var rinfo = [[2002, 2.19], [2017, 3.21]]; 

var debt = d3.select('#debt');
var dinfo = [[2002, 7.31], [2017, 17.7]];

var scale = 40;


var bars = function() {

	gdp.selectAll('div')
		.data(ginfo)
		.enter()
		.append('div')
		.style('width', function(d) {
			return (d[1] * scale) + 'px';
		})
		.text(function(d) {
			return d[0] + ": " + d[1];
		});

	rev.selectAll('div')
		.data(rinfo)
		.enter()
		.append('div')
		.style('width', function(d) {
			return (d[1] * scale) + 'px';
		})
		.text(function(d) {
			return d[0] + ": " + d[1];
		});

	debt.selectAll('div')
		.data(dinfo)
		.enter()
		.append('div')
		.style('width', function(d) {
			return (d[1] * scale) + 'px';
		})
		.text(function(d) {
			return d[0] + ": " + d[1];
		});
}

bars();