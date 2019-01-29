---
layout: article
title: Bootstrap Dropdown (BSDropdownToggle<TOwner>)
description: How to interact with Bootstrap dropdown component.
---

{{ page.description }}
{:.lead}

## Given

There is a page containing [Bootstrap dropdown](https://getbootstrap.com/docs/4.1/components/dropdowns/) component.

{% capture html %}
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="actions"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Actions
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="actions">
        <!-- Simple actions: -->
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li role="separator" class="divider"></li>
        <!-- Navigable action: -->
        <li><a href="/examples">Examples</a></li>
    </ul>
</div>

{% endcapture %}

{% include htmlexample.html html=html %}

## Implementation

To use `BSDropdownToggle<TOwner>` control add a reference to [Atata.Bootstrap](https://www.nuget.org/packages/Atata.Bootstrap/) package.
{:.info}

```cs
using Atata;
using Atata.Bootstrap;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        public ActionsDropdownToggle Actions { get; private set; }

        public class ActionsDropdownToggle : BSDropdownToggle<_>
        {
            public Link<_> Item1 { get; private set; }

            public Link<_> Item2 { get; private set; }

            public Link<_> Item3 { get; private set; }

            public Link<ExamplesPage, _> Examples { get; private set; }
        }
    }
}
```
{:.page-object}

```cs
Go.To<SomePage>().
    Actions.Item1.Click().
    Actions.Item3.Click().
    Actions.Examples.ClickAndGo();
```
{:.test}