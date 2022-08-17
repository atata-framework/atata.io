Parent pomponent attributes are located on a parent component, which can be a page object class or a wrapping control.

```cs
[FindById("post-title", TargetName = nameof(Title))]
public class SomePage : Page<_>
{
    public TextInput<_> Title { get; private set; }
}
```

```cs
[FindByName(TargetType = typeof(TextInput<>))]
public class UserDetailsSection<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    public TextInput<_> FirstName { get; private set; }

    public TextInput<_> LastName { get; private set; }
}
```
