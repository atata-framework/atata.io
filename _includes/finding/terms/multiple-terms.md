It is also possible to set multiple terms for the control finding.

For example on the same form can have the save button with the different text values: "Create" for the new entity and "Update" for the existing one.

```html
<button>Create</button>
```

and

```html
<button>Update</button>
```

In the page object it can be defined like the same button:

```cs
[Term("Create", "Update")]
public Button<_> Save { get; private set; }
```

The control will be found by any of the term values defined.