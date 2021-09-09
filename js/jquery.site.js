$(document).ready(function() {
	$(function () {
		$('[data-toggle="popover"]').popover()
	  });

	
	// ACCOUNT MODAL VARIATIONS
	$('#account-modal').on('show.bs.modal', function (event) {
  		var $button = $(event.relatedTarget);
  		var $case = $button.data('case');
  		var $modal = $(this);

  		if($case == "register") {
  			$modal.find('#login-case').hide();
  			$modal.find('#register-case').show();
  		} else {
  			$modal.find('#register-case').hide();
  			$modal.find('#login-case').show();
  		}
	});


});
