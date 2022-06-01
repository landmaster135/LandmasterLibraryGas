function getResponseUntilMaxRetries(url, maxRetries){
  // This function is to avoid 403 Forbidden Error.
  const funcName = 'getResponseUntilMaxRetries';
  let res = null;
  for (let i = 0; i < maxRetries; i++) {
    res = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    if (res.getResponseCode() == 200) break;
    res = null;
    console.log(`${funcName}: ${getStrRepeatedToMark('a')}: countOfRetries = ${i}`);
    Utilities.sleep(5000);
  }
  return res;
}
