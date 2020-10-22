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
</style>

  <!-- /.modal-content -->
 <div class="modal fade" id="templatemodal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
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
            <form id="rest" method="post" enctype="multipart/form-data">
            	    {{ csrf_field() }}

				<div class="fileupload_popup">

					<!-- <input type="file" name="template" class="inputFile"> -->
					<input name="file" type="file" accept=".psd" class="inputFile" id="file">
					<span class="uploadbtn"></span>

				</div>
				<div id="FFilename" style="text-align: center;color: blue;padding: 9px 4px 1px 4px;"></div>

				<div class="row loader tti" style="display: none;margin: 24px 0 0 12px;">

				<div id="progress-wrp"><div class="progress-bar"></div><div class="status">0%</div></div>
                      

                <!--</div>-->
            </div>



        </form>

            </div>
            <div class="modal-footer justify-content-between">
             
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>

@endsection