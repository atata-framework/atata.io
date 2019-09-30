Specifies the default finding strategy of a control. Can be applied to the control class and assembly.

#### Examples

For example, it is possible to set the default finding of the `Input` control as by name, and for inputs whose parent is `TableRow` by column header:

```cs
[assembly: ControlFinding(FindTermBy.Name, ControlType = typeof(Input<,>))]
[assembly: ControlFinding(FindTermBy.ColumnHeader, ControlType = typeof(Input<,>), ParentComponentType = typeof(TableRow<>))]
```

Or set the finding by the label for a custom control:

```cs
[ControlFinding(FindTermBy.Label)]
public class CustomControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
}
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Type</span></span>
    <h3><span class="body">ControlType</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the type of the control (e.g.: `typeof(Link<>)`, `typeof(EditableField<,>)`).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Type</span></span>
    <h3><span class="body">ParentComponentType</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the type of the parent component.