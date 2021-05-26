The above sample `SignIn` test generates the following log to NUnit output:

```
2021-05-26 15:57:26.4090  INFO Starting test: SignIn
2021-05-26 15:57:26.4364 TRACE > Set up AtataContext
2021-05-26 15:57:26.4380 TRACE - Set: BaseUrl=https://demo.atata.io/
2021-05-26 15:57:26.4398 TRACE - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.5s
2021-05-26 15:57:26.4399 TRACE - Set: WaitingTimeout=5s; WaitingRetryInterval=0.5s
2021-05-26 15:57:26.4400 TRACE - Set: VerificationTimeout=5s; VerificationRetryInterval=0.5s
2021-05-26 15:57:26.4404 TRACE - Set: Culture=en-US
2021-05-26 15:57:26.4544 TRACE - Set: DriverService=ChromeDriverService on port 61540
2021-05-26 15:57:27.3656 TRACE - Set: Driver=ChromeDriver (alias=chrome)
2021-05-26 15:57:27.3672 TRACE < Set up AtataContext (0.930s)
2021-05-26 15:57:27.4218  INFO Go to "Sign In" page
2021-05-26 15:57:27.4735  INFO Go to URL "https://demo.atata.io/signin"
2021-05-26 15:57:28.6264 TRACE > Execute trigger VerifyH1Attribute { Index=-1, Case=Title, Match=Equals } on Init against "Sign In" page
2021-05-26 15:57:28.6508  INFO - > Assert: "Sign In" <h1> heading should exist
2021-05-26 15:57:28.6868 TRACE - - > Find visible element by XPath ".//h1[normalize-space(.) = 'Sign In']" in ChromeDriver
2021-05-26 15:57:29.4000 TRACE - - < Find visible element by XPath ".//h1[normalize-space(.) = 'Sign In']" in ChromeDriver (0.712s) >> Element { Id=fd4252fa-62b9-47c1-8471-dce2b4747cfc }
2021-05-26 15:57:29.4003  INFO - < Assert: "Sign In" <h1> heading should exist (0.749s)
2021-05-26 15:57:29.4006 TRACE < Execute trigger VerifyH1Attribute { Index=-1, Case=Title, Match=Equals } on Init against "Sign In" page (0.774s)
2021-05-26 15:57:29.4090  INFO > Set "admin@mail.com" to "Email" text input
2021-05-26 15:57:29.4119 TRACE - > Execute behavior ValueSetUsingClearAndSendKeysAttribute against "Email" text input
2021-05-26 15:57:29.4188 TRACE - - > Find visible element by XPath ".//label[normalize-space(.) = 'Email']" in ChromeDriver
2021-05-26 15:57:29.4493 TRACE - - < Find visible element by XPath ".//label[normalize-space(.) = 'Email']" in ChromeDriver (0.030s) >> Element { Id=74cce3ab-0486-4e11-b200-657f4a31ddf0 }
2021-05-26 15:57:29.4667 TRACE - - > Find visible element by XPath ".//*[normalize-space(@id) = 'email']/descendant-or-self::input[@type='text' or not(@type)]" in ChromeDriver
2021-05-26 15:57:29.4943 TRACE - - < Find visible element by XPath ".//*[normalize-space(@id) = 'email']/descendant-or-self::input[@type='text' or not(@type)]" in ChromeDriver (0.027s) >> Element { Id=b8e8eb61-4753-4377-b4c7-31264684a100 }
2021-05-26 15:57:29.4953 TRACE - - > Clear element { Id=b8e8eb61-4753-4377-b4c7-31264684a100 }
2021-05-26 15:57:29.5344 TRACE - - < Clear element { Id=b8e8eb61-4753-4377-b4c7-31264684a100 } (0.039s)
2021-05-26 15:57:29.5352 TRACE - - > Send keys "admin@mail.com" to element { Id=b8e8eb61-4753-4377-b4c7-31264684a100 }
2021-05-26 15:57:29.6095 TRACE - - < Send keys "admin@mail.com" to element { Id=b8e8eb61-4753-4377-b4c7-31264684a100 } (0.074s)
2021-05-26 15:57:29.6097 TRACE - < Execute behavior ValueSetUsingClearAndSendKeysAttribute against "Email" text input (0.197s)
2021-05-26 15:57:29.6099  INFO < Set "admin@mail.com" to "Email" text input (0.200s)
2021-05-26 15:57:29.6101  INFO > Set "abc123" to "Password" password input
2021-05-26 15:57:29.6103 TRACE - > Execute behavior ValueSetUsingClearAndSendKeysAttribute against "Password" password input
2021-05-26 15:57:29.6154 TRACE - - > Find visible element by XPath ".//label[normalize-space(.) = 'Password']" in ChromeDriver
2021-05-26 15:57:29.6464 TRACE - - < Find visible element by XPath ".//label[normalize-space(.) = 'Password']" in ChromeDriver (0.031s) >> Element { Id=c0f43431-994d-4a9d-8313-309c4f44c311 }
2021-05-26 15:57:29.6582 TRACE - - > Find visible element by XPath ".//*[normalize-space(@id) = 'password']/descendant-or-self::input[@type='password']" in ChromeDriver
2021-05-26 15:57:29.6878 TRACE - - < Find visible element by XPath ".//*[normalize-space(@id) = 'password']/descendant-or-self::input[@type='password']" in ChromeDriver (0.029s) >> Element { Id=969b203a-2203-4065-b6c7-4f5b76bafc3b }
2021-05-26 15:57:29.6883 TRACE - - > Clear element { Id=969b203a-2203-4065-b6c7-4f5b76bafc3b }
2021-05-26 15:57:29.7327 TRACE - - < Clear element { Id=969b203a-2203-4065-b6c7-4f5b76bafc3b } (0.044s)
2021-05-26 15:57:29.7330 TRACE - - > Send keys "abc123" to element { Id=969b203a-2203-4065-b6c7-4f5b76bafc3b }
2021-05-26 15:57:29.7865 TRACE - - < Send keys "abc123" to element { Id=969b203a-2203-4065-b6c7-4f5b76bafc3b } (0.053s)
2021-05-26 15:57:29.7871 TRACE - < Execute behavior ValueSetUsingClearAndSendKeysAttribute against "Password" password input (0.176s)
2021-05-26 15:57:29.7874  INFO < Set "abc123" to "Password" password input (0.177s)
2021-05-26 15:57:29.7894  INFO > Click "Sign In" button
2021-05-26 15:57:29.7920 TRACE - > Execute behavior ClickUsingClickMethodAttribute against "Sign In" button
2021-05-26 15:57:29.7949 TRACE - - > Find visible element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver
2021-05-26 15:57:29.8221 TRACE - - < Find visible element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver (0.027s) >> Element { Id=601f78f6-e3b6-4af0-aceb-2b36b4ac5a9c }
2021-05-26 15:57:29.8230 TRACE - - > Click element { Id=601f78f6-e3b6-4af0-aceb-2b36b4ac5a9c }
2021-05-26 15:57:29.9348 TRACE - - < Click element { Id=601f78f6-e3b6-4af0-aceb-2b36b4ac5a9c } (0.111s)
2021-05-26 15:57:29.9351 TRACE - < Execute behavior ClickUsingClickMethodAttribute against "Sign In" button (0.143s)
2021-05-26 15:57:29.9353  INFO < Click "Sign In" button (0.145s)
2021-05-26 15:57:29.9579  INFO > Clean up AtataContext
2021-05-26 15:57:30.1255  INFO < Clean up AtataContext (0.167s)
2021-05-26 15:57:30.1259  INFO Finished test (3.773s)
2021-05-26 15:57:30.1262  INFO Pure test execution time: 2.571s
```