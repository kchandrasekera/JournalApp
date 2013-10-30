JournalApp.PostsRouter = Backbone.Router.extend({
	routes: {
		"": "postsIndex",
		"posts/:id": "showPost"
	},
	
	postsIndex: function() {
		var indexView = new JournalApp.Views.PostsIndex({
			collection: JournalApp.posts
		});
		
		$('body').html(indexView.render().$el);
	},
	
	showPost: function(id) {
		var postView = new JournalApp.Views.PostShow({
			model: JournalApp.posts.get(id)
		});
		
		$('body').html(postView.render().$el);
	}
});