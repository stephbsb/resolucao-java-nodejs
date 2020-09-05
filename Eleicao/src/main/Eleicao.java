package main;

import votos.Votos;

/**
 * Programa que calcula o percentual de votos validos, 
 * percentual de brancos em relacao ao total de eleitores e 
 * percentual de nulos em relacao ao total de eleitores
 * dados valores de numero de eleitores, votos validos, brancos e nulos
 * 
 * @author            Stephany Rodrigues
 */
public class Eleicao {

	public static void main(String[] args) {
		
		int eleitoresTotal = 1000;
		int votosValidos = 800;
		int votosBrancos = 150;
		int votosNulos = 50;
		
		Votos votos = new Votos();		
		
		try {
			votos.build(eleitoresTotal,votosValidos,votosBrancos,votosNulos);
			
			float percentualVotosValidos = votos.percentualVotosValidos();
			float percentualBrancos = votos.percentualBrancos();
			float percentualNulos = votos.percentualNulos();
			
			System.out.print("Percentual de votos válidos em relação ao total de eleitores: ");
			System.out.println(String.format("%.2f", percentualVotosValidos) + "%");
			
			System.out.print("Percentual de brancos em relação ao total de eleitores: ");
			System.out.println(String.format("%.2f", percentualBrancos) + "%");
			
			System.out.print("Percentual de votos válidos em relação ao total de eleitores: ");
			System.out.println(String.format("%.2f", percentualNulos) + "%");
		
			
		} catch (ArithmeticException e) {
			
			System.out.println("Erro: " + e.getMessage());	
			
		} catch (IllegalArgumentException e) {
			
			System.out.println("Erro: " + e.getMessage());
			
		}
	}
}
