// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() { // listens for things are added to the queue
      if(this.length === 1) { // checks if it only has 1 item
        this.playFirst();
      }
    });

    this.on('ended', function(song) { // listens for when a song ends
      console.log('songqueue is receiving ended')
      this.dequeue(song);
      if(this.length) { // if there are songs in the queue
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.dequeue(song);
    });
  },

  enqueue: function(song){
    this.add(song);
    console.log('added', song)
  },

  dequeue: function(song){
    this.remove(song);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
