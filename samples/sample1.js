function myFunction() {
  const sampleScript = 'function myfunction() {console.log("ok")}';
  const blob = Utilities.newBlob(sampleScript).setName("Code.gs");
  const spreadsheetId = SpreadsheetApp.create("sampleSpreadsheet").getId();
  const res = ProjectApp2.createProjectByBlob(
    "sampleProject",
    [blob],
    spreadsheetId
  );
  console.log(res);
}
