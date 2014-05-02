// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "table table-hover",

  initialize: function() {
    this.render(); // initial render
    // when the collection this is tied to (Songqueue) changes at all,
    // the view is re-rendered
    this.collection.on('all', function() {
      this.render();
    }, this);
  },

  render: function(){
    this.$el.html('<th><h1>Queue</h1></th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
