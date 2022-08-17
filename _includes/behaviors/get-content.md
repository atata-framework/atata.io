**`ContentGetBehaviorAttribute`** - the base behavior class for getting the component's content.
Responsible for the `UIComponent<TOwner>.Content` property value getting.

#### Implementations

- <span class="label label-primary">default</span> **`GetsContentFromSourceAttribute`** -
  the behavior for component content getting from
  the specified source of `ContentSource` enumeration type. By default, `ContentSource.Text` is used.
- **`GetsContentFromAttributeAttribute`** - the behavior for component content getting from HTML attribute by attribute name.