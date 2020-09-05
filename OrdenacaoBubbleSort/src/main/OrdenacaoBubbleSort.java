package main;

/**
 * Programa que ordena um vetor de numeros inteiros usando o algoritmo bubble sort
 * 
 * @author            Stephany Rodrigues
 */
public class OrdenacaoBubbleSort {

	public static void main(String[] args) {
		
		int numeros[] = {5,3,2,4,7,1,0,6};		
		
		System.out.println("Vetor Desordenado:");
		
		System.out.print("{");
		for(int i = 0; i < numeros.length ; i++) {
			System.out.print(numeros[i] + " ");
		}
		System.out.println("} \n");
		
		
		int numerosOrdenado[] = ordenaVetorBubbleSort(numeros);
		
		// Resultado:
		System.out.println("Vetor Ordenado:");
		System.out.print("{");
		for(int i = 0; i < numerosOrdenado.length ; i++) {
			System.out.print(numerosOrdenado[i] + " ");
		}
		System.out.println("}");
		
		
	}
	
	
	/** Metodo que recebe um vetor de numeros inteiros e usa algoritmo bubble sort para ordena-lo
	 * @param vetor int[] - vetor a ser ordenado
	 * @return int[] - retorno do vetor ordenado*/
	public static int[] ordenaVetorBubbleSort(int[] vetor) {
		
		// variavel auxiliar que diminui a cada loop para que nao seja 
		// necessario percorre-lo completamente no próximo
		int n = vetor.length;
		
		// Para melhorar a performance usaremos uma variável para verificar 
		// se apenas uma troca foi realizada no loop
		int trocas;		
		
		// Logica para ordenamento bubble sort
		while( n != 1 ) {
			
			trocas = 0;
			
			for(int i = 1; i < n ; i++) {
				if(vetor[i] < vetor[i-1]) {
					int aux = vetor[i];
					vetor[i] = vetor[i-1];
					vetor[i-1] = aux;
					trocas++;
				}				
			}
			
			// Se apenas uma troca foi realizada nao e necessario prosseguir 
			// o vetor foi totalmente ordenado, entao podemos sair do loop
			if(trocas == 1) {
				break;
			}		
			
			n--;
		}
		
		return vetor;
	}
}
