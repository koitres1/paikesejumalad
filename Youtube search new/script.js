// JavaScript source code
function laulud() {
	console.log("asi")
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "chart.tracks.get?chart_name=top&page=1&page_size=5&country=ee&apikey=84cb747687267516f073f48b4fd14d7a",
		"method": "GET",
		};
	$.ajax(settings).done(function (response) {
		console.log()

	})
}
laulud()