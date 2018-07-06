function loadData(){
	
	console.log("Inside function");
   var $address = $('#address');
    var street= $('#street').val();
    var city= $('#city').val();
    var address = street +" , "+ city;
    $address.text("Address:" +address+ "");
    
    var streetViewURL='http://maps.googleapis.com/maps/api/streetview?size=600x400&location= ' + address+ '';
    console.log(streetViewURL);
    $('#photo').attr("src",streetViewURL);
    
    return false;    
};
$('#form-container').submit(loadData);
