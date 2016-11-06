Defines the term settings to apply for the specified finding strategy of a control.

Inherited from {% include clsref.md name="FindSettingsAttribute" %}.
{:.info}

For example, if all `name` attributes in the site are formatted lowercase without the separator, you can apply the following attribute for the tests assembly:

```cs
[assembly: TermFindSettings(FindTermBy.Name, Case = TermCase.LowerMerged)]
```

Or define it at the UIComponent level (page object or parent control). For example, for the specific page:

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    [TermFindSettings(FindTermBy.Label, TermMatch.Contains, TermCase.Sentence, Format = "{0}:")]
    public class SamplePage : Page<_>
    {
        public TextInput<_> FirstName { get; private set; }

        public TextInput<_> LastName { get; private set; }
    }
}
```

The above example will find `FirstName` control by the label containing text "First name:" and `LastName` by "Last name:".