function LICENSEE_OTHERFEE_FORM(message, appController, uiGenerator) {

	var thisObject = this;

	this.message = message;
	this.appController = appController;
	this.uiGenerator = uiGenerator;

	this.initialize = initialize;
	this.onLoad = onLoad;
	this.onUnLoad = onUnLoad;
	this.getServiceTableHeader = getServiceTableHeader;

	function initialize() {

		try {
			var message = thisObject.message;
			var messageAndUIBinder = message.messageAndUIBinder;
			if (messageAndUIBinder) {
				messageAndUIBinder.addEditorListener("OtherFeesLookUp",
						"lookUpListener", serviceListenerHandler);
			}

		} catch (error) {
			alert("Error in form initialize  script: " + error);
		}

	}
	;

	function serviceListenerHandler(conceptName) {
		var page = thisObject.appController.getComponent("RenderingEngine")
				.getChildComponent("Form").getPage();
		page.fetchConceptByName(conceptName, conceptHandler, null);

	}
	;

	function conceptHandler(conceptLookup) {
		if (conceptLookup) {
			var feeValue = conceptLookup.getAttribute("Fee");
			if (uiGenerator) {
				// var serviceDiv = $('#uiform-sub-head' +
				// uiGenerator.instanceId);
				var serviceDiv = $('#inner-uiform-' + thisObject.message.id);

				serviceDiv.find('input[tagname=amt]').val(feeValue);
				serviceDiv.find('input[tagname=amt]').trigger('change');
			}
		}
	}
	;

	function onLoad(callback) {

		try {
			onServiceComplete(false);

			var message = thisObject.message;
			//alert("service form load");
			/*
			 * var dataLayer =
			 * thisObject.appController.getComponent("DataLayer"); var
			 * messageTypeScript = new MessageTypeScript(message.msg,
			 * message.messageType, this.appController);
			 * dataLayer.loadData("JS_" + message.messageType, {},
			 * function(data) { // alert("Script loaded");
			 * messageTypeScript.loadScript(data); var transactionType =
			 * AppConstants.TransactionType.SERVICE_FEE;
			 * messageTypeScript.fillData('transactionType', transactionType);
			 * messageTypeScript.fillData('transactionStatus', "ORDERED");
			 * 
			 * });
			 */
			/*var value = $("#inner-uiform-" + message.id)
					.find("#PNDisplayValue").attr('value');
			$("#inner-uiform-" + message.id).find("#pPhysician").attr("value",
					value);*/

		} catch (error) {
			alert("Error in form onLoad  script: " + error);
		}

	}
	;

	function onUnLoad(callback) {

		try {
			onServiceComplete(true);
		} catch (error) {
			alert("Error in form onUnLoad  script: " + error);
		}

	}
	;

	function onServiceComplete(deleteMode) {
		// alert("onServiceComplete : " + deleteMode);
		var page = appController.getComponent("RenderingEngine")
				.getChildComponent("Form").getPage();
		var uiGenerator = thisObject.uiGenerator;
		var licenseeNewServicePage = page.stepPage;

		var serviceDiv = $('#uiform-sub-head' + uiGenerator.instanceId);

		if (deleteMode == true) {
			summerFunction();
		}
		if (!licenseeNewServicePage.otherFeeTotalRender) {
			// appending total text box after new services and new products
			// alert(licenseeNewServicePage.serviceTotalRender);

			var totalBlock = '<fieldset class="ui-grid-b ui-accounting-box" style="margin-bottom:15px;">';
			totalBlock += '<div class="ui-block-a ui-total-width" style="width:84.2%;"><label class="ui-total-label">Total:</label></div>';
			totalBlock += '<div class="ui-block-b ui-accounting-field ui-total-field" style="width:12.1%;"><input class="ui-input-text ui-body-d ui-corner-all ui-shadow-inset" type="text" id="total2"  readonly="readonly" style="background:none;border:0px;color:#ffffff;" /></div></fieldset>';

			$('#footer-' + uiGenerator.instanceId).append(totalBlock);

		}

		function summerFunction() {

			var sum = 0;
			var pFlag = false;

			serviceDiv.find('input[tagname=amt]').each(
					function() {
						

						var chkValue = $(this)
								.parents('[amountParent=licenseeOtherFee]').find(
										'[id=chk]').is(':checked');
						var messageId = $(this).parents(
								'[amountParent=licenseeOtherFee]').find('[id=chk]')
								.val();

						// if (chkValue == true) {
						var map = licenseeNewServicePage.invoiceMessageMap.get(messageId);
						if (!map) {
							licenseeNewServicePage.invoiceMessageMap.put(messageId,
									chkValue);
						} else {
							map.value = chkValue;
						}

						/*
						 * } else {
						 * 
						 * var map = licenseeNewServicePage.invoiceMessageMap
						 * .get(messageId); if (map) {
						 * licenseeNewServicePage.invoiceMessageMap .removeItem(messageId); } }
						 */
						/*
						 * alert($(this).parents('[amountParent=licenseeService]').length);
						 * alert($(this).parents('[amountParent=licenseeService]').find('[id=chk]').length);
						 * alert(chkValue);
						 */

						// add only if the value is number
						if (!isNaN(this.value) && this.value.length != 0) {
							if (chkValue == true) {
								sum += parseFloat(this.value);
								pFlag = true;
							}
						}

					});
			// alert(sum);
			$("#total2").val(sum);
			licenseeNewServicePage.otherFeeCheckFlag = pFlag;
			// alert("CHeckFlag: " + otherFeeCheckFlag)

		}
		;

		// serviceDiv.bind('DOMSubtreeModified', function() {
		$(serviceDiv).find('input[tagname=amt]')
				.unbind('keyup', summerFunction);
		$(serviceDiv).find('input[tagname=amt]').bind('keyup', summerFunction);
		$(serviceDiv).find('input[id=chk]').unbind('click', summerFunction);
		$(serviceDiv).find('input[id=chk]').bind('click', summerFunction);
		$(serviceDiv).find('input[id=chk]').unbind('click', clickHead);
		$(serviceDiv).find('input[id=chk]').bind('click', clickHead);

		/* Code to check/uncheck checkboxes */

		function clickHead() {
			var flag = true;
			serviceDiv.find('[id=chk]').each(function() {
				if ($(this).is(':checked') == false) {
					flag = false;
				}
			});

			if (flag == true) {
				$("#chkOtherFeehead").attr('checked', true);
			} else {
				$("#chkOtherFeehead").attr('checked', false);
			}
		}

		$('#chkOtherFeehead').bind('click', function() {

			var res = '';
			if ($('#chkOtherFeehead').is(':checked') == true) {
				res = true;
			} else {
				res = false;
			}

			serviceDiv.find('[id=chk]').each(function() {
				this.checked = res;
			});

			summerFunction();

		});

		/* Code to check/uncheck checkboxes */
		if (!licenseeNewServicePage.otherFeeTotalRender) {
			var uiGenerator = thisObject.uiGenerator
			$('#divSecondary'+uiGenerator.uiSelectedStep.stepName).show();
			$('#divPrimary'+uiGenerator.uiSelectedStep.stepName).css('width', '93%');
			$('#imgInvoice'+uiGenerator.uiSelectedStep.stepName).unbind('click', licenseeNewServicePage.addToInvoice);
			$('#imgInvoice'+uiGenerator.uiSelectedStep.stepName).bind('click', licenseeNewServicePage.addToInvoice);
		}

		// alert("CHeckFlag: " + otherFeeCheckFlag)

		licenseeNewServicePage.otherFeeTotalRender = true;
	}
	;

	function getServiceTableHeader() {
		var tableHeader = '<fieldset class="ui-grid-d ui-accounting-box"> ';
		tableHeader += '<div class="ui-block-a ui-accounting-fieldhead" ';
		tableHeader += 'style="border-right:0px;width:3%"><input type="checkbox" data-role="none" id="chkOtherFeehead" value="" /></div>';
		tableHeader += '<div class="ui-block-b ui-accounting-fieldhead" ';
		tableHeader += 'style="width:16%">Date</div>';
		tableHeader += '<div ';
		tableHeader += 'class="ui-block-c ui-accounting-fieldhead ui-accounting-position" ';
		tableHeader += 'style="width:30%">licenseeService</div> ';
		tableHeader += '<div ';
		tableHeader += 'class="ui-block-d ui-accounting-fieldhead ui-accounting-position" ';
		tableHeader += 'style="width:31.3%">Consultant</div> ';
		tableHeader += '<div ';
		tableHeader += 'class="ui-block-e ui-accounting-fieldhead ui-accounting-position" ';
		tableHeader += 'style="width:12.1%">Amount</div> ';

		return tableHeader;
	}

};