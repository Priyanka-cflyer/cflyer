$(document).on('change', '#file', function(){
         // this.reset();

         var selValue_creative = $('input[name=wizard_front]:checked').val();

         $(".errormessagee_w").html(" ");

         dataa = [];
         bufsize = 10;

         st = 0;
         stt=0;
         step = 0;
         k = 0;
         data=[];
         g='';
         MissingBlock=[];
         DuplicatBlock=[];
         var errorcount=0; 
         $( "#append_TG_common" ).html("");


         var name = document.getElementById("file").files[0].name;

            var form_data = new FormData();
            var ext = name.split('.').pop().toLowerCase();
            $("#FFilename").html('<b>File Name:</b> '+name);
 
           // if(ext=='psd')
            //{

               $('.tti').css('display', 'block');
               $('.progress-bar').css('display', 'block');
               $('.status').css('display', 'block');
               $(".frontcreativep").css('pointer-events', 'none');


               $(".errormessage").html(" ");
               $(".errormessage_w").html(" ");
               //jQuery('script[src="<?php echo base_url() ?>js/template/test.js"]').remove();

              // $("#sectionmain_id").load();

 //var form_data = new FormData("#file");


   form_data.append("file", document.getElementById('file').files[0]);

               $(".loader").css("display", "block");

               
               event.preventDefault();
               $.ajax({
                  url:"psdaction",
                  method:"POST",
                  data:form_data,
                  dataType:'JSON',
                  contentType: false,
                  cache: false,
                  processData: false,
                  success:function(data)
                  {
                     alert()
                 }
              })





            // }
            // else
            // {
            //    alert('error')
            // }



});         
