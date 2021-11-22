// JavaScript source code
	var lyrics = ''
	var id = ""
	var site = ""

	$("form").submit(function (event) {
		event.preventDefault()

		var search = $("#search").val()

		const settings = {
			"async": false,
			"crossDomain": true,
			"url": "https://api.happi.dev/v1/music?q=" + search + "&lyrics=1",
			"method": "GET",
			"headers": {
				"x-happi-key": "7bd56dC0tsEwCqO9T5c3boj7Slktucg0eNQJCtDuyY9T8YEkHLGriBol"
			}
		};

		$.ajax(settings).done(function (response) {
			console.log(response)
			id = response.result[0].api_lyrics
			console.log(id)
		});

		const settings1 = {
			"async": false,
			"crossDomain": true,
			"url": id,
			"method": "GET",
			"headers": {
				"x-happi-key": "7bd56dC0tsEwCqO9T5c3boj7Slktucg0eNQJCtDuyY9T8YEkHLGriBol"
			}
		};

		$.ajax(settings1).done(function (response1) {
			console.log(response1)
			$("#lyrics").empty()
			$("#lyrics").append(response1.result.lyrics.replace(new RegExp('\r?\n', 'g'), '<br />'))
			console.log(response1.result.lyrics.replace(new RegExp('\r?\n', 'g'), '<br />'))
		});

	})
