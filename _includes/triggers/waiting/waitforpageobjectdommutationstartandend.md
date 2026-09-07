Indicates that the waiting should be performed for the page object DOM mutation to start and end.

```cs
[WaitForPageObjectDomMutationStartAndEnd(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```

```cs
[WaitForPageObjectDomMutationStartAndEnd(TriggerEvents.Init)]
public Control<_> SomeControl { get; private set; }
```

```cs
[WaitForPageObjectDomMutationStartAndEnd(TriggerEvents.AfterClick)]
public Button<_> SomeButton { get; private set; }
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">ImmutableStateSeconds</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the value of immutable/stable DOM state seconds to wait for.
If it is not specified, the immutable state time is taken from `WebSession.WaitForDomImmutableStateTime` property,
which is 100 milliseconds by default.