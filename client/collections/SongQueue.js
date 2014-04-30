// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){

  },

  enqueue: function(song){
    this.push(song);
  }

});
