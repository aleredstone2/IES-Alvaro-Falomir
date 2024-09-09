import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Introduce la cantidad de números a ingresar: ");
        int n = scanner.nextInt();
        
        int[] numeros = new int[n];
        
        System.out.println("Introduce los " + n + " números:");
        for (int i = 0; i < n; i++) {
            numeros[i] = scanner.nextInt();
        }
        
        System.out.println("Números ingresados en orden inverso:");
        for (int i = n - 1; i >= 0; i--) {
            System.out.println(numeros[i]);
        }
        
        scanner.close();
    }
}
  