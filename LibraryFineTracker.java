import java.util.Scanner;

class LibraryFine {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Library Fine Calculator");
        
        System.out.print("Enter Borrow Day: ");
        int borrowDay = sc.nextInt();
        
        System.out.print("Enter Borrow Month: ");
        int borrowMonth = sc.nextInt();
        
        System.out.print("Enter Borrow Year: ");
        int borrowYear = sc.nextInt();
        
        int todayDay = 23;
        int todayMonth = 10;
        int todayYear = 2026;
        
        int borrowedDays = borrowYear * 365 + borrowMonth * 30 + borrowDay;
        int currentDays = todayYear * 365 + todayMonth * 30 + todayDay;
        int daysPassed = currentDays - borrowedDays;
        
        int allowedDays = 7;
        int lateDays = daysPassed - allowedDays;
        
        if (lateDays <= 0) {
            System.out.println("No fine. Book not overdue.");
        } else {
            int fine = lateDays * 100;
            System.out.println("Days late: " + lateDays);
            System.out.println("Fine: " + fine + " baisa");
        }
    }
}
