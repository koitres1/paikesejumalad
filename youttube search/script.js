// JavaScript source code
$(document).ready(function () {
    var API_KEY = "AIzaSyCyCbw7U9k7LhTpyWCyGJW66xbbuvR1E1g"

    var video = ''

    $("form").submit(function (event) {
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY,search,1)
    })

    function videoSearch(key, search, maxResults) {

        $("#vidoes").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
            console.log(data)

            data.items.forEach(item => {
                video = `

                        <iframe width = "420" height = "315" src ="http://www.youtube.com/embed/${item.id.videoId}?controls=1&autoplay=1&origin=https://www.youtube.com" frameborder="0" allowfullscreen></iframe>

                        `
                $("#vidoes").append(video)
            }); //remove autoplay and control
        })

    }
})