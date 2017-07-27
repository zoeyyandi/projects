var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {
    for(var keyName in this.playlists) {
      var playlist = this.playlists[keyName]
      console.log(keyName + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")
    }
  },
  printTracks: function () {
    for(var keyName in this.tracks) {
      var track = this.tracks[keyName]
      console.log(`${keyName}: ${track.name} by ${track.artist} (${track.album})`)
    }
  },
  printPlaylist: function (playlistId) {
    var p = this.playlists[playlistId]
    console.log(`${playlistId}: ${p.name} - ${p.tracks.length} tracks`)
    for (var track of p.tracks) {
      var t = this.tracks[track]
      console.log(`${track} : ${t.name} by ${t.artist} (${t.album})`)
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var t = this.playlists[playlistId].tracks
    t.push(trackId)
  },
  addTrack: function (name, artist, album) {
    var trackId = uid()
    this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    }
  },
  addPlaylist: function (name) {
    var playlistId = uid()
    this.playlists[playlistId] = {
      id: playlistId,
      name: name
    }
  }
}

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}