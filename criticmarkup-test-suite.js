var CriticMarkup = require('criticmarkup');

casper.test.begin('Critic Markup', 5, function suite(test) {
	
	var basicAddHTML = CriticMarkup.toHTML('Lorem ipsum dolor{++ sit++} amet…');
	test.assertEquals(basicAddHTML, 'Lorem ipsum dolor<ins> sit</ins> amet…');

	var basicDelHTML = CriticMarkup.toHTML('Lorem{-- ipsum--} dolor sit amet…');
	test.assertEquals(basicDelHTML, 'Lorem<del> ipsum</del> dolor sit amet…');

	var basicSubst = CriticMarkup.toHTML('Lorem {~~hipsum~>ipsum~~} dolor sit amet…');
	test.assertEquals(basicSubst, 'Lorem <del>hipsum</del><ins>ipsum</ins> dolor sit amet…');

	var basicComment = CriticMarkup.toHTML('Lorem ipsum dolor sit amet.{>>This is a comment<<}');
	test.assertEquals(basicComment, 'Lorem ipsum dolor sit amet.<span class="critic comment">This is a comment</span>');

	var basicAllTogether = CriticMarkup.toHTML('Don\'t go around saying{-- to people that--} the world owes you a living. The world owes you nothing. It was here first. {~~One~>Only one~~} thing is impossible for God: To find {++any++} sense in any copyright law on the planet.');
	test.assertEquals(basicAllTogether, 'Don\'t go around saying<del> to people that</del> the world owes you a living. The world owes you nothing. It was here first. <del>One</del><ins>Only one</ins> thing is impossible for God: To find <ins>any</ins> sense in any copyright law on the planet.');

    test.done();
});
