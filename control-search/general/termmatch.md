The enumeration that specifies the match approach for the term finding.

By default all find attributes use `Equals` value.
{:.info}

#### Example

```html
<input type="text" id="ctl00$MainContent$FirstName">
```
```cs
[FindById(TermMatch.EndsWith, "FirstName")]
public TextInput<_> FirstName { get; private set; }
```

#### Values

{% include enumvalue.html enum="TermMatch" value="Equals" %}

Checks whether the text equals the specified term.

{% include enumvalue.html enum="TermMatch" value="Contains" %}

Checks whether the text contains the specified term.

{% include enumvalue.html enum="TermMatch" value="StartsWith" %}

Checks whether the text starts with the specified term.

{% include enumvalue.html enum="TermMatch" value="EndsWith" %}

Checks whether the text ends with the specified term.