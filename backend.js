var firstCalculation = true;

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
    
    var todayDay = 22;
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
        var fine = daysPastReturn * 0.100;
        var fineFormatted = fine.toFixed(3);
        
        document.getElementById("output").innerHTML = 
            "Name: " + name + "<br>" +
            "Class: " + studentClass + "<br>" +
            "GR No: " + grno + "<br><br>" +
            "Number of days past return: " + daysPastReturn + " days<br>" +
            "Calculation: " + daysPastReturn + " × 0.100 OMR = " + fineFormatted + " OMR<br><br>" +
            "Total Fine: " + fineFormatted + " OMR<br><br>" +
            "Pay the outstanding fee " + fineFormatted + " OMR and return the book.";
    }
    
    if (firstCalculation) {
        firstCalculation = false;
        showRJPopup();
    }
}
