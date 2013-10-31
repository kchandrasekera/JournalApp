JournalApp.PostsRouter = Backbone.Router.extend({
	routes: {
		"": "postsIndex",
		"posts/new": "newPost",
		"posts/:id/edit": "editPost",
		"posts/:id": "showPost"
	},
	
	postsIndex: function() {
		var indexView = new JournalApp.Views.PostsIndex({
			collection: JournalApp.posts
		});
		
		$('body').html(indexView.render().$el);
	},
	
	newPost: function () {
		var newPostView = new JournalApp.Views.PostForm({
			model: new JournalApp.Models.Post(),
			collection: JournalApp.posts
		});
		
		$('body').html(newPostView.render().$el);
	},
	
	showPost: function(id) {
		var editPostView = new JournalApp.Views.PostShow({
			model: JournalApp.posts.get(id)
		});
		
		$('body').html(editPostView.render().$el);
	},
	
	editPost: function(id) {
		var editView = new JournalApp.Views.PostForm({
			model: JournalApp.posts.get(id)
		});
		
		$('body').html(editView.render().$el);
	}
});