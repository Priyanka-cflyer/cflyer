
$(document).ready(function (e) {
$.ajaxSetup({
headers: {
'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
}
});

$('#laravel-ajax-file-upload').submit(function(e) {
e.preventDefault();
var formData = new FormData(this);
   
   $.ajax({
      type:'POST',
         // url: "{{ url('store-file')}}",
         url: "store-file",
         data: formData,
         cache:false,
         contentType: false,
         processData: false,
         success: (data) => {
            this.reset();
            alert('File has been uploaded successfully');
            console.log(data);
         },
         error: function(data){
            console.log(data);
         }
      });
   
   });


 dataa = [];
$("#file").on('change',function(){

   $('.tti').css('display', 'block');
   $('.progress-bar').css('display', 'block');
   $('.status').css('display', 'block');
   $(".frontcreativep").css('pointer-events', 'none');


   $(".errormessage").html(" ");
   $(".errormessage_w").html(" ");

            var form_data = new FormData();
   form_data.append("file", document.getElementById('file').files[0]);

 $.ajax({
      type:'POST',
         // url: "{{ url('store-file')}}",
         url: "store-file",
         data: form_data,
         cache:false,
         contentType: false,
         processData: false,
            xhr: function(){
      // alert('test');
      $("#progress-wrp").css('visibility', 'visible');
                        //upload Progress
                        var xhr = $.ajaxSettings.xhr();
                        if (xhr.upload) {
                           xhr.upload.addEventListener('progress', function(event) {
                              var percent = 0;
                              var position = event.loaded || event.position;
                              var total = event.total;
                              if (event.lengthComputable) {
                                 percent = Math.ceil(position / total * 100);
                              }
                                //update progressbar
                                $("#progress-wrp .progress-bar").css("width", + percent +"%");
                                $("#progress-wrp .status").text(percent +"%");
                            }, true);
                        }
                        return xhr;
                    },
                    mimeType:"multipart/form-data"
                }).done(function(data){

            $(".inization").append('Initializing<marquee scrollamount="1" direction="right" WIDTH="10%" style="margin: 0px 0 -5px 0;">..........</marquee>.');
            // var newimage='images/'+'Flyer-Modfied-d62-18-11-16-Front-Keyur.psd';  
            var newimage='images/'+data;
               //alert(newimage)
              // var PSD = require('psd');

              var PSD = require('psd');
              PSD.fromURL(newimage).then(function(psd) {
                  
                  $(".divhide").css('display', 'block');

                        $(".inization").html("");

                        

                        try{

                           dataa=psd.tree().export();
                        }
                        catch(err) {
                           $(".errormessage" ).html(" ");

                           $(".divhide").css('display', 'none');
                           $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- This Psd. File is corrupted or has wrong layer format. Please correct the issue and try again.</label></div>');

                           $('.tti').css('display', 'none');
                           $('.progress-bar').css('display', 'none');
                           $('.status').css('display', 'none');
                           $('#file').empty();

                           document.getElementById('rest').reset();
                           //return false;
                           errorcount++;


                        }

                       console.log(dataa); 


              });
              


      });
  


});



   
   });





