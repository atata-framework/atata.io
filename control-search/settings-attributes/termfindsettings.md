Defines the term settings to apply for the specified finding strategy of a control.

Inherited from [FindSettingsAttribute](#findsettings){:.class-reference}.
{:.info}

#### Examples

For example, if all `name` attributes in the site are formatted lowercase without the separator (e.g. "firstname"), you can apply the following attribute for the tests assembly:

```cs
[assembly: TermFindSettings(FindTermBy.Name, Case = TermCase.LowerMerged)]
```

Or define it at the UIComponent level (page object or parent control). For example, for the specific page:

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

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

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#termcase" class="type">TermCase</a></span>
    <h3><span class="body">Case</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the term case.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#termmatch" class="type">TermMatch</a></span>
    <h3><span class="body">Match</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the match.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">string</span></span>
    <h3><span class="body">Format</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the format.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">bool</span></span>
    <h3><span class="body">CutEnding</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets a value indicating whether the name should be cut considering the `IgnoreNameEndings` property value of `[ControlDefinition]` and `[PageObjectDefinition]` attributes. The default value is true.