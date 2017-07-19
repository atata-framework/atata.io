Represents the base class for the field controls. It can be used for HTML elements containing content (like `<h1>`, `<span>`, etc.) representing content as a field value, as well as for `<input>` and other elements.

The only abstract member of ``Field`2`` is `protected abstract T GetValue()` method that is required to be overridden. Value of the field can be input's value attribute, some other attribute, text content or a set of data.
{:.warning}

Inherited class can support `[Format]`, `[Culture]` and other settings attributes.
{:.info}

#### Syntax

```cs
public abstract class Field<T, TOwner> : Control<TOwner>, IEquatable<T>, IDataProvider<T, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">T</span></span>
    <h3><span class="body">Value</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the value. Also executes `TriggerEvents.BeforeGet` and `TriggerEvents.AfterGet` triggers.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">T</span></span>
    <h3><span class="body">Get</span><span class="tail">(<span class="keyword">out</span> <span class="type">T</span> value)</span></h3>
</div>

Gets the value and records it to `value` parameter.

<div class="member">
    <span class="head"><span class="keyword">protected</span> <span class="keyword">abstract</span> <span class="type">T</span></span>
    <h3><span class="body">GetValue()</span></h3>
</div>

Gets the value.

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
    SomeTextField.Get(out textFieldValue). // Read the field value to the variable.
    SomeTextField.Should.Equal("some value"). // Verify the field value.
    SomeNumberField.Should.BeGreater(10). // Verify the field value.
    SomeRadioButton.Check(). // Check the radio button.
    SomeRadioButton.IsChecked.Should.BeTrue(); // Verify the radio button is checked.
```