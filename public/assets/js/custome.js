
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
            var pre='images/'+data;
               //alert(newimage)
              // var PSD = require('psd');

              var PSD = require('psd');
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

                       console.log(dataa); 
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


                          for(var k=0;k<step;k++)
                          {

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


                        //match 
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

                      
                        var compnm='Company';
                        DuplicatBlock.push(compnm);


                        errorcount++;


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
  



                          //main if company check
                        }



                  }
                }






                        }



              });
              


      });
  


});



   
   });





//////////////////////////////////////////
  // data-bind to hide show  div
//$(document).ready(function() {
    $('.foldable_title').on('click', function() {        
      var mainboxshow = $(this).attr('data-class');        
      $('#' + mainboxshow).toggle();
      if($(this).children('i').hasClass('fa-angle-up')){
        $(this).children('i').removeClass('fa-angle-up');
        $(this).children('i').addClass('fa-angle-down');
      }else{
        $(this).children('i').addClass('fa-angle-up');
        $(this).children('i').removeClass('fa-angle-down');
      }
    });
//});

 