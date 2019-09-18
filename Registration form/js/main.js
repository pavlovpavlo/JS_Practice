window.addEventListener("load",initListener,false);
    	function initListener()
    	{
    		var reg_form = document.reg_form;
    		var validateForm=false;

    		for(var i=0; i<reg_form.elements.length;i++)
    			if(reg_form.elements[i].getAttribute('data-ptrn'))
    				{
    					reg_form.elements[i].addEventListener('change',validate,false);
    					validateForm = true;
    					console.log('yes atr');
    				}
    		if(validateForm) reg_form.addEventListener("submit",validateSubmit,false);
    	}
    	function validate()
    	{
    		if(this.value.search(this.dataset.ptrn) == -1) this.className= 'invalid';
    		else this.className= 'valid';
    	}
    	function validateSubmit(e)
    	{
    		var invalid = false;
    		for(var i=0; i<this.elements.length;i++)
    		{
    			 var el = this.elements[i];
           			var event = new Event("change", {bubbles : true, cancelable : true});
           			el.dispatchEvent(event);
            	 if (el.className == "invalid") invalid = true;
       
    		}
    		if (invalid) e.preventDefault();
    	}