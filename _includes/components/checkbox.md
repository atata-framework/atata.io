Represents the checkbox control.

```html
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> Option 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option1" checked> Option 2
</label>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindByLabel]
        public CheckBox<_> Option1 { get; private set; }

        [FindByLabel]
        public CheckBox<_> Option2 { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Option1.Check().
    Option1.Should.BeChecked().
    Option2.Uncheck().
    Option2.Should.Not.BeChecked();
```