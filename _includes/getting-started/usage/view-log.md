The above sample `SignIn` test generates the following log to NUnit output:

```
00:00:00.000 Vlmf DEBUG Starting test AtataDemo.UITests.SignInTests.SignIn at 2026-05-07 20:09:04.493
00:00:00.000 Vlmf TRACE > Initialize AtataContext { Id=Vlmf }
00:00:00.000 Vlmf TRACE - Set: Artifacts=D:\dev\AtataDemo.UITests\AtataDemo.UITests\bin\Debug\net10.0\artifacts\20260507T200904\SignInTests\SignIn
00:00:00.007 uuoE TRACE - > Initialize WebDriverSession { Id=uuoE }
00:00:00.011 uuoE TRACE - - Set: BaseUrl=https://demo.atata.io/
00:00:00.012 uuoE TRACE - - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.2s
00:00:00.012 uuoE TRACE - - Set: WaitingTimeout=5s; WaitingRetryInterval=0.2s
00:00:00.012 uuoE TRACE - - Set: VerificationTimeout=5s; VerificationRetryInterval=0.2s
00:00:00.013 uuoE TRACE - - > Initialize Driver
00:00:00.018 uuoE TRACE - - - Created ChromeDriverService { Port=53840, ExecutablePath=D:\dev\_temp\TestProject39\TestProject39\bin\Debug\net10.0\drivers\chrome\147.0.7727.117\chromedriver.exe }
00:00:00.661 uuoE TRACE - - - Created ChromeDriver { Alias=chrome, SessionId=11ba40da88e75b383e17131ca89e9624 }
00:00:00.662 uuoE TRACE - - < Initialize Driver (0.649s)
00:00:00.663 uuoE TRACE - < Initialize WebDriverSession { Id=uuoE } (0.656s)
00:00:00.664 Vlmf TRACE < Initialize AtataContext { Id=Vlmf } (0.664s)
00:00:00.707 uuoE  INFO > Go to "Sign In" page by URL https://demo.atata.io/signin
00:00:00.965 uuoE  INFO < Go to "Sign In" page by URL https://demo.atata.io/signin (0.257s)
00:00:00.972 uuoE  INFO > Type "admin@mail.com" in "Email" text input
00:00:00.974 uuoE TRACE - > Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input
00:00:00.998 uuoE TRACE - - > Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Email']/@for]/descendant-or-self::input[@type='text' or not(@type)] | .//label[normalize-space(.) = 'Email']/descendant-or-self::input[@type='text' or not(@type)])" in ChromeDriver
00:00:01.221 uuoE TRACE - - < Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Email']/@for]/descendant-or-self::input[@type='text' or not(@type)] | .//label[normalize-space(.) = 'Email']/descendant-or-self::input[@type='text' or not(@type)])" in ChromeDriver (0.222s) >> Element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.6)
00:00:01.223 uuoE TRACE - - > Send keys "admin@mail.com" to element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.6)
00:00:01.302 uuoE TRACE - - < Send keys "admin@mail.com" to element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.6) (0.079s)
00:00:01.303 uuoE TRACE - < Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input (0.328s)
00:00:01.303 uuoE  INFO < Type "admin@mail.com" in "Email" text input (0.331s)
00:00:01.303 uuoE  INFO > Type "abc123" in "Password" password input
00:00:01.303 uuoE TRACE - > Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input
00:00:01.304 uuoE TRACE - - > Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Password']/@for]/descendant-or-self::input[@type='password'] | .//label[normalize-space(.) = 'Password']/descendant-or-self::input[@type='password'])" in ChromeDriver
00:00:01.317 uuoE TRACE - - < Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Password']/@for]/descendant-or-self::input[@type='password'] | .//label[normalize-space(.) = 'Password']/descendant-or-self::input[@type='password'])" in ChromeDriver (0.013s) >> Element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.3)
00:00:01.317 uuoE TRACE - - > Send keys "abc123" to element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.3)
00:00:01.359 uuoE TRACE - - < Send keys "abc123" to element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.3) (0.041s)
00:00:01.359 uuoE TRACE - < Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input (0.055s)
00:00:01.359 uuoE  INFO < Type "abc123" in "Password" password input (0.056s)
00:00:01.359 uuoE  INFO > Click "Sign In" button
00:00:01.360 uuoE TRACE - > Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button
00:00:01.361 uuoE TRACE - - > Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver
00:00:01.376 uuoE TRACE - - < Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver (0.014s) >> Element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.10)
00:00:01.377 uuoE TRACE - - > Click element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.10)
00:00:01.479 uuoE TRACE - - < Click element (id = f.8E06CFE04C6716766F8257A4EE7D9BFD.d.A38F77598C1D7C1A24360A043AF36AE4.e.10) (0.101s)
00:00:01.479 uuoE TRACE - < Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button (0.118s)
00:00:01.479 uuoE  INFO < Click "Sign In" button (0.119s)
00:00:01.481 Vlmf TRACE > Deinitialize AtataContext { Id=Vlmf }
00:00:01.486 uuoE TRACE - > Deinitialize WebDriverSession { Id=uuoE }
00:00:01.592 uuoE TRACE - < Deinitialize WebDriverSession { Id=uuoE } (0.106s)
00:00:01.594 Vlmf TRACE < Deinitialize AtataContext { Id=Vlmf } (0.112s)
00:00:01.596 Vlmf DEBUG Finished test with passed status at 2026-05-07 20:09:06.090
      Total time: 1.594s
  Initialization: 0.665s | 41.7 %
       Test body: 0.816s | 51.2 %
Deinitialization: 0.112s |  7.1 %
```