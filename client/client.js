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

  $('.calcbtn').on('click', function(){
    event.preventDefault();
    // $('.operatorbtn').data('clicked',false);
    var $el = $(this);
    var btnvalue = $el.data('num');


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
      // $( "input[name$='letter']" ).val( "a letter" );
      // $('.operatorsOperandsEntered').val();
      // if()
      // lastItemEntered = thingsEntered.substr(thingsEntered.length - 1);
      thingsEntered = $('#operatorsOperandsEntered').val();
      console.log('last item in entry: ', lastItemEntered);
      var $el = $(this);
      var btnvalue = $el.data('num');
      console.log('data from button:', $el.data('num'));
      if(lastItemEntered == ''){
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
    }else{
      $('#operatorsOperandsEntered').val($('#operatorsOperandsEntered').val() + btnvalue);

      console.log('that last value was the same so I ');
      lastItemEntered = btnvalue;

    }
      // if (!$('#operatorbtn').data('clicked')) {
      //   $('#operatorbtn').data('clicked',true);
      // };
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

  // $("#operatorsOperandsEntered").on("submit", function(event) {
  //   event.preventDefault();
  //
  //   var $el = $(this);
  //   console.log('data from button:', $el.data('data-num'));
  //
  //   var values = {};
  //   console.log("HERE: ", $("#catForm"));
  //   $.each($("#catForm").serializeArray(), function(i, field){//these names can be anything just the order matters
  //     values[field.name] = field.value; //these name/value names are important to keep
  //   });
  //   $.ajax({
  //     type: "POST",
  //     url:"/add",
  //     data: values,
  //     success: function(data){
  //       $.ajax({
  //         type: "GET",
  //         url:"/cats",
  //         success: function(catsObject){
  //           console.log('inside of success ', catsObject);
  //           appendDom(catsObject);
  //           function appendDom(catsObject){
  //             $('#putCatsHere').empty();
  //             for (var i = 0; i < catsObject.length; i++) {
  //               $('#putCatsHere').append('<p>'+ catsObject[i].name +'</p>');
  //             }
  //             console.log('inside of appendDom ', catsObject);
  //
  //
  //
  //           };
  //         }
  //       });
  //     }
  //   });
  //
