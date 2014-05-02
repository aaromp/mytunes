// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  className: 'container',

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.modalView = new ModalView();

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    //
    // when app (AppModel)'s current song changes, the view sets the playerView's
    // song to the AppModel's currentSong
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // listens for AppModel's 'stop' trigger and invokes stop on playerView
    this.model.on('stop', function(){
      this.playerView.stop();
    }, this);



  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.modalView.$el,
      this.songQueueView.$el
    ]);
  }

});
