The page snapshot functionality can be configured through the methods of `PageSnapshots` property of `AtataContextBuilder`.

```cs
AtataContext.GlobalConfiguration
    .PageSnapshots.UseCdpStrategy()
    .PageSnapshots.UseFileNameTemplate("{snapshot-number:D2}...");
```

The default strategy is `CdpOrPageSourcePageSnapshotStrategy`.

The list of `PageSnapshotsAtataContextBuilder` methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">PageSnapshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseCdpOrPageSourceStrategy()</span></h3>
</div>

Sets the "CDP or page source" (`CdpOrPageSourcePageSnapshotStrategy`) strategy for a page snapshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">PageSnapshotsAtataContextBuilder</span></span>
    <h3><span class="body">UsePageSourceStrategy()</span></h3>
</div>

Sets the page source (`PageSourcePageSnapshotStrategy`) strategy for a page snapshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">PageSnapshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseCdpStrategy()</span></h3>
</div>

Sets the CDP (`CdpPageSnapshotStrategy`) strategy for a page snapshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">PageSnapshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseStrategy(<span class="type">IPageSnapshotStrategy</span> strategy)</span></h3>
</div>

Sets the strategy for a page snapshot taking.
The default value is an instance of `CdpOrPageSourcePageSnapshotStrategy`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">PageSnapshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseFileNameTemplate(<span class="keyword">string</span> fileNameTemplate)</span></h3>
</div>

Sets the file name template of page snapshots.
The default value is `"{snapshot-number:D2}{snapshot-pageobjectname: - *}{snapshot-pageobjecttypename: *}{snapshot-title: - *}"`.