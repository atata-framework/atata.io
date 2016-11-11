Specifies the waiting for the element. By default occurs after the click.

```cs
public class SamplePage : Page<_>
{
    [WaitForElement(WaitBy.Class, "busy-indicator", WaitUntil.VisibleAndHidden)]
    public Button<_> Refresh { get; private set; }
}
```

The example after the click on `Refresh` button waits for element with class "busy-indicator" to become visible and then waits until it will become hidden.

#### Parameters

Name | Type | Description
---- | ---- | -----------
`waitBy`<span title="Required">*</span> | [`WaitBy`](#waitby) | The kind of the element selector to wait for.
`selector`<span title="Required">*</span> | `string`{:.simple} | The selector.
`until` | [`WaitUntil`](#waituntil) | The waiting approach. The default is `MissingOrHidden`.
`on` | [`TriggerEvents`](#triggerevents) | The trigger events. The default is `AfterClick`.
`priority` | [`TriggerPriority`](#triggerpriority) | The priority. The default is `Medium`.
{:.table.table-members.table-members-with-type}

#### Properties

Name | Description
---- | -----------
`ScopeSource` | Gets or sets the scope source.
`ThrowOnPresenceFailure` | Gets or sets a value indicating whether to throw the exception on the presence (exists or visible) failure. The default value is true.
`ThrowOnAbsenceFailure` | Gets or sets a value indicating whether to throw the exception on the absence (missing or hidden) failure. The default value is true.
`PresenceTimeout` | Gets or sets the presence (exists or visible) timeout in seconds. The default value is taken from `AtataContext.Current.RetryTimeout.TotalSeconds`.
`AbsenceTimeout` | Gets or sets the absence (missing or hidden) timeout in seconds. The default value is taken from `AtataContext.Current.RetryTimeout.TotalSeconds`.
`RetryInterval` | Gets or sets the retry interval. The default value is taken from `AtataContext.Current.RetryInterval.TotalSeconds`.
{:.table.table-members}

<a id="waitby" class="header-anchor"></a>

#### WaitBy

The enumeration that specifies the kind of the element selector for the waiting.

Value | Description
----- | -----------
`Id` | Uses the id selector kind.
`Name` | Uses the name selector kind.
`Class` | Uses the class selector kind.
`Css` | Uses the CSS selector kind.
`XPath` | Uses the XPath selector kind.
{:.table.table-members.table-condensed}

<a id="waituntil" class="header-anchor"></a>

#### WaitUntil

The enumeration that specifies the waiting approach.

Value | Description
----- | -----------
`Missing` | Waits until the element will be missing.
`Hidden` | Waits until the element will be hidden.
`MissingOrHidden` | Waits until the element will be missing or hidden.
`Visible` | Waits until the element will be visible.
`Exists` | Waits until the element will exist.
`VisibleAndHidden` | Waits until the element will be visible and than until it will be hidden.
`VisibleAndMissing` | Waits until the element will be visible and than until it will be missing.
`MissingAndVisible` | Waits until the element will be missing and than until it will be visible.
`HiddenAndVisible` | Waits until the element will be hidden and than until it will be visible.
{:.table.table-members.table-condensed}