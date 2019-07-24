---
layout: article
title: Wait for Element upon Page Initialization
description: How to wait for an element upon page initialization.
---

{{ page.description }}
{:.lead}

## Given

There is a page with slow loading of content.
During the navigation to this page the test has to wait until some important content element is visible
and only then start interaction with the page.

{% capture html %}
<div id="content-block">
    <span>Some content</span>
</div>

{% endcapture %}

{% include htmlexample.html html=html %}

## Implementation

You can choose one of the solutions below.

### Using [WaitForElement](/triggers/#waitforelement) Trigger

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    [WaitForElement(WaitBy.Id, "content-block", WaitUntil.Visible, TriggerEvents.Init)]
    public class SomePage : Page<_>
    {
    }
}
```
{:.page-object}

### Using [WaitFor](/triggers/#waitfor) Trigger

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [FindById]
        [WaitFor(Until.Visible)] // By default executes on TriggerEvents.Init.
        public Control<_> ContentBlock { get; private set; }
    }
}
```
{:.page-object}

### Test

Waiting for the element will be performed upon `SomePage` page initialization.

```cs
Go.To<SomePage>();
```
{:.test}