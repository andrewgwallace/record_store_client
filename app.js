window.addEventListener('load', event => {
  console.log('Document is ready to AJAXX!');
  const baseURL = 'http://localhost:3000';
  const containerEl = document.getElementById('container');
  const artistsListEl = document.createElement('ul');
  containerEl.appendChild(artistsListEl);

  //DISPLAY ALL ARTISTS
  axios.get(`${baseURL}/artists`)
    .then( response => {
      let artists = response.data
      console.log(artists[0].name)
      for (i=0; i < artists.length; i++) {
        let li = artistsListEl.appendChild(document.createElement("li"))
        li.innerHTML = `${artists[i].name} (${artists[i].country})`
      }
    });
});
