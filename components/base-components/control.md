Represents the base class for the controls.

{% include inherited.md from="UIComponent" %}

Inherited class supports `[ControlDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]`, `[Format]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("*", ComponentTypeName = "control")]
public class Control<TOwner> : UIComponent<TOwner>, IControl<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsEnabled</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the DataProvider instance for the value indicating whether the control is enabled.

```cs
Control.IsEnabled.Should.BeTrue();
bool isEnabled = Control.IsEnabled;
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Click()</span></h3>
</div>

Clicks the control.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.


<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TNavigateTo</span></span>
    <h3><span class="body">ClickAndGo<wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span><span class="tail">(<span class="type">TNavigateTo</span> navigateToPageObject = <span class="keyword">null</span>, <span class="type">bool?</span> temporarily = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TNavigateTo</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span>
</div>

Clicks the control and performs the navigation to the page object of `TNavigateTo` type. 
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Hover()</span></h3>
</div>

Hovers the control.
Also executes `TriggerEvents.BeforeHover` and `TriggerEvents.AfterHover` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Focus()</span></h3>
</div>

Focuses the control.
Also executes `TriggerEvents.BeforeFocus` and `TriggerEvents.AfterFocus` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">DoubleClick()</span></h3>
</div>

Double-clicks the control.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">RightClick()</span></h3>
</div>

Right-clicks the control.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">DragAndDropTo</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">TOwner</span>, <span class="type">Control</span><wbr>&lt;<span class="type">TOwner</span>&gt;&gt; targetSelector)</span></h3>
</div>

Drags and drops the control to the target control returned by `targetSelector`. 
By default uses `DragAndDropUsingActionsAttribute`.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">DragAndDropTo</span><span class="tail">(<span class="type">Control</span><wbr>&lt;<span class="type">TOwner</span>&gt; target)</span></h3>
</div>

Drags and drops the control to the target control. 
By default uses `DragAndDropUsingActionsAttribute`.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">DragAndDropToOffset</span><span class="tail">(<span class="keyword">int</span> offsetX, <span class="keyword">int</span> offsetY)</span></h3>
</div>

Drags and drops the control to the specified offset.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">ScrollTo()</span></h3>
</div>

Scrolls to the control. 
By default uses `ScrollUsingMoveToElementAttribute` behavior.
Also executes `TriggerEvents.BeforeScroll` and `TriggerEvents.AfterScroll` triggers.