var ModalView = Backbone.View.extend({
  initialize: function(){
    this.render();
    // TO-DO: find out why we need this wrapped
    $(function(){
      $('.add-song-btn').on('click', function(){
        var artist = $('#artist-input').val();
        var title = $('#title-input').val();
        var url = $('#url-input').val();
        // $artist.val('');
        // $title.val('');
        // $url.val('');
        var newSong = new SongModel({
          url: url,
          title: title,
          artist: artist
        });

        this.passNewSong(newSongData)
      });
    });
  },

  passNewSong: function(songData){
    var newSong = new SongModel(songData);
    return newSong;
  },

  render: function(){
    var html = '<!-- Button trigger modal -->\
                  <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">\
                    Add a song\
                  </button>\
                  <!-- Modal -->\
                  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
                    <div class="modal-dialog">\
                      <div class="modal-content">\
                        <div class="modal-header">\
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                          <h4 class="modal-title" id="myModalLabel">add song</h4>\
                        </div>\
                        <div class="modal-body">\
                          <form class="form-group" role ="form">\
                            <div class="input-group">\
                              <span class="input-group-addon">artist</span>\
                              <input type="text" class="form-control" id="artist-input" placeholder="Aaliyah">\
                            </div>\
                          </form>\
                          <form class="form-group" role ="form">\
                            <div class="input-group">\
                              <span class="input-group-addon">title</span>\
                              <input type="text" class="form-control" id="title-input" placeholder="Are You That Somebody">\
                            </div>\
                          </form>\
                          <form class="form-group" role ="form">\
                            <div class="input-group">\
                              <span class="input-group-addon">url</span>\
                              <input type="text" class="form-control" id="url-input" placeholder="http://example.com/">\
                            </div>\
                          </form>\
                        </div>\
                        <div class="modal-footer">\
                          <button type="button" class="btn btn-default" data-dismiss="modal">cancel</button>\
                          <button type="button" class="add-song-btn btn btn-primary">add song</button>\
                        </div>\
                      </div>\
                    </div>\
                  </div>';

    this.$el.html(html);
  },
  popup: function(){}
});
