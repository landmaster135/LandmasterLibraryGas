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

function getReplacedString(targetString, source, replacement){
  return targetString.replace(/source/g, replacement);
}

/**
 * @param {any[]} array
 * @return {boolean}
 */
function isArray(array){
  if(!isObjectType(array, "Array")){
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

/**
 * @param {any[]} array
 * @return {any[]}
*/
function sortArrayDescend(array){
  if(!isObjectType(array, "Array")){
    throw new TypeError("array must be Array type.");
  }
  array.sort(function(a, b){
    if(a > b){
      return -1
    }else{
      return 1
    }
  });
  return array;
}

/**
 * @param {any[]} array
 * @return {any[]}
*/
function sortArrayAscend(array){
  if(!isObjectType(array, "Array")){
    throw new TypeError("array must be Array type.");
  }
  array.sort(function(a, b){
    if(a > b){
      return 1
    }else{
      return -1
    }
  });
  return array;
}

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


