        // Inicializando os vetores que irão conter a pontuação e o nome dos jogagores
        let classificacaoP = [];
        let classificacaoN = [];
        // Iniciando o timer
        var tempo = 30;
        // Função que mostra a variável tempo e a diminui em um a cada segundo
        function temporizador() {
            var intervalo = setInterval(function () {
                tempo--;
                timer.innerHTML = tempo;
                // Se o tempo chegar à zero...
                if (tempo <= 0) {
                    // Então os componentes sairão da tela
                    document.getElementById("timer").style.display = "none";
                    document.getElementById("input").style.display = "none";
                    document.getElementById("totPonto").style.display = "none";
                    document.getElementById("tama").style.display = "none";
                    document.getElementById("mostrarAResposta").style.display = "none";
                    document.getElementById("mostracontadorResp").style.display = "none";
                    document.getElementById("mostraResp").style.display = "none";
                    document.getElementById("pulaDisp").style.display = "none";
                    document.getElementById("btnPula").style.display = "none";
                    //Também aparece o botão para ver o total dos pontos dos jogadores, duas mensagens e o som do fim do jogo
                    document.getElementById("btnClass").style.display = "block";
                    dica.innerHTML = "O jogo acabou!";
                    acabou.innerHTML = "Sua pontuação foi: " + pontos;
                    somGameOver();
                    // É adicionado ao vetor a última pontuação do jogador e o intervalo acaba
                    classificacaoP.push(pontos);
                    clearInterval(intervalo);
                }
                //A cor do timer muda de acordo com o tempo restante
                if (tempo > 20) {
                    document.getElementById("timer").style.color = "lightGreen";
                } else if (tempo < 20 && tempo > 16) {
                    document.getElementById("timer").style.color = "gold";
                } else if (tempo < 15 && tempo > 11) {
                    document.getElementById("timer").style.color = "coral";
                } else if (tempo < 10) {
                    document.getElementById("timer").style.color = "crimson";
                }
            }, 1000);
        }
        // Vetor contendo as dicas
        var dicas = ["Grão usado para fazer picopa", "Instrumento usado para gravar imagens",
            "É utilizado para decoração, sendo utulizado para armazenar flores",
            "Serve de entrada ou saída de um recinto",
            "Objeto que serve para proteger a cabeça de impactos externos",
            "Establecimento comercial onde se vende alimentos e produtos variados",
            "Veículo motorizado que se locomove sobre quatro rodas",
            "Veículo motorizado que se locomove sobre duas rodas", "Mobília utilizada para durmir",
            "Almofada que fica na cama utilizada para descansar a cabeça",
            "Também conhecido como o melhor amigo do homem",
            "Utensílio contendo tinta em que se pode escrever ou desenhar",
            "Conjunto de garfo, faca e colher", "Peça de tecido para proteger ou adornar janelas",
            "Aparelho que marca o tempo e indica as horas",
            "Ferramenta para fazer furos em material como concreto, madeira e metal",
            "Dispositivo elétrico que transforma energia elétrica em energia luminosa",
            "Objeto que bloqueia ou impede o acesso a uma determinada área ou coisa",
            "Primeira capital do Brasil", "Planeta que é famoso por possuir três anéis em sua volta",
            "Terceira estação do ano",
            "Primeiro personagem criado por Walt Disney", "Continente em que a Índia está localizada",
            "Pessoa que descobriu a América",
            "Nome do país onde a Mona Lisa é exibida", "Transdutor que converte o som em sinais elétricos",
            "Fécula comestível extraída da mandioca em que se preparam pratos doces ou salgados",
            "Substâncias com agentes patogênos que estimulam o sistema imune a produzir anticorpos",
            "Aparelho elétrico composto de um recipiente com uma hélice de pás cortantes no fundo para trirurar alimentos",
            "Jogo de celular em que você deve fugir de um guarda por trilhos de uma estação de trem",
            "Jogo mobile em que você deve atirar pássaros de um estiligue para eliminar os porcos",
            "Animal terrestre mais veloz do mundo",
            "Processo em que uma larva se transforma em um indivíduo adulto", "Complete o ditado: Cavalo dado...",
            "Usado para higiêne bucal",
            "Pequena e fina haste com um orifício por onde passa linha usada para coser, bordar ou tecer",
            "O menor país do mundo", "País com a maior população do mundo",
            "País em que Santa Catarina faz fronteira",
            "Programa de comédia sobre um garoto órfão e sempre faminto que passa a maior parte do tempo num barril no pátio principal",
            "Filme de animação em que um pai superprotetor que embarca em uma aventura para resgatá seu filho quando ele é levado",
            "Série de animação de gira em torno de um um gato azul de 12 anos de idade acompanhado por seu irmão, um peixinho dourado com pernas",
            "Série de animação em que dois meio-irmãos realizam atividades extravagentes durante suas férias de verão enquanto seu ornitorrinco de estimação luta contra um cientista malvado",
            "Lugar mais frio do mundo", "Continente com o maior número de países",
            "Especialidade médica que se dedica ao estudo e tratamento das doenças que ocorrem na orelha, no nariz e na garganta",
            "Lagarto com habilidade de mudar de cor",
            "Compilação que contém as palavras de uma língua, apresentando seu significado, utilização, etimologia, sinônimos, antônimos ou com a tradução para outra língua",
            "É um órgão musculoso que apresenta como função principal garantir que o sangue seja enviado para todas as partes do corpo",
            "Maior orgão do corpo humano", "Grupo de animais pré-históricos já exstintos"
        ];
        //Vetor contendo as respostas
        var dados = ["Milho", "Camera", "Vaso", "Porta", "Capacete", "Mercado", "Carro", "Moto", "Cama",
            "Travesseiro", "Cachorro", "Caneta", "Talher", "Cortina", "Relogio", "Furadeira", "Lampada", "Cadeado",
            "Salvador",
            "Saturno", "Outono", "Mickey Mouse", "Asia", "Cristovao Colombo", "Franca", "Microfone",
            "Tapioca", "Vacina", "Liquidificador", "Subway Surfers", "Angry Birds", "Guepardo", "Metamorfose",
            "Nao se olha os dentes", "Fio dental", "Agulha", "Vaticano", "China", "Argentina", "Chaves",
            "Procurando Nemo",
            "O Incrivel Mundo de Gumball", "Phineas e Ferb", "Antartida", "Africa", "otorrinolaringologia",
            "Camaleao",
            "Dicionario", "Coracao", "Pele", "Dinossauro"
        ];
        // Inicializando as variáveis
        var i = 0,
            n = 0,
            v = 0,
            z = 0,
            contadorResp = 0,
            contadorPula = 0,
            sorteados = [],
            pontos = 0,
            max = dados.length;

        // Função que mostra a pontuação seleciona o input e entra no loop
        function jogar() {
            totPonto.innerHTML = "Pontuação: " + pontos;
            document.getElementById("input").select();
            // Loop que sorteia um número aleatório e que chama outras funções
            while (n <= 999) {
                n++;
                i = Math.floor(Math.random() * max);
                sorteados.push(i);
                z++;
                mostrarAResposta.innerHTML = "Resposta: " + dados[i];
                dica.innerHTML = dicas[i];
                clique();
                letrasFaltando();
            }
        }
        // Função que analiza se o que foi digitado é igual a resposta
        function ve() {
            var veja = document.getElementById("input").value;
            // Se for, o valor do input é zerado, aparece a mensagem, um novo número é soteado e aparece uma nova dica na tela
            if (veja.toUpperCase() == dados[i].toUpperCase()) {
                somRespostaCerta();
                input.value = "";
                mudaCorNavV();
                document.getElementById("resp").style.color = "forestGreen";
                resp.innerHTML = "Acertou";
                desapareceResp();
                i = Math.floor(Math.random() * max);
                sorteados.push(i);
                z++;
                //Enquanto o número sorteado for igual ao último número, então o número é sorteado novamente
                while (i == sorteados[z - 1]) {
                    i = Math.floor(Math.random() * max);
                }
                dica.innerHTML = dicas[i];
                document.getElementById("mostrarAResposta").style.display = "none";
                mostrarAResposta.innerHTML = "Resposta: " + dados[i];
                // É acresentado mais 5 segundos e mais 100 pontos
                tempo += 5;
                document.getElementById("temp").style.color = "forestGreen";
                temp.innerHTML = " +5 seg";
                desapareceTemp();
                pontos += 100;
                totPonto.innerHTML = "Pontuação: " + pontos;
                document.getElementById("ponto").style.color = "forestGreen";
                ponto.innerHTML = " +100 pts";
                desaparecePonto();
            } else {
                // Mas se não acertar, aparece a mensagem, e o tempo diminui
                somRespostaErrada();
                input.value = "";
                mudaCorNavP();
                document.getElementById("resp").style.color = "red";
                resp.innerHTML = "Errou";
                desapareceResp();
                tempo -= 5;
                document.getElementById("temp").style.color = "red";
                temp.innerHTML = " -5 seg";
                desapareceTemp();
            }
        }
        // As funções abaixo aparecem uma mensagem temporária quando acionadas pela função ve
        function desapareceResp() {
            document.getElementById("resp").style.display = "block";
            setTimeout(function () {
                document.getElementById("resp").style.display = "none";
            }, 1000);
        }

        function desapareceTemp() {
            document.getElementById("temp").style.display = "block";
            setTimeout(function () {
                document.getElementById("temp").style.display = "none";
            }, 1000);
        }

        function desaparecePonto() {
            document.getElementById("ponto").style.display = "block";
            setTimeout(function () {
                document.getElementById("ponto").style.display = "none";
            }, 1000);
        }
        //Funções que mudam a classe da tag nav para mudar a cor
        function mudaCorNavV() {
            document.getElementById("mudaNav").className = "navbar navbar-light bg-success";
            setTimeout(function () {
                document.getElementById("mudaNav").className = "navbar navbar-dark bg-primary";
            }, 1000);
        }

        function mudaCorNavP() {
            document.getElementById("mudaNav").className = "navbar navbar-light bg-danger";
            setTimeout(function () {
                document.getElementById("mudaNav").className = "navbar navbar-dark bg-primary";
            }, 1000);
        }
        // Função que informa quantas letras faltam para ser igual ao tamanho da resposta
        function letrasFaltando() {
            setInterval(function () {
                var inpu = document.getElementById("input").value;
                var tam = dados[i].length - inpu.length;
                tama.innerHTML = tam + " letra(s) faltando";
            }, 100);
        }
        // Função que aciona a função ve quando o tamanho do valor do input for igual a da resposta
        function clique() {
            var intervalo = setInterval(function () {
                var inpu = document.getElementById("input").value;
                var tam = dados[i].length;
                if (inpu.length == tam) {
                    ve();
                    clearInterval(intervalo);
                }
            }, 100);
        }
        //Função que incrementa contador a cada 1000 pontos que o jogador alcança
        function mostraRespCount() {
            for (var j = 1000; j <= classificacaoP[v - 1]; j += 1000) {
                contadorResp++;
            }
            //O botão é habilitado e é mostrado na tela quantos estão disponíveis
            document.getElementById("mostraResp").disabled = false;
            mostracontadorResp.innerHTML = "Disponível: " + contadorResp;
        }
        //Função que mostra na tela a resposta se o contador for maior que zero
        function mostraResposta() {
            if (contadorResp <= 0) {
                document.getElementById("mostraResp").disabled = true;
                return;
            }
            document.getElementById("mostrarAResposta").style.display = "block";
            //Após mostrar na tela a resposta, o contador decrementa e é mostrado o novo valor disponível
            contadorResp--;
            mostracontadorResp.innerHTML = "Disponível: " + contadorResp;
        }
        //Função que incrementa o contador a cada 500 pontos que o jogador alcança
        function pulaPergCount() {
            for (var j = 500; j <= classificacaoP[v - 1]; j += 500) {
                contadorPula++;
                document.getElementById("btnPula").disabled = false;
            }
            pulaDisp.innerHTML = "Disponível: " + contadorPula;
        }
        //Função que pula a pergunta se o contador for maior que zero
        function pulaPergunta() {
            if (contadorPula <= 0) {
                document.getElementById("btnPula").disabled = true;
                return;
            }
            document.getElementById("mostrarAResposta").style.display = "none";
            i = Math.floor(Math.random() * max);
            sorteados.push(i);
            z++;
            while (i == sorteados[z - 1]) {
                i = Math.floor(Math.random() * max);
            }
            dica.innerHTML = dicas[i];
            //Após pular a dica o contador decrementa
            contadorPula--;
            pulaDisp.innerHTML = "Disponível: " + contadorPula;
        }
        // Função que, quando acionada, adiciona o jogador ao vetor
        function pegaNome() {
            var pegNome = document.getElementById("nome").value;
            classificacaoN.push(pegNome);
        }
        //Função que repete o último nome digitado se o jogador não mudar o nome
        function repeteNome() {
            var repNome = classificacaoN[v - 1];
            classificacaoN.push(repNome);
        }
        // Função que adiciona novo jogador ao vetor
        function pegaMudaNome() {
            var pegNome = document.getElementById("mostraMudaNome").value;
            classificacaoN.push(pegNome);
        }
        //Função que exibe os valores dos vetores na tela
        function gerarN() {
            for (i = 0; i < classificacaoN.length; i++) {
                var lista = document.getElementById("lista1").innerHTML;
                lista = lista + "<li id='a'>" + classificacaoN[i] + ":" + "</li>";
                document.getElementById("lista1").innerHTML = lista;

            }
        }

        function gerarP() {

            for (i = 0; i < classificacaoP.length; i++) {
                var lista = document.getElementById("lista2").innerHTML;
                lista = lista + "<li id='a'>" + classificacaoP[i] + "</li>";
                document.getElementById("lista2").innerHTML = lista;

            }
        }
        //Função que reinicia as variáveis
        function reset() {
            v++;
            tempo = 30;
            i = 0;
            n = 0;
            pontos = 0;
            sorteados = [];
        }
        //Função que mostra os componentes ocultos quando é acionado
        function mostraTrocaNome() {
            var display = document.getElementById("mostraMudaNome").style.display;
            if (display == "none") {
                document.getElementById("mostraMudaNome").style.display = 'block';
                document.getElementById("btnOk").style.display = 'block';
                document.getElementById("recomeca").disabled = true;
            } else {
                // e os oculta novamente quando é acionado de novo
                document.getElementById("mostraMudaNome").style.display = 'none';
                document.getElementById("btnOk").style.display = 'none';
            }
        }
        //Função que mostra/oculta o tutorial
        function mostraTutorial() {
            var display = document.getElementById("carouselExampleControls").style.display;
            if (display == "none") {
                document.getElementById("carouselExampleControls").style.display = 'block';
                document.getElementById("btnTutorial").value = "Ocultar tutorial";
            } else {
                document.getElementById("carouselExampleControls").style.display = 'none';
                document.getElementById("btnTutorial").value = "Ver tutorial";
            }
        }
        //Funções que iniciam o áudio quando chamados
        function somClick() {
            var playAudio = document.getElementById("somClique");
            playAudio.play();
        }

        function somGameIntro() {
            var playAudio = document.getElementById("somIntro");
            playAudio.play();
        }

        function somRespostaCerta() {
            var playAudio = document.getElementById("somCerto");
            playAudio.play();
        }

        function somRespostaErrada() {
            var playAudio = document.getElementById("somErrado");
            playAudio.play();
        }

        function somGameOver() {
            var playAudio = document.getElementById("somOver");
            playAudio.play();
        }
        // Quando acionado é exibido novas páginas no mesmo arquivo
        function novo() {
            document.open();
            document.write(
                "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6' crossorigin='anonymous'><body onclick='somClick()'><nav id='mudaNav' class='navbar navbar-dark bg-primary'><div class='container-fluid'><span class='navbar-brand mb-0 h1'>Jogo de palavras</span></div></nav><div class='d-flex flex-row justify-content-center align-items-center'><span id='timer'></span><span id='temp'></span></div><div class='d-flex flex-row'><span id='totPonto'></span><span id='ponto'></span></div><h2 class='text-center text-secondary' id='dica'></h2><div class='d-flex flex-row justify-content-center align-items-center'><input type='text' id='input'><h1 id='acabou'></h1><p id='resp'></p></div><p class='text-center' id='tama'></p><div class='d-flex flex-row justify-content-center align-items-center'><input type='button' class='btn btn-secondary btn-sm' id='btnClass' onclick='classific(); gerarN(); gerarP()' style='display: none;' value='Ver Classificação'></div><div class='d-flex flex-column justify-content-start align-items-start'style='position: absolute;'><span id='mostracontadorResp'>Disponível: 0</span><input type='button' id='mostraResp' class='btn btn-outline-dark' onclick='mostraResposta()' value='Mostrar resposta'></div><div class='d-flex flex-column justify-content-start align-items-end'><span id='pulaDisp' style='margin-right: 30px;'>Disponível: 0</span><button id='btnPula' class='btn btn-outline-dark' onclick='pulaPergunta()'>Pular pergunta</button></div><h6 id='mostrarAResposta' class='text-center' style='display:none;'></h6><audio style='visibility: hidden;' id='somIntro' autoplay><source src='gameIntro.wav' type='audio/wav'></audio><audio style='visibility: hidden;' id='somClique'><source src='clique.wav' type='audio/wav'></audio><audio style='visibility: hidden;' id='somCerto'><source src='respostaCerta.wav' type='audio/wav'></audio><audio style='visibility: hidden;' id='somErrado'><source src='respostaErrada.wav' type='audio/wav'></audio><audio style='visibility: hidden;' id='somOver'><source src='gameOver.wav' type='audio/wav'></audio></body>"
            );
            document.close();
        }

        function classific() {
            document.open();
            document.write(
                "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6' crossorigin='anonymous'><body onclick='somClick()'><nav class='navbar navbar-dark bg-primary'><div class='container-fluid'><span class='navbar-brand mb-0 h1'>Jogo de palavras</span></div></nav><ul class='list-group list-group-horizontal justify-content-center align-items-center' style='margin-top: 50px;'><ol class='list-group-item list-group-item-dark' id=lista1></ol><ul class='list-group-item list-group-item-secondary' id=lista2></ul></ul><div class='btn-group' style='margin-left: 40%; margin-top: 25px;'><input type='button' id='recomeca' class='btn btn-primary btn-sm' onclick='reset(); temporizador(); novo(); jogar(); repeteNome(); mostraRespCount(); pulaPergCount()' value='Recomeçar'><input type='button' class='btn btn-info btn-sm' id='btnMudaJog' onclick='mostraTrocaNome();' value='Mudar jogador'></div><div class='d-flex flex-row justify-content-center align-items-center' style='margin-top: 10px;'><input type='text' id='mostraMudaNome' placeholder='Digite o novo jogador' style='display: none;'><input type='button' class='btn btn-success btn-sm' id='btnOk' onclick='pegaMudaNome(); reset(); temporizador(); novo(); jogar(); mostraRespCount(); pulaPergCount()' value='Ok' style='display: none;'></div><audio style='visibility: hidden;' id='somClique'><source src='clique.wav' type='audio/wav'></audio></body>"
            );
            document.close();
        }