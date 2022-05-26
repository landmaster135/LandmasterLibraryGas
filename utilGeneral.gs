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

/**
 * @param {any[]} obj
 * @return {boolean}
 */
function isArray(obj){
  if(!isObjectType(obj, "Array")){
    return false;
  }
  return true;
}

/**
 * @param {Error} error
 * @return {boolean}
 */
function isErrorType(error){
  if(!isObjectType(error, "Error")){
    return false;
  }
  return true;
}

/**
 * @param {any} obj
 * @param {string} type
 * @return {boolean}
 */
function isObjectType(obj, type){
  let objectTypeInfo = Object.prototype.toString.call(type);
  if(objectTypeInfo.indexOf("String") === -1){
    throw new TypeError("type must be String type.")
  }
  objectTypeInfo = Object.prototype.toString.call(obj);
  if(objectTypeInfo.indexOf(type) === -1){
    return false;
  }
  return true;
}

/**
 * @param {string} text
 * @return {string[]} fileIdArray
*/
function getFunctionsByConstants(text){
  let tmp_text = text;
  const objOfMark = {
    "const ": "/**\n * \n * @return {string}\n */\nfunction "
    , " = ": "(){\n  return "
    , ";": ";\n}\n"
  };
  for (const [key, value] of Object.entries(objOfMark)) {
    const reg = new RegExp(key, "gm")
    tmp_text = tmp_text.replace(reg, value)
  }
  return tmp_text;
};

function printGetFunctionsByConstants(){
  const text = `const BEARER_TOKEN_TWITTER_ACCOUNT_JP = "AAAAAAAAAAAAAAAAAAAAAD6UYQEAAAAAZImoEnceh4ZHnxX%2B5F20B7kLGTA%3DxhSs33RzOAEslNlbFzarFTiti3bIeBN7T8xvXBEsY4jeP2J6lH";
const ACCESS_TOKEN_TWITTER_ACCOUNT_JP = "1484872342367240200-yCMRHAjwULujWnZJj5qknKe3WRxfAb";
const ACCESS_TOKEN_SECRET_TWITTER_ACCOUNT_JP = "SYUu3w9gg2bC8gTBYgWzhVN7Pb58dd1IPCCAxaQHeGG21";
const API_KEY_TWITTER_ACCOUNT_JP = "Bf3FZaXPxUEACpc4IMzb7c8OI";
const API_KEY_SECRET_TWITTER_ACCOUNT_JP = "LVGhDatoZHjfyV4XdMTNJXJ701sjVbN5OKBfrFSdp9BfYdtv99";
const BEARER_TOKEN_TWITTER_ACCOUNT_EN = "AAAAAAAAAAAAAAAAAAAAAJasYQEAAAAAXfpEO5CJV93NKKkxo0LiAA2%2BSe0%3DvcrxY8w5vFfYHropzKeijwo7vQ8TsIRkL1FG9eIPF3VYVHGwSP";
const ACCESS_TOKEN_TWITTER_ACCOUNT_EN = "1485133906286243842-pWzVkIHwg3hYQidXDyOACNIqUyx3EZ";
const ACCESS_TOKEN_SECRET_TWITTER_ACCOUNT_EN = "iYa6KD2aboHFtADxngHcGhknjqamMBfwIYGunByYKsA46";
const API_KEY_TWITTER_ACCOUNT_EN = "TS2HNa2ZpiwrlNEcT557txt15";
const API_KEY_SECRET_TWITTER_ACCOUNT_EN = "v2f17oQewKXoYBjX9BS4C1Ln4E3MJg90vo8fMxi1ZLnFmJL8je";`;
  console.log(getFunctionsByConstants(text));
}

function printGetUpperText(){
  const text = "api_Key_Secret_Twitter_Account_En";
  let upperText = text.toUpperCase();
  console.log(upperText);
  return upperText;
}


