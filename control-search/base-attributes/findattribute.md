Represents the base attribute class for the finding attributes.

#### Properties

Name | Type | Description
---- | ---- | -----------
`Index` | `int`{:.simple} | Gets or sets the index of the control. The default value is `-1`, meaning that the index is not used.
`Visibility` | `Visibility` | Gets or sets the visibility. The default value is Visible.
`ScopeSource` | [`ScopeSource`](#scopesource) | Gets or sets the scope source. The default value is `Parent`.
`Strategy` | `Type` | Gets or sets the strategy type for the control search. Strategy type should implement `IComponentScopeLocateStrategy`. The default value is null, meaning that the default strategy of the specific `FindAttribute` should be used.
{:.table.table-members.table-members-with-type}