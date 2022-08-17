**`ValueGetBehaviorAttribute`** - the base behavior class for an implementation of the
`EditableTextField<TValue, TOwner>` value getting.

#### Implementations

- <span class="label label-primary">default</span> **`GetsValueFromValueAttribute`** -
  the behavior for control value getting from `value` attribute.
- **`GetsValueFromContentAttribute`** - the behavior for control value getting from `IUIComponent<TOwner>.Content` property.