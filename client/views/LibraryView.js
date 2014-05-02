// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",
  className: "table table-hover",

  initialize: function() {
    this.render();



    this.collection.on('ended', function(){ // listen for ended to increment play count
      this.render();
    }, this);
  },

  // events:{
  //   'click': function
  // },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    var plus = '<a href="#">add a song</a>';
    this.$el.html('<th><h1>Library</h1>' + plus + '</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
