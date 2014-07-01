var CriticMarkup = {
	toHTML: function(markup) {
		return markup.replace(/\{~~/g, '<del>')
		.replace(/~>/g, '</del><ins>')
		.replace(/~~}/g, '</ins>')
		.replace(/\{\-\-([\s\S]*?)\-\-[ \t]*(\[([\s\S]*?)\])?[ \t]*\}/gm, function(match, contents){
			if (contents.match(/(\r\n|\n|\r)/gm)) {
				return '<del>&nbsp;</del>';
			} else {
				return '<del>' + contents.replace(/(\r\n|\n|\r)/gm, "&nbsp;") + '</del>';
			}
		})
		.replace(/\{\+\+/g, '<ins>')
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