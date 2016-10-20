Represents the base attribute class for the finding attributes that use terms.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

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
`DefaultCase` | [`TermCase`](#termcase) | Gets the default term case. It is protected abstract property that should be overridden to specify the most suitable value.
`DefaultMatch` | [`TermMatch`](#termmatch) | Gets the default match. The default value is Equals. It is protected virtual property that can be overridden.
{:.table.table-members.table-members-with-type}