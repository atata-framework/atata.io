Artifacts (`AtataContext.Artifacts`) is the per-test/suite artifact storage location used to keep files generated during test execution organized and isolated.
It is intended for things such as logs, screenshots, downloaded files, reports, and any other output produced by the test.
By default, the folder is created under the global artifacts root and is derived from the current test/suite context, which makes it easy to locate artifacts for each run.

#### Artifacts structure

Here is how the Artifacts file structure looks for NUnit considering `AtataContext` is used at all levels (global, namespace, test suite, test):

&#128193; SubNamespace\
&nbsp;&#9642; &#128193; Suite1Tests\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128193; Test1\
&nbsp;&#9642;&nbsp;&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128193; Test2\
&nbsp;&#9642;&nbsp;&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log *(test suite log)*\
&nbsp;&#9642; &#128196; Trace.log *(namespace log)*\
&#128193; Suite2Tests\
&nbsp;&#9642; &#128193; Test1\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642; &#128193; Test2\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642; &#128196; Trace.log *(test suite log)*\
&#128196; Trace.log *(global log)*

#### `AtataContext` artifacts path properties

- `Artifacts` to work with the directory as an Atata `DirectorySubject`.
- `ArtifactsPath` to get the full physical path.
- `ArtifactsRelativePath` to get the relative path.

#### `AtataContext` artifact-adding methods

`AtataContext` provides a small set of overloads for saving files into the current test’s artifacts folder. Each method:

- writes the file under the context’s artifacts directory;
- creates parent folders if needed;
- optionally prefixes the file name with a sequential `001-` style number;
- raises an artifact-added event;
- returns a `FileSubject` for the created file.

##### Available overloads

- `AddArtifact(string relativeFilePathWithoutExtension, FileContentWithExtension fileContentWithExtension, in AddArtifactOptions options = default)`
- `AddArtifact(string relativeFilePath, byte[] fileBytes, in AddArtifactOptions options = default)`
- `AddArtifact(string relativeFilePath, string fileContent, in AddArtifactOptions options = default)`
- `AddArtifact(string relativeFilePath, string fileContent, Encoding encoding, in AddArtifactOptions options = default)`
- `AddArtifact(string relativeFilePath, Stream stream, in AddArtifactOptions options = default)`

##### `AddArtifactOptions` properties

- `ArtifactType` — a category such as a predefined type from `ArtifactTypes` or a custom value.
- `ArtifactTitle` — a human-readable title.
- `PrependArtifactNumberToFileName` — prefixes the file with a three-digit sequence number.
