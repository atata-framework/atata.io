---
layout: article
title: Verification of Labels
description: How to verify the text of labels associated with inputs.
---

{{ page.description }}
{:.lead}

## Given

There is a page with input elements. You need to verify the text of labels associated with inputs.

{% capture html %}
<div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" class="form-control" id="first-name">
</div>
<div class="form-group">
    <label for="last-name">Last Name</label>
    <input type="text" class="form-control" id="last-name">
</div>

{% endcapture %}

{% include htmlexample.html html=html %}

## Implementation

To be able to manipulate labels of controls you just need to add a property
of `LabelList<_>` type to your page object with any name, preferably `Labels`.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [FindById]
        public TextInput<_> FirstName { get; private set; }

        [FindById]
        public TextInput<_> LastName { get; private set; }

        public LabelList<_> Labels { get; private set; }
    }
}
```
{:.page-object}

Note that `LabelList<TOwner>` gets a [`Label<TOwner>`](/components/#label) for particular control using its element `id` attribute that equals the `for` attribute of `<label>` element.
If there is no `for/id` association between label and control `LabelList<TOwner>` will not be able to find such label and
you may need to implement custom analogue of `LabelList<TOwner>` ([check source file of its implementation](https://github.com/atata-framework/atata/blob/master/src/Atata/Components/LabelList%601.cs)).
{:.warning}

### Verify Labels in Test

```cs
Go.To<SomePage>().
    Labels[x => x.FirstName].Should.Equal("First Name").
    Labels[x => x.LastName].Should.Equal("Last Name").
    // Or just verify the labels without considering association to inputs:
    Labels.Should.Contain("First Name", "Last Name");
```
{:.test}