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

<div class="member">
    <h3><span class="body">Equals</span></h3>
</div>

Checks whether the text equals the specified term.

<div class="member">
    <h3><span class="body">Contains</span></h3>
</div>

Checks whether the text contains the specified term.

<div class="member">
    <h3><span class="body">StartsWith</span></h3>
</div>

Checks whether the text starts with the specified term.

<div class="member">
    <h3><span class="body">EndsWith</span></h3>
</div>

Checks whether the text ends with the specified term.