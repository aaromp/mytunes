// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  // model: "songQueue",

  initialize: function() {
    this.render();
    this.collection.on('all', function() {
      this.render();
    }, this);
  },

  render: function(){
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
