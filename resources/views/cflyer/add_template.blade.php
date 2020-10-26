@extends('cflyer.layout.main')
@section('content')




<style type="text/css">
	
	/*------------- nehali_26-05-2018 start --------------------------*/
	#progress-wrp{visibility: hidden; }
	#progress-wrp {border: 1px solid #0099CC; padding: 1px; position: relative; border-radius: 10px; margin: 3px 0 0 31px; text-align: left; background: #fff; box-shadow: inset 1px 3px 6px rgba(0, 0, 0, 0.12); height: 25px;}
	#progress-wrp .progress-bar{height: 20px; border-radius: 3px; background-color: #4CAF50; width: 0; box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.11); }
	#progress-wrp .status{top:3px; left:50%; position:absolute; display:inline-block; color: #000000; }
	#paint-app{position:absolute;margin-top:-22%;}


	#progress-wrpp{visibility: hidden; }
	#progress-wrpp {border: 1px solid #0099CC; padding: 1px; position: relative; border-radius: 3px; margin: 10px; text-align: left; background: #fff; box-shadow: inset 1px 3px 6px rgba(0, 0, 0, 0.12); height: 25px; }
	#progress-wrpp .progress-bar{height: 20px; border-radius: 3px; background-color: #4CAF50; width: 0; box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.11); }
	#progress-wrpp .status{top:3px; left:50%; position:absolute; display:inline-block; color: #000000; }
	#paint-app{position:absolute;margin-top:-22%;}

</style>
<div class="content-wrapper">

	<section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="col-sm-12">
					<div class="sectionmain" id="sectionmain_id">

										<div class="Uploadbtn">

											<!-- <a href="<?php //echo base_url().'index.php/admin/template'; ?>" id="button1" class="Uploadbtn_a">Back</a> -->

											<!-- <a  id="template_reload" class="Uploadbtn_a" data-toggle="modal" data-target="#Uploadatemplate">Upload Template</a>  -->


											<div id="" class="images_p"><br>
												<div id="frontimagestore">

													<a id="Zoom-1"  class="MagicZoom zoomdata"  data-options="zoomCaption: top; zoomHeight:400px; zoomWidth: 500px; zoomDistance: 30; expand: fullscreen; expandZoomOn: always;" style="width:  100px;>
													<img class="img_temp" id="image_preview1"  src="" alt=""/>
												</a>
											</div><br>
											<div class="errormessagee_w"></div>


											<input type="text" name="front_image" id="image_preview1_front" hidden="hidden">
											<input type="text" name="Front_sides_image" id="front_side_image" hidden="hidden">
											<input type="text" name="Front_sides_imagee" id="front_side_imagee" hidden="hidden">

											<input type="text" name="front_size_res" id="front_size_res" hidden="hidden">

										</div> 
									</div>
									<div class="TG_common divhide" >
										<div class="TG_common_data">
											<h4 class="foldable_title"  data-class="GeneralInfo">General Info <i class="fa fa-angle-up" aria-hidden="true"></i></h4>

											<input type="text" name="orignalwidth" id="orignalwidth" hidden>

											<input type="text" name="orignalheigth" id="orignalheigth" hidden>

											<div id="GeneralInfo" class="TG_common_datalist">
												<ul class="TG_common_datalist_ul list-inline list-unstyled">
													<li>
														<div class="alldropdwon">
															<span>Print Product:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
														
															<i class="fa fa-caret-down" aria-hidden="true"></i>                      
														</div>
													</li> 


													<li class="hidediv">
														<span>New:<span style="color: red;font-size: 23px;position: absolute;top: 50px;">* </span></span>              
														<div class="Basicinforadio alldropdwonn" id="new">
															<input id="steponeyesCheckk" type="radio" name="new"   value="1" >
															<label for="steponeyesCheckk">Yes</label>&nbsp;&nbsp;
															<input id="steponenoCheckk" type="radio" name="new"  value="0" >
															<label for="steponenoCheckk">No</label>
														</div>
													</li> 

													<li class="hidediv">
														<div class="alldropdwon">
															<span>Template #:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" id="increment_number" name="Template" placeholder="Enter Template" >
														</div>
													</li> 
													<li class="hidediv">
														<div class="alldropdwon">
															<span>Draft :<span style="color: red;font-size: 23px;position: absolute;top: -9px;">* </span></span>
															<div style="width: 185px; margin:  10px 0 0 0;padding: 2px 5px;px; */">
																<label for="name" id="draft_increment_numberr"></label>
															</div>
															<input type="text" name="Draft" id="draft_increment_number" placeholder="Enter Draft #" hidden="hidden">
														</div>
													</li>
													<li class="hidediv">
														<div class="alldropdwon">
															<span>Designer:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>               

															<?php //echo form_dropdown('Designer',$designer,'','class="form-control " id="Designer"  '); ?>
															<i class="fa fa-caret-down" aria-hidden="true"></i>
															<input type="text" name="length" id="length" value="" hidden="hidden">
															<input type="text" name="psdfile" id="psdfile" value="" hidden="hidden">
														</div>
													</li>              

												</ul>
											</div>  
										</div>
									</div>         
									<div class="TG_common divhide" >
										<div class="TG_common_data">

											<h4 class="foldable_title" data-class="OrderAspect">Order Aspect <i class="fa fa-angle-up" aria-hidden="true"></i></h4>
											<div id="OrderAspect" class="TG_common_datalist">
												<ul class="TG_common_datalist_ul list-inline list-unstyled">
													<li>
														<div class="alldropdwon">
															<span>Print Size: <span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span><span style='margin: 0 0px 0 11px;    font-size: 11px;'>(W x H in inches):</span></span>

															<div id="printsizeinches"  style="width: 185px;margin:  10px 0 0 0;padding: 2px 5px;px; */">

															</div>                
															<input type="text" id="Print_Size" name="Print_Size" hidden="hidden" >

														</div>
													</li>

													<li>
														<div class="alldropdwon">
															<span>Resolution: <span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<div id="Resolution_label" style="width: 185px;margin:  10px 0 0 0;padding: 2px 5px;px; */">

															</div>
															<input type="text" name="Resolution" id="Resolutionn" value="" hidden="hidden">

														</div>
													</li>



													<li>
														<div class="alldropdwon">
															<span>Print Shape:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>


															<?php //echo form_dropdown('Print_Shape[]', $print_shape,'','class="form-control selectpicker" title="Select Print Shape" id="Print_Shape" multiple required'); ?>


															<i class="fa fa-caret-down" aria-hidden="true"></i>
														</div>
													</li>

													<li>
														<div class="alldropdwon">
															<span>Printing Side:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<select name="printing_side" id="printing_side" class="form-control" >
																<option value="">Select Printing Side</option>
																<option value="1side">1 Side</option>
																<option value="2sides">2 Sides</option>
															</select>
															<i class="fa fa-caret-down" aria-hidden="true"></i>
														</div>
													</li>

													<li>
														<div class="alldropdwon">
															<span>Folding: <span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>

															<!-- <?php //echo form_dropdown('Folding[]', $folding,'','class="form-control selectpicker" title="Select Folding" id="Folding" multiple required'); ?> -->

															<i class="fa fa-caret-down" aria-hidden="true"></i>
														</div>
													</li> 


													<li>
														<span>Creative Product:<span style="color: red;font-size: 23px;position: absolute;top: 126px;">* </span></span>
														<div class="Basicinforadio alldropdwonn">
															<input id="steponeyesCheckk001" type="radio" name="creative_product"  value="1" >
															<label for="steponeyesCheckk001">Yes</label>&nbsp;&nbsp;
															<input id="steponenoCheckk001" checked type="radio" name="creative_product" value="0" >
															<label for="steponenoCheckk001">No</label>
														</div>

													</li>  

												</ul>
											</div>  
										</div>
									</div>         
									<div class="TG_common divhide" >
										<div class="TG_common_data">
											<!-- <span class="block_title text-uppercase">TARGET CAMPAIGN</span> -->
											<h4 class="foldable_title"  data-class="DesignPreferences">Design Preferences<i class="fa fa-angle-up" aria-hidden="true"></i></h4>
											<div id="DesignPreferences" class="TG_common_datalist">
												<ul class="TG_common_datalist_ul list-inline list-unstyled">  
													<li>   
														<div class="alldropdwon">
															<span>Purpose:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<?php //echo form_dropdown('purpose', $purpose,'','class="form-control" id="purpose" '); ?>

															<i class="fa fa-caret-down" aria-hidden="true"></i>
														</div>
													</li>
													<li>
														<div class="alldropdwon">
															<span>Occasion / Event:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span> </span>
															<?php //echo form_dropdown('Event', $event,'','class="form-control" id="event" onchange="othereventt()"'); ?>
															<i class="fa fa-caret-down" aria-hidden="true"></i>
														</div>
													</li>
													<li>
														<div class="alldropdwon">
															<span>Target Age:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="age" id="text1" class = "numeric" />
															<span class="error" style="color: Red; display: none">* Input digits (0 - 9)</span>
														</div>
													</li>
													<li>
														<div class="alldropdwon">
															<span>Target Gender:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<select name="gender" id="" class="form-control" >
																<option value="">Select Gender</option>
																<option value="male">Male</option>
																<option value="Female">Female</option>
																<option value="Both_Genders">Both Genders</option>
															</select>
															<i class="fa fa-caret-down" aria-hidden="true"></i>
														</div>
													</li> 
													<li>
														<div class="alldropdwon">
															<span>Color1:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="color1" id="colorPicker1" readonly="readonly">

														</div>
													</li> 
													<li>
														<div class="alldropdwon">
															<span>Color2:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="color2" id="colorPicker2" readonly="readonly"/>

														</div>
													</li>
													<li>
														<div class="alldropdwon">
															<span>Color3:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="color3" id="colorPicker3" class='color_picker' readonly="readonly"/>

														</div>
													</li> 
													<li>
														<div class="alldropdwon">
															<span>Color4:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="color4" id="colorPicker4" class='color_picker' readonly="readonly"/>

														</div>
													</li>
													<li>
														<div class="alldropdwon">
															<span>Color5:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="color5" id="colorPicker5" class='color_picker' readonly="readonly"/>

														</div>
													</li> 
													<li>
														<div class="alldropdwon">
															<span>Color6:<span style="color: red;font-size: 23px;position: absolute;top: -8px;">* </span></span>
															<input type="text" name="color6" id="colorPicker6" class='color_picker' readonly="readonly"/>

														</div>
													</li>  


												</ul>


												<div class="TG_common subdynamic">
													<div class="TG_common_data">

														<h4 class="foldable_title" data-class="contentt">Layout Structure<i class="fa fa-angle-up" aria-hidden="true"></i></h4>
														<div id="contentt" class="TG_common_datalist">  
															<ul class="`_ul list-inline list-unstyled">
																<li>
																	<div class="alldropdwon">
																		<span>Tag</span><br>
																		<input type="text" name="tagno" hidden="hidden">
																		<label for="name" id="tagnoo"></label>                   

																	</div>
																</li>  
																<li>
																	<div class="alldropdwon">
																		<span>Brief Description</span> <br>
																		<input type="text" name="Bdesriptionno" hidden="hidden">                     
																		<label for="name" id="Bdesriptionnoo"></label>                   


																	</div>
																</li> 
																<li>
																	<div class="alldropdwon">
																		<span>Paragraph</span> <br>
																		<input type="text" name="paragraphno" hidden="hidden">                     
																		<label for="name" id="paragraphnoo"></label>                   


																	</div>
																</li> 
																<li>
																	<div class="alldropdwon">
																		<span>Menu</span>  <br>   
																		<label for="name" id="menunoo"></label>                   
																		<input type="text" name="menuno" hidden="hidden">                     


																	</div>
																</li> 
																<li>
																	<div class="alldropdwon">
																		<span>Main Image</span>  <br>
																		<label for="name" id="mainimagenoo"></label>                   
																		<input type="text" name="mainimageno" hidden="hidden">                     


																	</div>
																</li> 


															</ul>


														</div>

													</div>
												</div>

												<div class="TG_common subdynamic">
													<div class="TG_common_data">

														<h4 class="foldable_title" data-class="content">Design Blocks/ Groups<i class="fa fa-angle-up" aria-hidden="true"></i></h4>
										<div id="content" class="TG_common_datalist">  

															<p style="text-align: center;" id="hiddenshowid">Upload file first</p>
															<div id="append_TG_common" class="append_class_frnt" when-scrolled="loadMore()" style="display:none;">
															</div>
														</div>

													</div>
												</div>

											</div>
										</div> </div>    

										<div class="commentbox divhide">
											<textarea rows="3" placeholder="Comment" id="Comment"></textarea>
										</div>
									</div>

				</div>	
		</div>
	</div>
</section>
</div>







<!-- /.modal-content -->
<div class="modal fade" id="templatemodal">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<meta name="csrf-token" content="{{ csrf_token() }}">

				<h4 class="modal-title">UPLOAD A TEMPLATE (FRONT)</h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">

				<div class="frontcreativep" style="text-align: center;">

					<span>Creative Product</span>
					<div class="Basicinforadio alldropdwonn" id="">
						<input id="starint" type="radio" name="wizard_front" value="1">
						<label for="starint">Yes</label>&nbsp;&nbsp;
						<input id="Ending" checked="" type="radio" name="wizard_front" value="0">
						<label for="Ending">No</label>
					</div><br>
				</div>
				<form method="POST" enctype="multipart/form-data" id="laravel-ajax-file-upload" action="javascript:void(0)" >
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<input type="file" name="file" placeholder="Choose File" id="file">
								<span class="text-danger">{{ $errors->first('file') }}</span>
							</div>
						</div>
						<div id="FFilename" style="text-align: center;color: blue;padding: 9px 4px 1px 4px;"></div>

						<div class="row loader tti" style="display: none;margin: 24px 0 0 12px;">
							<!--<div class="text-center col-md-12 mt-10">-->
								<div id="progress-wrp"><div class="progress-bar"></div ><div class="status">0%</div></div>

							</div>

					</div>     
				</form>
			</div>
			<div class="modal-footer justify-content-between">
    	<div class="inization" style="text-align: center;color: green;"></div>

			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>

@endsection