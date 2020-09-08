package main;

import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * Programa que recebe um numero natural como input e calcula a soma de todos de todos os numeros multiplos de 3 e 5 deste numero.
 * 
 * @author            Stephany Rodrigues
 */
public class SomaDosMultiplos {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int numero = 0;
		boolean continuaLoop = true;
		
		while(continuaLoop == true) {
			
			try {
				System.out.println("Digite um numero maior que zero:");
				numero = sc.nextInt();
				
				if(numero < 0) {
					throw new IllegalArgumentException("Valor invalido. Apenas valor maior que zero e aceito.");
				}
					
				continuaLoop = false;
				
			} catch (InputMismatchException e) {
				System.out.println("Valor invalido. Entre com um numero natural:");
				continuaLoop = true;
				sc.nextLine();
			} catch (IllegalArgumentException e) {
				System.out.println(e.getMessage());
				continuaLoop = true;
				sc.nextLine();
			} 
			
		}
		
		int resultado = calculaSomaMultiplosDeTresECinco(numero);
		System.out.println("Soma dos multiplos de 3 e 5 menores que " + numero + ": ");
		System.out.println(resultado);
					
		sc.close();
			
	}
	
	/** Metodo para retorno da soma de todos os numeros multiplos de 3 e 5 abaixo do numero passado como parametro.
	 * @param numero int - numero a ser realizado a soma
	 * @return int - retorno da soma dos multiplos*/
	public static int calculaSomaMultiplosDeTresECinco(int numero){
		int soma = 0;
		
		// Inicia o loop com o primeiro numero inteiro menor
		int inicio = numero - 1;
		
		// testa multiplos de 5 primeiro: calcula primeiro multiplo de 5 e a partir dele diminui 5 a cada loop:		
		int testa5 = inicio - inicio % 5;
		
		for(int i = testa5; i >= 5; i-=5) {
			soma+=i;
			
		}
		
		// testa multiplos de 3: calcula primeiro multiplo de 3 e a partir dele diminui 3 a cada loop
		// verificando se o multiplo tambem e multiplo de 5 para nao somar o mesmo numero duas vezes:
		int testa3 = inicio - inicio % 3;
		
		for(int i = testa3; i >= 3; i-=3) {
			if(  i % 5 != 0 ) {
				soma+=i;
			}
		}		
		
		return soma;
	}
}
