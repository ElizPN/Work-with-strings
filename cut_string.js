function cutString (str, maxlength) { 
    if (str.length > maxlength) {
        let mainString = str.slice(0, maxlength - 1) + '…';
        console.log(mainString.length);
        return mainString 
        } 
        else {
            return str
        }
} 
    
    alert(cutString('I suppose we will cut this too long sentence ', 10));
 
