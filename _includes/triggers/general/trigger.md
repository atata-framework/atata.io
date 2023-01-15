Represents the base attribute class for the triggers.
An inherited class should implement `Execute` method.

#### Syntax

```cs
public abstract class TriggerAttribute : MulticastAttribute
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#triggerevents" class="type">TriggerEvents</a></span>
    <h3><span class="body">On</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the trigger events.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#triggerpriority" class="type">TriggerPriority</a></span>
    <h3><span class="body">Priority</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the priority. The default value is `Medium`.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">protected</span> <span class="keyword">abstract</span> <span class="keyword">void</span></span>
    <h3><span class="body">Execute<wbr>&lt;<span class="type">TOwner</span>&gt;</span><span class="tail">(<span class="type">TriggerContext</span><wbr>&lt;<span class="type">TOwner</span>&gt; context)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOwner</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TOwner</span>&gt;, <span class="type">IPageObject</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
</div>

Executes the specified trigger action.