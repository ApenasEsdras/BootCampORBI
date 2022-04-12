function start() { // Inicio da funcao start()

	$("#inicio").hide();

	$("#fundoGame").append("<div id='jogador'class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima2'></div>");



	//Principais variaveis do jogo

	var jogo = {}
	var TECLA = {
		W: 87,
		S: 83,
		D: 68
	}

	jogo.pressionou = [];

	//Game Loop

	jogo.timer = setInterval(loop, 30); //temporizador

	function loop() {

		movefundo();

	} // Fim da funcao loop()


	//Funcaoo que movimenta o fundo do jogo

	function movefundo() {

		esquerda = parseInt($("#fundoGame").css("background-position"));
		$("#fundoGame").css("background-position", esquerda - 1);

	} // fim da funcaoo movefundo()


} //fim  da funcao




