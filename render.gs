/**
   * onOpen
*/
function onOpenToAddMenu(menuName, objActions){
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu(menuName, objActions);
}

// function doGetTestWithGssModelessDialog(e) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const html = HtmlService.createTemplateFromFile("index")
//     .evaluate()
//     .setTitle("LandmasterLibraryGas")
//     .addMetaTag("viewport", "width=device-width, initial-scale=1");
//   ss.show(html);
// }

// function doGetTestWithGssSidebar(e) {
//   const html = HtmlService.createTemplateFromFile("index")
//     .evaluate()
//     .setTitle("LandmasterLibraryGas")
//     .addMetaTag("viewport", "width=device-width, initial-scale=1");
//   SpreadsheetApp.getUi().showSidebar(html);
// }

// function doGetTestWithGssModalDialog(e) {
//   const html = HtmlService.createTemplateFromFile("index")
//     .evaluate()
//     .setTitle("LandmasterLibraryGas")
//     .addMetaTag("viewport", "width=device-width, initial-scale=1");
//   SpreadsheetApp.getUi().showModalDialog(html, "Test dialog");
// }
