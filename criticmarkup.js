var CriticMarkup = {
	toHTML: function(markup) {
		return markup.replace(/\{\-\-([\s\S]*?)\-\-[ \t]*(\[([\s\S]*?)\])?[ \t]*\}/gm, function(match, contents){
				var replaceString = '';
				if (contents.match(/(\r\n|\n|\r)/gm)) {
					replaceString = '<del>&nbsp;</del>';
				} else {
					replaceString = '<del>' + contents.replace(/(\r\n|\n|\r)/gm, '&nbsp;') + '</del>';
				}
				return replaceString;
			}).replace(/\{\+\+([\s\S]*?)\+\+[ \t]*(\[([\s\S]*?)\])?[ \t]*\}/gm, function(match, contents){
				var replaceString = '';
				if (contents.match(/^(\r\n|\n|\r)/) && !contents.match(/^(\r\n|\n|\r)$/)) {
					replaceString = '\n\n<ins>&nbsp;</ins>\n\n';
					// ???
					replaceString = replaceString + '<ins>' + contents.replace(/(\r\n|\n|\r)/, ' ');
					replaceString = replaceString + '</ins>';
				} else if (contents.match(/^(\r\n|\n|\r)$/)) {
					replaceString = replaceString + '\n\n<ins>&nbsp;</ins>\n\n';
				} else {
					replaceString = '<ins>' + contents.replace(/^(\r\n|\n|\r)/, ' ') + '</ins>';
				}
				return replaceString;
			}).replace(/\{\=\=([\s\S]*?)\=\=\}\{\>\>([\s\S]*?)\<\<\}/gm, function(match, mark, comment) {
				return '<mark>' + mark + '</mark><span class="critic comment">' + comment + '</span>';
			});
	}
};

// to inlude it via require in test suites
module.exports = {
	toHTML: CriticMarkup.toHTML
};