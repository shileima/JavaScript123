// JavaScript Document
	$(document).ready(function(){
		
		
		//����һ��*
		$(".a1").each(function(){
			
			var hdw = $("<strong class='reda'>*</strong>");
			
			$(this).parent().append(hdw);

			});
			//end
			
	
		$("form :input").blur(function(){
			
			$(this).parent().find(".a2").remove();
			
			//�ж�		
			if ($(this).is("#username")){
				
				if (this.value=="" || this.value.length < 6){
					
					var hdw1 = $("<span class='a2 error'>�û�������С��6λ</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>��ȷ</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end	
			
	
			//�ж�		
			if ($(this).is("#password")){
				
				if (this.value==""){
					
					var hdw1 = $("<span class='a2 error'>���벻��Ϊ��</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>��ȷ</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end
				
			//�ж�		
			if ($(this).is("#passwords")){
				
				if (this.value=="" || this.value!= $("#password").val()){
					
					var hdw1 = $("<span class='a2 error'>�������벻һ��</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>��ȷ</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end	

			
			//�ж�		
			if ($(this).is("#email")){
				
				if (this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) )){
					
					var hdw1 = $("<span class='a2 error'>�ʼ��ĸ�ʽ����ȷ</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>��ȷ</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end	
			
			//�ж�		
			if ($(this).is("#tel")){
				
				if (this.value=="" || isNaN($(this).val()) || this.value.length < 11 ){
					
					var hdw1 = $("<span class='a2 error'>�ֻ��Ų���Ϊ�գ�������11λ����</span>");
					
					$(this).parent().append(hdw1);
					
					}else{
						
					var hdw1 = $("<span class='a2 righta'>��ȷ</span>");
					
					$(this).parent().append(hdw1);				
				}

			}
			//end

	});	
	//blur  end
		
		
		
		//�ύ
		$("#send").click(function(){
			
			$("form :input").trigger("blur");
			
			var hdw3 = $(".error").length; 
			
			if (hdw3){
				
				return false;
				
				}
			
			alert("ע��ɹ�");	
	
		});
	//end
	
	
	
		//����
		$("#res").click(function(){
			
			$(".a2").remove();

			});
			//end
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		});	