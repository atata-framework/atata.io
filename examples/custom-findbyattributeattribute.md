---
layout: article
title: Custom FindByAttributeAttribute
description: How to create custom FindByAttributeAttribute.
---

{{ page.description }}
{:.lead}

There are cases when custom `FindByAttributeAttribute` has to be created to find a control by value of a specific attribute .

## Given

For example, there are pages containing following paragraph elements: `<p data-name="Car description">` and `<p data-name="Airplane description">` which we need to test.

## Implementation

To create a custom FindByAttribute attribute, create a new class inherited from the existing `FindByAttributeAttribute`.

```cs
using Atata;

namespace SampleApp.UITests
{
    public class FindByDataNameAttribute : FindByAttributeAttribute
    {
        private const string DataNameAttributeName = "data-name";

        public FindByDataNameAttribute(TermCase termCase)
            : base(DataNameAttributeName, termCase)
        {
        }

        public FindByDataNameAttribute(params string[] values)
            : base(DataNameAttributeName, values)
        {
        }

        public FindByDataNameAttribute(TermMatch match, TermCase termCase)
            : base(DataNameAttributeName, match, termCase)
        {
        }

        public FindByDataNameAttribute(TermMatch match, params string[] values)
            : base(DataNameAttributeName, match, values)
        {
        }

        // Optionally override the default term case (default value = TermCase.Title).
        protected override TermCase DefaultCase => TermCase.Sentence;
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
        [FindByDataNameAttribute] // Finds by data-name="Car description".
        public Text<_> CarDescription { get; private set; }

        [FindByDataNameAttribute]
        public Text<_> AirplaneDescription { get; private set; }
    }
}
```
{:.page-object}
