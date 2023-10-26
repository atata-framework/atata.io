Represents the base class for the popup window page objects.

{% include inherited.md from="PageObject" %}

Inherited class supports `[PageObjectDefinition]`, `[WindowTitleElementDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[PageObjectDefinition(ComponentTypeName = "window", IgnoreNameEndings = "PopupWindow,Window,Popup")]
public abstract class PopupWindow<TOwner> : PageObject<TOwner>
    where TOwner : PopupWindow<TOwner>
```

#### Example

The example of popup component for [Bootstrap's Modal](http://getbootstrap.com/javascript/#modals) implemented in [atata-framework/atata-bootstrap](https://github.com/atata-framework/atata-bootstrap):

```cs
namespace Atata.Bootstrap;

[PageObjectDefinition("div", ContainingClass = "modal", ComponentTypeName = "modal", IgnoreNameEndings = "PopupWindow,Window,Popup,Modal")]
[WindowTitleElementDefinition(ContainingClass = TitleClassName)]
public abstract class BSModal<TOwner> : PopupWindow<TOwner>
    where TOwner : BSModal<TOwner>
{
    private const string TitleClassName = "modal-title";

    protected BSModal(params string[] windowTitleValues)
        : base(windowTitleValues)
    {
    }

    [FindByClass(TitleClassName)]
    public Text<TOwner> ModalTitle { get; private set; }
}
```

Implementation of the specific modal having the title "Some Modal":

```cs
using _ = SampleModal;

[WindowTitle("Some Modal")]
public class SampleModal : BSModal<_>
{
}
```
{:.page-object}