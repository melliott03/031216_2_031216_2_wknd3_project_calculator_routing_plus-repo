
var express = require("express");
var router = express.Router();
var path = require("path");
var inputArray = [];

function multiplyDivide(){
  for (var i = 0; i<inputArray.length;i++){
  while (inputArray[i] == '*' || inputArray[i] == '/'){ //ADDITION

          if(inputArray[i] == '*'){
            operator = parseInt(inputArray[i]);
            i += 1;
            operand2 = parseFloat(inputArray[i]);
            i -= 2;
            operand1 = parseFloat(inputArray[i]);
            result = (operand1 * operand2);
          }else if(inputArray[i] == '/'){
            operator = parseInt(inputArray[i]);
            i += 1;
            operand2 = parseFloat(inputArray[i]);
            i -= 2;
            operand1 = parseFloat(inputArray[i]);
            result = (operand1 / operand2);
          }
          inputArray[i]=result;
          i += 1;
          inputArray.splice(i,1);
          inputArray.splice(i,1);

          console.log('result in if condition operand1', operand1);
          console.log('result in if condition operand2', operand2);
          console.log('result in if condition operator', operator);
          console.log('result in if condition operator', result);
          console.log('result in if condition inputArray', inputArray);
          console.log('result in if condition inputArray after .shift', inputArray);
        }
      }
}
function additionSubtraction(){
  for (var i = 0; i<inputArray.length;i++){
  while (inputArray[i] == '+' || inputArray[i] == '-'){ //ADDITION

          if(inputArray[i] == '-'){
            operator = parseInt(inputArray[i]);
            i += 1;
            operand2 = parseFloat(inputArray[i]);
            i -= 2;
            operand1 = parseFloat(inputArray[i]);
            result = (operand1 - operand2);
          }else if(inputArray[i] == '+'){
            operator = parseInt(inputArray[i]);
            i += 1;
            operand2 = parseFloat(inputArray[i]);
            i -= 2;
            operand1 = parseFloat(inputArray[i]);
            result = (operand1 + operand2);
          }
          inputArray[i]=result;
          i += 1;
          inputArray.splice(i,1);
          inputArray.splice(i,1);

          console.log('result in if condition operand1', operand1);
          console.log('result in if condition operand2', operand2);
          console.log('result in if condition operator', operator);
          console.log('result in if condition operator', result);
          console.log('result in if condition inputArray', inputArray);
          console.log('result in if condition inputArray after .shift', inputArray);
        }
      }
}

router.post("/", function(req,res){


  var operator;
  var operand1;
  var operand2;
  var result='';

  var input = req.body.inputItems;
  console.log('after input creation', input);
  inputArray = input.match(/[^\d()]+|[\d.]+/g);
  console.log('after split', inputArray);

  multiplyDivide();
  additionSubtraction();

  console.log(inputArray);

  res.send({ans: ''+inputArray[0]});

});




module.exports = router;
