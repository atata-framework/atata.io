The attribute that specifies the term(s) to use for the control search.

In the both following examples `some-input` is the term that is used for the control search:

```cs
[FindById("some-input")]
public TextInput<_> FirstName { get; private set; }
```
```cs
[FindById]
[Term("some-input")]
public TextInput<_> FirstName { get; private set; }
```

#### Parameters

Name | Type | Description
---- | ---- | -----------
`termCase` | [`TermCase`](#termcase) | The term case.
`match` | [`TermMatch`](#termmatch) | The match.
`values` | `string[]`{:.simple} | The term values.
{:.table.table-members.table-members-with-type}

#### Properties

Name | Type | Description
---- | ---- | -----------
`Format` | `string`{:.simple} | Gets or sets the format.
`CutEnding` | `bool`{:.simple} | Gets or sets a value indicating whether the name should be cut considering the `IgnoreNameEndings` property value of `[ControlDefinition]` and `[PageObjectDefinition]` attributes. The default value is true.
{:.table.table-members.table-members-with-type}