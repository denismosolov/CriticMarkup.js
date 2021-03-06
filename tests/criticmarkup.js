var CriticMarkup = {
  toHTML: function(markup) {
    return markup.replace(/\{\-\-([\s\S]*?)\-\-[ \t]*(\[([\s\S]*?)\])?[ \t]*\}/gm, function(match, contents){
      var replaceString = '';
      if (contents.match(/^(\r\n|\n|\r)/) && !contents.match(/^(\r\n|\n|\r)$/)) {
        replaceString = '\n\n<del>&nbsp;</del>\n\n';
        // ???
        replaceString = replaceString + '<del>' + contents.replace(/(\r\n|\n|\r)/, ' ');
        replaceString = replaceString + '</del>';
      } else if (contents.match(/^(\r\n|\n|\r)$/)) {
        replaceString = replaceString + '\n\n<del>&nbsp;</del>\n\n';
      } else {
        replaceString = '<del>' + contents.replace(/^(\r\n|\n|\r)/, ' ') + '</del>';
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
      return '<mark>' + mark + '</mark><span class="critic comment">' + comment.replace(/(\r\n|\n|\r)/, ' ') + '</span>';
    }).replace(/\{\>\>([\s\S]*?)\<\<\}/gm, function(match, comment){
      return '<span class="critic comment">' + comment.replace(/^(\r\n|\n|\r)/, ' ') + '</span>';
    }).replace(/\{\~\~([\s\S](?:[^\~\>]|(?:\~(?!\>)))*)\~\>([\s\S](?:[^\~\~]|(?:\~(?!\~\})))*)\~\~\}/gm, function(match, original, modified){
      var delString = '<del>' + original + '</del>';
      var insString  = '<ins>' + modified + '</ins>'
      return delString + insString;
    });
  }
};

// to inlude it via require in test suites
module.exports = {
  toHTML: CriticMarkup.toHTML
};
