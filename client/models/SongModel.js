// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  // this function triggers an 'enqueue' event that bubbles up through the
  // library collection, to be heard by the app model
  enqueue: function(){  // the view invokes enqueue
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    // increments play count and triggers 'ended' event
    var plays = this.get('playCount');
    this.set('playCount', +this.get('playCount') + 1);
    this.dequeue(); // uses the function defined above
  },

});
