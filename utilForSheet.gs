/**
 * Get number of record in Google Spreadsheet.
 * 
 * @param {string} sheetName - Name of sheet that you wanna know number of record.
 * @param {number} columnForId - Column index of ID.
 * @param {number} idToRead - Number of read last row to decide last row.
 * @return {number} Number of record.
 * @customfunction
*/
function getIdToReadActualInGss(sheetName, columnForId, {idToRead=801, sheetId=""}) {
  const funcName = "get_id_to_read_actual_in_GSS";

  // declare list for warning message.
  const warningMessage = "Warning: Number of row passing over \"id_to_read\". Tweak me.";
  const errorMessage   = "RowIndexOutOfBoundsError: Number of row reached \"id_to_read\". Tweak me.";

  // get sheet.
  let workbook;
  if(sheetId === ""){
    workbook = SpreadsheetApp.getActive();
  }else{
    workbook = SpreadsheetApp.openById(sheetId);
  }
  const sheet = workbook.getSheetByName(sheetName);

  // memorize number of row to read
  console.time(`${funcName}: SELECT TOP ${idToRead - 1} id FROM \"${sheetName}\"`);
  let idList = sheet.getRange(2, columnForId, idToRead - 1, 1).getValues();
  console.timeEnd(`${funcName}: SELECT TOP ${idToRead - 1} id FROM \"${sheetName}\"`);
  let idList_formated = listFormated(idList);
  
  // warning message. If condition is false, nothing to do.
  let idToReadActual = Number(idList_formated.reduce((a,b)=>Math.max(a,b)));
  idToRead - idToReadActual <= 2 ? console.warn(warningMessage) : false;
  if(idToReadActual >= idToRead - 1){
    console.error(errorMessage);
    return 0;
  }
  console.log(`${funcName}: id_to_read_actual is ${idToReadActual}`);
  return idToReadActual;
}

function getRowsEmptyCell(sheetName, targetColumn, row_to_read){
  const funcName = 'getRowsEmptyCell';
  // get sheet.
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  const targetValueArray = sheet.getRange(heightHeader1st, targetColumn, row_to_read, 1).getValues();
  console.log(`${funcName}: ${getStrRepeatedToMark('a')}: `);
  console.log(targetValueArray);

  let rowArray = [];
  for(let i = 0; i < targetValueArray.length; i++){
    if (targetValueArray[i][0] === ''){
      rowArray.push(i+1);
    }
  }
  console.log(`${funcName}: ${getStrRepeatedToMark('b')}: `);
  console.log(rowArray);
  return rowArray;
}

function inputValuesToEmptyCell(sheetName, valueArray, rowArray, inputingColumn) {
  const funcName = 'inputValuesToEmptyCell';
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  let isInputed = false;
  for(let i = 0; i < valueArray.length; i++){
    sheet.getRange(rowArray[i], inputingColumn, 1, 1).setValue(valueArray[i]);
    console.log(`${funcName}: ${getStrRepeatedToMark('a')}: `);
    isInputed = true;
  }
  console.log(`${funcName}: ${getStrRepeatedToMark('b')}: `);
  console.log(isInputed);

  return isInputed;
}

function getValueArrayFromRowArray(sheetName, rowArray, targetColumn){
  const funcName = 'getValueArrayFromRowArray';
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  let valueArray = [];
  rowArray.forEach(row => {
    valueArray.push(sheet.getRange(row, targetColumn, 1, 1).getValue());
  })
  console.log(`${funcName}: ${getStrRepeatedToMark('a')}: `);
  console.log(valueArray);
  return valueArray;
}

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


