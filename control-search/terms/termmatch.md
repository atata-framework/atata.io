The enumeration that specifies the term match approach. By default all find attributes use `Equals` value.

```html
<input type="text" id="ctl00$MainContent$FirstName">
```
```cs
[FindById(TermMatch.EndsWith, "FirstName")]
public TextInput<_> FirstName { get; private set; }
```

#### Options

* Inherit
* Contains
* Equals
* StartsWith
* EndsWith