function isLeapYear(){
    var year = document.getElementById("demo").value;
    if (year % 4 == 0 ) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.getElementById("result").innerHTML = year + " is a leap year";
            } else {
                document.getElementById("result").innerHTML = year + " is not a leap year";
            }
        } else {
            document.getElementById("result").innerHTML = year + " is a leap year";
        }
    } else {
        document.getElementById("result").innerHTML = year + " is not a leap year";
    }
}