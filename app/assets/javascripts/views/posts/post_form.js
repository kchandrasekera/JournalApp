JournalApp.Views.PostForm = Backbone.View.extend({
	template: JST['posts/form'],
	
	events: {
		"submit form": "submitForm"
	},
	
	submitForm: function(event) {
		event.preventDefault();
		
		var submittedPayload = $(event.currentTarget).serializeJSON();
		
		if (this.model.isNew()) {
			this.collection.create(submittedPayload.post, {
				success: function() {
					journalAppRouter.navigate("/", {trigger: true});
				},
				error: function(post, errors) {
					$('body').prepend(errors.responseJSON);
				}
			});
		}
		else {
			this.model.save(submittedPayload.post, {
				success: function() {
					journalAppRouter.navigate("/", {trigger: true});
				},
				error: function(post, errors) {
					$('body').prepend(errors.responseJSON);
				}
			});
		}
	},
	
	render: function() {
		var renderedContent = this.template({
			post: this.model
		});
		
		this.$el.html(renderedContent);
		return this;
	}
});