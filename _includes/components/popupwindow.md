Represents the base class for the popup window page objects.

### Syntax

```cs
[PageObjectDefinition(ComponentTypeName = "window", IgnoreNameEndings = "PopupWindow,Window,Popup")]
public abstract class PopupWindow<TOwner> : PageObject<TOwner>
    where TOwner : PopupWindow<TOwner>
```
