// test_utilGeneral.gs
// let testerGeneral = new TestGasExecutor();
let tester = TestGAS.createExecutor();
class Test_utilGeneral{

  // test_getIdToReadActualInGss_1_1(funcName="test_getIdToReadActualInGss_1_2"){
  //   const sheetName = "テスト用シート";
  //   const columnForId = 1;
  //   const sheetId = SHEET_ID_TEST;
  //   const idToRead = 201;
  //   let actual = getIdToReadActualInGss(sheetName, columnForId, {idToRead: idToRead, sheetId: sheetId});
  //   let expected = 111;

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getIdToReadActualInGss_1_2(funcName="test_getIdToReadActualInGss_1_2"){
  //   const sheetName = "テスト用シート";
  //   const columnForId = 1;
  //   const testSheetId = SHEET_ID_TEST;
  //   let actual = getIdToReadActualInGss(sheetName, columnForId, {sheetId: testSheetId});
  //   let expected = 111;

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getIdToReadActualInGss_1_3(funcName="test_getIdToReadActualInGss_1_2"){
  //   const sheetName = "テスト用シート";
  //   const columnForId = 1;
  //   const idToRead = 201;
  //   let actual = assertError(getIdToReadActualInGss, [sheetName, columnForId, {idToRead: idToRead}], TypeError);
  //   let expected = true;

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getIdToReadActualInGss_1_4(funcName="test_getIdToReadActualInGss_1_2"){
  //   const sheetName = "テスト用シート";
  //   const columnForId = 1;
  //   let actual = assertError(getIdToReadActualInGss, [sheetName, columnForId], TypeError);
  //   // let actual = getIdToReadActualInGss(sheetName, columnForId);
  //   let expected = true;

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getQueryForDrive_1_1(funcName="test_getQueryForDrive_1_1"){
  //   const mimeTypes = [
  //     "application/octet-stream",
  //     "text/markdown",
  //     "application/vnd.google-apps.script",
  //     "text/css",
  //     "text/javascript",
  //   ]
  //   let actual = getQueryForDrive(mimeTypes);
  //   let expected = `mimeType contains \"${mimeTypes[0]}\" or mimeType contains \"${mimeTypes[1]}\" or mimeType contains \"${mimeTypes[2]}\" or mimeType contains \"${mimeTypes[3]}\" or mimeType contains \"${mimeTypes[4]}\"`;

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getQueryForDrive_1_2(funcName="test_getQueryForDrive_1_2"){
  //   const mimeTypes = ["application/octet-stream"]
  //   let actual = getQueryForDrive(mimeTypes);
  //   let expected = `mimeType contains \"${mimeTypes[0]}\"`;

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getQueryForDrive_1_3(funcName="test_getQueryForDrive_1_3"){
  //   const mimeTypes = []
  //   let actual = getQueryForDrive(mimeTypes);
  //   let expected = "";

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getFilesByMimeType_1_1(funcName="test_getFilesByMimeType_1_1"){
  //   const folderId = FOLDER_ID_TEST_FOR_UTIL_GENERAL;
  //   let actual = getFilesByMimeTypes(folderId);
  //   let expected = DriveApp.getFolderById(folderId).getFiles();
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   let actualLength, expectedLength;
  //   while(actual.hasNext()){
  //     file = files.next();
  //     actualLength++;
  //   }
  //   while(expected.hasNext()){
  //     file = files.next();
  //     expectedLength++;
  //   }

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  //   if(actualLength !== expectedLength){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getFilesByMimeType_1_2(funcName="test_getFilesByMimeType_1_2"){
  //   const folderId = FOLDER_ID_TEST_FOR_UTIL_GENERAL;
  //   const mimeTypes = []
  //   let actual = getFilesByMimeTypes(folderId, mimeTypes);
  //   let expected = DriveApp.getFolderById(folderId).getFiles();
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  //   let actualLength, expectedLength;
  //   while(actual.hasNext()){
  //     file = files.next();
  //     actualLength++;
  //   }
  //   while(expected.hasNext()){
  //     file = files.next();
  //     expectedLength++;
  //   }

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  //   if(actualLength !== expectedLength){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getStrByZeroPadding_1_1(funcName="test_getStrByZeroPadding_1_1"){
  //   const number = 13;
  //   const numberOfDigit = 6;
  //   let actual = getStrByZeroPadding(number, numberOfDigit);
  //   let expected = "000013";

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getStrByZeroPadding_1_2(funcName="test_getStrByZeroPadding_1_2"){
  //   const number = 12345;
  //   const numberOfDigit = 2;
  //   let actual = getStrByZeroPadding(number, numberOfDigit);
  //   let expected = "12345";

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getStrByZeroPadding_1_3(funcName="test_getStrByZeroPadding_1_3"){
  //   const number = 12;
  //   let actual = getStrByZeroPadding(number);
  //   let expected = "0012";

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  // test_getStrByZeroPadding_1_4(funcName="test_getStrByZeroPadding_1_4"){
  //   const number = 12345;
  //   let actual = getStrByZeroPadding(number);
  //   let expected = "12345";

  //   let isPassedFlag = false;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("a")}: ${actual}`);
  //   if(actual !== expected){
  //     return isPassedFlag;
  //   }
  //   isPassedFlag = true;
  //   console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
  //   return isPassedFlag;
  // }

  test_getFunctionsByConstants_1_1(){
    const text = `const DRAFT_FOLDER_ID = "11nJes5UTnc1xwMyFNFw3jG_nWgKKjb5b";
const IMAGE_TMP_FOLDER_ID = "1IawaXRPivPM5jyLERmidnLplFvJdSEPV";
const TEMPLATE_DOC_ID = "1CBM96cEjVesKFxuKnlLYTETSWAElju2ZteZeEDskTYo";
const ERROR_LOG_DOC_ID = "1G1Iz73w4bIWT9BQa6pIwMQ6T90XJuNgP-4B7uot2mNA";`;
    const actual = getFunctionsByConstants(text);
    const expected = `/**
 * 
 * @return {string}
 */
function DRAFT_FOLDER_ID(){
  return "11nJes5UTnc1xwMyFNFw3jG_nWgKKjb5b";
}

/**
 * 
 * @return {string}
 */
function IMAGE_TMP_FOLDER_ID(){
  return "1IawaXRPivPM5jyLERmidnLplFvJdSEPV";
}

/**
 * 
 * @return {string}
 */
function TEMPLATE_DOC_ID(){
  return "1CBM96cEjVesKFxuKnlLYTETSWAElju2ZteZeEDskTYo";
}

/**
 * 
 * @return {string}
 */
function ERROR_LOG_DOC_ID(){
  return "1G1Iz73w4bIWT9BQa6pIwMQ6T90XJuNgP-4B7uot2mNA";
}
`;
    tester.assertEquals(actual, expected);
  }

  // noraml systems
  test_isErrorType_1_1(){
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_2(){
    try{
      throw new RangeError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_3(){
    try{
      throw new EvalError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_4(){
    try{
      throw new ValueError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_5(){
    try{
      throw new SyntaxError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_6(){
    try{
      throw new AssertError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_7(){
    try{
      throw new ReferenceError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // semi-noraml systems
  test_isErrorType_2_1(){
    const error = "TypeError";
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_2(){
    const error = 2;
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_3(){
    const error = null;
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_4(){
    const actual = isErrorType();
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_5(){
    const error = [];
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_6(){
    const error = {};
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_7(){
    const errorList = [];
    const error = new Set(errorList);
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_1_1(){
    const var1 = 1;
    const type1 = "Number";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_1_2(){
    const var1 = 1.1;
    const type1 = "Number";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_2_1(){
    const var1 = "1";
    const type1 = "String";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_2_2(){
    const var1 = "1.1";
    const type1 = "String";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_2_3(){
    const var1 = "abc";
    const type1 = "String";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_3_1(){
    const var1 = ["1", 1];
    const type1 = "Array";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_3_2(){
    const var1 = [[], [], []];
    const type1 = "Array";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_3_3(){
    const var1 = [{}, {}];
    const type1 = "Array";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_4_1(){
    const var1 = {};
    const type1 = "Object";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_4_2(){
    const var1 = {test: "abc"};
    const type1 = "Object";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_4_3(){
    const var1 = {test: 234};
    const type1 = "Object";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_5_1(){
    const var1 = null;
    const type1 = "Null";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_6_1(){
    function objTestFunc(){
      return "test";
    }
    const var1 = objTestFunc;
    const type1 = "Function";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_6_2(){
    class ObjTest{
      objTestFunc(){
        return "test";
      }
    }
    const objTest = new ObjTest();
    const var1 = objTest.objTestFunc;
    const type1 = "Function";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_7_1(){
    class ObjTest{
      objTestFunc(){
        return "test";
      }
    }
    const var1 = ObjTest.objTestFunc;
    const type1 = "Undefined";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_7_2(){
    let var1;
    const type1 = "Undefined";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_8_1(){
    const var1 = new Set([1, 2]);
    const type1 = "Set";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_9_1(){
    const var1 = true;
    const type1 = "Boolean";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_10_1(){
    // const var1 = 2n ** 53n; // 2022/03/22: BigInt is inactive in GAS.
    const var1 = 2 ** 52;
    const type1 = "BigInt";
    const actual = isObjectType(var1, type1);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_11_1(){
    // const var1 = 2n ** 53n; // 2022/03/22: BigInt is inactive in GAS.
    const var1 = Symbol("Sym");
    const type1 = "Symbol";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_12_1(){
    const var1 = new TypeError();
    const type1 = "Error";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_13_1(){
    const var1 = new Date(2019, 0, 1, 9, 9, 9);
    const type1 = "[object Date]";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_1(){
    const var1 = null;
    const type1 = null;
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_2(){
    const var1 = null;
    const type1 = "Null"
    tester.assertError(isObjectType, [var1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_3(){
    tester.assertError(isObjectType, [], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_4(){
    const var1 = null;
    const type1 = 1;
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_5(){
    const var1 = null;
    const type1 = [];
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_6(){
    const var1 = null;
    const type1 = {};
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }
  
  // noraml systems
  test_sortArrayDescend_1_1(){
    const var1 = 1;
    const var2 = 2;
    const array = [var1, var2];
    const actual = sortArrayDescend(array);
    const expected = [var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_1_2(){
    const var1 = 1;
    const var2 = 2;
    const array = [var2, var1];
    const actual = sortArrayDescend(array);
    const expected = [var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_1(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var2, var3];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_2(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var3, var2];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_3(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var1, var3];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_4(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var3, var1];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_5(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var1, var2];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_6(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var2, var1];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_sortArrayDescend_3_1(){
    const array = null;
    tester.assertError(sortArrayDescend, [array], TypeError);
    return true;
  }

  // abnoraml systems
  test_sortArrayDescend_3_2(){
    tester.assertError(sortArrayDescend, [], TypeError);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_1_1(){
    const var1 = 1;
    const var2 = 2;
    const array = [var1, var2];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_1_2(){
    const var1 = 1;
    const var2 = 2;
    const array = [var2, var1];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_1(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var2, var3];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_2(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var3, var2];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_3(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var1, var3];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_4(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var3, var1];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_5(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var1, var2];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_6(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var2, var1];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_sortArrayAscend_3_1(){
    const array = null;
    tester.assertError(sortArrayAscend, [array], TypeError);
    return true;
  }

  // abnoraml systems
  test_sortArrayAscend_3_2(){
    tester.assertError(sortArrayAscend, [], TypeError);
    return true;
  }
}

/**
 * @return {bool} isTestTerminated
*/
function execute_Test_utilGeneral(){
  let isTestTerminated = tester.executeTestGas(Test_utilGeneral);
  return isTestTerminated;
}
