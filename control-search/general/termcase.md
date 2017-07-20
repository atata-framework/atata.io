The enumeration that specifies the term case. Each of {% include clsref.md name="TermFindAttribute" %} attributes specifies its default term case.

#### Example

The following example applies the finding by `first_name` id:

```cs
[FindById(TermCase.Snake)]
public TextInput<_> FirstName { get; private set; }
```

#### Values

{% include enumvalue.html enum="TermCase" value="None" %}

Doesn't apply the case.

{% include enumvalue.html enum="TermCase" value="Title" %}

Uses title case (e.g. `"Some of the Terms"`).

{% include enumvalue.html enum="TermCase" value="Capitalized" %}

Uses title case with all words capitalized (e.g. `"Some Of The Terms"`).

{% include enumvalue.html enum="TermCase" value="Sentence" %}

Uses sentence case (e.g. `"Some term"`).

{% include enumvalue.html enum="TermCase" value="MidSentence" %}

Uses mid-sentence case where the first word is not capitalized (e.g. `"some term"`).

{% include enumvalue.html enum="TermCase" value="Lower" %}

Uses lower case (e.g. `"some term"`).

{% include enumvalue.html enum="TermCase" value="LowerMerged" %}

Uses lower case with words merging (e.g. `"someterm"`).

{% include enumvalue.html enum="TermCase" value="Upper" %}

Uses upper case (e.g. `"SOME TERM"`).

{% include enumvalue.html enum="TermCase" value="UpperMerged" %}

Uses upper case with words merging (e.g. `"SOMETERM"`).

{% include enumvalue.html enum="TermCase" value="Camel" %}

Uses camel case (e.g. `"someTerm"`).

{% include enumvalue.html enum="TermCase" value="Pascal" %}

Uses pascal case (e.g. `"SomeTerm")`.

{% include enumvalue.html enum="TermCase" value="Kebab" %}

Uses dash ('-') and lower case (e.g. `"some-term"`).

{% include enumvalue.html enum="TermCase" value="HyphenKebab" %}

Uses hyphen ('‐') and lower case (e.g. `"some‐term"`).

{% include enumvalue.html enum="TermCase" value="PascalKebab" %}

Uses dash ('-') and pascal case (e.g. `"Some-Term"`).

{% include enumvalue.html enum="TermCase" value="PascalHyphenKebab" %}

Uses hyphen ('‐') and pascal case (e.g. `"Some‐Term"`).

{% include enumvalue.html enum="TermCase" value="Snake" %}

Uses underscore ('_') and lower case (e.g. `"some_term"`).