// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // listens for a 'play' event from any song in our library
    // and sets AppModel's currentSong to the song that triggered
    // the 'play' event
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // listens for songQueue remove event, and if songQueue is empty,
    // triggers stop (for AppView)
    this.get('songQueue').on('remove', function(){
      if(this.get('songQueue').length === 0) {
        this.trigger('stop');
      }
    }, this);
    // listens to songqueue for enqueue events, and invokes add song
    // on the songQueue
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    this.on('addSong', function(song){
      this.get('library').add(song);
    }, this);

  }

});
