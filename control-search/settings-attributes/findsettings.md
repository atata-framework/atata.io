Defines the settings to apply for the specified finding strategy of a control.

For example, it is possible to replace the default strategy of control search with the custom one:

```cs
[assembly: FindSettings(FindTermBy.Label, Strategy = typeof(CustomFindByLabelStrategy))]
```

Or set another scope source for a custom control:

```cs
[FindSettings(FindTermBy.Label, ScopeSource = ScopeSource.PageObject)]
public class LoginControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    [FindByLabel]
    public TextInput<_> UserName { get; private set; }

    [FindByLabel]
    public PasswordInput<_> Password { get; private set; }
}
```

#### Properties

Name | Type | Description
---- | ---- | -----------
`Index` | `int`{:.simple} | Gets or sets the index of the control. The default value is `-1`, meaning that the index is not used.
`Visibility` | [`Visibility`](#visibility) | Gets or sets the visibility. The default value is `Visibility.Visible`.
`ScopeSource` | [`ScopeSource`](#scopesource) | Gets or sets the scope source. The default value is `ScopeSource.Parent`.
`Strategy` | `Type` | Gets or sets the strategy type for the control search. Strategy type should implement `IComponentScopeLocateStrategy`. The default value is null, meaning that the default strategy of the specific `FindAttribute` should be used.
{:.table.table-members.table-members-with-type}