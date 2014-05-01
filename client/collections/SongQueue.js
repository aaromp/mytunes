// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() { // listens for things are added to the queue
      if(this.length === 1) { // checks if it only has 1 item
        this.playFirst();
      }
    });

    this.on('ended', function() { // listens for when a song ends
      this.dequeue();
      if(this.length) { // if there are songs in the queue
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.dequeue();
    });
  },

  enqueue: function(song){
    this.add(song);
    console.log('added', song)
  },

  dequeue: function(){
    this.shift();
  },

  playFirst: function(){
    this.at(0).play();
  }

});
