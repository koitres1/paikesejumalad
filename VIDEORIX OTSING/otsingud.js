// Michael Kevini Javascript
$(document).ready(function () {
    var API_KEY = "AIzaSyCyCbw7U9k7LhTpyWCyGJW66xbbuvR1E1g" //v�ti et oleks luba kasutada youtube API'd

	var video = ''

	var id = ''

	var id_happi = ''

    $("form").submit(function (event) { //funktsioon toimub kui form esitatakse
        event.preventDefault()

        var search = $("#search").val() //v�tab kirjutatud otsingu

        videoSearch(API_KEY, search, 1)

    function videoSearch(key, search, maxResults) {

        $("#vidoes").empty() //t�hjenab veebilehel vidoes ala
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
            console.log(data)
            //saadat youtube otsingu ja kirjutab vastu tuleva informatsiooni consooli
            data.items.forEach(item => {
                video = `

                        <iframe width = "420" height = "315" src ="http://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1&autoplay=1&loop=1&origin=https://www.youtube.com" frameborder="0" allowfullscreen></iframe>

                        `
                $("#vidoes").append(video)
            }); //viib youtube video veebilehele
        })

    }
	const settings = { //seadistame otsingu parameetrid
		"async": false,//l�litame v�lja sest on vaja tulemusi k�tte saada enne edasi liikumist
		"crossDomain": true,
		"url": "https://genius.p.rapidapi.com/search?per_page=1&q=" + search, //otsime laulu mida otsiti
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "genius.p.rapidapi.com",
			"x-rapidapi-key": "a7e76ecfcfmsh7dcca50a4ec3d09p122c19jsn3f509245357f"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response)
		id = response.response.hits[0].result.api_path //laulu id genius andmebaasis
	});

	const settings1 = {
		"async": false,
		"crossDomain": true,
		"url": "https://genius.p.rapidapi.com" + id, // saame tagavara genius api'lt k�tte
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "genius.p.rapidapi.com",
			"x-rapidapi-key": "a7e76ecfcfmsh7dcca50a4ec3d09p122c19jsn3f509245357f"
		}
	};


	$.ajax(settings1).done(function (response1) {
		console.log(response1)
		console.log(id)
		$("#tagavara").empty()
		$("#tagavara").append("<p>Tagavara allikas</p>") //genius tagavara, sest s�nad ainult saadaval nende lehek�ljel
		$("#tagavara").append(response1.response.song.embed_content)
	});

	const settings2 = {
		"async": false,
		"crossDomain": true,
		"url": "https://api.happi.dev/v1/music?q=" + search + "&lyrics=1",
		"method": "GET",
		"headers": {
			"x-happi-key": "7bd56dC0tsEwCqO9T5c3boj7Slktucg0eNQJCtDuyY9T8YEkHLGriBol"
		}
	};

	$.ajax(settings2).done(function (response2) {
		console.log(response2)
		id_happi = response2.result[0].api_lyrics
	});

	const settings3 = {
		"async": false,
		"crossDomain": true,
		"url": id_happi,
		"method": "GET",
		"headers": {
			"x-happi-key": "7bd56dC0tsEwCqO9T5c3boj7Slktucg0eNQJCtDuyY9T8YEkHLGriBol"
		}
		};

		$.ajax(settings3).done(function (response1) {
			console.log(response1)
			$("#lyrics").empty()
			$("#lyrics").append(response1.result.lyrics.replace(new RegExp('\r?\n', 'g'), '<br />'))
			var lisa = response1.result.artist.replace(/ /, "+")
			lisa = "http://www.google.com/search?q=" + lisa
			console.log(lisa)
			var lisada = "<a href=" + lisa + "><h2>Vajutades siia saad lisa infot artisti kohta</h2</a>"
			$("#lisa").empty()
			$("#lisa").append(lisada)
			$("#button").empty()
			var olme = "<button class='button' id='nupp' onclick='show_element()' value='Ei n�ita'>OODATUD S�NADE PUUDUMISEL VAJUTA SIIA</button>"
			$("#button").append(olme)
	});

	})
})