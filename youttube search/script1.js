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
			"url": "https://genius.p.rapidapi.com/search?per_page=1&q=" + search,
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "genius.p.rapidapi.com",
				"x-rapidapi-key": "a7e76ecfcfmsh7dcca50a4ec3d09p122c19jsn3f509245357f"
			}
		};

		$.ajax(settings).done(function (response) {
			console.log(response)
			id = response.response.hits[0].result.api_path
		});

		const settings1 = {
			"async": false,
			"crossDomain": true,
			"url": "https://genius.p.rapidapi.com" + id,
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "genius.p.rapidapi.com",
				"x-rapidapi-key": "a7e76ecfcfmsh7dcca50a4ec3d09p122c19jsn3f509245357f"
			}
		};


		$.ajax(settings1).done(function (response1) {
			console.log(response1)
			$("#tagavara").empty()
			$("#tagavara").append("Tagavara allikas")
			$("#tagavara").append(response1.response.song.embed_content)
		});
    })
