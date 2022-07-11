---
layout: article
title: Kendo UI Grid (KendoGrid<TRow, TOwner>)
description: How to interact with Kendo UI Grid component.
---

{{ page.description }}
{:.lead}

## Given

[The page under test](demo/) containing [Kendo UI Grid](https://demos.telerik.com/kendo-ui/grid/index) component.

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="demo/"></iframe>
</div>

## Implementation

To use `KendoGrid<TRow, TOwner>` control add a reference to {% include nuget.md name="Atata.KendoUI" %} package.
{:.info}

```cs
using Atata;
using Atata.KendoUI;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        public KendoGrid<CarRow, _> Cars { get; private set; }

        public class CarRow : KendoGridRow<_>
        {
            public Text<_> CarMake { get; private set; }

            public Text<_> CarModel { get; private set; }

            public Content<int, _> Year { get; private set; }

            public Text<_> Category { get; private set; }

            public Text<_> AirConditioner { get; private set; }

            public ValueProvider<bool?, _> HasAirConditioner => CreateValueProvider<bool?>(
                "has air conditioner",
                () => AirConditioner == "Yes");
        }
    }
}
```
{:.page-object}

By default all content type properties of `CarRow` are getting found by column header.

```cs
Go.To<SomePage>().
    Cars.Rows.Count.Should.Equal(18).
    Cars.Rows.Should.Contain(x => x.CarMake == "Audi" && x.CarModel == "A4").
    Cars.Rows[x => x.CarMake == "Honda" && x.CarModel == "Accord"].Should.Exist().
    Cars.Rows[x => x.CarMake == "Volvo" && x.Year == 2010].HasAirConditioner.Should.BeTrue().
    Cars.Rows[2].CarModel.Should.Equal("535d");
```
{:.test}