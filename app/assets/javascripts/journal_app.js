window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		JournalApp.posts = new JournalApp.Collections.Posts();
		JournalApp.posts.fetch({
			success: function(posts) {
				journalAppRouter = new JournalApp.PostsRouter();
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});