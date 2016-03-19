var numOfDecimalPoints = 0;
var thingsEntered ='';
var lastItemEntered ='';
$(document).ready(function (){
  console.log('LOADS');

  $('.clearbtn').on('click', function(){
    event.preventDefault();
  $('.FinalOutput').text('');
  $('.operatorsOperandsEntered').empty();
  document.getElementById('operatorsOperandsEntered').value = "";
  });

  $('.delbtn').on('click', function(){
    event.preventDefault();
    thingsEntered = thingsEntered.slice(0, -1);
    //re-appends entered strings without the last value
    $('#operatorsOperandsEntered').val(thingsEntered);
  });

  $('.dotbtn').on('click', function(){
    event.preventDefault();
    // $('.operatorbtn').data('clicked',false);
    var $el = $(this);
    var btnvalue = $el.data('num');
    //add a zero before decimal if a decimal is the first thing entered
    if(btnvalue == '.' && thingsEntered =='' && lastItemEntered != '.'){
      $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val()+'0' + btnvalue);
      lastItemEntered = btnvalue;
      numOfDecimalPoints++;
    }else if(btnvalue == '.' && lastItemEntered =='.' ){
      // do nothing
    }else if(numOfDecimalPoints == '1'){
      // do nothing
    }
    else{
    console.log('data from button:', $el.data('num'));
    $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val() + btnvalue);
    console.log("new button's value:", btnvalue);
    thingsEntered = $('#operatorsOperandsEntered').val();
    console.log("operatorsOperandsEntered value:", thingsEntered);
    lastItemEntered = btnvalue;
    console.log('that last value entered ', lastItemEntered);
    numOfDecimalPoints++;
    }

    });


  $('.calcbtn').on('click', function(){
    event.preventDefault();
    // $('.operatorbtn').data('clicked',false);
    var $el = $(this);
    var btnvalue = $el.data('num');
    //add a zero before decimal if a decimal is the first thing entered

    console.log('data from button:', $el.data('num'));
    $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val() + btnvalue);
    console.log("new button's value:", btnvalue);
    thingsEntered = $('#operatorsOperandsEntered').val();
    console.log("operatorsOperandsEntered value:", thingsEntered);
    lastItemEntered = btnvalue;
    console.log('that last value entered ', lastItemEntered);


    });


    $('.operatorbtn').on('click', function(){
      event.preventDefault();
      thingsEntered = $('#operatorsOperandsEntered').val();
      console.log('last item in entry: ', lastItemEntered);
      var $el = $(this);
      var btnvalue = $el.data('num');
      console.log('data from button:', $el.data('num'));
      if(lastItemEntered === ''){
        //do nothing
      }else if(lastItemEntered == '/' || lastItemEntered == '*' || lastItemEntered == '+' || lastItemEntered == '-'){
        console.log('yey, I made it past fort logic!');
        //remove the last item entered and saves entered strings back to variable
      thingsEntered = thingsEntered.slice(0, -1);
      //re-appends entered strings without the last value
      $('#operatorsOperandsEntered').val(thingsEntered);
      console.log('things entered after slice ', thingsEntered);
      $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val() + btnvalue);
      console.log("new button's vaulue:", btnvalue);
      thingsEntered = $('#operatorsOperandsEntered').val();
      lastItemEntered = btnvalue;
      console.log('that last value entered ', lastItemEntered);

      console.log("operatorsOperandsEntered value:", thingsEntered);
      numOfDecimalPoints = 0;
    }else{
      $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val() + btnvalue);

      console.log('that last value was the same so I ');
      lastItemEntered = btnvalue;
      numOfDecimalPoints = 0;


    }

      });



    $('.equalbtn').on('click', function(){
      event.preventDefault();
      var input = $('#operatorsOperandsEntered').val();
      console.log("input to be calculated:", input);
      var inputString = input.toString();
      var inputObject = {};
      inputObject.inputItems = inputString;
      console.log("input as a string:", inputObject);



      $.ajax({
          type: "POST",
          url:"/math",
          data: inputObject,
          success: function(data){
            console.log("yey! returned from math.js:", data);
              if(data.ans == "undefined"){
                $('.FinalOutput').text('');
              }else{
                $('.FinalOutput').text(''+data.ans);
              }

          }
      });
  });

});
