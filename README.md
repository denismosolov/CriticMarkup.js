###CriticMarkup.js

CriticMarkup.js converts  [CriticMarkup](http://criticmarkup.com/) to HTML. CriticMarkup.js is written in javascript and it's supposed to be used in the browser. `CriticMarkup` contains only one method `toHTML` which takes a CriticMarkup string and returns a HTML string.

####Usage example:

    <script type="text/javascript" src="criticmarkup.js"></script>
    ...
    var html = CriticMarkup.toHTML("Lorem{‐‐ ipsum‐‐} dolor sit amet");

####Test

You can find basic tests in the `tests/critic-markup-test-suite.js`. This test suite can be executed via [CasperJS](http://casperjs.readthedocs.org/en/latest/testing.html#unit-testing).
```$ casperjs test criticmarkup-test-suite.js```

####Notes

At this moment CriticMarkup.js don't convert [Highlights](http://criticmarkup.com/spec.php#highlights) and ignore paragraphs. Pull requests are welcomed!


---

    Copyright 2013 Gabe Weatherhead and Erik Hess

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
