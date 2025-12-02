var isDate = function (input) {
  //   write your code here
	 if (input == null) return false;
    
    if (input instanceof Date) {
        return !isNaN(input.getTime());
    }
    
    if (typeof input === 'number' || typeof input === 'string') {
        const date = new Date(input);
        return !isNaN(date.getTime());
    }
    
    return false;
};

// Do not change the code below.
//const input = prompt("Enter Date.");
alert(isDate(input));
