// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue(); // fix remove clicked element rather than first element
    }
  },

  render: function(){
    console.log('rendering entry')
    return this.$el.html(this.template(this.model.attributes));
  }
});
