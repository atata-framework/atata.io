The enumeration that specifies the way {% include clsref.md name="FindAttribute" %} should be used.

By default, {% include clsref.md name="FindAttribute" %} uses `Scope` value,
meaning to use the attribute as a scope element locator.
{:.info}

Other values set the attribute to be a layered one.

#### Values

{% include enumvalue.html enum="FindAs" value="Scope" %}

Use the attribute as a scope element locator.

{% include enumvalue.html enum="FindAs" value="Parent" %}

Use the attribute as a parent layer.
It means that the scope element or next layer element is located as a child of this one in DOM.

{% include enumvalue.html enum="FindAs" value="Ancestor" %}

Use the attribute as an ancestor layer.
It means that the scope element or next layer element is located as a descendant of this one in DOM.

{% include enumvalue.html enum="FindAs" value="ShadowHost" %}

Use the attribute as a shadow host layer.
It means that the scope element or next layer element is located inside the shadow root of this one in DOM.

{% include enumvalue.html enum="FindAs" value="Sibling" %}

Use the attribute as a sibling layer.
It means that the scope element or next layer element is located as a sibling of this one in DOM.