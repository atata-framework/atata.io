The enumeration that specifies the source scope.

By default all find attributes use `Parent` value, meaning that every control is searched in the scope of the parent control.
{:.info}

Value | Description
----- | -----------
`Inherit` | Uses the inherited value.
`Parent` | Uses the parent's scope.
`Grandparent` | Uses the grandparent's (the parent of the parent) scope.
`PageObject` | Uses the owner page object's scope.
`Page` | Uses the page's scope (`<body>` element).
{:.table.table-members.table-condensed}