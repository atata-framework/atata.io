Defines the settings to apply for the specified finding strategy of a control.

#### Example: Apply Within Assembly

For example, it is possible to replace the default strategy of control search with the custom one.

The following example sets `CustomFindByLabelStrategy` as a search strategy of `FindByLabelAttribute` for all controls in scope of assembly:

```cs
[assembly: FindSettings(TargetAttributeType = typeof(FindByLabelAttribute), Strategy = typeof(CustomFindByLabelStrategy))]
```

#### Example: Apply Within Class

It is possible to set settings for all child controls of page object or control.

An example sets `ScopeSource.PageObject` as scope source for all child controls of `LoginControl<TOwner>`: `UserName` and `Password`.

```cs
[FindSettings(TargetAnyType = true, TargetAttributeType = typeof(FindByLabelAttribute), ScopeSource = ScopeSource.PageObject)]
public class LoginControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    [FindByLabel]
    public TextInput<TOwner> UserName { get; private set; }

    [FindByLabel]
    public PasswordInput<TOwner> Password { get; private set; }
}
```

`[FindSettings]` properties:

- `TargetAnyType = true` - says that this `FindSettingsAttribute` can apply to children of any type.
- `TargetAttributeType = typeof(FindByLabelAttribute)` - specifies that it applies to attributes of `FindByLabelAttribute` type.

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">int</span></span>
    <h3><span class="body">Index</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the index of the control.
The default value is `-1`, meaning that the index is not used.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#visibility" class="type">Visibility</a></span>
    <h3><span class="body">Visibility</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the visibility.
The default value is `Visibility.Visible`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#scopesource" class="type">ScopeSource</a></span>
    <h3><span class="body">ScopeSource</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the scope source.
The default value is `ScopeSource.Parent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">string</span></span>
    <h3><span class="body">OuterXPath</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the outer XPath.
The default value is `null`, meaning that the control is searchable as descendant (using `".//"` XPath) in scope source.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Type</span></span>
    <h3><span class="body">Strategy</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the strategy type for the control search.
Strategy type should implement `IComponentScopeLocateStrategy`.
The default value is `null`, meaning that the default strategy of the specific `FindAttribute` should be used.