@extends('cflyer.layout.main')
@section('content')




<style type="text/css">
	#Uploadatemplate input[type="file"] {
		opacity: 0;
		position: absolute;
		height: 315px;
		width: 100% !important;
		cursor: pointer;
	}
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

				<div class="row loader tti" style="display: none;margin: 24px 0 0 12px;width: 90%;">
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