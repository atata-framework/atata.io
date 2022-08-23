The verification in Atata consists of assertion, expectation and waiting.
In order to verify a component or a value property, use the following properties:
- `.Should.*` - an assertion.
  For example: `UserName.Should.Be("John")`.
  If an assertion fails, throws an assertion exception.
- `.ExpectTo.*` - an expectation, which produces a warning in the end of a test.
  Many warnings can be collected together.
- `.WaitTo.*` - a waiting for a certain condition.
  For example: `Header.WaitTo.BeVisible()`.
  If a waiting fails, throws a timeout exception.