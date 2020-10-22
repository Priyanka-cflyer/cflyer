
$("#Buyername").on('change',function(){

  // alert(this.value)

  $("#partyindent").val(this.value);
   // $('#sel_users').val(value);
    $('#partyindent').select2().trigger('change');

});





   jQuery.validator.addMethod("noSpace", function(value, element) {
  return value.indexOf(" ") < 0 && value != "";
}, "No space please and don't leave it empty");


var base_url=$("#base").val();

//Party validation form
    $("form[id='partyform']").validate({
    // Specify validation rules
    rules: {

      partyname: {
        required: true,
        maxlength:100
        },
        partytype:{
          required:true
        },
        contact_person:{
          required:true,
          minlength:5,
          maxlength:100
        },
        mobile:{
          required:true,
           number:true,
          minlength:10,
          maxlength:12
        },
        phone1:{
         number:true,
          maxlength:12
        },
        phone2:{
           number:true,
          maxlength:12
        },
        email1:{
          required:true,
          email:true
        },
        email2:{
          email:true
        },
        website:{
             url: true,
             maxlength:100
        },
        state:{
          required:true
        },
        city:{
          required:true
        },
        address:{
          required:true
        },
        pincode:{
          required:true,
          minlength:6,
          maxlength:6
        }
       

    },
    // Specify validation error messages
    messages: {
      partyname: {
        required: "Please Enter Party Name"
      },
       partytype:{
          required:"Please Select Party Type"
        },
        contact_person:{
          required:"Please Enter Contact Person Details"
        },
         mobile:{
          required:"Please Enter Mobile Number"
        },
         email1:{
          required:"Please Enter Email address"
        },
        website:{
            url:"Please Enter Valid Url, like (http://www.google.com/)"
        },
        state:{
          required:"Please Select State"
        },
        city:{
          required:"Please Select City"
        },
        address:{
          required:"Please Enter Party address"
        },
        pincode:{
          required:"Please Enter Pincode Number"
        },
         categorytype:{
           required:"Please Select Category Type"
        },
        gstno:{
          required:"Please Enter GST Number",
        },
        ieccode:{
          required:"Please Enter IEC Code"
        },
        factoryaddress:{
          required:"Please Enter Factory Address"
        }


    },

    submitHandler: function(form) {
      form.submit();
    }
  });

   