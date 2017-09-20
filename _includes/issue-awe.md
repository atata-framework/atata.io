{% if include.type=='mj' %}<span class="label label-primary label-issue-type">major</span>
{% elsif include.type=='mn' %}<span class="label label-info label-issue-type">minor</span>
{% elsif include.type=='br' %}<span class="label label-danger label-issue-type" title="breaking change">break</span>
{% elsif include.type=='fx' %}<span class="label label-success label-issue-type">fix</span> {% endif %}[#{{ include.id }}]({{ site.links.atata_webdriverextras_issues }}/{{ include.id }}){:.issue-link}