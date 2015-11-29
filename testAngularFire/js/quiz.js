<!-- <div>{{app_name}}</div> -->
<div class="well">
<div class="container">
<div class="row-fluid">
	<div class="col-sm-4 col-md-4 col-lg-4 span6" >
		<input type="text"
			id="rootFolder"
			ng-model="current_text_view.textViewName"
			size="40"/>
	</div>

	<div class="col-md-6 span6">
		<button ng-click="save_item(current_text_view)" class="btn btn-default">Save</button>
	</div>
</div>

<div class="row" >
<div>


  <form>
    <div class="form-group span6">
      <label for="exampleInputEmail1">Font Size</label>
      <input type="text" class="form-control " id="exampleInputEmail1" placeholder="eg. 20" ng-model="current_text_view.text" size="40">
    </div>
    <div class="form-group span6">
      <label for="exampleInputPassword1">Text</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your text" ng-model="current_text_view.text" size="40">
    </div>


  </form>
	  <!-- <div class="col-md-1"></div> -->

	  <div class="col-md-6">
		  <div class="form-group span6">
			  <label for="wheel-demo">font color</label>
			  <input type="text"
			  id="font-color"
			  class="form-control demo"
			  data-control="wheel" value="#000000"
			  ng-model="current_text_view.font_color">
			</div>

		  <div class="form-group span6">

			  <label for="wheel-demo">color</label>
			  <input type="text"
			  id="color"
			  class="form-control demo"
			  data-control="wheel" value="#ff99ee"
			  ng-model="current_text_view.color">
			</div>
	  </div>
	</div>
</div>
</div>
<!-- end well-->
</div>
<!-- {{current_text_view}} -->
