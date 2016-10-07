Represents the base class for the popup window page objects.

#### Syntax

```cs
[PageObjectDefinition(ComponentTypeName = "window", IgnoreNameEndings = "PopupWindow,Window,Popup")]
public abstract class PopupWindow<TOwner> : PageObject<TOwner>
    where TOwner : PopupWindow<TOwner>
```

#### Example

The example of [Bootsrap's Modal](http://getbootstrap.com/javascript/#modals) class:

```cs
[PageObjectDefinition("div", ContainingClass = "modal", ComponentTypeName = "modal", IgnoreNameEndings = "PopupWindow,Window,Popup,Modal")]
[WindowTitleElementDefinition(ContainingClass = "modal-title")]
public abstract class BSModal<TOwner> : PopupWindow<TOwner>
    where TOwner : BSModal<TOwner>
{
}
```

Implementation of the concrete modal having the title "Some Modal":

```cs
using Atata;
using _ = SampleApp.SampleModal;

namespace SampleApp
{
    [WindowTitle("Some Modal")]
    public class SampleModal : BSModal<_>
    {
    }
}
```

Supports `[PageObjectDefinition]`, `[WindowTitleElementDefinition]`, `[ControlFinding]` and `[TermFindSettings]` settings attributes.
{:class="info"}