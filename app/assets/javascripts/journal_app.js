window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		JournalApp.posts = new JournalApp.Collections.Posts();
		JournalApp.posts.fetch({
			success: function(posts) {
				var indexView = new JournalApp.Views.PostsIndex({
					collection: posts
				});                          //make new view
				indexView.render();          //call render
				$("body").html(indexView.$el); //inject element into page
			}
		});
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
