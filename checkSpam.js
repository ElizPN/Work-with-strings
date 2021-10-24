function checkSpam (str) {
    let newString = str.toLowerCase();
    return newString.includes('viagra')|| newString.includes('xxx'); 
}
alert(checkSpam('XXXXXXXXXX'));
alert(checkSpam('buy viaGra'));
alert(checkSpam('ololo'));
