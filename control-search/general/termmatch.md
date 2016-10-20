The enumeration that specifies the term match approach. By default all find attributes use `Equals` value.

```html
<input type="text" id="ctl00$MainContent$FirstName">
```
```cs
[FindById(TermMatch.EndsWith, "FirstName")]
public TextInput<_> FirstName { get; private set; }
```

Value | Description
----- | -----------
`Inherit` | Uses the inherited match or the default one.
`Contains` | Checks whether the text contains the specified term.
`Equals` | Checks whether the text equals the specified term.
`StartsWith` | Checks whether the text starts with the specified term.
`EndsWith` | Checks whether the text ends with the specified term.
{:.table.table-members.table-condensed}