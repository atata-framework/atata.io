The enumeration that specifies the source scope.

By default all find attributes use `Parent` value, meaning that every control is searched in the scope of the parent control.
{:.info}

#### Values

{% include enumvalue.html enum="ScopeSource" value="Parent" %}

Uses the parent's scope.

{% include enumvalue.html enum="ScopeSource" value="Grandparent" %}

Uses the grandparent's (the parent of the parent) scope.

{% include enumvalue.html enum="ScopeSource" value="PageObject" %}

Uses the owner page object's scope.

{% include enumvalue.html enum="ScopeSource" value="Page" %}

Uses the page's scope (`<body>` element).