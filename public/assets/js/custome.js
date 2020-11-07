
  var dataa = [];
  var bufsize = 10;
  var bufsizee =10;
  var st = 0;
  var stt=0;
  var step = 0;
  var k = 0;
  var data=[];
  var g='';
  var  MissingBlock=[];
  var  DuplicatBlock=[];




   // $('.next_to_show').hide();
   // $(".loader").css("display", "block");
   //$("#uploadForm").on('submit',(function(e){
$.ajaxSetup({
headers: {
'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
}
});


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
 //alert(ext)

 if(ext ==='psd')
 {

  $('.tti').css('display', 'block');
  $('.progress-bar').css('display', 'block');
  $('.status').css('display', 'block');
  $(".frontcreativep").css('pointer-events', 'none');


  $(".errormessage").html(" ");
  $(".errormessage_w").html(" ");
  jQuery('script[src="<?php echo base_url() ?>js/template/test.js"]').remove();

  //$("#sectionmain_id").load();

  form_data.append("file", document.getElementById('file').files[0]);

   // e.preventDefault();
   $(".loader").css("display", "block");
   $.ajax({
    url: "store-file",
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData:false,
    xhr: function(){
      //alert('test');
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


                  if(data!='else')
                  {
                    $(".inization").append('Initializing<marquee scrollamount="1" direction="right" WIDTH="5%" style="margin: 0px 0 -5px 0;">..........</marquee>.');
                    var newimage='upload/template_psd/'+data;  
                    var pre='<?php echo base_url()?>upload/template_psd/'+data;
                    var url='<?php echo base_url() ?>'+data;
                    $('#front_side_imagee').val(url);

                    var PSD = require('psd');

                    function errortimecallF()
                    {

                      var path =newimage; 

                      // $.ajax({  
                      //   url:"<?php echo base_url() ?>index.php/admin/template/delete_psd_file",  
                      //   type:"POST",  
                      //   data:{path:path},  
                      //   success:function(res){  
                      //     console.log('psd file delete'); 
                      //   }  
                      // });  

                    }



                    PSD.fromURL(pre).then(function(psd) {
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



                      console.log(dataa)    

                      var sc=$("#front_size_res").val();



                      $('#psdfile').val(pre); 

             // console.log('testing');
             step=dataa['children'].length;


             var orinlheigth= dataa['document']['height'];  
             var orinlwidth=dataa['document']['width']; 

             $("#orignalheigth").val(orinlheigth);  
             $("#orignalwidth").val(orinlwidth);  

             var i;
             var str = "";

             $("#length").val(step);

             if(step > 0){
              $("#append_TG_common").fadeIn();

              var sum = 0;
              var comp=0;
              var tag=0;
              var image=0;
              var summ=0;
              var creativ=0;
              var contact=0;
              var parag=0;
              var menuno=0;
              var layout_add=[];              
              var comp_array=[];
              var comp_arrayy=[];
              var contact_array=[];
              var contact_arrayy=[];
              var paragraph_array=[];
              var paragraph_arrayy=[];
              var menu_array=[];
              var creativ_array=[];  
              var groupname_validation=[];            
              var tagincr=1;
              var descriptionincr=1;
              var paragraphincr=1;
              var menuincr=1;
              MissingBlock=[];
              DuplicatBlock=[];
              var tag_array=[];
              var tagnewarray=[];
              var paragraph_array=[];
              var paragrphpfront_array=[];
              var descariptionfront_array=[];
              var menufront_array=[];
              var creativecontent_array=[];

              var character_create_error_tag=[];
              var character_create_error_Description=[];


              var duplicat_layer=[];
              var duplicat_taglayer=[];
              var duplicatTag_layere=[];
              var duplicat_descriptionlayer=[];
              var description_array_group=[];



              for(var k=0;k<step;k++){

                try{

                  layout_add= dataa['children'][k]['children'].length; 
                    //console.log(layout_add)
                    sum += layout_add;  

                    var layout=dataa['children'][k]['children'].length; 

                    var str=dataa['children'][k]['name'];

                    var str= str.replace(/\s+/g, '');

                    var ss=str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                    
                    //groupname_validation

                    var sd=str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

                    groupname_validation.push(sd.trim());

                    ///console.log(ss);

                    if(ss.match(/Company/)=='Company')
                    {

                      comp++;

                      if(layout_add=='0')
                      {

                        var company=comp_arrayy;
                        var array2 = ['Slogan(text layer)','Company(text layer)','Logo(image layer)'];
                        var fooo = [];
                        var f = 0;
                        jQuery.grep(array2, function(el) {

                          if (jQuery.inArray(el, company) == -1) fooo.push('- Company design block:'+el);


                          f++;

                        });

                        if(fooo!='')
                        {
                          var elcmp = $.map(fooo, function(val, i) {
                            return "<br>" + val;
                          });


                          comp_array.push(elcmp.join(", "));

                          errorcount++;
                        }


                      }


                      if(comp=='2')
                      {

                        //New validation added 
                        //MissingBlock=[];
                        var compnm='Company';
                        DuplicatBlock.push(compnm);


                        errorcount++;

              //return false;

            }
            else
            {

              var duplicatcompany_layer=[];

              for(var i=0;i<layout_add;i++)
              {
                

                var t=dataa['children'][k]['children'][i]['name'];
                    //.replace(/\s+/g, '');

                    //var test=$.trim(t);
                    var fg = t.replace(/\s+/g, '');

                    var avoid = "*"

                    var test=fg.replace(avoid, '');

                    var size=dataa['children'][k]['children'][i]['text'];

                    var checkk=dataa['children'][k]['children'][i]['type'];


                    if(checkk.trim()=='group')
                    {

                      $(".divhide").css('display', 'none');
                      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Invalid format in company block.</label></div>');

                      $('.tti').css('display', 'none');
                      $('.progress-bar').css('display', 'none');
                      $('.status').css('display', 'none');
                      $("#file").empty();
                      $('.divhide').css('display', 'none');
                      

                          //return false;
                          errorcount++;

                        }

                        if(size ==undefined)
                        {
                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+'(image layer)';

                          comp_array.push(s.trim());
                          duplicatcompany_layer.push(s.trim());

                        }
                        else
                        {
                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+'(text layer)';

                          comp_array.push(s.trim());
                          duplicatcompany_layer.push(s.trim());


                        }


                  } //End For Loop

                  if(duplicatcompany_layer!='')
                  {

                    //console.log(duplicatcompany_layer);
                    var teslayer=duplicatcompany_layer;
                    var compduplicat=find_duplicate_in_array(teslayer);

                    var ellsyer = $.map(compduplicat, function(val, i) {
                      return val;
                    });

                    //console.log(ellsyer);
                    var v=ellsyer.length;

                    for(var l=0; l<v;l++)
                    {
                      ellsyer[l];

                      if(ellsyer[l]=='Company(text layer)' || ellsyer[l]=='Slogan(text layer)' || ellsyer[l]=='Logo(image layer)')
                      {
                        //alert(ellsyer[l]);

                        var duplit_comp='- [COMPANY] design block >> '+ellsyer[l]+': Duplicate';

                        duplicat_layer.push('<br>'+duplit_comp);

                      }
                      


                    }


                  }





              }



          }
          else if(ss.match(/Image/)=='Image')
          {
            image++;
          description_array_group.push(ss);
            

              //console.log('main')
             }
             else if(ss=='Tag')
             {
              tag++;

              if(tag=='2')
              {

                var compnm='Tag';
                DuplicatBlock.push(compnm);

                errorcount++;

              }

              if(layout_add=='0')
              {

                
                var tag_arr=tag_array;
                var array2 = ['Tag(text layer)'];
                var foo_tag = [];
                var i = 0;
                jQuery.grep(array2, function(el) {
                  if (jQuery.inArray(el, tag_arr) == -1) foo_tag.push(el);
                  i++;
                });  
                  //alert(foo_tag)                

                  if(foo_tag !='')
                  {
                    ///alert('blk')
                    tagnewarray.push('- TAG design block: at least one tag layer is required (text layer)');


                    errorcount++;


                  }

 



                }
                else
                {                   
                  //console.log('count'+layout_add);

                  for(var i=0;i<layout_add;i++)
                  {
                    //alert(i)  
                    //alert('text'+layout_add+i);
                    var t=dataa['children'][k]['children'][i]['name'];

                    var fg = t.replace(/\s+/g, '');

                    var avoid = "*"

                    var test=fg.replace(avoid, '');
                    
                    var size=dataa['children'][k]['children'][i]['text']; 

                    var checkk=dataa['children'][k]['children'][i]['type'];


                    if(checkk.trim()=='group')
                    {

                      $(".divhide").css('display', 'none');
                      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Invalid format in tag block.</label></div>');

                      $('.tti').css('display', 'none');
                      $('.progress-bar').css('display', 'none');
                      $('.status').css('display', 'none');
                      $("#file").empty();
                      $('.divhide').css('display', 'none');

                      errorcount++;

                    }

                    if(size ==undefined)
                    {
                      var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+'(image layer)';
                      tag_array.push(s.trim());
                      duplicatTag_layere.push(s.trim());
                      //alert('image');

                    }
                    else
                    {
                      var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+'(text layer)';
                      tag_array.push(s.trim());
                      duplicatTag_layere.push(s.trim());

                      //alert('Text');



                      var length=dataa['children'][k]['children'][i]['text']['value'].length;


                      if (length > 60)
                      {
                        $(".divhide").css('display', 'none');
                        

                        $('.tti').css('display', 'none');
                        $('.progress-bar').css('display', 'none');
                        $('.status').css('display', 'none');
                        $("#file").empty();
                        $('.divhide').css('display', 'none');

                         //var tagchar='<br>- [Tag] Text layer in ['+ss+'] design block must be [60] characters or less.';  

                        //PARAGRAPH 3 design block>> Title (text layer): 60 characters max.

                        var tagchar='<br>- TAG design Block >> '+s+': 60 characters max';

                        character_create_error_tag.push(tagchar);


                      //return false;
                      errorcount++;

                    }

                  }
                  //alert(tag_array)
                  
                   var tag_arr=tag_array;
                   var array2 = ['Tag(text layer)','Tag1(text layer)','Tag2(text layer)','Tag3(text layer)','Tag4(text layer)','Tag5(text layer)','Tag6(text layer)','Tag7(text layer)','Tag8(text layer)','Tag9(text layer)','Tag10(text layer)','Tag11(text layer)','Tag12(text layer)','Tag13(text layer)','Tag14(text layer)','Tag15(text layer)','Tag16(text  layer)','Tag17(text layer)','Tag18(text layer)','Tag19(text layer)','Tag20(text layer)','Tag21(text layer)','Tag22(text layer)','Tag23(text layer)','Tag24(text layer)','Tag25(text layer)','Tag26(text layer)','Tag27(text layer)','Tag28(text layer)','Tag29(text layer)',,'Tag30(text layer)'];



                  // var text = 'Item'+b+'(text layer)';


                if(jQuery.inArray(array2, tag_array) != -1) {
                      
                    } else {
                      console.log("is NOT in array");
                      //menufront_array.push('- ['+ss+'] design block >> '+text+': missing');
                    } 


                  // var foo_tag = [];
                  // var f = 0;
                  // jQuery.grep(tag_arr, function(el) {
                  //  if (jQuery.inArray(el, array2) == -1) foo_tag.push(el);
                  //  f++;
                  // });      
                  //  //alert(foo_tag)


                  // if(foo_tag !='')
                  // {
                  //  alert(foo_tag)
                    
                    
                  //  tagnewarray.push('- TAG design block: at least one tag layer is required (text layer)');

                  //  //('- [TAG] design block >> Tag(text layer): missing');


                  //  errorcount++;


                  // }


                  




                  
                  tagincr++;

      } // Foor Loop Ending

      
      
      if(duplicatTag_layere!='')
      {

        
        var teslayertag=duplicatTag_layere;
        var compduplicatt=find_duplicate_in_array(teslayertag);

        var ellsyertag = $.map(compduplicatt, function(val, i) {
        return val;
        });


        var v=ellsyertag.length;
        for(var l=0;l<v;l++)if("Tag(text layer)"==ellsyertag[l]||"Tag1(text layer)"==ellsyertag[l]||"Tag2(text layer)"==ellsyertag[l]||"Tag3(text layer)"==ellsyertag[l]||"Tag4(text layer)"==ellsyertag[l]||"Tag5(text layer)"==ellsyertag[l]||"Tag6(text layer)"==ellsyertag[l]||"Tag7(text layer)"==ellsyertag[l]||"Tag8(text layer)"==ellsyertag[l]||"Tag9(text layer)"==ellsyertag[l]||"Tag10(text layer)"==ellsyertag[l]||"Tag11(text layer)"==ellsyertag[l]||"Tag12(text layer)"==ellsyertag[l]||"Tag13(text layer)"==ellsyertag[l]||"Tag14(text layer)"==ellsyertag[l]||"Tag15(text layer)"==ellsyertag[l]||"Tag16(text layer)"==ellsyertag[l]||"Tag17(text layer)"==ellsyertag[l]||"Tag18(text layer)"==ellsyertag[l]||"Tag19(text layer)"==ellsyertag[l]||"Tag20(text layer)"==ellsyertag[l]||"Tag21(text layer)"==ellsyertag[l]||"Tag22(text layer)"==ellsyertag[l]||"Tag23(text layer)"==ellsyertag[l]||"Tag24(text layer)"==ellsyertag[l]||"Tag25(text layer)"==ellsyertag[l]||"Tag26(text layer)"==ellsyertag[l]||"Tag27(text layer)"==ellsyertag[l]||"Tag28(text layer)"==ellsyertag[l]||"Tag29(text layer)"==ellsyertag[l]||"Tag30(text layer)"==ellsyertag[l]||"Tag31(text layer)"==ellsyertag[l]||"Tag32(text layer)"==ellsyertag[l]||"Tag33(text layer)"==ellsyertag[l]||"Tag34(text layer)"==ellsyertag[l]||"Tag35(text layer)"==ellsyertag[l]||"Tag36(text layer)"==ellsyertag[l]||"Tag37(text layer)"==ellsyertag[l]||"Tag38(text layer)"==ellsyertag[l]||"Tag39(text layer)"==ellsyertag[l]||"Tag40(text layer)"==ellsyertag[l]||"Tag41(text layer)"==ellsyertag[l]||"Tag42(text layer)"==ellsyertag[l]||"Tag42(text layer)"==ellsyertag[l]||"Tag43(text layer)"==ellsyertag[l]||"Tag44(text layer)"==ellsyertag[l]||"Tag45(text layer)"==ellsyertag[l]||"Tag46(text layer)"==ellsyertag[l]||"Tag47(text layer)"==ellsyertag[l]||"Tag48(text layer)"==ellsyertag[l]||"Tag49(text layer)"==ellsyertag[l]||"Tag50(text layer)"==ellsyertag[l]){var duplit_comp="- [TAG] design block >> "+ellsyertag[l]+': Duplicate';duplicat_layer.push("<br>"+duplit_comp)}

                      //  var duplit_comp='- [COMPANY] design block >> '+ellsyer[l]+': Duplicate';


        

      }



    }


  }
  else if(ss.match(/Description/)=='Description')
  {
    summ++;

    description_array_group.push(ss);

              //console.log('descriptionnnn');
              var description_array=[];
              var duplication_description_array=[];
              for(var i=0;i<layout_add;i++)
              {
                var t=dataa['children'][k]['children'][i]['name'];
                    //.replace(/\s+/g, '');

                    var fg = t.replace(/\s+/g, '');

                    var avoid = "*"

                    var test=fg.replace(avoid, '');
                    var size=dataa['children'][k]['children'][i]['text']; 

                    var checkk=dataa['children'][k]['children'][i]['type'];


                    if(checkk.trim()=='group')
                    {

                      $(".divhide").css('display', 'none');
                      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">-  Nested folder structure found '+ss+' block.</label></div>');

                      $('.tti').css('display', 'none');
                      $('.progress-bar').css('display', 'none');
                      $('.status').css('display', 'none');
                      $("#file").empty();
                      $('.divhide').css('display', 'none');
                          //return false;
                          errorcount++;
                    }

                        if(size ==undefined)
                        {

                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

                          description_array.push(s.trim()+'(image layer)');
                          duplication_description_array.push(s.trim()+'(image layer)');

                        }
                        else
                        {
                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          description_array.push(s.trim()+'(text layer)');

                          duplication_description_array.push(s.trim()+'(text layer)');

                          var length=dataa['children'][k]['children'][i]['text']['value'].length;

                          if(s.trim()=='Title' || s.trim()=='Subtitle')
                          {
                        //alert('title/subtitle');

                        if (length > 60)
                        {
                    //alert('success');

                    $(".divhide").css('display', 'none');
                    $('.tti').css('display', 'none');
                    $('.progress-bar').css('display', 'none');
                    $('.status').css('display', 'none');
                    $("#file").empty();
                    $('.divhide').css('display', 'none');
                    //var description_char='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [60] characters or less';

                        //var tagchar='<br>- TAG design Block>> '+s+': 60 characters max';

                    var description_char='- '+ss+' design Block >> '+s.trim()+':  60 characters max  ';   


                    character_create_error_Description.push(description_char);
                          //return false;
                          errorcount++;
                        }
                      }
                      else if(s.trim()=='Description')
                      {
                        if (length > 100)
                        {
                          //console.log('success');
                          $(".divhide").css('display', 'none');
                          //var description_charr='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [100] characters or less';

                    var description_charr='- '+ss+' design Block >> '+s.trim()+':  100 characters max';   


                          character_create_error_Description.push(description_charr);


                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $("#file").empty();
                          $('.divhide').css('display', 'none');
                          //return false;
                          errorcount++;

                        }
                      }
                      else if(s.trim()=='Price')
                      {
                        //console.log(length);
                        if (length > 10)
                        {
                          //console.log('success');
                          $(".divhide").css('display', 'none');                           
                        //  var description_charrr='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [10] characters or less';
                    var description_charrr='- '+ss+' design Block >> '+s.trim()+':  10 characters max';   


                          character_create_error_Description.push(description_charrr);
                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $("#file").empty();
                          $('.divhide').css('display', 'none');
                          //return false;
                          errorcount++;

                        }
                      }

                      else if(s.trim()=='Discount')
                      {
                        //alert(length)
                        if(length > 10)
                        {
                          $(".divhide").css('display', 'none');                           
                          //var description_charrr='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [10] characters or less';
                    var description_charrr='- '+ss+' design Block >> '+s.trim()+':  10 characters max';   
                          character_create_error_Description.push(description_charrr);
                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $("#file").empty();
                          $('.divhide').css('display', 'none');
                          //return false;
                          errorcount++;

                        }

                      }
                      else if(s.trim()=='Code')
                      {
                        //alert(length)
                        if(length > 10)
                        {
                          $(".divhide").css('display', 'none');                           
                          //var description_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [10] characters or less';

                    var description_chae='- '+ss+' design Block >> '+s.trim()+':  10 characters max';   
                          character_create_error_Description.push(description_chae);
                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $("#file").empty();
                          $('.divhide').css('display', 'none');
                          //return false;
                          errorcount++;
                        }
                      }   

                    }

                  } //Ending Loop


//description_array_group
    //var newaddDuplicateDescription=ss;

    



                  if(duplication_description_array!='')
                  {
                    //console.log(duplication_description_array)
                    var teslayertag=duplication_description_array;
                    var compduplicatt=find_duplicate_in_array(teslayertag);
        //console.log(compduplicatt);
        var ellsyertag = $.map(compduplicatt, function(val, i) {
          return val;
        });


        var v=ellsyertag.length;

                    for(var l=0; l<v;l++)
                    {
                      ellsyertag[l];

                      if(ellsyertag[l]=='Title(text layer)' || ellsyertag[l]=='Subtitle(text layer)' || ellsyertag[l]=='Image(image layer)' || ellsyertag[l]=='Price(text layer)' || ellsyertag[l]=='Discount(text layer)' || ellsyertag[l]=='Code(text layer)' || ellsyertag[l]=='Description(text layer)')
                      {
                        //alert(ellsyer[l]);

                        var duplit_comp='- ['+ss.toUpperCase()+'] design block >> '+ellsyertag[l]+': Duplicate';

                    //('- [TAG] design block >> Tag(text layer): missing');

                        duplicat_layer.push('<br>'+duplit_comp);

                      }
                      


                    }

        

      }


      //console.log(description_array)

      var tag_arr=description_array;
      var array2 = ['Title(text layer)','Subtitle(text layer)','Price(text layer)','Discount(text layer)','Code(text layer)','Description(text layer)','Image(image layer)'];

      var foo_description = [];
      var i = 0;
      jQuery.grep(array2, function(el) {
        var sss=ss.toUpperCase();
        if (jQuery.inArray(el, tag_arr) == -1) foo_description.push('- ['+sss+'] design block >> '+el+': missing');
        i++;
        //('- [TAG] design block >> Tag(text layer): missing');
      });                   

      if(foo_description !='')
      {
        var eldescr = $.map(foo_description, function(val, i) {
          return "<br>" + val;
        });

        descariptionfront_array.push(eldescr.join(", "));

              //return false;
              errorcount++;

             }
             descriptionincr++;

         }
         else if(ss.match(/Creativecontent/)=='Creativecontent')
         {
          creativ++;
          if(layout_add=='0')
          {
            var creative=creativ_array;
            var array2 = ['Intro(text layer)','Title(text layer)','Body(text layer)','Logo(image layer)'];
            var foo_creative = [];
            var f = 0;
            jQuery.grep(array2, function(el) {

              if (jQuery.inArray(el, creative) == -1) foo_creative.push('- Creative content design block:'+el);


              f++;

            });

            if(foo_creative!='')
            {

              if(selValue_creative=='1')
              {

                var el = $.map(foo_creative, function(val, i) {
                  return "<br>" + val;
                });

                

                creativ_array.push(el.join(", "));


                  //return false;
                  errorcount++;
                }
            }
          }

          //if(selValue_creative=='1')
          //{
            if(creativ=='2')
            {
              var compnm='Creative Content';
              DuplicatBlock.push(compnm);
              //return false;
              errorcount++;

            }
            else
            {


              var duplicate_creative_layer=[];

              for(var i=0;i<layout_add;i++)
              {
                var t=dataa['children'][k]['children'][i]['name'];
                    //.replace(/\s+/g, '');
                    var fg = t.replace(/\s+/g, '');

                    var avoid = "*";

                    var test=fg.replace(avoid, '');
                    var size=dataa['children'][k]['children'][i]['text'];

                    var checkk=dataa['children'][k]['children'][i]['type'];




                    if(checkk.trim()=='group')
                    {

                      $(".divhide").css('display', 'none');
                      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Invalid format in creative content block.</label></div>');

                      $('.tti').css('display', 'none');
                      $('.progress-bar').css('display', 'none');
                      $('.status').css('display', 'none');
                      $("#file").empty();
                      $('.divhide').css('display', 'none');

                          //return false;
                          errorcount++;

                        }


                        if(size ==undefined)
                        {
                       // creativ_array.push(s.trim());
                    var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                    creativ_array.push(s.trim()+'(image layer)');

                    duplicate_creative_layer.push(s.trim()+'(image layer)');




                  }
                  else
                  {

                           //creativ_array.push(s.trim());
                      var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                      creativ_array.push(s.trim()+'(text layer)');

                      duplicate_creative_layer.push(s.trim()+'(text layer)');


                      var length=dataa['children'][k]['children'][i]['text']['value'].length;



                      //console.log(s)  


                      if(s.trim()=='Title')
                      {

                        if (length > 60)
                        {

                          $(".divhide").css('display', 'none');
                          

                          //var creativecnt_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [60] characters or less';

                    var creativecnt_chae='- '+ss+' design Block >> '+s.trim()+':  60 characters max';   


                          character_create_error_Description.push(creativecnt_chae);



                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $("#file").empty();
                          $('.divhide').css('display', 'none');


                          //return false;
                          errorcount++;

                        }


                      }
                      else if(s.trim()=='Body')
                      {
                        
                        
                      }
                      else if(s.trim()=='Intro')
                      {

                        if(length > 10)
                        {

                          //var creativecn_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [10] characters or less';
                    var creativecn_chae='- '+ss+' design Block >> '+s.trim()+':  10 characters max';    


                          character_create_error_Description.push(creativecn_chae);


                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $("#file").empty();
                          $('.divhide').css('display', 'none');

                        }

                      }






                    }


                  }//loop ending


                  if(duplicate_creative_layer!='')
                  {
                    //console.log(duplicate_creative_layer)
                    var teslayertag=duplicate_creative_layer;
                    var compduplicatt=find_duplicate_in_array(teslayertag);
        //console.log(compduplicatt);
        var ellsyer = $.map(compduplicatt, function(val, i) {
          return val;
        });


        var v=ellsyer.length;

                    for(var l=0; l<v;l++)
                    {
                      ellsyer[l];

                      if(ellsyer[l]=='Intro(text layer)' || ellsyer[l]=='Title(text layer)' || ellsyer[l]=='Body(text layer)' || ellsyer[l]=='Logo(image layer)')
                      {
                        //alert(ellsyer[l]);

                        var duplit_comp='- [CREATIVE CONTENT] design block >> '+ellsyer[l]+': Duplicate';
                        //var duplit_comp='- ['+ss.toUpperCase()+'] design block >> '+ellsyertag[l]+': Duplicate';

                        duplicat_layer.push('<br>'+duplit_comp);

                      }
                      


                    }

      }


    }


              
             }
             else if(ss=='Contact')
             {
              //alert()
              contact++;
              //alert(layout_add)



              if(layout_add=='0')
              {
                var contactc=contact_arrayy;
                var array2 = ['C Network(text layer)','C Network(image layer)','Mobile1(text layer)','Mobile1(image layer)','Mobile2(text layer)','Landline1(text layer)','Landline1(image layer)','Landline2(text layer)','Fax1(image layer)','Fax1(text layer)','Fax2(text layer)','Address1(text layer)','Address2(text layer)','Address1(image layer)','Email1(text layer)','Email2(text layer)','Email1(image layer)','Url1(text layer)','Url2(text layer)','Url1(image layer)','Person1(text layer)','Position1(text layer)','Person2(text layer)','Position2(text layer)'];
                var foo_contactt = [];
                var f = 0;
                jQuery.grep(array2, function(el) {

                  if (jQuery.inArray(el, contactc) == -1) foo_contactt.push('Contact design block:'+el);


                  f++;

                });


                if(foo_contactt!='')
                {
                  var elcont = $.map(foo_contactt, function(val, i) {
                    return "<br>" + val;
                  });


                  

                  contact_array.push(elcont.join(", "));


          //return false;
          errorcount++;
        }



      }


      if(contact=='2')
      {

        var compnm='Contact';
        DuplicatBlock.push(compnm);

        errorcount++;



      }

      var duplicate_contact_layer=[];

      for(var i=0;i<layout_add;i++)
      {

        var t=dataa['children'][k]['children'][i]['name'];

        //var test1=$.trim(ss);
        var fg = t.replace(/\s+/g, '');

        var avoid = "*"

        var test1=fg.replace(avoid, '');
        //console.log(test1);

        var size=dataa['children'][k]['children'][i]['text'];

        var checkk=dataa['children'][k]['children'][i]['type'];


        if(checkk.trim()=='group')
        {

          $(".divhide").css('display', 'none');
          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Invalid format in contact block.</label></div>');

          $('.tti').css('display', 'none');
          $('.progress-bar').css('display', 'none');
          $('.status').css('display', 'none');
          $("#file").empty();
          $('.divhide').css('display', 'none');


                          //return false;
                          errorcount++;

                        }

                        if(size ==undefined)
                        {
                  //var s=test1.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+'(image layer)';

                  var s=test1.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

                  contact_array.push(s.trim()+'(image layer)');

                  duplicate_contact_layer.push(s.trim()+'(image layer)');



                  //contact_array.push(s.trim());

                }
                else
                {
                  //var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+'(text layer)';

                  var s=test1.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

                  contact_array.push(s.trim()+'(text layer)');

                  duplicate_contact_layer.push(s.trim()+'(text layer)');


                  //contact_array.push(s.trim());

                } 

              }//ending loop

              if(duplicate_contact_layer!='')
              {
                    //console.log(duplicate_creative_layer)
                    var teslayertag=duplicate_contact_layer;
                    var compduplicatt=find_duplicate_in_array(teslayertag);
        //console.log(compduplicatt);
        var ellsyer = $.map(compduplicatt, function(val, i) {
          return val;
        });

        
        var v=ellsyer.length;

                    for(var l=0; l<v;l++)
                    {
                      ellsyer[l];

                      //console.log(ellsyer[l])

                      if(ellsyer[l]=='Cnetwork(text layer)' || ellsyer[l]=='Cnetwork(image layer)' || ellsyer[l]=='Mobile1(text layer)' || ellsyer[l]=='Mobile1(image layer)' || ellsyer[l]=='Mobile2(text layer)' || ellsyer[l]=='Landline1(text layer)' || ellsyer[l]=='Landline1(image layer)' || ellsyer[l]=='Landline2(text layer)' || ellsyer[l]=='Fax1(image layer)' || ellsyer[l]=='Fax1(text layer)' || ellsyer[l]=='Fax2(text layer)' || ellsyer[l]=='Address1(text layer)' || ellsyer[l]=='Address2(text layer)' || ellsyer[l]=='Address1(image layer)' || ellsyer[l]=='Email1(text layer)' || ellsyer[l]=='Email2(text layer)' || ellsyer[l]=='Email1(image layer)' || ellsyer[l]=='Url1(text layer)' || ellsyer[l]=='Url2(text layer)' || ellsyer[l]=='Url1(image layer)' || ellsyer[l]=='Person1(text layer)' || ellsyer[l]=='Position1(text layer)' || ellsyer[l]=='Person2(text layer)' || ellsyer[l]=='Position2(text layer)') 
                      {
                        //alert(ellsyer[l]);

                        var duplit_comp='- [CONTACT] design block >> '+ellsyer[l]+': Duplicate';

                        // var duplit_comp='- [CREATIVE CONTENT] design block >> '+ellsyer[l]+': Duplicate';

                        duplicat_layer.push('<br>'+duplit_comp);

                      }
                      


                    }


      }
    }
    else if(ss.match(/Paragraph/)=='Paragraph')
    {
      parag++;

      description_array_group.push(ss);

      var duplicate_paragraph_layer=[];

      for(var i=0;i<layout_add;i++)
      {
        var t=dataa['children'][k]['children'][i]['name'];
                    //.replace(/\s+/g, '');

                    var fg = t.replace(/\s+/g, '');

                    var avoid = "*"

                    var test=fg.replace(avoid, '');

                    var size=dataa['children'][k]['children'][i]['text'];

                    var checkk=dataa['children'][k]['children'][i]['type'];


                    if(checkk.trim()=='group')
                    {

                      $(".divhide").css('display', 'none');
                      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Invalid format in paragraph block.</label></div>');

                      $('.tti').css('display', 'none');
                      $('.progress-bar').css('display', 'none');
                      $('.status').css('display', 'none');
                      $('.divhide').css('display', 'none');
                      document.getElementById('rest').reset();

                          //return false;
                          errorcount++;

                        } 

                        if(size ==undefined)
                        {

                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          paragraph_array.push(s.trim()+'(image layer)');

                          duplicate_paragraph_layer.push(s.trim()+'(image layer)');


                        }
                        else
                        {
                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          paragraph_array.push(s.trim()+'(text layer)');

                          duplicate_paragraph_layer.push(s.trim()+'(text layer)');


                          var length=dataa['children'][k]['children'][i]['text']['value'].length;
                      //console.log(s);
                      if(s.trim()=='Title' || s.trim()=='Subtitle')
                      {

                        if (length > 60)
                        {

                          $(".divhide").css('display', 'none');


                          //var paragraph_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [60] characters or less';

                    var paragraph_chae='- '+ss+' design Block >> '+s.trim()+':  60 characters max';   


                          character_create_error_Description.push(paragraph_chae);


                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $('.divhide').css('display', 'none');
                          document.getElementById('rest').reset();


                          //return false;
                          errorcount++;

                        }


                      }
                      else if(s.trim()=='Body')
                      {
                        //console.log(length);
                        
                      }
                    }  

                    

                  }

                  if(duplicate_paragraph_layer!='')
                  {
                    //console.log(duplicate_creative_layer)
                    var teslayertag=duplicate_paragraph_layer;
                    var compduplicatt=find_duplicate_in_array(teslayertag);
        //console.log(compduplicatt);
        var ellsyer = $.map(compduplicatt, function(val, i) {
          return val;
        });

        var v=ellsyer.length;


                    for(var l=0; l<v;l++)
                    {
                      ellsyer[l];

                      //console.log(ellsyer[l])

                      if(ellsyer[l]=='Title(text layer)' || ellsyer[l]=='Subtitle(text layer)' || ellsyer[l]=='Body(text layer)'  ) 
                      {
                        //alert(ellsyer[l]);

                        var duplit_comp='- ['+ss.toUpperCase()+'] design block >> '+ellsyer[l]+': Duplicate';

                        // var duplit_comp='- [CREATIVE CONTENT] design block >> '+ellsyer[l]+': Duplicate';

                        duplicat_layer.push('<br>'+duplit_comp);

                      }
                      


                    }

        // if(ellsyertag!='')
        // {
        //  duplicat_taglayer.push(ellsyertag.join(", "));
          
        // }


      }

                  //console.log(paragraph_array)
                  var tag_arr=paragraph_array;
                  var array2 = ['Title(text layer)','Subtitle(text layer)','Body(text layer)'];

                  var foo_paragraph = [];
                  var f = 0;
                  jQuery.grep(array2, function(el) {
                    var sss=ss.toUpperCase();

                    if (jQuery.inArray(el, tag_arr) == -1) foo_paragraph.push('- ['+sss+'] design block >> '+el+': missing');


                    v++;
                  }); 

                  if(foo_paragraph !='')
                  {
                    var elpara = $.map(foo_paragraph, function(val, i) {
                      return "<br>" + val;
                    });
                    
                    
                    paragrphpfront_array.push(elpara.join(", "));
                    
              //return false;
              errorcount++;


             }
             paragraphincr++;


         }
         else if(ss.match(/Menu/)=='Menu')
         {
          var menu_array=[];
          menuno++;
          menuincr;

          description_array_group.push(ss);


          if(layout_add=='0')
              {

                
                var tag_arr=menu_array;
                var array2 = ['Item(text layer)','Description(text layer)','Price(text layer)','Discount(text layer)'];
                var foo_t = [];
                var i = 0;
                jQuery.grep(array2, function(el) {
                  if (jQuery.inArray(el, tag_arr) == -1) foo_t.push(el);
                  i++;
                });  
                  //alert(foo_tag)                

                  if(foo_t !='')
                  {
                    ///alert('blk')
                    menufront_array.push('- ['+ss+'] design block: at least one Menu layer is required (text layer)');




                    errorcount++;


                  }

 



                }


          var duplication_menu_layer=[];
          
          for(var i=0;i<layout_add;i++)
          {
            var t=dataa['children'][k]['children'][i]['name'];
                    //.replace(/\s+/g, '');
                    var fg = t.replace(/\s+/g, '');

                    var avoid = "*"

                    var test=fg.replace(avoid, '');

                    var size=dataa['children'][k]['children'][i]['text']; 

                    var checkk=dataa['children'][k]['children'][i]['type'];


                    if(checkk.trim()=='group')
                    {

                      $(".divhide").css('display', 'none');
                      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Invalid format in menu block.</label></div>');

                      $('.tti').css('display', 'none');
                      $('.progress-bar').css('display', 'none');
                      $('.status').css('display', 'none');
                      $('.divhide').css('display', 'none');
                      document.getElementById('rest').reset();


                          //return false;
                          errorcount++;

                        } 

                        if(size ==undefined)
                        {

                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt 
                            (0).toUpperCase() + txt.substr(1).toLowerCase();});
                          menu_array.push(s.trim()+'(image layer)');
                          duplication_menu_layer.push(s.trim()+'(image layer)');

                        }
                        else
                        {
                          var s=test.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          menu_array.push(s.trim()+'(text layer)');
                          duplication_menu_layer.push(s.trim()+'(text layer)');



                          var length=dataa['children'][k]['children'][i]['text']['value'].length;
                      //console.log(s);
                      if(s.trim()=='Title')
                      {
                        if(length > 60)
                        {
                          $(".divhide").css('display', 'none');
                          //$(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [60] characters or less.</label></div>');

                          //var menu_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [60] characters or less';

                    var menu_chae='- '+ss+' design Block >> '+s.trim()+':  60 characters max';    


                          character_create_error_Description.push(menu_chae);

                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $('.divhide').css('display', 'none');
                          document.getElementById('rest').reset();

                        //  return false;
                        errorcount++;

                      }

                    }
                    else if(s.trim()=='Description')
                    {
                      if(length > 100)
                      {
                        $(".divhide").css('display', 'none');
                        //$(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- ['+s.trim()+'] Text layer in [menu'+parag+'] design block must be [100] characters or less.</label></div>');

                      //  var mennu_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [100] characters or less';

                    var mennu_chae='- '+ss+' design Block >> '+s.trim()+':  100 characters max';    


                        character_create_error_Description.push(mennu_chae);


                        $('.tti').css('display', 'none');
                        $('.progress-bar').css('display', 'none');
                        $('.status').css('display', 'none');
                        $('.divhide').css('display', 'none');
                        document.getElementById('rest').reset();


                          //return false;
                          errorcount++;


                        }
                      }
                      else if(s.trim()=='Price' || s.trim()=='Discount')
                      {
                        if(length > 10)
                        {
                          $(".divhide").css('display', 'none');
                          

                          //var mennu_chae='- ['+s.trim()+'] Text layer in ['+ss+'] design block must be [10] characters or less';

                    var mennu_chae='- '+ss+' design Block >> '+s.trim()+':  10 characters max';   


                          character_create_error_Description.push(mennu_chae);



                          $('.tti').css('display', 'none');
                          $('.progress-bar').css('display', 'none');
                          $('.status').css('display', 'none');
                          $('.divhide').css('display', 'none');
                          document.getElementById('rest').reset();


                          //return false;
                          errorcount++;

                        }
                      }



                    }  

                    

                  }

                  // console.log(menu_array)

                  if(duplication_menu_layer!='')
                  {
                    //console.log(duplicate_creative_layer)
                    var teslayertag=duplication_menu_layer;
                    var compduplicatt=find_duplicate_in_array(teslayertag);
        console.log(compduplicatt);

        var ellsyer = $.map(compduplicatt, function(val, i) {
          return val;
        });


        var v=ellsyer.length;


                    for(var l=0; l<v;l++)
                    {
                      ellsyer[l];

                    //  console.log(ellsyer[l])

                      // if(ellsyer[l]=='Item'+l+'(text layer)' || ellsyer[l]=='Description'+l+'(text layer)' || ellsyer[l]=='Price'+l+'(text layer)' || ellsyer[l]=='Discount'+l+'(text layer)'  ) 
                      // {
                        //alert(ellsyer[l]);

                        var duplit_comp='- ['+ss.toUpperCase()+'] design block >> '+ellsyer[l]+': Duplicate';

                        // var duplit_comp='- [CREATIVE CONTENT] design block >> '+ellsyer[l]+': Duplicate';

                        duplicat_layer.push('<br>'+duplit_comp);

                      // }                      


                    }

      
      }


      var mnu_arr=menu_array;
      var textarea = $('textarea');
    var words = ['Item1(text layer)','Description1(text layer)','Price1(text layer)','Discount1(text layer)','Item2(text layer)','Description2(text layer)','Price2(text layer)','Discount2(text layer)','Item3(text layer)','Description3(text layer)','Price3(text layer)','Discount3(text layer)','Item4(text layer)','Description4(text layer)','Price4(text layer)','Discount4(text layer)','Item5(text layer)','Description5(text layer)','Price5(text layer)','Discount5(text layer)','Item6(text layer)','Description6(text layer)','Price6(text layer)','Discount6(text layer)','Item7(text layer)','Description7(text layer)','Price7(text layer)','Discount7(text layer)','Item8(text layer)','Description8(text layer)','Price8(text layer)','Discount8(text layer)','Item9(text layer)','Description9(text layer)','Price9(text layer)','Discount9(text layer)','Item10(text layer)','Description10(text layer)','Price10(text layer)','Discount10(text layer)','Item11(text layer)','Description11(text layer)','Price11(text layer)','Discount11(text layer)','Item12(text layer)','Description12(text layer)','Price12(text layer)','Discount12(text layer)','Item13(text layer)','Description13(text layer)','Price13(text layer)','Discount13(text layer)','Item14(text layer)','Description14(text layer)','Price14(text layer)','Discount14(text layer)','Item15(text layer)','Description15(text layer)','Price15(text layer)','Discount15(text layer)','Item16(text layer)','Description16(text layer)','Price16(text layer)','Discount16(text layer)','Item17(text layer)','Description17(text layer)','Price17(text layer)','Discount17(text layer)','Item18(text layer)','Description18(text layer)','Price18(text layer)','Discount18(text layer)','Item19(text layer)','Description19(text layer)','Price19(text layer)','Discount19(text layer)','Item20(text layer)','Description20(text layer)','Price20(text layer)','Discount20(text layer)'];
    
   
        var text =mnu_arr;
        var menu_new_validation=[];
        
        var cont_mnu=0;
        for (var i =  0, len = words.length; i < len; i++) {
            if(text.indexOf(words[i]) > -1){
                menu_new_validation.push(words[i]);
            }

              
        }


     // alert(menu_array.length)
        var menu_length=menu_new_validation.length;

        var totl=menu_array[1].length + 1;
       // alert(totl)
        var nbOcc = 0;


          for(var l=1;l<totl;l++)
          {
            

            var text = 'Item'+l+'(text layer)';


            if(jQuery.inArray(text, menu_new_validation) != -1) {
              nbOcc++;

            } 


          }



//console.log(nbOcc+'  mehul')

var itemcount=nbOcc;

       
            //console.log(itemcount)

          
            var wordss =menu_new_validation;


            
              for(var b=1;b<=itemcount;b++)
              {
                
                
                var text = 'Item'+b+'(text layer)';


                if(jQuery.inArray(text, wordss) != -1) {
                      
                    } else {
                      //console.log(text+"is NOT in array");
                      menufront_array.push('- ['+ss+'] design block >> '+text+': missing');
                    } 

                 var text1='Description'+b+'(text layer)';    

                 if(jQuery.inArray(text1, wordss) != -1) {
                      
                    } else {
                      //console.log(text1+"is NOT in array");
                      menufront_array.push('- ['+ss+'] design block >> '+text1+': missing');

                    } 


                 var text2='Price'+b+'(text layer)';

                 if(jQuery.inArray(text2, wordss) != -1) {
                      
                    } else {
                      //console.log(text2+"is NOT in array");
                      menufront_array.push('- ['+ss+'] design block >> '+text2+': missing');

                    } 


                 var text3='Discount'+b+'(text layer)';

                 if(jQuery.inArray(text3, wordss) != -1) {
                    
                    } else {
                      //console.log(text3+"is NOT in array");
                      menufront_array.push('- ['+ss+'] design block >> '+text3+': missing');

                    } 



              }



             menuincr++;



         }



        }
        catch(err) {
          $("#frontimagestore").empty();
          $(".divhide").css('display', 'none');
          $("#frontimagestore").empty();
          $(".errormessage" ).html(" ");

          var path =newimage; 

          $.ajax({  
            url:"<?php echo base_url() ?>index.php/admin/template/delete_psd_file",  
            type:"POST",  
            data:{path:path},  
            success:function(res){  
              //console.log('psd file delete'); 
            }  
          });             
          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- This psd. file is corrupted or has wrong layer format. please correct the issue and try again.</label></div>');

          $('.tti').css('display', 'none');
          $('.progress-bar').css('display', 'none');
          $('.status').css('display', 'none');
          $('.divhide').css('display', 'none');       
          document.getElementById('rest').reset();

          //return false;
          errorcount++;

        }

      }

//alert(contact);
        if(description_array_group!='')
        {

var descduplicatt=find_duplicate_in_array(description_array_group);
        //console.log(compduplicatt);
        var ellsyerDescr = $.map(descduplicatt, function(val, i) {
          return val;
        });

        var vf=ellsyerDescr;
        //alert(vf)
        if(vf !='0')
        {

        DuplicatBlock.push(vf);
        }

        }




     // DuplicatBlock
     
     var removecreative=[];
     var misscreative=[];
     var misscompany=[];
     var misscontact=[];
     var complayer=[];
     var complayers=[];
     var tagnewlayer=[];
     var contactarrayfront=[];
     var paragraph_layer=[];
     var descaription_layer=[];
     var menu_layer=[];
     var creative_layer=[];
////charcter max error
var chrerror_tag=[];
var chrerror_desc=[];

  //alert(tag_array)
//alert(character_create_error_Description)

if(creativ_array!='')
{
  var cretilyer=creativcont_layer();
  //alert(comlayer)
  creative_layer.push(cretilyer);

}

if(tagnewarray!='')
{
  var tagge=tag_layer();
  tagnewlayer.push(tagge);

}

if(paragrphpfront_array!='')
{
  var parg=paragrphpfront_array;
  paragraph_layer.push(parg);

}
if(descariptionfront_array!='')
{
  var desc=descariptionfront_array;
  descaription_layer.push(desc);

}

if(menufront_array!='')
{
  //var menu=menufront_array;
//  menu_layer.push(menu);


  var menuu = $.map(menufront_array, function(val, i) {
      return "<br>"+val;
    });

      
      menu_layer.push(menuu);


}




if(comp_array != '')
{
  
  var comlayer=mycomp_layer();
  //alert(comlayer)
  complayers.push(comlayer);
}

if(contact_array !='')
{
    /////pending
    //alert(contact_array)
    //alert('contact')
    var contarry=mycont_layer();
    contactarrayfront.push(contarry);

  }

  if(comp=='0')
  {

    var cmp= mycomp();
    misscompany.push(cmp);

  }

  if(contact=='0')
  {
    //alert()
    var cnt=mycontact();
    misscontact.push(cnt);

  }

  if(character_create_error_tag!='')
  {
    var char_tag=character_create_error_tag;
    chrerror_tag.push(char_tag);
  }

  if(character_create_error_Description!='')
  {

    var eldescarrasuy = $.map(character_create_error_Description, function(val, i) {
      return "<br>"+val;
    });

      
      chrerror_desc.push(eldescarrasuy);

    }


    if(creativ=='0')
    {

      if(selValue_creative=='1')
      {

        var compnm='Creativeyees';
        misscreative.push(compnm);
        errorcount++;
      }

    }

    if(selValue_creative=='0')
    {

      if(creativ !='0')
      {

        var compnm='Creativeno';
        removecreative.push(compnm);
        errorcount++;

      }
    }


    var n=groupname_validation.length;
      //alert(n)
      var group2 = ['Company','Contact','Creativecontent','Description','Paragraph','Tag','Image'];
      var foo_group = [];
      var i = 0;
      

      for(i=0;i<n;i++)
      {

        var el=groupname_validation[i];

      //console.log(el)

      if (el == 'Company' || el == 'Contact' || el == 'Creativecontent' || el.match(/Description/) == 'Description' || el.match(/Paragraph/) == 'Paragraph' || el == 'Tag' || el =='Image' || el.match(/Menu/) =='Menu') {        

      }
      else
      {           
        foo_group
        foo_group.push(el);           

      }

    }

    ///Top Of Message

    var tru=jQuery.isEmptyObject(foo_group) //true



      if (tru==false || DuplicatBlock !='' || removecreative !='' || misscreative !='' || misscompany !='' || misscontact !='') 
      {
        foo_group = foo_group.toString();

        foo_group = foo_group.replace(/,/g, ", ");


        $(".divhide").css('display', 'none');


        $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;"> ***Design Block Error(s):<br></label></div>');

        if(foo_group!='')
        {

          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;">  - ['+foo_group+']: INVALID design block name(s).</label></div>');
        }

        if(DuplicatBlock!='')
        {
          //alert(  DuplicatBlock)
          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;">- ['+DuplicatBlock+'] design block(s) have the same name (each design block must have a unique name).</label></div>');
        }

        if(removecreative!='')
        {

          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;">- Creative design block is extra (to be removed).</label></div>');
        }
        if(misscreative!='')
        {

          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;">- Creative design block is missing.</label></div>');
        }
        if(misscompany!='')
        {

          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;">- Company Design block is missing (front side).</label></div>');
        }

        if(misscontact!='')
        {

          $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;">- Contact Design block is missing (front side).</label></div>');
        }


        $('#image_preview1').css('display','block');
        $('#Uploadatemplate').modal('show');
        $('.tti').css('display', 'none');

        $('.tti').css('display', 'none');
        $('.progress-bar').css('display', 'none');
        $('.status').css('display', 'none');
        document.getElementById('rest').reset();

        errorcount++;


      }


//alert(duplicat_layer)
    if(duplicat_layer!='' || duplicat_taglayer!='')
    {
      $(".divhide").css('display', 'none');
      //alert(duplicat_layer)
      //alert(duplicat_taglayer)

      $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;"> ***Duplicate Layer(s): <br></label></div>');

      if(duplicat_layer!='')
      {
        $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;margin: -18px 0px 0px 0;">'+duplicat_layer+'.</label></div>');

      } 
      if(duplicat_taglayer!='')
      {
        $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 21px;margin: -18px 0px 0px 0;">'+duplicat_taglayer+'.</label></div>');

      } 
      $('#image_preview1').css('display','block');
              $('#Uploadatemplate').modal('show');
              $('.tti').css('display', 'none');

              $('.tti').css('display', 'none');
              $('.progress-bar').css('display', 'none');
              $('.status').css('display', 'none');
              document.getElementById('rest').reset();

              errorcount++;
      

    }




      

            //////layer validation added

            if(complayers!='' || tagnewlayer!='' || contactarrayfront !='' || paragraph_layer !='' || descaription_layer!='' || menu_layer!='' || creative_layer!='')
            {

              $(".divhide").css('display', 'none');


              $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;"> ***Missing Layer(s):</label></div>');


              if(complayers!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -14px 0px 0px 8px;"><label style="padding: 0px 0 0 21px;"> '+comlayer+'.</label></div>');
              }
              if(creative_layer!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -14px 0px 0px 8px;"><label style="padding: 0px 0 0 21px;"> '+creative_layer+'.</label></div>');
              }
              
              if(contactarrayfront!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -21px 0px 0px 8px;"><label style="padding: 0px 0 0 21px;"> '+contactarrayfront+'.</label></div>');
              }
              if(tagnewlayer!='')
              {
                    //tagnewarray.push('- [TAG] design block >> Tag(text layer): missing');
                $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 29px;">- [TAG] design block >> Tag(text layer): missing.</label></div>');
              }
              if(paragraph_layer!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -21px 0px 0px 0px;"><label style="padding: 0px 0 0 29px;">'+paragraph_layer+'.</label></div>');
              }
              if(descaription_layer!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -21px 0px 0px 0px;"><label style="padding: 0px 0 0 29px;">'+descaription_layer+'.</label></div>');
              }
              if(menu_layer!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -21px 0px 0px 0px;"><label style="padding: 0px 0 0 29px;">'+menu_layer+'.</label></div>');
              }

              $('#image_preview1').css('display','block');
              $('#Uploadatemplate').modal('show');
              $('.tti').css('display', 'none');

              $('.tti').css('display', 'none');
              $('.progress-bar').css('display', 'none');
              $('.status').css('display', 'none');
              document.getElementById('rest').reset();

              errorcount++;


            } 



            if(chrerror_tag!='' |chrerror_desc!='')
            {
              $(".divhide").css('display', 'none');


              $(".errormessage" ).append('<div style="color:red;margin: 7px 0px 0px 0;"><label style="padding: 0px 0 0 5px;"> ***Character Count Error(s):</label></div>');

              if(chrerror_tag!='')
              {
                $(".errormessage" ).append('<div style="color:red;margin: -17px 0px 0px 0px;"><label style="padding: 0px 0 0 29px;">'+chrerror_tag+'.</label></div>');

              }
              if(chrerror_desc!='')
              {

                


                $(".errormessage" ).append('<div style="color:red;margin: -11px 0px 0px 0px;"><label style="padding: 0px 0 0 29px;margin: -7px 0 0 0px;">'+chrerror_desc+'.</label></div>');
              }




              $('#image_preview1').css('display','block');
              $('#Uploadatemplate').modal('show');
              $('.tti').css('display', 'none');

              $('.tti').css('display', 'none');
              $('.progress-bar').css('display', 'none');
              $('.status').css('display', 'none');
              document.getElementById('rest').reset();

              errorcount++;

            }     



            function creativcont_layer()
            {

              if(creativ_array!='')
              {

                var creative=creativ_array;
                var array2 = ['Intro(text layer)','Title(text layer)','Body(text layer)','Logo(image layer)'];
                var foo_creativee = [];
                var i = 0;
                jQuery.grep(array2, function(el) {

                  if (jQuery.inArray(el, creative) == -1) foo_creativee.push('- [CREATIVE CONTENT] design block >> '+el+': missing');

                  //'- [CONTACT] design block >> '+el+': missing'


                  i++;

                }); 

              }


              if(foo_creativee!='')
              {

                if(selValue_creative=='1')
                {

                  var el = $.map(foo_creativee, function(val, i) {
                    return "<br>" + val;
                  });

                // $(".divhide").css('display', 'none');
                // $(".errormessage" ).append('<div style="color:red;"><label style="padding: 0px 0 0 5px;">- Creative Content  Design Block Is Missing The Following Layer(s):'+el.join(", ")+'.</label></div>');

                var creativenewchange=el.join(", ");

                return creativenewchange;

            //return false;
            errorcount++;
          }
          
      }

    }     



    function mycont_layer()
    {
      if(contact_array !='' )
      {


        var contact=contact_array;
        //console.log(contact_array);

        var array2 = ['Cnetwork(text layer)','Cnetwork(image layer)','Mobile1(text layer)','Mobile1(image layer)','Mobile2(text layer)','Landline1(text layer)','Landline1(image layer)','Landline2(text layer)','Fax1(image layer)','Fax1(text layer)','Fax2(text layer)','Address1(text layer)','Address2(text layer)','Address1(image layer)','Email1(text layer)','Email2(text layer)','Email1(image layer)','Url1(text layer)','Url2(text layer)','Url1(image layer)','Person1(text layer)','Position1(text layer)','Person2(text layer)','Position2(text layer)'];
        var foo_contact = [];
        var i = 0;
        jQuery.grep(array2, function(el) {

          if (jQuery.inArray(el, contact) == -1) foo_contact.push('- [CONTACT] design block >> '+el+': missing');


          i++;

        });

      }

      //console.log(array2)
      if(foo_contact!='')
      {
        var elcont = $.map(foo_contact, function(val, i) {
          return "<br>" + val;
        });

        var compnewchange=elcont.join(", ");

        return compnewchange;



      }



    }

    function tag_layer()
    {
      var tagtest='TAG design block: at least one tag layer is required (text layer)';
      return tagtest;
    }



    function mycomp()
    {
      if(comp=='0')
      {
        var test='true';
                        //return false;
                        errorcount++;

                        return test;

                      }
                     }

                     function mycontact()
                     {
                      if(contact=='0')
                      {
                        var test='true';
                        //return false;
                        errorcount++;

                        return test;



                      }
                     }




                     function mycomp_layer()
                     {
                      if(comp_array!='')
                      {

                        var company=comp_array;
                        var array2 = ['Slogan(text layer)','Company(text layer)','Logo(image layer)'];
                        var foo = [];
                        var i = 0;
                        jQuery.grep(array2, function(el) {

                          if (jQuery.inArray(el, company) == -1) foo.push('- [COMPANY] design block >> '+el+': missing');


                          i++;

                        });

                      }

                      if(foo!='')
                      {
                        var elcmp = $.map(foo, function(val, i) {
                          return "<br>" + val;
                        });


                        var compnewchange=elcmp.join(", ");

                        return compnewchange;


                      }

                     }






                     if(menuno=='0')
                     {}
   //  console.log(groupname_validation);   



      //console.log(foo_group);
      


      $('#tagnoo').html(tag);
      $('#tagno').val(tag);

      $('#Bdesriptionnoo').html(summ);
      $('#Bdesriptionno').val(summ);

      $('#paragraphnoo').html(parag);
      $('#paragraphno').val(parag);

      $('#menunoo').html(menuno);
      $('#menuno').val(menuno);

      $('#mainimagenoo').html(image);
      $('#mainimageno').val(image);


           // console.log(sum)
           $('.tti').css('display', 'block');

           $(".loader").css("display", "none");
          // $('#Uploadatemplate').modal('hide');
          $( "#Folding" ).keyup(); 

          var result = data.split('.');
          var img_new_name=result[0];
                 // alert(tmp)
                 // alert('s')
                 loadmoreTemplate(img_new_name,sum,data,dataa);
                 $("#Print_Size").parent().parent().find('.validationn').remove();

                 var scriptt = document.createElement("script");
                 scriptt.type = "text/javascript";
                 scriptt.src = "http://cflyer.com/lead/js/template/magiczoomplus.js";
                 document.head.appendChild(scriptt);

                 var style = document.createElement("style");
                 style.type = "text/css";
                 style.src = "http://cflyer.com/lead/css/template/magiczoomplus.css";
                 document.head.appendChild(style); 

             }

      
      //  console.log(errorcount)

      if(errorcount != 0)
      {
        $(".divhide").css('display', 'none');
        $('#Uploadatemplate').modal('show');
        $(".loader").css("display", "none");

                //$('#Uploadatemplate').modal('hide');
                $( "#Folding" ).keyup(); 
                $('#image_preview1').css('display','block');
                $( "#Folding" ).keyup(); 

                $('.tti').css('display', 'none');
                $('.progress-bar').css('display', 'none');
                $('.status').css('display', 'none');
                errortimecallF();
                // console.clear();


                return false;

              }


              var blk=$("#colorPicker1").val();

              if(blk=='')
              {

                // $('#colorPicker1').jPicker();
                // $('#colorPicker2').jPicker();
                // $('#colorPicker3').jPicker();
                // $('#colorPicker4').jPicker();
                // $('#colorPicker5').jPicker();
                // $('#colorPicker6').jPicker();

                // $('#colorPicker500').jPicker();
                // $('#colorPicker501').jPicker();
                // $('#colorPicker502').jPicker();
                // $('#colorPicker503').jPicker();
                // $('#colorPicker504').jPicker();
                // $('#colorPicker505').jPicker();
              }



              $('#Uploadatemplate').modal('hide');
              $( "#Folding" ).keyup(); 
              $('#image_preview1').css('display','block');
              $( "#Folding" ).keyup(); 

              $( ".modal-backdrop fade in" ).remove();


              var colorcode=data;

              var s='color='+ colorcode ;
              alert(colorcode)
              $.ajax({
                url: "color_detection",
                type: "POST", 
                data:s,
                cache: false, 
                success: function(data)
                { 

                  var jvalue = data;

                  $.ajax({
                    url: "<?php echo base_url() ?>index.php/admin/template/details",
                    type: "POST", 
                    data:'jadata='+data,
                    cache: false, 
                    success: function(data2)
                    { 
                  //alert(data2)
                  var simple =data2;
                  var arr = simple.split('=');

                  $('#colorPicker1').val(arr[0]).keyup();
                  $('#colorPicker2').val(arr[1]).keyup();
                  $('#colorPicker3').val(arr[2]).keyup();
                  $('#colorPicker4').val(arr[3]).keyup();
                  $('#colorPicker5').val(arr[6]).keyup();
                  $('#colorPicker6').val(arr[5]).keyup();

              },
              error: function(xhr, desc, err) {
                $(".loader").css("display", "none");

                $('#Uploadatemplate').modal('hide');
                $( "#Folding" ).keyup(); 
                $('#image_preview1').css('display','block');

                $(".errormessagee_w" ).html(" ");

                $(".errormessagee_w" ).append('<div style="color:#ea1c67"><label style="padding: 0px 0 0 5px;">Note: if color not detect than select manaullay!.</label></div>');

              }
          });


                  var frontimage =$("#front_side_image").val();
               // $("#frontimagestore").closest("zoomdata").remove();

               $("#template_reload").html("Re-load Template");

               if(frontimage=='')
               {
                $("#frontimagestore").empty();
                var url='<?php echo base_url() ?>'+data; 
                $('#image_preview1').css('display','block');              

                $("#frontimagestore").after().append("<a href='"+url+"' id='Zoom-1' class='MagicZoom zoomdata' data-options='zoomCaption: top; zoomHeight:400px; zoomWidth: 500px; zoomDistance: 30; expand: fullscreen; expandZoomOn: always;' style='width:  100px;'><img class='img_temp' id='image_preview1' src='"+url+"' ></a>");

                $('#front_side_image').val(url);
                $('#image_preview1').css('display','block');




               }
               else
               {
                $("#frontimagestore").empty();

                var url='<?php echo base_url() ?>'+data;

                $("#frontimagestore").after().append("<a href='"+url+"' id='Zoom-1' class='MagicZoom zoomdata' data-options='zoomCaption: top; zoomHeight:400px; zoomWidth: 500px; zoomDistance: 30; expand: fullscreen; expandZoomOn: always;' style='width:  100px;'><img class='img_temp' id='image_preview1' src='"+url+"' ></a>");

                $('#front_side_image').val(url);
                $('#image_preview1').css('display','block');

                var scriptt = document.createElement("script");
                scriptt.type = "text/javascript";
                scriptt.src = "http://cflyer.com/lead/js/template/magiczoomplus.js";
                document.head.appendChild(scriptt);


               }

           }

       });

          });



}
else
{
  $('#image_preview1').css('display','block');
  $('#Uploadatemplate').modal('hide');
  $( "#Folding" ).keyup(); 
                // swal({"Error","Unsupported File!", "error",showConfirmButton: true});
              //  swal({type: 'error',title: 'Unsupported File!',showConfirmButton: true});
              $(".errormessage" ).html(" ");

              $(".errormessage" ).append('<div style="color:red"><label style="padding: 0px 0 0 5px;">- Unsupported file!.</label></div>');



          } 



      }).error(function (e) {


        $('#image_preview1').css('display','block');
        $('#Uploadatemplate').modal('show');
        $('.tti').css('display', 'none');
  //$( "#Folding" ).keyup(); 
                // swal({"Error","Unsupported File!", "error",showConfirmButton: true});
              //  swal({type: 'error',title: 'Unsupported File!',showConfirmButton: true});
              $(".errormessage" ).html(" ");

              $(".errormessage" ).append('<div style="color:red"><label style="padding: 0px 0 0 5px;">- Internal server error.</label></div>');



          });


  }
  else
  {

    $(".errormessage" ).html(" ");


    $(".errormessage" ).append('<div style="color: red;margin: 17px 0 0 0;"><label style="padding: 0px 0 0 5px;">- Unsupported file!</label></div>');





  }

});


 var showChar = 20;
 var ellipsestext = "...";
 var moretext = "more";
 var lesstext = "less";
 var counter = 1;
 var hideshow=1;

 function loadmoreTemplate(imge_name,sum,data){

  var path =data;  
  var tmp=0;
  $.ajax({  
    
    url:"imgeresoltion",
    type:"POST",  
    data:{path:path},  
    success:function(ress){  
      $("#Resolution_label").html("");

      $("#Resolution_label" ).append('<div><label for="name">'+ress+'</label></div>');

      $("#Resolutionn").val(ress);
      $("#front_size_res").val(ress);
      $( "#front_size_res" ).keyup(); 


             //   }  
             // });

             var reso= $("#front_size_res").val();


             var height=dataa['document']['height'] / reso;
             var width=dataa['document']['width'] / reso;

             

              //var call1=cal2 *  0.0104;
              var  h = height.toFixed(3);
              var  w = width.toFixed(3);

              $('#printsizeinches').html("");
              $("#Print_Size").val(w+" X "+h+" inches");


              $("#printsizeinches" ).append('<div><label for="name">'+w+' X '+h+' inches</label></div>');






              var layoutt=sum+1;
              var reso= $("#front_side_imagee").val();
   // alert(reso)

   var path =reso; 

   $.ajax({  
    url:"<?php echo base_url() ?>index.php/admin/template/imgeresoltion",  
    type:"POST",  
    data:{path:path},  
    success:function(ressd){  
                 // alert(ress)
                 
             }  
         });



   jQuery('script[src="<?php echo base_url() ?>asstes/js/test.js"]').remove();

   var img_name_store=layoutt;
   var kj=0;
   var kjj=0;
   var bind=1;
   var newcounter=0;

   var bottom='';

    // var layerlength = new Array();
    for(var j=st;j<bufsize;j++){

      if(bufsize == 10){
        layoutt;
        $("#append_TG_common").css("height","350px");
      }

      if(j < step){

        //var str = " a b    c d e   f g   ";
        var str=dataa['children'][j]['name'];

        var fg = str.replace(/\s+/g, '');

        var avoid = "*"

        var groupname=fg.replace(avoid, '');
        
        var layerlength=dataa['children'][j]['children'].length;



        var newTextBoxDiv = $(document.createElement('div')).attr("class", 'TG_common subsubdynamic dynamictable');

        $("#append_TG_common").append(newTextBoxDiv);
      //  console.log("HELLO");
      newTextBoxDiv.html("<input type='text' name='totallength[]' value='"+layerlength+"' hidden><input type='text' name='totalgroupname[]' value='"+groupname+"' hidden> <div class='TG_common_data'><h4 class='foldable_titlee' data-class='layout_"+hideshow+"' style=' text-transform: capitalize;'>"+ groupname+"<i class='fa fa-folder' aria-hidden='true'></i></h4><div id='layout_"+hideshow+"' class='TG_common_datalist'><div class='DesignBlocks_table'><table class='table table-striped table-bordered'><thead><tr><th>Sample</th><th>Layer Name</th><th>Size<span style='color: red;font-size: 19px;position: absolute;top: 60px;''> * </span> <span style='margin: 0 0px 0 6px;    font-size: 11px;'>(W x H in inches):</span></span></th><th>Replaceable</th><th>Remark</th></tr></thead><tbody id='newlayour_addBoxesGroup"+j+"'></tbody></table></div></div></div></div>");



          // dynamic_new();


          var layout=dataa['children'][j]['children'].length; 

          for (var i =0; i< layout ; i++) {

            var strr=dataa['children'][j]['children'][i]['name'];

            var layername = strr.replace(/\s+/g, '');


            var size=dataa['children'][j]['children'][i]['text'];

            var content = layername;

            if(content.length > showChar) {

              var c = content.substr(0, showChar);
              var h = content.substr(showChar-1, content.length - showChar);

              var html = c + ellipsestext;


            }
            else
            {
              html=layername;
            }


            var size1='';
            var parg='';
            var color=''; 
            var count_image=img_name_store;
            var bottom='';
            var height='';
            var left='';
            var right='';
            var top='';
            var width='';
            /////////////
            var color='';
            var fontname='';
            var sizes='';
            var alignment='';

            if(size ==undefined)
            {
            //size1='';
            parg='';
            color='';
            fontname='';
            img='true';
            var imgcount=count_image;
            // size1=dataa['children'][j]['children'][i]['height']+' X '+dataa['children'][j]['children'][i]['width'];

            var cal1=dataa['children'][j]['children'][i]['height'];
            var cal2=dataa['children'][j]['children'][i]['width'];

            bottom=dataa['children'][j]['children'][i]['bottom'];
            height=dataa['children'][j]['children'][i]['height'];
            left=dataa['children'][j]['children'][i]['left'];
            right=dataa['children'][j]['children'][i]['right'];
            top=dataa['children'][j]['children'][i]['top'];
            width=dataa['children'][j]['children'][i]['width'];




               // var idres=$("#front_size_res").val();

               //  console.log(idres);
               // alert(ress)

               var call1=cal2 / ress;
               var call2=cal1 / ress;

               var w=call1.toFixed(3);
               var h=call2.toFixed(3);

               size1=w+' X '+h+' inches';

           }
           else
           {

            var size2h=dataa['children'][j]['children'][i]['height']/ress;
            var size2w=dataa['children'][j]['children'][i]['width']/ress;

            bottom=dataa['children'][j]['children'][i]['bottom'];
            height=dataa['children'][j]['children'][i]['height'];
            left=dataa['children'][j]['children'][i]['left'];
            right=dataa['children'][j]['children'][i]['right'];
            top=dataa['children'][j]['children'][i]['top'];
            width=dataa['children'][j]['children'][i]['width'];

            var size1=  size2w.toFixed(3)+' X '+size2h.toFixed(3);            

            //size1=size2.toFixed(3);

            parg=dataa['children'][j]['children'][i]['text']['value'];
            colorr=dataa['children'][j]['children'][i]['text']['font']['colors'][0];
            img='';
            var imgcount='';

            var color=rgb2hex("rgba("+colorr+")");

             fontname=dataa['children'][j]['children'][i]['text']['font']['name'];  
             sizes=dataa['children'][j]['children'][i]['text']['font']['sizes'][0]; 

            var alignment=dataa['children'][j]['children'][i]['text']['font']['alignment'][0];  

        }     

        var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'addBoxDiv' + text);
        if(img=='true')
        {

        //  newTextBoxDiv.after().html('<td style="width:200px"><input type="text" name="img_counter'+jks+'" value="1" hidden ><a id="Zoom-1'+j+i+'" data-options="zoomCaption: top; zoomHeight:500px; zoomWidth: 500px; zoomDistance: 30; expand: fullscreen; expandZoomOn: always;" style="width: 100px !important;height: 100px!important;"  data-options="hint: once" class="MagicZoom" href="<?php echo base_url('upload/template_layerimg/')?>'+imge_name+imgcount+'.png"><img class="img_temp" style="width: 100px !important;height: 100px!important;" src="<?php echo base_url('upload/template_layerimg/')?>'+imge_name+imgcount+'.png?scale.height=500" alt=""/>    </a><input type="text" name="front_info[]" value="<?php echo base_url('upload/template_layerimg/')?>'+imge_name+imgcount+'.png" hidden></td><td><div style="width: 185px;margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+html+'</label></div><input type="text" readonly name="layername[]" value="'+html+'" hidden></td><td><div style="width: 185px; margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+size1+'</label></div><input type="text" name="group_name[]" value="'+groupname+'" hidden><div class="alldropdwon"><input type="text" name="front_size[]" value="'+size1+'" hidden></div></td><td><div class="Basicinforadio alldropdwonn"><input id="stepcheckyes0'+j+i+'" type="radio" name="REPLICABLE'+kj+'" checked value="1" ><label for="stepcheckyes0'+j+i+'">Yes</label>&nbsp;&nbsp;<input id="stepcheckno0'+j+i+'" type="radio" name="REPLICABLE'+kj+'" value="0" ><label for="stepcheckno0'+j+i+'">No</label></div></td><td><input type="text" name="remark[]"></td><td hidden><input type="text" name="bottom[]" value="'+bottom+'" hidden><input type="text" name="height[]" value="'+height+'" hidden><input type="text" name="left[]" value="'+left+'" hidden><input type="text" name="right[]" value="'+right+'" hidden><input type="text" name="top[]" value="'+top+'" hidden><input type="text" name="width[]" value="'+width+'" hidden><input type="text" name="imagetrue[]" value="1" hidden></td> </div>');



          var s='#thumb'+counter;
          var ss='#thumbb'+counter;
          kjj++;



        }
        else
        {

        //  newTextBoxDiv.after().html('<td style="width:200px;"><div style="display: inline-flex;"><img style="border-radius: 8px;width: 30px;height: 30px;background-color: lightgrey;" src="<?php echo base_url('upload/profiles/100.png') ?>" ><input type="text" name="front_info[]" value="<?php echo base_url('upload/profiles/100.png') ?>" hidden><p style="margin-left:  10px;margin-top: 5px; white-space: nowrap;width: 132px;overflow: hidden;    text-overflow: ellipsis;">'+parg+'</p></div></td><td><div style="width: 185px;   margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+html+'</label></div><input type="text" name="layername[]" readonly value="'+html+'"hidden></td><td><div style="width: 185px;margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+size1+' inches</label></div><input type="text" name="group_name[]" value="'+groupname+'" hidden><div class="alldropdwon"><input type="text" name="front_size[]" value="'+size1+' '+'inches" hidden></div></td><td><div class="Basicinforadio alldropdwonn"><input id="stepcheckyes0'+j+i+'" type="radio" name="REPLICABLE'+kj+'" checked value="1"><label for="stepcheckyes0'+j+i+'">Yes</label>&nbsp;&nbsp; <input id="stepcheckno0'+j+i+'" type="radio" name="REPLICABLE'+kj+'" value="0" ><label for="stepcheckno0'+j+i+'">No</label></div></td><td><input type="text" name="remark[]"></td><td hidden><input type="text" name="bottom[]" value="'+bottom+'" hidden><input type="text" name="height[]" value="'+height+'" hidden><input type="text" name="left[]" value="'+left+'" hidden><input type="text" name="right[]" value="'+right+'" hidden><input type="text" name="top[]" value="'+top+'" hidden><input type="text" name="width[]" value="'+width+'" hidden><input type="text" name="color[]" value="'+color+'" hidden><input type="text" name="fontname[]" value="'+fontname+'" hidden><input type="text" name="sizes[]" value="'+sizes+'" ><input type="text" name="imagetrue[]" value="0" hidden><input type="text" name="textvalueresult[]" value="'+parg+'" hidden><input type="text" name="textalignment[]" value="'+alignment+'" hidden></td>  </div>');




        }





        $("p#hiddenshowid").hide();

        var mzOptions = {};
        var id='#newlayour_addBoxesGroup'+j; 
        newTextBoxDiv.appendTo(id);

        var templ_date='#datetimepickerr'+j+i;

        $("#paras"+kj).jPicker();

        $("jPicker").css('top','100px');
        $(templ_date).datetimepicker({
          format: 'dd/MM/yyyy hh:ii',
          autoclose: true,
        });

        image_picker(counter);
        var id_colorpiker='colorPicker1'+k;
        var idnew_colorpiker='color_picker1'+k;

        paras_color(id_colorpiker,idnew_colorpiker,color,counter);
        k++;
        kj++;
        bind++;
        counter++;
        img_name_store--;
        newcounter++;

        var s='#thumb'+counter;
        var ss='#thumbb'+counter;



        $('#thumb'+counter).click(function(){
                       //  console.log('yoyoy');    
                       $(s).change(function() {
                        readthumb1(this);
                       });
                       function readthumb1(input) {
                 // console.log('jakss')
                 if (input.files && input.files[0]) {
                            //  console.log('jakssasadasds')
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                // console.log('last step');
                                $(ss).attr('src', e.target.result);
                            }
                            reader.readAsDataURL(input.files[0]);
                        }
                    }
                });

    }

}

st++;
hideshow++;



}
bufsize += 5;



function image_picker1(counter)
{
            // var s='#thumb'+counter;
           //  var ss='#thumbb'+counter;
           var s='#thumb_back'+counter;
           var ss='#thumbb_back'+counter;


           $('#thumb'+counter).click(function(){
                        // console.log('yoyoy');    
                        $(s).change(function() {
                          readthumb1(this);
                        });
                        function readthumb1(input) {
                  //console.log('jakss')
                  if (input.files && input.files[0]) {
                            //  console.log('jakssasadasds')
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                // console.log('last step');
                                $(ss).attr('src', e.target.result);
                            }
                            reader.readAsDataURL(input.files[0]);
                        }
                    }
                });
       }


       function image_picker(counter)
       {
        var s='#thumb'+counter;
        var ss='#thumbb'+counter;

        $('#thumb'+counter).click(function(){
                        // console.log('yoyoy');    
                        $(s).change(function() {
                          readthumb1(this);
                        });
                        function readthumb1(input) {
                 // console.log('jakss')
                 if (input.files && input.files[0]) {
                            //  console.log('jakssasadasds')
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                // console.log('last step');
                                $(ss).attr('src', e.target.result);
                            }
                            reader.readAsDataURL(input.files[0]);
                        }
                    }
                });



       }

   }  
});


}


var jks=0;
function loadmoreTemplate_next(imge_name,sum,data){
  $( "#append_TG_common_nextt" ).html("");
  bufsizee =10;

  var path ='upload/template_psd/'+data;  
  var tmp=0;
  $.ajax({  
    url:"<?php echo base_url() ?>index.php/admin/template/imgeresoltion",  
    type:"POST",  
    data:{path:path},  
    success:function(ress){  

      var layoutt=sum+1;

      var kj=0;
      var img_name_store=layoutt;
      for(var j=stt;j < bufsizee;j++){

        if(bufsizee == 10){
          console.log('1');
          layoutt;
          $("#append_TG_common_nextt").css("height","350px");
          $("#append_TG_common_nextt").css("overflow-x","auto");
        }

        if(j < step){
          console.log('2');


          var groupname=dataa['children'][j]['name'];
          var layerlength=dataa['children'][j]['children'].length;

          var newTextBoxDiv = $(document.createElement('div')).attr("class", 'TG_common subsubdynamic');

          $("#append_TG_common_nextt").append(newTextBoxDiv);

          newTextBoxDiv.html("<h4 class='foldable_titlee' data-class='paras_"+stt+"'>" +  groupname + "<i class='fa fa-folder' aria-hidden='true'></i></h4><div id='paras_"+stt+"' class='TG_common_datalist'><div class='DesignBlocks_table'><table class='table table-striped table-bordered'><thead><tr><th>Sample</th><th>Layer Name</th><th>Size<span style='color: red;font-size: 30px;top: 55px;'>*</span> <span style='margin: 0 0px 0 6px;    font-size: 11px;'>(W x H in inches):</span></span></th><th>Replaceable</th><th>Remark</th></tr></thead><tbody id='newlayour_addBoxesGroup1"+j+"'></tbody></table></div></div>");


        //  $("#append_TG_common_nextt").append(newTextBoxDiv);


        var layout=dataa['children'][j]['children'].length; 
        
        var kl=0;
        var kjj=0;
        var newcounterr=0;

        for (var i =0; i< layout ; i++) {

          console.log('3');


          var layername=dataa['children'][j]['children'][i]['name'];
          var size=dataa['children'][j]['children'][i]['text'];

          var size1='';
          var parg='';
          var color='';

          var count_image=img_name_store;

          if(size ==undefined)
          {
            parg='';
           // color='';
           img='true';
           var imgcount=count_image;
           // size1=dataa['children'][j]['children'][i]['height']+' X '+dataa['children'][j]['children'][i]['width'];

           var cal1=dataa['children'][j]['children'][i]['height'];
           var cal2=dataa['children'][j]['children'][i]['width'];


           var call1=cal2 /  ress;
           var call2=cal1 /  ress;

           var w=call1.toFixed(3);
           var h=call2.toFixed(3);

           size1=w+' X '+h+' inches';


       }
       else{

          //size1=dataa['children'][j]['children'][i]['text']['font']['sizes'][0]; 

          var size2h=dataa['children'][j]['children'][i]['height']/ ress;
          var size2w=dataa['children'][j]['children'][i]['width']/ ress;

          var size1=  size2w.toFixed(3)+' X '+size2h.toFixed(3) +' inches'; 


          parg=dataa['children'][j]['children'][i]['text']['value'];
          colorr=dataa['children'][j]['children'][i]['text']['font']['colors'][0];
          img='';
          var imgcount='';

             // var color=rgb2hex("rgba("+colorr+")");

         }    



         var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'addBoxDiv' + text);

         if(img=='true')
         {
//newTextBoxDiv.after().html('<td style="width:100px"><input type="text" name="img_counterr'+jks+'" value="1" hidden ><a id="Zoom-1'+j+i+'" data-options="zoomCaption: top; zoomHeight:500px; zoomWidth: 500px; zoomDistance: 30; expand: fullscreen; expandZoomOn: always;" style="width: 100px !important;height: 100px!important;"  data-options="hint: once" class="MagicZoom" href="<?php echo base_url('upload/template_layerimg/')?>'+imge_name+imgcount+'.png"><img class="img_temp" style="width: 100px !important;height: 100px!important;" src="<?php echo base_url('upload/template_layerimg/')?>'+imge_name+imgcount+'.png?scale.height=500" alt=""/></a><input type="text" name="back_info[]" value="<?php echo base_url('upload/template_layerimg/')?>'+imge_name+imgcount+'.png" hidden></td><td><div style="width: 185px;margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+layername+'</label></div><input type="text" name="back_layername[]" value="'+layername+'" hidden></td><td><div style="width: 185px; margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+size1+'</label></div><input type="text" name="back_size[]" value="'+size1+'" hidden></td><td><div class="Basicinforadio alldropdwonn"><input id="stepcheckyes0'+j+i+'" type="radio" name="REPLICABLE_back'+kj+'" checked value="1" ><label for="stepcheckyes0'+j+i+'">Yes</label>&nbsp;&nbsp;<input id="stepcheckno0'+j+i+'" type="radio" name="REPLICABLE_back'+kj+'" value="0" ><label for="stepcheckno0'+j+i+'">No</label></div></td><td><input type="text" name="back_other_info[]" placeholder="Enter Remarks"><input type="text" name="group_name_back[]" value="'+groupname+'" hidden></td>');



          var s='#thumb_back'+counter;
          var ss='#thumbb_back'+counter;



         }
         else
         {
         // newTextBoxDiv.after().html('<td style="width:200px;"><div style="display: inline-flex;"><img style="border-radius: 8px;width: 30px;height: 30px;background-color: lightgrey;" src="<?php echo base_url('upload/profiles/100.png') ?>" ><input type="text" name="back_info[]" value="<?php echo base_url('upload/profiles/100.png') ?>" hidden><p style="margin-left:  10px;margin-top: 5px; white-space: nowrap;width: 132px;overflow: hidden;    text-overflow: ellipsis;">'+parg+'</p></div></td><td><div style="width: 185px;margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+layername+'</label></div><input type="text" name="back_layername[]" value="'+layername+'" hidden></td><td><div style="width: 185px; margin:  10px 0 0 0;padding: 10px 5px;px; */"><label>'+size1+'</label></div><input type="text" name="back_size[]" value="'+size1+'" hidden></td><td><div class="Basicinforadio alldropdwonn"><input id="sstepcheckyes0'+j+i+'" type="radio" name="REPLICABLE_back'+kj+'" checked value="1"><label for="sstepcheckyes0'+j+i+'">Yes</label>&nbsp;&nbsp; <input id="sstepcheckno0'+j+i+'" type="radio" name="REPLICABLE_back'+kj+'" value="0" ><label for="sstepcheckno0'+j+i+'">No</label></div></td><td><input type="text" name="back_other_info[]" placeholder="Enter Remarks"><input type="text" name="group_name_back[]" value="'+groupname+'" hidden></td>');



         }


         var id='#newlayour_addBoxesGroup1'+j; 
         newTextBoxDiv.appendTo(id);


         var templ_date='#datetimepicker'+j+i;

     // $("#colorback"+kj).jPicker();

     $("p#hiddenshowidd").hide();

     $(templ_date).datetimepicker({
      format: 'dd/MM/yyyy hh:ii',
      autoclose: true,
     });
         // image_picker1(counter);

         paras_color1(counter);
         k++;
         kj++;
         counter++;
         img_name_store--;
         jks++;
         kl++;

     }

 }

      //dipak_paras(stt);
      stt++;
  }
  bufsize += 5;

    // $('.foldable_titlee').on('click', function() {

    //   var mainboxshow = $(this).attr('data-class');             
    //   $('#' + mainboxshow).toggle();
    //   if($(this).children('i').hasClass('fa-angle-up'))
    //   {
    //     //console.log('1')
    //     $(this).children('i').removeClass('fa-angle-up');
    //     $(this).children('i').addClass('fa-angle-down');
    //   }
    //   else
    //   {
    //     //console.log('2')
    //     $(this).children('i').removeClass('fa-angle-down');
    //     $(this).children('i').addClass('fa-angle-up');
    //   }

    // 
  // }});
}});

}






  var rgb2hex = function (rgb) {
    rgb = Array.apply(null, arguments).join().match(/\d+/g);
    rgb = ((rgb[0] << 16) + (rgb[1] << 8) + (+rgb[2])).toString(16);

    // for (var i = rgb.length; i++ < 6;) rgb = '0' + rgb;

    return rgb;
};

//////////////////////hide and show design block ////////////////
$('#Both_sides').hide();
// 

$('#Print_Sides').bind('change',function(){
  var ss=$('#Print_Sides').val()



  if(ss == 'Front Side')
  {
    $('#Both_sides').hide();
    $('#Front_sides').show();

    $('#status_sides').val(ss);

  }
  else if(ss == 'Both Sides')
  {
    $('#Both_sides').show();
    $('#Front_sides').show();
    $('#status_sides').val(ss);

  }
  else
  {

    $('#Front_sides').hide();
    $('#Both_sides').hide();

    var dropDown = document.getElementById("Print_Sides");
    dropDown.selectedIndex = 0;

  }


}).trigger('change');

  var loadFile = function(event,a) {

    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById(a);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };



  // $("#next_btn").click(function(){

    // alert();

  // });

  function readthumb(input)
  {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('#thumbb').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }


  }





  function printsides(id)
  {
    var id=document.getElementById('test1').value; var insert='id='+id;

    if(id === '')
    {
      alert('Please Enter Print Sides ');
      return false;
    }else{
    //alert('Please');

    $.ajax({
      url: "<?php echo base_url() ?>index.php/admin/print_sides_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#Print_Sides").append(data);
        $('#myModal').modal('hide');
        $( "#Print_Sides" ).keyup();

      },
      error: function(xhr) {   
      }
    });
} 
return false;
}

function print_productt(id)
{
  var id=document.getElementById('test3').value; var insert='id='+id;

  if(id === '')
  {
    alert('Please Enter Print Products')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/admin/print_product_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
    //alert(data)
    $("#Print_Product").append(data);
    $('#myModal').modal('hide');
    $( "#Print_Product" ).keyup();
},
error: function(xhr) {   
}
});

  } 
  return false;
}



function folding_ajax(id)
{
  //console.log('paras');
  var id=document.getElementById('test4').value; var insert='id='+id;
  
  if(id === '')
  {
    alert('Please Enter Folding')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/folding_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
  //  alert(data)
  $("#Folding").append(data);
  $('#myModal').modal('hide');
  $( "#Folding" ).keyup();

},
error: function(xhr) {   
}
});
  }
  return false;
}

function printsize_ajax(id)
{
  var id=document.getElementById('test5').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Print sizes')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/print_size_insert",
      type: "GET", 
      data:insert,
      success: function(data) {

        $("#Print_Size").append(data);
        $('#myModal').modal('hide');
        $( "#Print_Size" ).keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}

function creativeproduct_ajax(id)
{
  var id=document.getElementById('test6').value; var insert='id='+id;

  if(id === '')
  {
    alert('Please Enter Creative Products')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/creative_product_insert",
      type: "GET", 
      data:insert,
      success: function(data) {

        $("#Creative_Product").append(data);
        $('#myModal').modal('hide');
        $("#Creative_Product").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}
function printshape_ajax(id)
{
  var id=document.getElementById('test7').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Print Shape')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/print_shape_insert",
      type: "GET", 
      data:insert,
      success: function(data) {

        $("#Print_Shape").append(data);
        $('#myModal').modal('hide');
        $("#Print_Shape").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}

function age_ajax(id)
{
  var id=document.getElementById('test8').value; var insert='id='+id;

  if(id === '')
  {
    alert('Please Enter Age')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/age_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#age").append(data);
        $('#myModal').modal('hide');
        $("#age").keyup();
      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}

function tone_ajax(id)
{
  var id=document.getElementById('test9').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Tone')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/tone_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#tone").append(data);
        $('#myModal').modal('hide');
        $("#tone").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}
function products_ajax(id)
{
  var id=document.getElementById('test10').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Products')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/Products_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#Products").append(data);
        $('#myModal').modal('hide');
        $("#Products").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}
function event_ajax(id)
{
  var id=document.getElementById('test11').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Event')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/event_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#event").append(data);
        $('#myModal').modal('hide');
        $("#event").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}

function country_ajax(id)
{
  var id=document.getElementById('test12').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Country')
    return false;

  } else{

    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/country_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#country").append(data);
        $('#myModal').modal('hide');
        $("#country").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}
function lengthtype_ajax(id)
{
  var id=document.getElementById('test13').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Length Type')
    return false;

  } else{
    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/length_type1_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#length_type1").append(data);
        $('#myModal').modal('hide');
        $("#length_type1").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}
function layouttype_ajax(id) 
{
  var id=document.getElementById('test14').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Layout Type')
    return false;

  } else{
    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/layout_type1_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#layout_type1").append(data);
        $('#myModal').modal('hide');
        $("#layout_type1").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;

}
function use_ajax(id)
{
  var id=document.getElementById('test15').value; var insert='id='+id;
  if(id === '')
  {
    alert('Please Enter Use')
    return false;
  } else{
    $.ajax({
      url: "<?php echo base_url() ?>index.php/welcome/age_insert",
      type: "GET", 
      data:insert,
      success: function(data) {
        $("#use1").append(data);
        $('#myModal').modal('hide');
        $("#use1").keyup();

      },
      error: function(xhr) {   
      }
    });
  }
  return false;
}



function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
    $("#Uploadatemplate").modal('toggle');
  }
}

$("#imgInp").change(function() {
  readURL(this);
});



$("#imgInpp").change(function() {
  readURLl(this);
});

function readURLl(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blahh').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


$("#thumb").change(function() {
  readthumb(this);
});

function readthumb(input)
{
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#thumbb').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
$("#back_thumb").change(function() {
  readthumb_back(this);
});

function readthumb_back(input)
{
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#thumbbb_back').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


var back_counter = 1;
$('#textButton1').click(function(){
 //alert('j')
 if (back_counter > 5) {
  swal({type: 'warning',title: 'Warning Message',html: "Only 5 Allow",showConfirmButton: true});

  return false;
 }

 var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'addBoxDiv' + text);
 //newTextBoxDiv.after().html('<td><div class="editbox_'+text+'"><input type="text" name="back_text_layer[]"></div></td><td><div class="alldropdwon"><select name="back_text_length_type[]" id="" class="form-control" required="required"><option value="Designer">Select Length Type </option><?php foreach ($length_type_test as $value){ ?> <option value="<?php echo $value['Length_Type_id'];?> "><?php echo $value['Length_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwon"><select name="back_texts_layout[]" id="" class="form-control" required="required"><option value="">Select Layout Type </option><?php foreach ($layout_type_test as $value){ ?> <option value="<?php echo $value['Layout_Type_id'];?> "><?php echo $value['Layout_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwon"><select name="back_texts_use[]" id="" class="form-control" required="required"><option value="Designer">Select Use name </option><?php foreach ($use1_test as $value){ ?> <option value="<?php echo $value['Use_id'];?> "><?php echo $value['Use_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><input type="text" name="back_texts_max_char[]"/></td><td><input type="text" name="back_texts_remark[]"/></td>');


 //newTextBoxDiv.appendTo("#addBoxesGroup1");


 back_counter++;
});


var back_addButton_counter =1;
$("#addButton1").click(function(){

  if(back_addButton_counter >5)
  {
    swal({type: 'warning',title: 'Warning Message',html: "Only 5 Allow",showConfirmButton: true});
    return false;

  }

  var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'TextBoxDiv' + back_addButton_counter);
  //newTextBoxDiv.after().html('<td><input type="checkbox" id="checkbox'+back_addButton_counter+'" value="'+back_addButton_counter+'" name="record" hidden="hidden" ><input type="text" name="hidden_image" value="'+back_addButton_counter+'" hidden="hidden" /> </td><td><div class="editbox_4"><input type="text" name="back_image_layername[]"></div></td><td><img id="thumbb'+back_addButton_counter+'" style="width:100px;height:100px" src="<?php echo base_url('asstes/upload/no_image.png')?>"><input type="file" name="back_templateess[]" id="thumb'+back_addButton_counter+'" style="margin: 3px;width: 107px !important;"></td><td><div class="alldropdwon"><select name="back_image_layout[]" id="" class="form-control" required="required"><option value="">Select Layout Type </option><?php foreach ($layout_type_test as $value){ ?> <option value="<?php echo $value['Layout_Type_id'];?>"><?php echo $value['Layout_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwonn"><div><input id="steponeyesCheckYess3'+back_addButton_counter+'" value="1" type="radio" name="back_steponeyes3'+back_addButton_counter+'" ><label for="steponeyesCheckYess3'+back_addButton_counter+'">Yes</label>&nbsp;&nbsp;<input id="steponenoCheckNoo3'+back_addButton_counter+'" value="0" type="radio" name="back_steponeyes3'+back_addButton_counter+'" ><label for="steponenoCheckNoo3'+back_addButton_counter+'">No</label></div></div></td><td><div class="alldropdwon"><select name="back_image_use[]" id="" class="form-control" required="required"><option value="">Select Use </option><?php foreach ($use1_test as $value){ ?> <option value="<?php echo $value['Use_id'];?> "><?php echo $value['Use_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="remark_5"><input type="text" name="back_image_remark[]" /></div></td><td><div class="moveicon"><i class="fa fa-arrows" aria-hidden="true"></i></div></td><td><div class=""></div></td>'); 

  //newTextBoxDiv.appendTo("#TextBoxesGroup1");

  var s='#thumb'+back_addButton_counter;
  var ss='#thumbb'+back_addButton_counter;



  $('#thumb'+back_addButton_counter).click(function(){


    $(s).change(function() {
            // console.log('yoyoy');    

            readthumb1(this);
        });

    function readthumb1(input) {
      //console.log('jakss')

      if (input.files && input.files[0]) {
                //  console.log('jakssasadasds')

                var reader = new FileReader();

                reader.onload = function(e) {
                    //  console.log('last step');
                    $(ss).attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

    });

  back_addButton_counter++;

});



// $(document).ready(function () {
  // alert()
  var counter = 1;
  $("#addButton").click(function () {
  //alert()

  if (counter > 5) {
   // alert("Only 5 Allow");
   swal({type: 'warning',title: 'Warning Message',html: "Only 5 Allow",showConfirmButton: true});

   return false;
}

var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'TextBoxDiv' + counter);
//newTextBoxDiv.after().html('<td><input type="checkbox" id="checkbox'+counter+'" value="'+counter+'" name="record" hidden="hidden" ><input type="text" name="hidden_image" value="'+counter+'" hidden="hidden" /> </td><td><div class="editbox_4"><input type="text" name="image_layername[]"></div></td><td><img id="thumbb'+counter+'" style="width:100px;height:100px" src="<?php echo base_url('asstes/upload/no_image.png')?>"><input type="file" name="templatees[]" id="thumb'+counter+'" style="margin: 3px;width: 107px !important;"></td><td><div class="alldropdwon"><select name="image_layout[]" id="" class="form-control" required="required"><option value="">Select Layout Type </option><?php foreach ($layout_type_test as $value){ ?> <option value="<?php echo $value['Layout_Type_id'];?>"><?php echo $value['Layout_Type_name'];?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwonn"><div><input id="steponeyesCheckYes3'+counter+'" value="1" type="radio" name="steponeyes3'+counter+'" ><label for="steponeyesCheckYes3'+counter+'">Yes</label>&nbsp;&nbsp;<input id="steponenoCheckNo3'+counter+'" value="0" type="radio" name="steponeyes3'+counter+'" ><label for="steponenoCheckNo3'+counter+'">No</label></div></div></td><td><div class="alldropdwon"><select name="image_use[]" id="" class="form-control" required="required"><option value="">Select Use </option><?php foreach ($use1_test as $value){ ?> <option value="<?php echo $value['Use_id'];?>"><?php echo $value['Use_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="remark_5"><input type="text" name="image_remark[]" /></div></td><td><div class="moveicon"><i class="fa fa-arrows" aria-hidden="true"></i></div></td><td><div class=""></div></td>'); 

//newTextBoxDiv.appendTo("#TextBoxesGroup");



var s='#thumb'+counter;
var ss='#thumbb'+counter;



$('#thumb'+counter).click(function(){


  $(s).change(function() {
            // console.log('yoyoy');    

            readthumb1(this);
        });

  function readthumb1(input) {
      //console.log('jakss')

      if (input.files && input.files[0]) {
                //  console.log('jakssasadasds')

                var reader = new FileReader();

                reader.onload = function(e) {
                    //  console.log('last step');
                    $(ss).attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

    });
counter++;


});





  var text = 1;
  var count_edit=$('#designblock_edit').val();

  $("#textButton").click(function () {

    alert()
    if (text > 5) {
    //alert("Only 5 Allow");
    swal({type: 'warning',title: 'Warning Message',html: "Only 5 Allow",showConfirmButton: true});

    return false;
}


var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'addBoxDiv' + text);
///newTextBoxDiv.after().html('<td><div class="editbox_'+text+'"><input type="text" name="text_layer[]"></div></td><td><div class="alldropdwon"><select name="text_length_type[]" id="" class="form-control" required="required"><option value="Designer">Select Length Type </option><?php foreach ($length_type_test as $value){ ?> <option value="<?php echo $value['Length_Type_id'];?> "><?php echo $value['Length_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwon"><select name="texts_layout[]" id="" class="form-control" required="required"><option value="">Select Layout Type </option><?php foreach ($layout_type_test as $value){ ?> <option value="<?php echo $value['Layout_Type_id'];?> "><?php echo $value['Layout_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwon"><select name="texts_use[]" id="" class="form-control" required="required"><option value="Designer">Select Use name </option><?php foreach ($use1_test as $value){ ?> <option value="<?php echo $value['Use_id'];?> "><?php echo $value['Use_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><input type="text" name="texts_max_char[]"/></td><td><input type="text" name="texts_remark[]"/></td>');


//newTextBoxDiv.appendTo("#addBoxesGroup");
text++;


});


  var count_e=$('#designblock_edit').val();

  $('#textButton_edit').click(function(){
//alert()
if (count_e > 5) {
    //alert("Only 5 Allowed");
    swal({type: 'warning',title: 'Warning Message',html: "Only 5 Allow",showConfirmButton: true});

    return false;
}

var newTextBoxDiv = $(document.createElement('tr')).attr("id", 'addBoxDiv' + count_e);
//newTextBoxDiv.after().html('<td><div class="editbox_'+count_e+'"><input type="text" name="text_layer_txt[]"></div></td><td><div class="alldropdwon"><select name="text_length_type[]" id="" class="form-control" required="required"><option value="Designer">Select Length Type </option><?php foreach ($length_type_test as $value){ ?> <option value="<?php echo $value['Length_Type_id'];?> "><?php echo $value['Length_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwon"><select name="texts_layout[]" id="" class="form-control" required="required"><option value="">Select Layout Type </option><?php foreach ($layout_type_test as $value){ ?> <option value="<?php echo $value['Layout_Type_id'];?> "><?php echo $value['Layout_Type_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><div class="alldropdwon"><select name="texts_use[]" id="" class="form-control" required="required"><option value="Designer">Select Use name </option><?php foreach ($use1_test as $value){ ?> <option value="<?php echo $value['Use_id'];?> "><?php echo $value['Use_name']; ?></option><?php }?></select><i class="fa fa-caret-down" aria-hidden="true"></i></div></td><td><input type="text" name="texts_max_char[]"/></td><td><input type="text" name="texts_remark[]"/></td>');


//newTextBoxDiv.appendTo("#addBoxesGroup");
count_e++;


});



  jQuery.validator.addMethod("number_format",function(value,element){

    if(value.indexOf(0) !== -1)
    {
//alert()
return false;
}
else
{
  return true;
}
});




  $("#villageform").validate({
    focusInvalid: false,
    invalidHandler: function(form, validator) {

      if (!validator.numberOfInvalids())
        return;

      $('html, body').animate({
        scrollTop: $(validator.errorList[0].element).offset().top
      }, 1000);

    },
    ignore: [],
    rules: {


      Print_product:{required:true},
      Designer:{required:true},
     // new:{required:true},
     Print_Sides:{required:true },
     Folding:{required:true},
     Template:{required:true },
     Print_Size:{required:true },
     Creative_Product:{required:true },
     Draft:{required:true },
     Print_Shape:{required:true },
     age:{required:true,number:true,maxlength:2},
     gender:{required:true },
     Event:{required:true },
     Country:{required:true },
     purpose:{required:true },
     Products:{required:true },
     color1:{required:true },
     color2:{required:true},
     color3:{required:true },
     color4:{required:true },
     color5:{required:true },
     color6:{required:true },
     printing_side:{required:true},


     userGender:{
      required: function() {
        return $('[name="userGender"]:checked').length; 
      }},
      "layout_type1[]": "required"


     },
     messages: {

      Print_product:{required:"Required"}, 
      userGender: {required: "Required"}, 
      Title: {required: "Required"},
      // new: {required: "Please choose Yes or Not."},
      Designer:{required:"Required"},
      Print_Sides:{required:"Required"},
      Folding:{required:"Required"},
      Template:{required:"Required"}, 
      Print_Size:{required:"Required"}, 
      Creative_Product:{required:"Required"}, 
      Draft:{required:"Required"}, 
      Print_Shape:{required:"Required"},
      age:{required:"Required",number:"Whole Digits only",maxlength:"Only 2 Digits Number"},
      gender:{required:"Required"},
      purpose:{required:"Required"},
      Event:{required:"Required"},
      Country:{required:"Required"}, 
      Products:{required:"Required"},
      color1:{required:"Required"},
      color2:{required:"Required"}, 
      color3:{required:"Required"},
      color4:{required:"Required"},
      color5:{required:"Required"}, 
      color6:{required:"Required"}, 
      printing_side:{required:"Required"}, 

      age_next:{required:"Requireddd",number:"Whole Digits only",maxlength:"Only 2 Digits Number"},
      "layout_type1[]": "Please select Layout Type"



  }

});



  function paras_color(a,b,c,d)
  {

    $('#'+a).jPicker(componentToHex(c));

    var s='#thumb'+d;
    var ss='#thumbb'+d;

    $('#thumb'+d).click(function(){
                        // console.log('yoyoy');    
                        $(s).change(function() {
                          readthumb1(this);
                        });
                        function readthumb1(input) {
                  //console.log('jakss')
                  if (input.files && input.files[0]) {
                            //  console.log('jakssasadasds')
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                // console.log('last step');
                                $(ss).attr('src', e.target.result);
                            }
                            reader.readAsDataURL(input.files[0]);
                        }
                    }
                });

  }

  function paras_color1(d)
  {

     // $('#'+a).jPicker(componentToHex(c));

     var s='#thumb_back'+d;
     var ss='#thumbb_back'+d;

     $('#thumb_back'+d).click(function(){
                       //  console.log('yoyoy');    
                       $(s).change(function() {
                        readthumb1(this);
                       });
                       function readthumb1(input) {
                 // console.log('jakss')
                 if (input.files && input.files[0]) {
                            //  console.log('jakssasadasds')
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                // console.log('last step');
                                $(ss).attr('src', e.target.result);
                            }
                            reader.readAsDataURL(input.files[0]);
                        }
                    }
                });

 }

 function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
 }


  $(document).on('click',".foldable_titlee", function() {
    var mainboxshow = $(this).attr('data-class');             
    $('#' + mainboxshow).toggle();
    if($(this).children('i').hasClass('fa-angle-up'))
    {
        //console.log('last 1')
        $(this).children('i').removeClass('fa-angle-up');
        $(this).children('i').addClass('fa-angle-down');
    }
    else
    {
        //console.log('last 2')
        $(this).children('i').removeClass('fa-angle-down');
        $(this).children('i').addClass('fa-angle-up');
    }


    $('input:radio[name="wizard_front"]').change(
      function(){
        if ($(this).is(':checked') && $(this).val() == '1') {

          $("#file").val(" ");
        }

      }


      );


});

  $('#button').click(function(){


    window.location.href = "<?php echo base_url(); ?>";

  });

  $(".hidediv").css('display', 'none');

  $(document).on('change',"#Print_product",function(){

 // $(".hidediv").css('display', 'none');


 var id=$("#Print_product").val();

 if(id != '')
 {

  $(".hidediv").css('display', 'block');

 }
 else
 {
         // $("#hidediv").hide();
         $(".hidediv").css('display', 'none');

     }



 });



  $(document).ready(function () {
  //called when key is pressed in textbox
  $("#quantity").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Whole Digits only").show().fadeOut("slow");
        return false;
    }
});


   


  $(".close").click(function() {
  //alert()
  $(".errormessage").html(" ");
  $(".errormessagee").html(" ");
  $("#FFilename").html(" ");
  //$("#starint").removeAttr('checked');
  $("#Ending").prop("checked", true);
  $("#Endingg").prop("checked", true);



});

 $("#cntrl_tool").mouseover(function(){
    $("#cntrl_drop").css('visibility', 'visible');  
    $("#cntrl_drop").css('display', 'block');
  });
});
