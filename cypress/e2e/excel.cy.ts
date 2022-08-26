
import * as xlsx from 'xlsx';
import fs from 'fs';
import { defineConfig } from 'cypress';
import cypressConfig from '../../cypress.config';


describe('Working with files', () => {

    it('task without arguments', function(){
      cy.task("noparams").then(txt => {
        expect(txt).to.eq("OK");
      });
    })

    it('task with single parameters', function(){
      cy.task("singleparam", 'Hello World').then(txt =>{
        expect(txt).to.eq("single param");
      })
    });

    it('task with multiple parameters', function(){
      cy.task("multipleparam", {name: "Ashok", age: 30}).then(txt =>{
        expect(txt).to.eq("multiple param");
      })
    });

    it('task should convert the excel to json', function(){
      const excelFilePath = './AshokData.xlsx'
      const productSheetName = 'products'
      cy.task("generateJsonFromExcel", {excelFilePath, productSheetName})
     
        cy.fixture('AshokJSON').then(data => {
          cy.log("First JSon", data[0].ProductName);
          // cy.log("First JSon", data[1]);
          expect(data).to.be.an('array')
          expect(data.some((row: Record<string,string>) => row.ProductName == 'Shirt')).to.equal(true)
          // expect(data[0].ProductName).to.eq('Mac');
          expect(data[0]["Sl No"]).to.eq('1');
        });
    })
    
    after(() => {
      const JsonFilePath = './AshokJSON.json'
      cy.task("deleteJSONFileInFixture", {JsonFilePath})
    })
    
})







