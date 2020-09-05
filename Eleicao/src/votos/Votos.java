package votos;

/**
 * Classe que representa a os votos e possui metodos para manipular dados
 * 
 * @author            Stephany Rodrigues
 */
public class Votos {
	
	private int eleitoresTotal;
	private int votosValidos;
	private int votosNulos;
	private int votosBrancos;
	
	/**
	* Construtor para criar o objeto vazio
	*/
	public Votos() {		
	}
	
	/**
	* Metodo usado para popular o objeto e fazer validacao dos argumentos
	* 
	* @param eleitoresTotal int - numero total de eleitores
	* @param votosValidos int - numero total de votos validos
	* @param votosNulos int - numero total de nulos
	* @param votosBrancos int - numero total de brancos
	* 
	* @return this Votos - objeto populado
	*/
	public Votos build(int eleitoresTotal, int votosValidos, int votosNulos, int votosBrancos) {
		if(validateValues(eleitoresTotal,votosValidos,votosNulos,votosBrancos)) {
			this.eleitoresTotal = eleitoresTotal;
			this.votosValidos = votosValidos;
			this.votosNulos = votosNulos;
			this.votosBrancos = votosBrancos;
			
			return this;
			
		} else {
			return null;
			
		}
	}
	
	/**
	* Metodo usado para validar os argumentos passado na construcao do objeto.
	* Valida se a soma de votos e menor ou igual ao numero de eleitores
	* 
	* @param eleitoresTotal int - numero total de eleitores
	* @param votosValidos int - numero total de votos validos
	* @param votosNulos int - numero total de nulos
	* @param votosBrancos int - numero total de brancos
	* 
	* @return boolean - true caso os valores sao consistentes
	* 
	* @throws IllegalArgumentException caso valores sejam inconsistentes
	*/
	private boolean validateValues(int eleitoresTotal, int votosValidos, int votosNulos, int votosBrancos) throws IllegalArgumentException{
		if((votosValidos + votosNulos + votosBrancos) <= eleitoresTotal) {
			return true;
		} else {
			throw new IllegalArgumentException("Numero de votos inconsistente. A soma de votos válidos, nulos e brancos deve ser menor ou igual ao número total de eleitores.");
		}
	}
	
	/**
	* Metodo usado para calcular percentual de votos validos em relacao ao total de eleitores
	* 
	* @return float - percentual de votos validos em relacao ao total de eleitores
	* 
	* @throws ArithmeticException caso numero de eleitores seja passado como zero e impedir divisao por zero.
	*/
	public float percentualVotosValidos() throws ArithmeticException{
		float resultado = (float)votosValidos/eleitoresTotal * 100;
		
		if(Float.isInfinite(resultado) || Float.isNaN(resultado)) {
			throw new ArithmeticException("Não é posivel divisão por zero.");
		}
		
		return resultado;		
	}
	
	/**
	* Metodo usado para calcular percentual de votos brancos em relacao ao total de eleitores
	* 
	* @return float - percentual de votos brancos em relacao ao total de eleitores
	* 
	* @throws ArithmeticException caso numero de eleitores seja passado como zero e impedir divisao por zero.
	*/
	public float percentualBrancos() throws ArithmeticException {
		float resultado = (float)votosBrancos/eleitoresTotal * 100;
		
		if(Float.isInfinite(resultado) || Float.isNaN(resultado)) {
			throw new ArithmeticException("Não é posivel divisão por zero.");
		}
		
		return resultado;
	}
	
	/**
	* Metodo usado para calcular percentual de votos nulos em relacao ao total de eleitores
	* 
	* @return float - percentual de votos nulos em relacao ao total de eleitores
	* 
	* @throws ArithmeticException caso numero de eleitores seja passado como zero e impedir divisao por zero.
	*/
	public float percentualNulos() throws ArithmeticException {
		float resultado = (float)votosNulos/eleitoresTotal * 100;
		
		if(Float.isInfinite(resultado) || Float.isNaN(resultado)) {
			throw new ArithmeticException("Não é posivel divisão por zero.");
		}
		
		return resultado;
	}
	
}
