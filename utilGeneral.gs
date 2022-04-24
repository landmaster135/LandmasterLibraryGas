// util general

/**
 * @param {string} repeatStr
 * @param {number} [repeatNumberToMark=15]
 * @return {string} returnStr
*/
function getStrRepeatedToMark(repeatStr, repeatNumberToMark=15){
  /**
   * @type {string}
  */
  const returnStr = repeatStr.repeat(repeatNumberToMark);
  return returnStr;
};

/**
 * @template T
 * @param {T[]} listReadFromGss
 * @return {T[]} listFormated
*/
function listFormated(listReadFromGss) {
  var listFormated = [];
  for (let j = 0; j < listReadFromGss.length; j++) {
    // "if" statement in one liner. If "", nothing to do.
    listReadFromGss[j][0]=="" ? true : listFormated.push(listReadFromGss[j][0]);
  }
  return listFormated
}

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


// /**
//    * @param {string} folderId
//    * @return {DriveApp.File[]} returnStr
// */
// function getFiles(folderId){
//   const funcName = "getFileIdArrayInTheFolder";
//   const folder = DriveApp.getFolderById(folderId);
//   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
//   files = folder.getFiles();
//   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
//   return files;
// };

// /**
//    * @param {string} folderId
//    * @param {string[]} mimeTypes
//    * @return {DriveApp.File[]} returnStr
// */
// function getFileIdArray(folderId, mimeTypes=[]){
//   const funcName = "getFileIdArray";
//   let file;
//   let fileIdArray = [];
//   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
//   let files = getFiles(folderId);
//   while(files.hasNext()){
//     file = files.next();
//     fileIdArray.push(file.getId());
//   }
//   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
//   console.log(fileIdArray);
//   return fileIdArray;
// }

/**
 * @param {number} number
 * @param {number} numberOfDigit
 * @return {string} 
*/
function getStrByZeroPadding(number, numberOfDigit=4){
  let targetNumberOfDigit = numberOfDigit;
  if(String(number).length >= numberOfDigit){
    targetNumberOfDigit = String(number).length;
  }
  return (getStrRepeatedToMark("0", targetNumberOfDigit) + number).slice(-(targetNumberOfDigit));
};

/**
 * @param {string[]} mimeTypes
 * @return {string} query
*/
function getQueryForDrive(mimeTypes=[]){
  let query = "";
  mimeTypes.forEach(mimeType => {
    if(query !== ""){
      query += " or ";
    }
    query += `mimeType contains \"${mimeType}\"`;
  });
  return query;
}

/**
 * @param {string} folderId
 * @param {string[]} mimeTypes
 * @return {DriveApp.FileIterator} files
*/
function getFilesByMimeTypes(folderId, mimeTypes=[]){
  const funcName = "getFilesByMimeTypes";
  const folder = DriveApp.getFolderById(folderId);
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  let files = [];
  if(mimeTypes.length === 0){
    files = folder.getFiles();
    return files;
  }
  const query = getQueryForDrive(mimeTypes);
  files = folder.searchFiles(query);
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  return files;
};

/**
 * @param {string} folderId
 * @param {string[]} mimeTypes
 * @return {string[]} fileIdArray
*/
function getFileIdArrayByMimeTypes(folderId, mimeTypes=[]){
  const funcName = "getFileIdArrayByMimeTypes";
  const folder = DriveApp.getFolderById(folderId);
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  let fileIdArray = [];
  let files = getFilesByMimeTypes(folderId, mimeTypes);
  while(files.hasNext()){
    file = files.next();
    console.log(file.getMimeType())
    fileIdArray.push(file.getId());
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  return fileIdArray;
};








