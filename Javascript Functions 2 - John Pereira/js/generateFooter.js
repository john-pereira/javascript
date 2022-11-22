function footerGenerator(){
footerYear = new Date().getFullYear();
footerCompanyName = document.getElementById('companyInput').value;

if (companyInput != '') {
    document.getElementById('currentYear').innerHTML = footerYear;
    document.getElementById('companyName').innerHTML = footerCompanyName;
}else{
    return false;
}

}