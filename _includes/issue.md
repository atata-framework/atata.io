{% if include.repo == null or include.repo == '' %}{% assign repository_name = 'atata' %}
{% elsif include.repo == 'we' %}{% assign repository_name = 'atata-webdriverextras' %}
{% elsif include.repo == 'bs' %}{% assign repository_name = 'atata-bootstrap' %}
{% elsif include.repo == 'ku' %}{% assign repository_name = 'atata-kendoui' %}
{% elsif include.repo == 'cj' %}{% assign repository_name = 'atata-configuration-json' %}
{% elsif include.repo == 'tm' %}{% assign repository_name = 'atata-templates' %}
{% else %}{% assign repository_name = include.repo %}
{% endif %}
{% if include.type=='mj' %}<span class="label label-primary label-issue-type">major</span>
{% elsif include.type=='mn' %}<span class="label label-info label-issue-type">minor</span>
{% elsif include.type=='br' %}<span class="label label-danger label-issue-type" title="breaking change">break</span>
{% elsif include.type=='fx' %}<span class="label label-success label-issue-type">fix</span> {% endif %}[#{{ include.id }}](https://github.com/atata-framework/{{ repository_name }}/issues/{{ include.id }}){:.issue-link}