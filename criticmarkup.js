var CriticMarkup = {
	toHTML: function(markup) {
		return markup.replace(/\{~~/g, '<del>')
		.replace(/~>/g, '</del><ins>')
		.replace(/~~}/g, '</ins>')
		.replace(/\{\-\-/g, '<del>')
		.replace(/\-\-\}/g, '</del>')
		.replace(/\{\+\+/g, '<ins>')
		.replace(/\+\+\}/g, '</ins>')
		.replace(/\{>>/g, '<span class="critic comment">')
		.replace(/<<\}/g, '</span>');
	}
};

// to inlude it via require in test suites
module.exports = {
	toHTML: CriticMarkup.toHTML
};
