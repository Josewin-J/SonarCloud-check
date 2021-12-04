function onLoad(){
	var accountName=Xrm.Page.getAttribute("name");
	acccountName.setValue(accountName.getValue()+" UPDATED");
	
	Xrm.Page.getAttribute("tickersymbol").setValue("MSFT");
}