It is also possible to set multiple terms for the control finding.

For example the same form can have the save button with the different text values: "Create" for the new entity and "Update" for the existing one.

```html
<button>Create</button>
```

and

```html
<button>Update</button>
```

It can be defined like the same button in the page object:

```cs
[Term("Create", "Update")]
public Button<_> Save { get; private set; }
```

The control can be found by any of the term values defined.