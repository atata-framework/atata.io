Represents the `<label>` element. Default search is performed by the content.

```html
<label for="first-name">First Name</p>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public Label<_> FirstNameLabel { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    FirstNameLabel.Should.Equal("First Name").
    FirstNameLabel.Attributes.For.Should.Equal("first-name");
```

Supports `[Format]` settings attribute.
{:.info}