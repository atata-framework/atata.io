Represents the base class for editable field controls. It can be used for controls like `<input>`, `<select>` and other editable controls.

#### Syntax

```cs
public abstract class EditableField<T, TOwner> : Field<T, TOwner>
    where TOwner : PageObject<TOwner>
```

Abstract methods of ``EditableField`2`` are: `protected abstract T GetValue()` and `protected abstract void SetValue(T value)`.
{:.warning}

Inherited class can support `[Format]`, `[Culture]` and other settings attributes.
{:.info}

#### Properties

Name | Description
---- | -----------
`IsReadOnly` | Gets the `DataProvider<bool, TOwner>` instance for the value indicating whether the control is read-only. By default checks "readonly" attribute of scope element. Override `GetIsReadOnly` method to change the behavior.
{:.table.table-members}

#### Methods

Name | Description
---- | -----------
`Set(T value)` | Sets the value. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.
`SetRandom()` | Sets the random value. For value generation uses randomization attributes, for example: `RandomizeStringSettingsAttribute`, `RandomizeNumberSettingsAttribute`, `RandomizeIncludeAttribute`, etc.
`SetRandom(out T value)` | Sets the random value and records it to `value` parameter.
{:.table.table-members}

#### Example

The example of ``CheckBox`1`` control that is inherited from ``EditableField`2``:

```cs
[ControlDefinition("input[@type='checkbox']", ComponentTypeName = "checkbox")]
public class CheckBox<TOwner> : EditableField<bool, TOwner>
    where TOwner : PageObject<TOwner>
{
    public DataProvider<bool, TOwner> IsChecked => GetOrCreateDataProvider("checked", () => Value);

    protected override bool GetValue()
    {
        return Scope.Selected;
    }

    protected override void SetValue(bool value)
    {
        IWebElement element = Scope;
        if (element.Selected != value)
            element.Click();
    }

    public TOwner Check()
    {
        return Set(true);
    }

    public TOwner Uncheck()
    {
        return Set(false);
    }
}
```

#### Usage

```cs
string textFieldValue;

Go.To<SomePage>().
    SomeTextField.Set("some value"). // Set the value to the field.
    SomeTextField.Should.Equal("some value"). // Verify the field value.
    SomeTextField.SetRandom(out textFieldValue). // Set the random value to the field.
    SomeTextField.Should.Equal(textFieldValue). // Verify the field value.
    SomeNumberField.Set(10); // Set the value to the field.
```