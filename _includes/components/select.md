Represents the select control.

```html
<select id="brand">
  <option value="">--select--</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 
```

The given select can be described with the following enum:

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

Supports `[SelectByText]`, `[SelectByValue]`, `[Format]` and `[Culture]` settings attributes.

There are two ways to select the options: by value and by text. By default selects by text.

### Select By Text Using Enum

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

### Select By Value Using Enum

You just need to mark the select property with `SelectByValueAttribute` and optionaly set settings like `Case` or `Format`.

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        [SelectByValueAttribute(TermCase.Lower)]
        public Select<CarBrand, _> Brand { get; private set; }
    }
}
```