import { defineConfig } from "cypress";
import * as xlsx from 'xlsx';
import fs from 'fs'; 
import assert from 'assert'

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        noparams: noparams,
        singleparam: singleparam,
        multipleparam: multipleparam,
        generateJsonFromExcel: generateJsonFromExcel,
        deleteJSONFileInFixture: deleteJSONFileInFixture
      });
    },
  },
});



//Ashok: Task with noparams
function noparams(){
  console.log("Ashok from the config:");
  return "OK";
}

//Ashok: Task with single param
function singleparam(message: string){
  console.log(message);
  return "single param";
}

//Ashok: Task with multiple params
function multipleparam(obj: any){
  console.log(`Hello ${obj.name}, you are age ${obj.age}`);
  return "multiple param"
}

//Ashok: Convert xlsx into json
// function generateJsonFromExcel(args: any){

//   const wb = xlsx.readFile(args.excelFilePath);
//   const ws = wb.SheetNames;
//   console.log(ws);
//   console.log(args.excelFilePath);
//   console.log(args.SheetNames);

//   const productSheet = wb.Sheets['products']
//   const productData =  xlsx.utils.sheet_to_json(productSheet, {raw: true})
//   console.log(productData);
//   console.log("Ashok:", productData[1]);

//   const bookSheet = wb.Sheets['books']
//   const bookData =  xlsx.utils.sheet_to_json(bookSheet, {raw: true})
//   console.log(bookData);

//   return ws;
// }

function generateJsonFromExcel(args: any){
  const wb = xlsx.readFile(args.excelFilePath);
  const productSheet = wb.Sheets['products']
  const bookSheet = wb.Sheets['books']

 
  let productData = xlsx.utils.sheet_to_json(productSheet, { raw: false })

  //Write the File
  fs.writeFileSync('../CYPRESS-TS/cypress/fixtures/AshokJSON.json', JSON.stringify(productData, null, 2))
  
  return '@productData'
}

//Delete the File
function deleteJSONFileInFixture(args: any){
  fs.unlinkSync('../CYPRESS-TS/cypress/fixtures/AshokJSON.json');
  return "Deleted"
}