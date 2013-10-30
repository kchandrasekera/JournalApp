JournalApp.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],

	initialize: function(options) {
		//this.collection = options.collection -- next line makes it unnecessary?
		this.listenTo(this.collection, "add remove reset change:title", this.render);
	},

	events: {
		"click .delete": "deletePost"
	},

	deletePost: function(event) {
		var postId = $(event.target).attr("data-id") //get the post id
		var postToRemove = this.collection.get(postId)
		// this.collection.remove(postToRemove)
		postToRemove.destroy({wait: true});
	},

	render: function() {
		var renderedContent = this.template({
			title: "All of the Posts!",
			posts: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	}
});