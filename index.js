console.log("got here")
let user = 'pointnull';
let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
let song = document.querySelector('#song');
fetch(url)
    .then(response => response.json())
    .then(json => {
        song.innerHTML = `
          <img src="${json['track']['image']['1']['#text']}" alt="LastFM last played">
          <span class="songtext">
            <span class="trackname">${json['track']['name']}</span>
            <span class="artist">${json['track']['artist']['#text']}</span>
          </span>
        `;
    });