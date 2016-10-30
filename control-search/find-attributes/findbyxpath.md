Specifies that a control should be found by XPath. Finds the descendant or self control in the scope of the element found by the specified XPath.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

```html
<div id="container">
    <span>
        <input type="text">
    </span>
</div>
```
```cs
[FindByXPath("div[@id='container']/span/input[1]")]
public TextInput<_> FirstName { get; private set; }
```

Or using inner XPath:

```html
<div id="container">
    <a href="#">
        <span class="left-arrow"></span>
    </a>
    <a href="#">
        <span class="right-arrow"></span>
    </a>
</div>
```
```cs
[FindByXPath("[span[@class='right-arrow']]")]
public Link<_> Next { get; private set; }
```