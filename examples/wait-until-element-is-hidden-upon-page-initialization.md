---
layout: article
title: Wait Until Element Is Hidden upon Page Initialization
description: How to wait for an element to become hidden upon page initialization.
---

{{ page.description }}
{:.lead}

## Given

There is a page with loading indicator displayed while the page is loading.
During the navigation to this page the test has to wait until the loading indicator element is hidden
and only then start interaction with the page.

{% capture html %}
<div class="loading-indicator">
    <span class="glyphicon glyphicon-repeat"></span>
    Please wait...
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

    [WaitForElement(WaitBy.Class, "loading-indicator", WaitUntil.MissingOrHidden, TriggerEvents.Init)]
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
        [FindByClass]
        [WaitFor(Until.MissingOrHidden)] // By default executes on TriggerEvents.Init.
        public Control<_> LoadingIndicator { get; private set; }
    }
}
```
{:.page-object}

### Test

Waiting until the element is hidden/missing will be performed upon `SomePage` page initialization.

```cs
Go.To<SomePage>();
```
{:.test}

## Remarks

In order to avoid a duplication of trigger declaration in different page objects,
it is possible to extract a trigger definition to the custom trigger class.
See [Custom Trigger: Wait for Loading Indicator](/examples/custom-trigger-wait-for-loading-indicator) example.
{:.info}