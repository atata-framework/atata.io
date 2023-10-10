Specifies the condition of the component to wait for.
By default occurs upon the page object initialization.

It calls component's `Wait` method passing `Until` value to it.

```cs
public class SamplePage : Page<_>
{
    // Wait upon page object initialization until the control is visible.
    [WaitFor]
    public Text<_> ContentBlock { get; private set; }

    // Wait upon page object deinitialization until the control is missing or hidden.
    [WaitFor(Until.MissingOrHidden, TriggerEvents.DeInit)]
    public Text<_> SavingIndicator { get; private set; }
}
```

#### Parameters

<div class="member">
    <span class="head"><a href="#until" class="type">Until</a></span>
    <h3><span class="body">until</span><span class="tail"> = <span class="type">Until</span>.Visible</span></h3>
</div>

The waiting condition. The default is `Visible`.

<div class="member">
    <span class="head"><a href="#triggerevents" class="type">TriggerEvents</a></span>
    <h3><span class="body">on</span><span class="tail"> = <span class="type">TriggerEvents</span>.Init</span></h3>
</div>

The trigger events. The default is `Init`.

<div class="member">
    <span class="head"><a href="#triggerpriority" class="type">TriggerPriority</a></span>
    <h3><span class="body">priority</span><span class="tail"> = <span class="type">TriggerPriority</span>.Medium</span></h3>
</div>

The priority. The default is `Medium`.

#### Properties

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

Gets or sets the presence (exists or visible) timeout in seconds. The default value is taken from `AtataContext.Current.RetryTimeout.TotalSeconds`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">AbsenceTimeout</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the absence (missing or hidden) timeout in seconds. The default value is taken from `AtataContext.Current.RetryTimeout.TotalSeconds`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">RetryInterval</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the retry interval. The default value is taken from `AtataContext.Current.RetryInterval.TotalSeconds`.