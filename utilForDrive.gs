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
