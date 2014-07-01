var CriticMarkup = require('criticmarkup');

casper.test.begin('Critic Markup', 8, function suite(test) {
	
	var basicAddHTML = CriticMarkup.toHTML('Lorem ipsum dolor{++ sit++} amet…');
	test.assertEquals(basicAddHTML, 'Lorem ipsum dolor<ins> sit</ins> amet…');

	var newlineAddHTML = CriticMarkup.toHTML('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla. Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.{++\n++}Praesent sagittis, quam id egestas consequat, nisl orci vehicula libero, quis ultricies nulla magna interdum sem. Maecenas eget orci vitae eros accumsan mollis. Cras mi mi, rutrum id aliquam in, aliquet vitae tellus. Sed neque justo, cursus in commodo eget, facilisis eget nunc. Cras tincidunt auctor varius.');
	test.assertEquals(newlineAddHTML, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla. Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.\n\n<ins>&nbsp;</ins>\n\nPraesent sagittis, quam id egestas consequat, nisl orci vehicula libero, quis ultricies nulla magna interdum sem. Maecenas eget orci vitae eros accumsan mollis. Cras mi mi, rutrum id aliquam in, aliquet vitae tellus. Sed neque justo, cursus in commodo eget, facilisis eget nunc. Cras tincidunt auctor varius.')

	var basicDelHTML = CriticMarkup.toHTML('Lorem{-- ipsum--} dolor sit amet…');
	test.assertEquals(basicDelHTML, 'Lorem<del> ipsum</del> dolor sit amet…');

	var newlineDelHTML = CriticMarkup.toHTML('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla. Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.{--\n--} Praesent sagittis, quam id egestas consequat, nisl orci vehicula libero, quis ultricies nulla magna interdum sem. Maecenas eget orci vitae eros accumsan mollis. Cras mi mi, rutrum id aliquam in, aliquet vitae tellus. Sed neque justo, cursus in commodo eget, facilisis eget nunc. Cras tincidunt auctor varius.');
	test.assertEquals(newlineDelHTML, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla. Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.<del>&nbsp;</del> Praesent sagittis, quam id egestas consequat, nisl orci vehicula libero, quis ultricies nulla magna interdum sem. Maecenas eget orci vitae eros accumsan mollis. Cras mi mi, rutrum id aliquam in, aliquet vitae tellus. Sed neque justo, cursus in commodo eget, facilisis eget nunc. Cras tincidunt auctor varius.');

	var basicSubst = CriticMarkup.toHTML('Lorem {~~hipsum~>ipsum~~} dolor sit amet…');
	test.assertEquals(basicSubst, 'Lorem <del>hipsum</del><ins>ipsum</ins> dolor sit amet…');

	var basicComment = CriticMarkup.toHTML('Lorem ipsum dolor sit amet.{>>This is a comment<<}');
	test.assertEquals(basicComment, 'Lorem ipsum dolor sit amet.<span class="critic comment">This is a comment</span>');

	var basicHighlights = CriticMarkup.toHTML('Lorem ipsum dolor sit amet, consectetur adipiscing elit. {==Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla.==}{>>confusing<<} Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.');
	test.assertEquals(basicHighlights, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Vestibulum at orci magna. Phasellus augue justo, sodales eu pulvinar ac, vulputate eget nulla.</mark><span class="critic comment">confusing</span> Mauris massa sem, tempor sed cursus et, semper tincidunt lacus.');

	var basicAllTogether = CriticMarkup.toHTML('Don\'t go around saying{-- to people that--} the world owes you a living. The world owes you nothing. It was here first. {~~One~>Only one~~} thing is impossible for God: To find {++any++} sense in any copyright law on the planet. {==Truth is stranger than fiction==}{>>strange but true<<}, but it is because Fiction is obliged to stick to possibilities; Truth isn\'t.');
	test.assertEquals(basicAllTogether, 'Don\'t go around saying<del> to people that</del> the world owes you a living. The world owes you nothing. It was here first. <del>One</del><ins>Only one</ins> thing is impossible for God: To find <ins>any</ins> sense in any copyright law on the planet. <mark>Truth is stranger than fiction</mark><span class="critic comment">strange but true</span>, but it is because Fiction is obliged to stick to possibilities; Truth isn\'t.');

    test.done();
});
