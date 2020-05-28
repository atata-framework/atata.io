---
layout: article
title: Custom ControlDefinitionAttribute
description: How to create custom ControlDefinitionAttribute.
---

{{ page.description }}
{:.lead}

There are cases when custom `ControlDefinitionAttribute` has to be created to define some specific controls.

## Given

For example, there are pages containing the following paragraph element: `<p class="error-message">` which we need to test.

## Implementation

To create a custom control definition attribute, create a new class inherited from the existing `ControlDefinitionAttrbiute`.

```cs
using Atata;

namespace SampleApp.UITests
{
    public class ErrorMessageDefinitionAttribute : ControlDefinitionAttribute
    {
        public ErrorMessageDefinitionAttribute()
            : base("p") // Sets the base XPath of the scope element.
        {
            ContainingClass = "error"; // Sets the containing CSS class name.
            ComponentTypeName = "error message"; // Sets the name of the component type.
                                                 // It is used in report log messages to describe the component type.
        }
    }
}
```
{:.attribute}

```cs
namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [ErrorMessageDefinition]
        public Text<_> ErrorMessage { get; private set; }
    }
}
```
{:.page-object}
