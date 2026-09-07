The flags enumeration that specifies the trigger events.

Value | Description
----- | -----------
`None` | None of the events.
`Init` | Occurs during page object initialization.
`DeInit` | Occurs during page object deinitialization.
`PageObjectTransitionIn` | Occurs when a page object transition in is completed. That is, navigation to the current page object occurred in the same browser tab by interacting with the previous page object, rather than by directly navigating to a URL.
`PageObjectTransitionOut` | Occurs when a page object transition out is completed. That is, navigation to the next page object occurred in the same browser tab by interacting with the current page object, rather than by directly navigating to a URL.
`BeforeAccess` | Occurs before any access to the component.
`AfterAccess` | Occurs after any access to the component.
`BeforeGet` | Occurs before the value is taken from the control.
`AfterGet` | Occurs after the value is taken from the control.
`BeforeSet` | Occurs before the value is set to the control.
`AfterSet` | Occurs after the value is set to the control.
`BeforeClick` | Occurs before the click on the control.
`AfterClick` | Occurs after the click on the control.
`BeforeHover` | Occurs before the hover on the control.
`AfterHover` | Occurs after the hover on the control.
`BeforeFocus` | Occurs before the control gets the focus.
`AfterFocus` | Occurs after the control gets the focus.
`BeforeBlur` | Occurs before the control loses the focus.
`AfterBlur` | Occurs after the control loses the focus.
`BeforeScroll` | Occurs before the scrolling to control.
`AfterScroll` | Occurs after the scrolling to control.
{:.table.table-members.table-condensed}