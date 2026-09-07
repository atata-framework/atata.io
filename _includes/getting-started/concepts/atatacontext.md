`AtataContext` is the central object that defines and manages the execution environment for a test or test suite in Atata,
bundling configuration, sessions, logging, state, events, artifacts, and lifecycle management into a single runtime context.

#### Conceptually

- It represents a test scope:
  - Global scope.
  - Namespace scope (supported in NUnit only).
  - Test suite group (supported in Xunit only).
  - Test suite/class.
  - Individual test.
  - Unscoped unit.
- It holds the state, resources, and behavior for that scope.
- It is created through `AtataContext.CreateBuilder(...)` method and then built.

#### Main responsibilities

- Manage the current active context via `AtataContext.Current`.
- Track parent/child context hierarchy.
- Own sessions via `Sessions` (including WebDriver sessions).
- Provide logging and reporting abilities via `Log` and `Report` properties.
- Manage artifacts.
- Store variables and state in hierarchical dictionaries.
- Record assertion results and test result status.
- Publish and subscribe to Atata events with `EventBus`.
- Handle lifecycle: initialization, activation, deinitialization.

#### Lifecycle

- Created and configured by `AtataContextBuilder` together with associated sessions.
- Used throughout test execution.
- Disposed to deinitialize sessions, publish completion events, clean up artifacts, and finalize test results.

The lifecycle is managed automatically when you Atata with one of the packages: Atata.NUnit, Atata.Xunit.v3, Atata.MSTest.

#### Key properties

- `Scope` — context scope type.
- `ParentContext` - parent context in the hierarchy.
- `ChildContexts` - collection of child contexts.
- `Test` — metadata for the test or suite.
- `Id` — unique context identifier.
- `Sessions` — collection of sessions associated with the context.
- `Log` — context-specific logging.
- `Report` — context-specific reporting interface.
- `EventBus` — event subscription/publish mechanism.
- `Variables` — context variables hierarchical dictionary.
- `State` — context state hierarchical dictionary.
- `Artifacts` / `ArtifactsPath` — artifact storage.
