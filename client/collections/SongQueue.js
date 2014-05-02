// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() { // listens for things are added to the queue
      if(this.length === 1) { // checks if it only has 1 item
        this.playFirst();
      }
    });

    this.on('remove', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.at(0).play(); // plays the first songModel in the queue
  },

});
