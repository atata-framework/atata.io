The above sample `SignIn` test generates the following log to NUnit output:

```
2023-10-19 12:16:24.1153  INFO Starting test: AtataDemo.UITests.SignInTests.SignIn
2023-10-19 12:16:24.1247 TRACE > Initialize AtataContext
2023-10-19 12:16:24.1264 TRACE - Set: BaseUrl=https://demo.atata.io/
2023-10-19 12:16:24.1275 TRACE - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.5s
2023-10-19 12:16:24.1277 TRACE - Set: WaitingTimeout=5s; WaitingRetryInterval=0.5s
2023-10-19 12:16:24.1278 TRACE - Set: VerificationTimeout=5s; VerificationRetryInterval=0.5s
2023-10-19 12:16:24.1281 TRACE - Set: Culture=en-US
2023-10-19 12:16:24.1285 TRACE - Set: Artifacts=D:\dev\AtataDemo.UITests\AtataDemo.UITests\bin\Debug\net7.0\artifacts\20231019T121624\SignInTests\SignIn
2023-10-19 12:16:24.1293 TRACE - > Initialize Driver
2023-10-19 12:16:24.1331 TRACE - - Created ChromeDriverService { Port=56112, ExecutablePath=D:\dev\AtataDemo.UITests\AtataDemo.UITests\bin\Debug\net7.0\drivers\chrome\118.0.5993.70\chromedriver.exe }
2023-10-19 12:16:24.8457 TRACE - - Created ChromeDriver { Alias=chrome, SessionId=40696ddb9dbb756cbcfb0de8ab0e8412 }
2023-10-19 12:16:24.8521 TRACE - < Initialize Driver (0.718s)
2023-10-19 12:16:24.8531 TRACE < Initialize AtataContext (0.728s)
2023-10-19 12:16:24.9119  INFO > Go to "Sign In" page by URL https://demo.atata.io/signin
2023-10-19 12:16:24.9130 TRACE - > Navigate to URL https://demo.atata.io/signin
2023-10-19 12:16:25.3187 TRACE - < Navigate to URL https://demo.atata.io/signin (0.405s)
2023-10-19 12:16:25.3566  INFO < Go to "Sign In" page by URL https://demo.atata.io/signin (0.444s)
2023-10-19 12:16:25.3692  INFO > Type "admin@mail.com" in "Email" text input
2023-10-19 12:16:25.3727 TRACE - > Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input
2023-10-19 12:16:25.3960 TRACE - - > Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Email']/@for]/descendant-or-self::input[@type='text' or not(@type)] | .//label[normalize-space(.) = 'Email']/descendant-or-self::input[@type='text' or not(@type)])" in ChromeDriver
2023-10-19 12:16:25.4187 TRACE - - < Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Email']/@for]/descendant-or-self::input[@type='text' or not(@type)] | .//label[normalize-space(.) = 'Email']/descendant-or-self::input[@type='text' or not(@type)])" in ChromeDriver (0.021s) >> Element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_5 }
2023-10-19 12:16:25.4200 TRACE - - > Send keys "admin@mail.com" to element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_5 }
2023-10-19 12:16:25.4948 TRACE - - < Send keys "admin@mail.com" to element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_5 } (0.074s)
2023-10-19 12:16:25.4953 TRACE - < Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input (0.122s)
2023-10-19 12:16:25.4954  INFO < Type "admin@mail.com" in "Email" text input (0.126s)
2023-10-19 12:16:25.4956  INFO > Type "abc123" in "Password" password input
2023-10-19 12:16:25.4959 TRACE - > Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input
2023-10-19 12:16:25.4967 TRACE - - > Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Password']/@for]/descendant-or-self::input[@type='password'] | .//label[normalize-space(.) = 'Password']/descendant-or-self::input[@type='password'])" in ChromeDriver
2023-10-19 12:16:25.5115 TRACE - - < Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Password']/@for]/descendant-or-self::input[@type='password'] | .//label[normalize-space(.) = 'Password']/descendant-or-self::input[@type='password'])" in ChromeDriver (0.014s) >> Element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_6 }
2023-10-19 12:16:25.5120 TRACE - - > Send keys "abc123" to element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_6 }
2023-10-19 12:16:25.5612 TRACE - - < Send keys "abc123" to element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_6 } (0.049s)
2023-10-19 12:16:25.5620 TRACE - < Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input (0.066s)
2023-10-19 12:16:25.5623  INFO < Type "abc123" in "Password" password input (0.066s)
2023-10-19 12:16:25.5628  INFO > Click "Sign In" button
2023-10-19 12:16:25.5637 TRACE - > Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button
2023-10-19 12:16:25.5650 TRACE - - > Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver
2023-10-19 12:16:25.5823 TRACE - - < Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver (0.017s) >> Element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_10 }
2023-10-19 12:16:25.5830 TRACE - - > Click element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_10 }
2023-10-19 12:16:25.6589 TRACE - - < Click element { Id=899920EE3DDF8CF5FDC58EB63A55E6A0_element_10 } (0.075s)
2023-10-19 12:16:25.6596 TRACE - < Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button (0.095s)
2023-10-19 12:16:25.6601  INFO < Click "Sign In" button (0.097s)
2023-10-19 12:16:25.6614 TRACE > Deinitialize AtataContext
2023-10-19 12:16:25.8006 TRACE < Deinitialize AtataContext (0.139s)
2023-10-19 12:16:25.8046  INFO Finished test
      Total time: 1.754s
  Initialization: 0.806s | 46.0 %
       Test body: 0.807s | 46.1 %
Deinitialization: 0.139s |  8.0 %
```