Represents the select control. By default is being searched by the label. It is possible to select an option by the text or value. Default selection is performed by text.

Supports `[SelectByText]`, `[SelectByValue]`, `[Format]` and `[Culture]` settings attributes.
{:class="info"}

```html
<select id="brand">
  <option value="">--select--</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 
```

There are different approaches to configure `Select` control.

### Select Using Enum

The above select can be described with the following enum:

```cs
public enum CarBrand
{
    [Term("--select--")]
    None,
    Volvo,
    Saab,
    Mercedes,
    Audi
}
```

#### Select By Text

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Select<CarBrand, _> Brand { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Brand.Should.Equal(CarBrand.None).
    Brand.Set(CarBrand.Audi).
    Brand.Should.Equal(CarBrand.Audi);
```

#### Select By Value

You just need to mark the select property with `[SelectByValue]` attribute and optionally set settings like `Case` or `Format`.

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        [SelectByValue(TermCase.Lower)]
        public Select<CarBrand, _> Brand { get; private set; }
    }
}
```

`TermCase.Lower` is defined in `SelectByValue` attribute because option values are lowercase in this example (e.g. volvo).

### Select Using String

Don't pass data generic type argument to use string variant of control, simply use `Select<_>` (or alternatively `Select<string, _>`).

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Select<_> Brand { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Brand.Set("Audi").
    Brand.Should.Equal("Audi");
```

### Select Using Int

It is also possible to select an option by `int` and other types. The following sample shows how to select using `int` type together with the formatting.

```html
<select id="priority">
  <option value="1">Priority 1</option>
  <option value="2">Priority 2</option>
  <option value="3">Priority 3</option>
  <option value="4">Priority 4</option>
  <option value="5">Priority 5</option>
</select> 
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        [Format("Priority {0}")]
        public Select<int, _> Priority { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Priority.Set(3).
    Priority.Should.Equal(3);
```