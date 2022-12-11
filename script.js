$(document).ready(function()

{

//TAG SELECTOR

$(`button`).css("background-color","pink")

//ID SELECTOR

$("#btnUsingIdSelector").css("background-color","red")

//CLASS SELECTOR

$(".btnusingClassSelector").css("background-color","pink")

//Inserting elements



//Retrieve the textbox value and show in an alert box.

        $("#btnShow").click(function () {
            var name = $("#txtName").val();
            alert(name);
        });

    //Append the text to the paragraph
  
            $("#btnAppendText").click(function () {
                $("h5").append(document
                .createTextNode(" to Jquery Tutorial"));
            });
   

  //Hide /Show an element on button click.    
  
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });


   //Highlight a paragraph when cursor is placed on it. Highlighting should get removed when cursor is removed.

    $("p").hover(function(){
        $(this).css("background-color","violet");

    },function(){
        $(this).css("background-color","white");
});
//Remove all the elements from the DOM with some specified class (.class1) on button click
$(".RemoveElement").click(function(){
    $("#remove").remove();
  });
//Empty method
  $('#bt').click(function () {
            $('#div1').empty();
        });

  //Remove all the elements from the DOM with some specified class (.class1) on button click

$('#btn1').click(function(){
    $('p').addClass('colorClass');
});

$('#btn2').click(function(){
    $('p').removeClass('colorClass');
});
$('#btn3').click(function(){
    $('p').addClass('colorClass italicsClass');
});

$('#btn4').click(function(){
    $('p').removeClass('colorClass italicsClass');
});
$('#btn5').click(function(){
    $('p').addClass('colorClass italicsClass boldClass ');
});

$('#btn6').click(function(){
    $('p').removeClass('colorClass italicsClass boldClass ');
});




//Retrieve selected value of dropdown using jQuery and show in alert box.


$("#myDropDown").change(function (event) {
    alert("You have Selected  :: "+$(this).val() +"Selector");
});


//Use slice() method with examples

$(".btnSliceMethod").click(function() {  
  $("h6").slice(-4, -1).css({"background-color": "Green", "color": "red"});  
  });  


//Use filter() method with examples

    $(".btnFilterMethod").click(function() { 
  $("h6").filter(".intro").css("background-color", "blue");
});


//Retrieve radio button /checkbox values and show in alert box
$('#myForm input').on('change', function() {
   alert($('input[name=radioName]:checked', '#myForm').val()); 
   $("#6").css("Color","pink");
});

//keypress () - display a message when the keypress event is fired and how many times it is fired when you press the key on the keyboard.
function myFunction() {
    alert("You pressed a key inside the input field");
  }

  i = 0;  
 $("input").keypress(function(){  
        $("span").text (i += 1);  
    });  
 
  
//Query send data with ajax using HTTP get method
$("button").click(function(){
     $.ajax({
    type:'get',
    url:"https://fakestoreapi.com/users",

         success: function(data)
       {                                                      
         console.log(data);
         },
          error: function()
       {
           console.log(error);
         }
     })
 });


// Query submit form data with ajax using HTTP post method


    $("#btnHTTPPost").click(function(){
  
      const data=
  
      {
  
          id:11,
  
                  email:'Janu@gmail.com',
  
                  username:'johnd',
  
                  password:'m38rmF$',
  
                  name:{
  
                      firstname:'John',
  
                      lastname:'Doe'
  
                  },
  
                  address:{
  
                      city:'kilcoole',
  
                      street:'7835 new road',
  
                      number:3,
  
                      zipcode:'12926-3874',
  
                      geolocation:{
  
                          lat:'-37.3159',
  
                          long:'81.1496'
  
                      }
  
                  },
  
                  phone:'1-570-236-7033'
  
      };
  
      $.ajax({
  
  
  
          url:"https://fakestoreapi.com/users",
  
          type:"POST",
  
       
          data,
            success: function() {
            alert('successfully submitted');
          },
          error: function() {
            alert('an error has occurred.');
          }
    
  
      });
  
    });
  

  

//make ajax request using HTTP get method
    var head = document.getElementById('heading');

var request = new XMLHttpRequest();

function requestData() {

    request.onload = function () {

        head.innerHTML = this.responseText;

    }

    request.open('GET', 'https://fakestoreapi.com/users', true);

    request.send();

}

//Creating a data table using jQuery data table() method
$(function() {
$("#table_id").dataTable();
});

//Open a dialog on button click.

$("#btnImportData").on("click",function (e){
  var fileDialog = $('<input type="file">');
  fileDialog.click();
  fileDialog.on("change",onFileSelected);
    return false;
});

var onFileSelected = function(e){
  console.log($(this)[0].files);
};

//Open a dialog on button click.

$('#dialog').dialog();

})
       
    // Show the fetch records from the dummy API  inside a data table.
      var baseUrl='https://fakestoreapi.com/users';

      $(function () {
       
               var $users = $('#users');
       
               var $username = $('#username');
       
               var $email = $('#email');

             
        $.ajax({
       
                   type: 'GET',
       
                   url: baseUrl,
       
                   success: function (users) {
       
                       $.each(users, function (i, user) {
       
                           $users.append('<tr><td>' + user.username + '</td>' + '<td>' + user.email + '</td>'+'</tr>');
       
                       });
       
                   },
       
                   error: function () {
       
                       alert('error loading orders');
       
                   }
       
               });
            })
     
            
