The fluent API for handling [JavaScript popup boxes](https://www.w3schools.com/js/js_popup.asp) (alert, confirm, prompt).

The base `PageObject<TOwner>` class has 3 methods for different popup boxes:

```cs
public AlertBox<TOwner> SwitchToAlertBox(TimeSpan? waitTimeout = null, TimeSpan? waitRetryInterval = null);

public ConfirmBox<TOwner> SwitchToConfirmBox(TimeSpan? waitTimeout = null, TimeSpan? waitRetryInterval = null);

public PromptBox<TOwner> SwitchToPromptBox(TimeSpan? waitTimeout = null, TimeSpan? waitRetryInterval = null);
```

The methods wait and switch to the open popup box. By default, if `waitTimeout` and `waitRetryInterval` arguments are not specified, the `AtataContext.WaitingTimeout` and `AtataContext.WaitingRetryInterval` values are used correspondingly. If popup box does not appear within the specified time, the `TimeoutException` is thrown.

### Alert

```cs
Go.To<SomePage>()
    .AlertButton.Click()
    .SwitchToAlertBox()
    .Accept();
```

### Confirm

```cs
Go.To<SomePage>()
    .ConfirmButton.Click()
    .SwitchToConfirmBox()
    .Accept(); // or Cancel()
```

### Prompt

```cs
Go.To<SomePage>()
    .PromptButton.Click()
    .SwitchToPromptBox()
    .Type("Some text")
    .Accept(); // or Cancel()
```

### Verify Popup Text

Use `Text` property of popup box classes to get or verify the text of popup.

```cs
page.SwitchToAlertBox()
    .Text.Should.Be("Some text");
```