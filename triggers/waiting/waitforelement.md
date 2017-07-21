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

<div class="member">
    <span class="head"><a href="#waitby" class="type">WaitBy</a></span>
    <h3><span class="body" title="Required">waitBy</span></h3>
</div>

The kind of the element selector to wait for.

<div class="member">
    <span class="head"><span class="keyword">string</span></span>
    <h3><span class="body" title="Required">selector</span></h3>
</div>

The selector.

<div class="member">
    <span class="head"><a href="#waituntil" class="type">WaitUntil</a></span>
    <h3><span class="body">until</span><span class="tail"> = <span class="type">WaitUntil</span>.MissingOrHidden</span></h3>
</div>

The waiting approach. The default is `MissingOrHidden`.

<div class="member">
    <span class="head"><a href="#triggerevents" class="type">TriggerEvents</a></span>
    <h3><span class="body">on</span><span class="tail"> = <span class="type">TriggerEvents</span>.AfterClick</span></h3>
</div>

The trigger events. The default is `AfterClick`.

<div class="member">
    <span class="head"><a href="#triggerpriority" class="type">TriggerPriority</a></span>
    <h3><span class="body">priority</span><span class="tail"> = <span class="type">TriggerPriority</span>.Medium</span></h3>
</div>

The priority. The default is `Medium`.

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScopeSource</span></span>
    <h3><span class="body">ScopeSource</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the scope source. The default value is `ScopeSource.Parent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">bool</span></span>
    <h3><span class="body">ThrowOnPresenceFailure</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets a value indicating whether to throw the exception on the presence (exists or visible) failure. The default value is true.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">bool</span></span>
    <h3><span class="body">ThrowOnAbsenceFailure</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets a value indicating whether to throw the exception on the absence (missing or hidden) failure. The default value is true.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">PresenceTimeout</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the presence (exists or visible) timeout in seconds. The default value is taken from `AtataContext.Current.RetryTimeout.TotalSeconds`{:.word-break}.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">AbsenceTimeout</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the absence (missing or hidden) timeout in seconds. The default value is taken from `AtataContext.Current.RetryTimeout.TotalSeconds`{:.word-break}.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">RetryInterval</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the retry interval. The default value is taken from `AtataContext.Current.RetryInterval.TotalSeconds`{:.word-break}.

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
`VisibleOrHidden` | Waits until the element will be visible or hidden.
`VisibleThenHidden` | Waits until the element will be visible and then until it will be hidden.
`VisibleThenMissing` | Waits until the element will be visible and then until it will be missing.
`VisibleThenMissingOrHidden` | Waits until the element will be visible and then until it will be missing or hidden.
`MissingThenVisible` | Waits until the element will be missing and then until it will be visible.
`HiddenThenVisible` | Waits until the element will be hidden and then until it will be visible.
`MissingOrHiddenThenVisible` | Waits until the element will be missing or hidden and then until it will be visible.
{:.table.table-members.table-condensed}