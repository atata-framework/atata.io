Represents the base class for editable field controls. It can be used for controls like `<input>`, `<select>` and other editable controls.

Abstract methods of ``EditableField`2`` are: `protected abstract T GetValue()` and `protected abstract void SetValue(T value)`.
{:.warning}

Inherited class can support `[Format]`, `[Culture]` and other settings attributes.
{:.info}

#### Syntax

```cs
public abstract class EditableField<T, TOwner> : Field<T, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsReadOnly</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `DataProvider<bool, TOwner>` instance for the value indicating whether the control is read-only. By default checks "readonly" attribute of scope element. Override `GetIsReadOnly` method to change the behavior.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Set</span><span class="tail">(<span class="type">T</span> value)</span></h3>
</div>

Sets the value. 
Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">SetRandom()</span></h3>
</div>

Sets the random value. 
For value generation uses randomization attributes, for example: `RandomizeStringSettingsAttribute`, `RandomizeNumberSettingsAttribute`, `RandomizeIncludeAttribute`, etc.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">SetRandom</span><span class="tail">(<span class="keyword">out</span> <span class="type">T</span> value)</span></h3>
</div>

Sets the random value and records it to `value` parameter. 
For value generation uses randomization attributes, for example: `RandomizeStringSettingsAttribute`, `RandomizeNumberSettingsAttribute`, `RandomizeIncludeAttribute`, etc.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">SetRandom</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">T</span>&gt; callback)</span></h3>
</div>

Sets the random value and invokes `callback`. 
For value generation uses randomization attributes, for example: `RandomizeStringSettingsAttribute`, `RandomizeNumberSettingsAttribute`, `RandomizeIncludeAttribute`, etc.

<div class="member">
    <span class="head"><span class="keyword">protected</span> <span class="keyword">abstract</span> <span class="keyword">void</span></span>
    <h3><span class="body">SetValue</span><span class="tail">(<span class="type">T</span> value)</span></h3>
</div>

Sets the value.

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