```cs
[Test]
public void SignIn() =>
    Go.To<SignInPage>()
        .Email.Type("admin@mail.com")
        .Password.Type("abc123")
        .SignIn.Click();

[SetUp]
public void SetUp() =>
    AtataContext.Configure()
        .UseChrome()
        .UseBaseUrl("https://demo.atata.io/")
        .Build();

[TearDown]
public void TearDown() =>
    AtataContext.Current?.Dispose();
```