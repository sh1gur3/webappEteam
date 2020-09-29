function check(){
	//テキストボックス
	if ($('#form [name=text]').val() == ""){
		var text = "入力なし";
	} else {
		var text = $('#form [name=text]').val();
	}
 
	//パスワード
	if ($('#form [name=password]').val() == ""){
		var password = "入力なし";
	} else {
		var password = $('#form [name=password]').val()
	}
 
	//複数行のテキスト
	if($('#form [name=textarea]').val() == ""){
		var textarea = "入力なし";
	} else {
		var textarea = $('#form [name=textarea]').val();
	}
 
	//ラジオボタン
	var radio = $('#form [name=radio]:checked').val();
 
	//チェックボックス
	var checkbox="";
	$('#form [name=checkbox]').each(function(index, element){
		if($(this).prop('checked')){
			if(checkbox == ""){
				checkbox += $(this).val();
			}else{
				checkbox += ',' + $(this).val();
			}
		}
	});
	if(checkbox == "")checkbox = "選択なし";
 
	//セレクトボックス
	var selectbox = $('#form [name=selectbox]').val();
 
	//値を表示
	$('.text_result').text('テキストボックス : ' + text);
	$('.pw_result').text('パスワード : ' + password);
	$('.ta_result').text('複数行のテキスト : ' + textarea);
	$('.radio_result').text('ラジオボタン : ' + radio);
	$('.cb_result').text('チェックボックス : ' + checkbox);
	$('.sb_result').text('セレクトボックス : ' + selectbox);
 
	return false; //ここでフォームの送信をキャンセルしています
}