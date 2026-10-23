var firstCalculation = 1;

function calculateFine() {
    var name = document.getElementById("name").value;
    var grno = document.getElementById("grno").value;
    var studentClass = document.getElementById("class").value;
    var borrowDay = document.getElementById("borrowDay").value;
    var borrowMonth = document.getElementById("borrowMonth").value;
    var borrowYear = document.getElementById("borrowYear").value;
    
    if (name == "" || grno == "" || studentClass == "" || borrowDay == "" || borrowMonth == "" || borrowYear == "") {
        document.getElementById("output").innerHTML = "Please fill all fields!";
        return;
    }
    
    var todayDay = 23;
    var todayMonth = 10;
    var todayYear = 2026;
    
    borrowDay = parseInt(borrowDay);
    borrowMonth = parseInt(borrowMonth);
    borrowYear = parseInt(borrowYear);
    
    var borrowedDays = borrowYear * 365 + borrowMonth * 30 + borrowDay;
    var currentDays = todayYear * 365 + todayMonth * 30 + todayDay;
    var daysPassed = currentDays - borrowedDays;
    
    var allowedDays = 7;
    var daysPastReturn = daysPassed - allowedDays;
    
    if (daysPastReturn <= 0) {
        document.getElementById("output").innerHTML = "No fine. Book is not overdue yet.";
    } else {
        var fineInBaisa = daysPastReturn * 100;
        var fineOMR = fineInBaisa / 1000;
        var wholePart = Math.floor(fineOMR);
        var decimalPart = fineInBaisa - (wholePart * 1000);
        
        var fineFormatted = wholePart + "." + decimalPart;
        if (decimalPart < 100) {
            fineFormatted = wholePart + ".0" + decimalPart;
        }
        if (decimalPart < 10) {
            fineFormatted = wholePart + ".00" + decimalPart;
        }
        
        document.getElementById("output").innerHTML = 
            "Name: " + name + "<br>" +
            "Class: " + studentClass + "<br>" +
            "GR No: " + grno + "<br><br>" +
            "Number of days past return: " + daysPastReturn + " days<br>" +
            "Calculation: " + daysPastReturn + " × 100 baisa = " + fineInBaisa + " baisa<br>" +
            "In OMR: " + fineInBaisa + " ÷ 1000 = " + fineFormatted + " OMR<br><br>" +
            "Total Fine: " + fineFormatted + " OMR<br><br>" +
            "Pay the outstanding fee " + fineFormatted + " OMR and return the book.";
    }
    
    if (firstCalculation == 1) {
        firstCalculation = 0;
        showRJPopup();
    }
}



