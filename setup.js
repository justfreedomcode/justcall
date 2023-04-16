function onPermissionError(error) {
	alert("Вы не разрешили доступ к Вашей камере и/или микрофону. Чтобы попробывать заново обновите страницу\n\nОписание ошибки:\n\n" + error);
}
function onSuccess() {
	//@TODO Realise call timer
}
function onError(error) {
	alert("Ошибка во время звонка:\n\n" + error.message);
}