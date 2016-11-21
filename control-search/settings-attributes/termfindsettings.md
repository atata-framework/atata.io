Defines the term settings to apply for the specified finding strategy of a control.

Inherited from [FindSettingsAttribute](#findsettings){:.class-reference}.
{:.info}

For example, if all `name` attributes in the site are formatted lowercase without the separator (e.g. "firstname"), you can apply the following attribute for the tests assembly:

```cs
[assembly: TermFindSettings(FindTermBy.Name, Case = TermCase.LowerMerged)]
```

Or define it at the UIComponent level (page object or parent control). For example, for the specific page:

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    [TermFindSettings(FindTermBy.Label, Match = TermMatch.Contains, Case = TermCase.Sentence, Format = "{0}:")]
    public class SamplePage : Page<_>
    {
        public TextInput<_> FirstName { get; private set; }

        public TextInput<_> LastName { get; private set; }
    }
}
```

The above example will find `FirstName` control by the label containing text "First name:" and `LastName` by "Last name:".

#### Properties

Name | Type | Description
---- | ---- | -----------
`Case` | [`TermCase`](#termcase) | Gets or sets the term case.
`Match` | [`TermMatch`](#termmatch) | Gets or sets the match.
`Format` | `string`{:.simple} | Gets or sets the format.
{:.table.table-members.table-members-with-type}