Represents the base class for the field controls. It can be used for HTML elements containing content (like `<h1>`, `<span>`, etc.) representing content as a field value, as well as for `<input>` and other elements.

#### Syntax

```cs
public abstract class Field<T, TOwner> : Control<TOwner>, IEquatable<T>, IDataProvider<T, TOwner>
    where TOwner : PageObject<TOwner>
```

The only abstract member of ``Field`2`` is `protected abstract T GetValue()` method that is required to be overridden. Value of the field can be input's value attribute, some other attribute, text content or a set of data.
{:.warning}

Inherited class can support `[Format]`, `[Culture]` and other settings attributes.
{:.info}

#### Properties

Name | Description
---- | -----------
`Value` | Gets the value.
{:.table.table-members}

#### Example

The example of ``RadioButton`1`` control that is inherited from ``Field`2``:

```cs
[ControlDefinition("input[@type='radio']")]
public class RadioButton<TOwner> : Field<bool, TOwner>
    where TOwner : PageObject<TOwner>
{
    public DataProvider<bool, TOwner> IsChecked => GetOrCreateDataProvider("checked", () => Value);

    protected override bool GetValue()
    {
        return Scope.Selected;
    }

    public TOwner Check()
    {
        return Click();
    }
}
```

#### Usage

```cs
string textFieldValue;

Go.To<SomePage>().
    SomeTextField.Get(out fieldValue). // Read the field value to the variable.
    SomeTextField.Should.Equal("some value"). // Verify the field value.
    SomeNumberField.Should.BeGreater(10). // Verify the field value.
    SomeRadioButton.Check(). // Check the radio button.
    SomeRadioButton.IsChecked.Should.BeTrue(); // Verify the radio button is checked.
```