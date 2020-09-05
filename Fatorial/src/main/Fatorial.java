package main;

import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * Programa que calcula o fatorial de um numero fornecido como entrada.
 * 
 * @author            Stephany Rodrigues
 */
public class Fatorial{

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		try {
			
			System.out.println("Digite um numero natural para calcular o fatorial:");
			
			int numero = sc.nextInt();
			
			int fatorial = fatorial(numero);	
			
			System.out.print(numero + "!= ");			
			System.out.println(fatorial);
			
		} catch(IllegalArgumentException e){
			
			System.out.println("Erro: " + e.getMessage());
			
		} catch(InputMismatchException e){
			
			System.out.println("Erro: Valor invalido!");
			
		} finally {
			
			sc.close();
			
		}
	}

	/** Metodo que recebe um numero inteiro e retorna o calculo de seu fatorial
	 * usando recursividade
	 * @param numero int - numero a ser calculado o fatorial
	 * @return int - retorna o valor do fatorial calculado
	 * @exception IllegalArgumentException erro para entradas negativas*/
	public static int fatorial(int numero) throws IllegalArgumentException {		
		if(numero >= 0 ) {
			if ( numero == 0 || numero == 1 ) {
				return 1;
			} else {
				return numero * fatorial(numero - 1);
			}	
		} else {
			throw new IllegalArgumentException("Fatorial não admite números negativos");
		}
	}
	
}
