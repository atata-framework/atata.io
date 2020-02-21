---
layout: article
title: Set ControlDefinitionAttribute for Property of ControlList Type
description: How to set ControlDefinitionAttribute for property of ControlList type.
---

{{ page.description }}
{:.lead}

There are cases when `ControlDefinitionAttribute` has to be set for a particular list of controls. 

## Given

There is a page containing many `<p>` elements.
We need to iterate several of them that contain a particular class, for example `some-class`.

## Implementation

To set a control definition at the property level, add `ControlDefinitionAttrbiute` with appropriate values to the property.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [ControlDefinition("p", ContainingClass = "some-class")] // Sets the definition of Text<_> items.
        public ControlList<Text<_>, _> SomeParagraphs { get; private set; }
    }
}
```
{:.page-object}
