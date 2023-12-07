Represents the frame-wrapped content editor control.
This control is good to use for iframe-based WYSIWYG editors.

{% include inherited.md from="EditableTextField" %}

#### Syntax

```cs
[ControlDefinition("iframe", ComponentTypeName = "frame-wrapped content editor")]
public class FrameWrappedContentEditor<TOwner> : EditableTextField<string, TOwner>
    where TOwner : PageObject<TOwner>
```