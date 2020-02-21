---
layout: article
title: Override ControlDefinitionAttribute for Property of Control Type
description: How to set ControlDefinitionAttribute for property of Control type.
---

{{ page.description }}
{:.lead}

There are cases when `ControlDefinitionAttribute` of a particular control type has to be overridden at a specific place.

## Given

For example, there is a page containing the following checkbox element: `<input type="CheckBox"... />` which we need to test.
By default, Atata [CheckBox](/components/#checkbox) control which we want to use for that element, has `"input[@type='checkbox']"` scope XPath in the control definition.
Thus, the above-mentioned element is not suitable with the default control definition of `CheckBox` control, as `type` attribute differs with the casing.

## Implementation

To override a default control definition at the property level, add `ControlDefinitionAttrbiute` with appropriate values to the property.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [ControlDefinition("input[@type='CheckBox']", ComponentTypeName = "checkbox")] // Overrides the default definition of the checkbox control.
        public CheckBox<_> SomeCheckBox { get; private set; }
    }
}
```
{:.page-object}
