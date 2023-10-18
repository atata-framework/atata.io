The above sample `SignIn` test generates the following log to NUnit output:

```
2023-10-18 20:38:18.9383  INFO Starting test: AtataDemo.UITests.SignInTests.SignIn
2023-10-18 20:38:18.9477 TRACE > Initialize AtataContext
2023-10-18 20:38:18.9485 TRACE - Set: BaseUrl=https://demo.atata.io/
2023-10-18 20:38:18.9492 TRACE - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.5s
2023-10-18 20:38:18.9494 TRACE - Set: WaitingTimeout=5s; WaitingRetryInterval=0.5s
2023-10-18 20:38:18.9497 TRACE - Set: VerificationTimeout=5s; VerificationRetryInterval=0.5s
2023-10-18 20:38:18.9500 TRACE - Set: Culture=en-US
2023-10-18 20:38:18.9504 TRACE - Set: Artifacts=D:\dev\AtataDemo.UITests\AtataDemo.UITests\bin\Debug\net7.0\artifacts\20231018T203818\SignInTests\SignIn
2023-10-18 20:38:18.9512 TRACE - > Initialize Driver
2023-10-18 20:38:18.9546 TRACE - - Created ChromeDriverService { Port=54769, ExecutablePath=D:\dev\AtataDemo.UITests\AtataDemo.UITests\bin\Debug\net7.0\drivers\chrome\118.0.5993.70\chromedriver.exe }
2023-10-18 20:38:19.6236 TRACE - - Created ChromeDriver { Alias=chrome, SessionId=fcb043c71325d68d900d9b4ae1bcbc7d }
2023-10-18 20:38:19.6304 TRACE - < Initialize Driver (0.675s)
2023-10-18 20:38:19.6319 TRACE < Initialize AtataContext (0.684s)
2023-10-18 20:38:19.6902  INFO > Go to "Sign In" page by URL https://demo.atata.io/signin
2023-10-18 20:38:19.6920 TRACE - > Navigate to URL https://demo.atata.io/signin
2023-10-18 20:38:19.8541 TRACE - < Navigate to URL https://demo.atata.io/signin (0.162s)
2023-10-18 20:38:19.8783  INFO < Go to "Sign In" page by URL https://demo.atata.io/signin (0.188s)
2023-10-18 20:38:19.8866  INFO > Set "admin@mail.com" to "Email" text input
2023-10-18 20:38:19.8918 TRACE - > Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Email" text input
2023-10-18 20:38:19.8945 TRACE - - > Execute behavior ClearsValueUsingClearMethodAttribute against "Email" text input
2023-10-18 20:38:19.9118 TRACE - - - > Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Email']/@for]/descendant-or-self::input[@type='text' or not(@type)] | .//label[normalize-space(.) = 'Email']/descendant-or-self::input[@type='text' or not(@type)])" in ChromeDriver
2023-10-18 20:38:20.4336 TRACE - - - < Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Email']/@for]/descendant-or-self::input[@type='text' or not(@type)] | .//label[normalize-space(.) = 'Email']/descendant-or-self::input[@type='text' or not(@type)])" in ChromeDriver (0.521s) >> Element { Id=0A70A9F09E57430027D945425CF02B01_element_4 }
2023-10-18 20:38:20.4356 TRACE - - - > Clear element { Id=0A70A9F09E57430027D945425CF02B01_element_4 }
2023-10-18 20:38:20.4764 TRACE - - - < Clear element { Id=0A70A9F09E57430027D945425CF02B01_element_4 } (0.040s)
2023-10-18 20:38:20.4768 TRACE - - < Execute behavior ClearsValueUsingClearMethodAttribute against "Email" text input (0.582s)
2023-10-18 20:38:20.4774 TRACE - - > Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input
2023-10-18 20:38:20.4787 TRACE - - - > Send keys "admin@mail.com" to element { Id=0A70A9F09E57430027D945425CF02B01_element_4 }
2023-10-18 20:38:20.5483 TRACE - - - < Send keys "admin@mail.com" to element { Id=0A70A9F09E57430027D945425CF02B01_element_4 } (0.069s)
2023-10-18 20:38:20.5487 TRACE - - < Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input (0.071s)
2023-10-18 20:38:20.5490 TRACE - < Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Email" text input (0.657s)
2023-10-18 20:38:20.5491  INFO < Set "admin@mail.com" to "Email" text input (0.662s)
2023-10-18 20:38:20.5494  INFO > Set "abc123" to "Password" password input
2023-10-18 20:38:20.5497 TRACE - > Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Password" password input
2023-10-18 20:38:20.5499 TRACE - - > Execute behavior ClearsValueUsingClearMethodAttribute against "Password" password input
2023-10-18 20:38:20.5507 TRACE - - - > Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Password']/@for]/descendant-or-self::input[@type='password'] | .//label[normalize-space(.) = 'Password']/descendant-or-self::input[@type='password'])" in ChromeDriver
2023-10-18 20:38:20.5646 TRACE - - - < Find element by XPath "(.//*[@id = //label[normalize-space(.) = 'Password']/@for]/descendant-or-self::input[@type='password'] | .//label[normalize-space(.) = 'Password']/descendant-or-self::input[@type='password'])" in ChromeDriver (0.013s) >> Element { Id=0A70A9F09E57430027D945425CF02B01_element_5 }
2023-10-18 20:38:20.5653 TRACE - - - > Clear element { Id=0A70A9F09E57430027D945425CF02B01_element_5 }
2023-10-18 20:38:20.5900 TRACE - - - < Clear element { Id=0A70A9F09E57430027D945425CF02B01_element_5 } (0.024s)
2023-10-18 20:38:20.5905 TRACE - - < Execute behavior ClearsValueUsingClearMethodAttribute against "Password" password input (0.040s)
2023-10-18 20:38:20.5908 TRACE - - > Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input
2023-10-18 20:38:20.5913 TRACE - - - > Send keys "abc123" to element { Id=0A70A9F09E57430027D945425CF02B01_element_5 }
2023-10-18 20:38:20.6498 TRACE - - - < Send keys "abc123" to element { Id=0A70A9F09E57430027D945425CF02B01_element_5 } (0.058s)
2023-10-18 20:38:20.6502 TRACE - - < Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input (0.059s)
2023-10-18 20:38:20.6503 TRACE - < Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Password" password input (0.100s)
2023-10-18 20:38:20.6505  INFO < Set "abc123" to "Password" password input (0.101s)
2023-10-18 20:38:20.6510  INFO > Click "Sign In" button
2023-10-18 20:38:20.6518 TRACE - > Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button
2023-10-18 20:38:20.6534 TRACE - - > Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver
2023-10-18 20:38:20.6699 TRACE - - < Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver (0.016s) >> Element { Id=0A70A9F09E57430027D945425CF02B01_element_9 }
2023-10-18 20:38:20.6705 TRACE - - > Click element { Id=0A70A9F09E57430027D945425CF02B01_element_9 }
2023-10-18 20:38:20.7550 TRACE - - < Click element { Id=0A70A9F09E57430027D945425CF02B01_element_9 } (0.084s)
2023-10-18 20:38:20.7555 TRACE - < Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button (0.103s)
2023-10-18 20:38:20.7557  INFO < Click "Sign In" button (0.104s)
2023-10-18 20:38:20.7568 TRACE > Deinitialize AtataContext
2023-10-18 20:38:20.9016 TRACE < Deinitialize AtataContext (0.144s)
2023-10-18 20:38:20.9054  INFO Finished test
      Total time: 2.018s
  Initialization: 0.749s | 37.1 %
       Test body: 1.124s | 55.7 %
Deinitialization: 0.145s |  7.2 %
```