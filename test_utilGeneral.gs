// test_utilGeneral.gs
let testerGeneral = new TestGasExecutor();
class Test_utilGeneral{

  test_getIdToReadActualInGss_1_1(funcName="test_getIdToReadActualInGss_1_2"){
    const sheetName = "テスト用シート";
    const columnForId = 1;
    const sheetId = SHEET_ID_TEST;
    const idToRead = 201;
    let actual = getIdToReadActualInGss(sheetName, columnForId, {idToRead: idToRead, sheetId: sheetId});
    let expected = 111;

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getIdToReadActualInGss_1_2(funcName="test_getIdToReadActualInGss_1_2"){
    const sheetName = "テスト用シート";
    const columnForId = 1;
    const testSheetId = SHEET_ID_TEST;
    let actual = getIdToReadActualInGss(sheetName, columnForId, {sheetId: testSheetId});
    let expected = 111;

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getIdToReadActualInGss_1_3(funcName="test_getIdToReadActualInGss_1_2"){
    const sheetName = "テスト用シート";
    const columnForId = 1;
    const idToRead = 201;
    let actual = assertError(getIdToReadActualInGss, [sheetName, columnForId, {idToRead: idToRead}], TypeError);
    let expected = true;

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getIdToReadActualInGss_1_4(funcName="test_getIdToReadActualInGss_1_2"){
    const sheetName = "テスト用シート";
    const columnForId = 1;
    let actual = assertError(getIdToReadActualInGss, [sheetName, columnForId], TypeError);
    // let actual = getIdToReadActualInGss(sheetName, columnForId);
    let expected = true;

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getQueryForDrive_1_1(funcName="test_getQueryForDrive_1_1"){
    const mimeTypes = [
      "application/octet-stream",
      "text/markdown",
      "application/vnd.google-apps.script",
      "text/css",
      "text/javascript",
    ]
    let actual = getQueryForDrive(mimeTypes);
    let expected = `mimeType contains \"${mimeTypes[0]}\" or mimeType contains \"${mimeTypes[1]}\" or mimeType contains \"${mimeTypes[2]}\" or mimeType contains \"${mimeTypes[3]}\" or mimeType contains \"${mimeTypes[4]}\"`;

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getQueryForDrive_1_2(funcName="test_getQueryForDrive_1_2"){
    const mimeTypes = ["application/octet-stream"]
    let actual = getQueryForDrive(mimeTypes);
    let expected = `mimeType contains \"${mimeTypes[0]}\"`;

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getQueryForDrive_1_3(funcName="test_getQueryForDrive_1_3"){
    const mimeTypes = []
    let actual = getQueryForDrive(mimeTypes);
    let expected = "";

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getFilesByMimeType_1_1(funcName="test_getFilesByMimeType_1_1"){
    const folderId = FOLDER_ID_TEST_FOR_UTIL_GENERAL;
    let actual = getFilesByMimeTypes(folderId);
    let expected = DriveApp.getFolderById(folderId).getFiles();
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    let actualLength, expectedLength;
    while(actual.hasNext()){
      file = files.next();
      actualLength++;
    }
    while(expected.hasNext()){
      file = files.next();
      expectedLength++;
    }

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(actualLength !== expectedLength){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  test_getFilesByMimeType_1_2(funcName="test_getFilesByMimeType_1_2"){
    const folderId = FOLDER_ID_TEST_FOR_UTIL_GENERAL;
    const mimeTypes = []
    let actual = getFilesByMimeTypes(folderId, mimeTypes);
    let expected = DriveApp.getFolderById(folderId).getFiles();
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    let actualLength, expectedLength;
    while(actual.hasNext()){
      file = files.next();
      actualLength++;
    }
    while(expected.hasNext()){
      file = files.next();
      expectedLength++;
    }

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(actualLength !== expectedLength){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  test_getStrByZeroPadding_1_1(funcName="test_getStrByZeroPadding_1_1"){
    const number = 13;
    const numberOfDigit = 6;
    let actual = getStrByZeroPadding(number, numberOfDigit);
    let expected = "000013";

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getStrByZeroPadding_1_2(funcName="test_getStrByZeroPadding_1_2"){
    const number = 12345;
    const numberOfDigit = 2;
    let actual = getStrByZeroPadding(number, numberOfDigit);
    let expected = "12345";

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getStrByZeroPadding_1_3(funcName="test_getStrByZeroPadding_1_3"){
    const number = 12;
    let actual = getStrByZeroPadding(number);
    let expected = "0012";

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  test_getStrByZeroPadding_1_4(funcName="test_getStrByZeroPadding_1_4"){
    const number = 12345;
    let actual = getStrByZeroPadding(number);
    let expected = "12345";

    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }
}

/**
 * @return {bool} isTestTerminated
*/
// function execute_Test_utilGeneral(){
//   const funcName = "execute_test_utilGeneral";
//   let tester = new TestGasExecutor();
//   console.log(`${funcName}: ${getStrRepeatedToMark("a")}`);
//   let isTestTerminated = tester.executeTestGas(Test_utilGeneral);
//   console.log(`${funcName}: ${getStrRepeatedToMark("b")}`);
//   return isTestTerminated;
// }
function execute_Test_utilGeneral(){
  const funcName = "execute_Test_utilGeneral";
  // let testerGeneral = new TestGasExecutor();
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}`);
  
  // let failureFuncs = tester.executeTestGas(Test_utilGeneral);
  let isTestTerminated = testerGeneral.executeTestGas(Test_utilGeneral);
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}`);
  return isTestTerminated;
}
