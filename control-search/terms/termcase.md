The enumeration that specifies the term case. Each find attribute specifies its default term case.

The following example applies finding by `first_name` id:

```cs
[FindById(TermCase.Snake)]
public TextInput<_> FirstName { get; private set; }
```

#### Options

Name | Description | Example
---- | ----------- | -------------
{% include termcasemember.md name="Inherit" %} | Uses the inherited case or none if missing. |
{% include termcasemember.md name="None" %} | Doesn't apply the case. |
{% include termcasemember.md name="Title" %} | Uses title case. | `Some Term`
{% include termcasemember.md name="Sentence" %} | Uses sentence case. | `Some term`
{% include termcasemember.md name="MidSentence" %} | Uses mid-sentence case where the first word is not capitalised. | `some term`
{% include termcasemember.md name="Lower" %} | Uses lower case. | `some term`
{% include termcasemember.md name="LowerMerged" %} | Uses lower case with words merging. | `someterm`
{% include termcasemember.md name="Upper" %} | Uses upper case. | `SOME TERM`
{% include termcasemember.md name="UpperMerged" %} | Uses upper case with words merging. | `SOMETERM`
{% include termcasemember.md name="Camel" %} | Uses camel case. | `someTerm`
{% include termcasemember.md name="Pascal" %} | Uses pascal case. | `SomeTerm`
{% include termcasemember.md name="Kebab" %} | Uses dash ('-') and lower case. | `some-term`
{% include termcasemember.md name="HyphenKebab" %} | Uses hyphen ('‐') and lower case. | `some‐term`
{% include termcasemember.md name="PascalKebab" %} | Uses dash ('-') and pascal case. | `Some-Term`
{% include termcasemember.md name="PascalHyphenKebab" %} | Uses hyphen ('‐') and pascal case. | `Some‐Term`
{% include termcasemember.md name="Snake" %} | Uses undersore ('_') and lower case. | `some_term`
{:.table.table-members}