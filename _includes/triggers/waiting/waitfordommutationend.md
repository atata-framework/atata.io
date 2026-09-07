Indicates that a waiting should be performed for the self or targeted component DOM mutation to end.
By default if `ControlName` is not specified, the waiting will be performed for the current component.

```cs
[WaitForDomMutationEnd(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```

```cs
[WaitForDomMutationEnd(TriggerEvents.Init)]
public Control<_> SomeControl { get; private set; }
```

```cs
[WaitForDomMutationEnd(TriggerEvents.AfterClick, ControlName = nameof(AnotherControl))]
public Button<_> SomeButton { get; private set; }

public Control<_> AnotherControl { get; private set; }
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">string</span>?</span>
    <h3><span class="body">ControlName</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the name of the control that should be observed for DOM changes.
If it is not specified, the waiting will be performed for the current component.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">ImmutableStateSeconds</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the value of immutable/stable DOM state seconds to wait for.
If it is not specified, the immutable state time is taken from `WebSession.WaitForDomImmutableStateTime` property,
which is 100 milliseconds by default.