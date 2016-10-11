**Term** - in the scope of Atata is the text that is used to find a control. It can be id, name, class, etc.

In the both following examples `some-input` is the term that is used for the control search:

```cs
[FindById("some-input")]
public TextInput<_> FirstName { get; private set; }
```
```cs
[FindById]
[Term("some-input")]
public TextInput<_> FirstName { get; private set; }
```