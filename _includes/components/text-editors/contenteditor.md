Represents the content editor control (any element with `contenteditable='true'` or `contenteditable=''` attribute).
This control is good to use for WYSIWYG editors.

{% include inherited.md from="EditableTextField" %}

#### Syntax

```cs
[ControlDefinition("*[@contenteditable='' or @contenteditable='true']", ComponentTypeName = "content editor")]
[GetsValueFromContent]
public class ContentEditor<TOwner> : EditableTextField<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

Check out [Custom Rich Text Editor Based on contenteditable](/examples/custom-rich-text-editor-based-on-contenteditable/).