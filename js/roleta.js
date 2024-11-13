let local_ptn = document.getElementById("pontos");
let local_ptn2 = document.getElementById("pontos2");
let local_ptn3 = document.getElementById("pontos3");
let local_ptn4 = document.getElementById("pontos4");

let pontosJogador1 = 0;
let pontosJogador2 = 0;
let pontosJogador3 = 0;
let pontosJogador4 = 0;
let vez = 1;
let position = 0;
let perguntaAtual;
let numJogadores;

local_ptn.innerHTML = pontosJogador1;
local_ptn2.innerHTML = pontosJogador2;
local_ptn3.innerHTML = pontosJogador3;
local_ptn4.innerHTML = pontosJogador4;

let container = document.querySelector(".contorno");
let btn = document.getElementById("gire");
let perguntas = localStorage.getItem("questoes");
let questoes = [];
let jogadores = [];
let jogado = localStorage.getItem("jogadores");

let sorte = false;
console.log(sorte);

if (perguntas === "todos") (
    questoes = [
        {
            question: "QUESTÃO DE MECÂNICA \n Um corredor está treinando em uma pista circular de 400 metros de raio. Ele completa uma volta em 60 segundos. Qual é a sua velocidade escalar média?",
            opcoes: ["4 m/s", "8 m/s", "12 m/s", "16 m/s"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Uma bola é lançada verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Desprezando a resistência do ar, qual é a altura máxima atingida pela bola?",
            opcoes: ["10 m", "20 m", "30 m", "40 m"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um avião voa em linha reta com velocidade constante de 800 km/h em relação ao solo. Se a velocidade do vento é de 100 km/h, qual é a velocidade do avião em relação ao ar?",
            opcoes: ["700 km/h", "800 km/h", "900 km/h", "1000 km/h"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado horizontalmente a partir do topo de uma montanha com uma velocidade inicial de 30 m/s. Desprezando a resistência do ar, qual é a trajetória descrita pelo corpo?",
            opcoes: ["Parabólica", "Vertical", "Horizontal", "Circular"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um veículo percorre uma estrada em linha reta durante 2 horas com velocidade constante de 60 km/h. Qual é a distância total percorrida pelo veículo?",
            opcoes: ["30 km", "60 km", "120 km", "240 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Uma bola é lançada horizontalmente a partir de uma altura de 2 metros acima do solo com uma velocidade inicial de 10 m/s. Desprezando a resistência do ar, qual é o tempo necessário para a bola atingir o solo?",
            opcoes: ["0,2 s", "1 s", "2 s", "5 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro viaja de uma cidade A para uma cidade B com velocidade média de 80 km/h e retorna para a cidade A com velocidade média de 60 km/h. Qual é a velocidade média do carro durante toda a viagem?",
            opcoes: ["70 km/h", "72 km/h", "75 km/h", "76 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 10 m/s. Desprezando a resistência do ar, qual é o tempo necessário para o objeto atingir a altura máxima?",
            opcoes: ["1 s", "2 s", "3 s", "4 s"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um trem percorre uma distância de 400 km em 5 horas. Qual é a sua velocidade média?",
            opcoes: ["40 km/h", "80 km/h", "100 km/h", "120 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um projétil é lançado com uma velocidade inicial de 50 m/s formando um ângulo de 30 graus com a horizontal. Qual é a sua velocidade horizontal inicial?",
            opcoes: ["25 m/s", "35 m/s", "40 m/s", "45 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um ciclista percorre uma pista circular de 200 metros de raio em 40 segundos. Qual é a sua velocidade escalar média?",
            opcoes: ["3 m/s", "5 m/s", "10 m/s", "15 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Uma pedra é lançada verticalmente para baixo com uma velocidade inicial de 15 m/s. Desprezando a resistência do ar, qual será a altura após 2 segundos?",
            opcoes: ["5 m", "10 m", "15 m", "25 m"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um barco navega a 30 km/h em relação à água. Se a correnteza do rio está a 10 km/h contra o barco, qual é a velocidade do barco em relação à margem?",
            opcoes: ["20 km/h", "30 km/h", "40 km/h", "10 km/h"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto é lançado horizontalmente de uma altura de 10 metros. Desprezando a resistência do ar, quanto tempo leva para atingir o solo?",
            opcoes: ["1 s", "2 s", "3 s", "4 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro vai de uma cidade A para uma cidade B a 90 km/h e volta a 60 km/h. Qual é a velocidade média durante toda a viagem?",
            opcoes: ["70 km/h", "75 km/h", "80 km/h", "85 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto é lançado verticalmente para cima com uma velocidade de 25 m/s. Qual é a altura máxima atingida?",
            opcoes: ["30 m", "31,25 m", "32,5 m", "25 m"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um trem viaja a 120 km/h por 2 horas. Qual é a distância total percorrida?",
            opcoes: ["120 km", "200 km", "240 km", "300 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um projétil é lançado com uma velocidade de 40 m/s formando um ângulo de 45 graus com a horizontal. Qual é sua velocidade vertical inicial?",
            opcoes: ["20 m/s", "28,28 m/s", "30 m/s", "40 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado verticalmente para baixo com uma velocidade inicial de 20 m/s. Qual é a sua velocidade após 2 segundos?",
            opcoes: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro percorre 150 km em 2 horas e 30 minutos. Qual é sua velocidade média?",
            opcoes: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto cai de uma altura de 5 metros. Quanto tempo leva para atingir o solo, desprezando a resistência do ar?",
            opcoes: ["0,5 s", "1 s", "1,5 s", "2 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um atleta corre 400 metros em 50 segundos. Qual é sua velocidade média?",
            opcoes: ["6 m/s", "8 m/s", "10 m/s", "12 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um foguete é lançado com uma velocidade inicial de 100 m/s. Quanto tempo levará para atingir a altura máxima?",
            opcoes: ["5 s", "10 s", "15 s", "20 s"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro viaja a uma velocidade de 72 km/h. Qual é sua velocidade em m/s?",
            opcoes: ["10 m/s", "12 m/s", "20 m/s", "25 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado verticalmente para cima com uma velocidade inicial de 12 m/s. Qual será a altura máxima atingida?",
            opcoes: ["6 m", "7,2 m", "8 m", "10 m"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um barco navega a 25 km/h em relação à água, mas há uma correnteza de 5 km/h a favor. Qual é a velocidade do barco em relação à margem?",
            opcoes: ["20 km/h", "25 km/h", "30 km/h", "35 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro percorre 300 km a uma velocidade de 100 km/h. Quanto tempo leva para completar a viagem?",
            opcoes: ["2 h", "3 h", "4 h", "5 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um projetor lança uma bola a 30 m/s formando um ângulo de 60 graus. Qual é a componente vertical da velocidade?",
            opcoes: ["15 m/s", "25,98 m/s", "30 m/s", "10 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um ciclista se desloca 10 km em 20 minutos. Qual é sua velocidade média em km/h?",
            opcoes: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado verticalmente para baixo com uma velocidade de 10 m/s. Qual será sua velocidade após 3 segundos?",
            opcoes: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ciclista percorre uma distância de 15 km em 30 minutos. Qual é a sua velocidade média?",
            opcoes: ["15 km/h", "20 km/h", "30 km/h", "45 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um trem viaja de uma estação para outra com uma velocidade média de 80 km/h. Se a distância entre as duas estações é de 200 km, quanto tempo o trem leva para chegar ao destino?",
            opcoes: ["1 h", "2 h", "2,5 h", "3 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um atleta corre uma maratona de 42 km em 3 horas. Qual é a sua velocidade média durante a corrida?",
            opcoes: ["12 km/h", "14 km/h", "16 km/h", "18 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um avião percorre uma distância de 800 km em 2 horas. Qual é a sua velocidade média?",
            opcoes: ["200 km/h", "400 km/h", "600 km/h", "800 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um barco atravessa um rio com uma velocidade média de 6 km/h em relação à água. Se a largura do rio é de 300 metros, quanto tempo o barco leva para atravessá-lo?",
            opcoes: ["5 min", "10 min", "15 min", "20 min"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ônibus viaja de uma cidade para outra com uma velocidade média de 50 km/h. Se a distância entre as duas cidades é de 150 km, quanto tempo o ônibus leva para chegar ao destino?",
            opcoes: ["2 h", "3 h", "4 h", "5 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um carro percorre uma distância de 360 km em 6 horas. Qual é a sua velocidade média?",
            opcoes: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um nadador percorre uma distância de 1,5 km em 30 minutos. Qual é a sua velocidade média?",
            opcoes: ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um trem viaja de uma estação para outra com uma velocidade média de 90 km/h. Se a distância entre as duas estações é de 180 km, quanto tempo o trem leva para chegar ao destino?",
            opcoes: ["1 h", "2 h", "3 h", "4 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um carro sai de uma cidade A e chega a uma cidade B em 4 horas, viajando a 80 km/h. Qual é a distância entre as duas cidades?",
            opcoes: ["240 km", "320 km", "360 km", "400 km"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ciclista viaja a uma velocidade constante de 25 km/h. Quanto tempo ele leva para percorrer 100 km?",
            opcoes: ["3 h", "4 h", "5 h", "6 h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um caminhão percorre 150 km a uma velocidade de 75 km/h. Quanto tempo ele leva para completar a viagem?",
            opcoes: ["1 h", "2 h", "2,5 h", "3 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um corredor participa de uma corrida de 5 km e termina em 25 minutos. Qual é a sua velocidade média em km/h?",
            opcoes: ["10 km/h", "12 km/h", "14 km/h", "15 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um carro viaja a uma velocidade de 100 km/h por 2 horas e depois a 80 km/h por 1 hora. Qual é a velocidade média total da viagem?",
            opcoes: ["90 km/h", "85 km/h", "80 km/h", "75 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ônibus faz uma viagem de 300 km a uma velocidade média de 60 km/h. Depois, retorna a 90 km/h. Qual é a velocidade média total da viagem?",
            opcoes: ["72 km/h", "70 km/h", "75 km/h", "80 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um atleta corre 10 km em 50 minutos. Qual é a sua velocidade média em km/h?",
            opcoes: ["10 km/h", "12 km/h", "14 km/h", "15 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um barco navega a 15 km/h em águas tranquilas. Se ele encontra uma correnteza de 3 km/h contra, qual é a sua velocidade em relação à terra?",
            opcoes: ["12 km/h", "15 km/h", "18 km/h", "21 km/h"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE MRU \n Um carro percorre uma estrada retilínea com velocidade constante de 20 m/s. Qual é a sua posição após 10 segundos, partindo do repouso?",
            opcoes: ["0 m", "100 m", "200 m", "300 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Qual é a sua posição após 5 segundos de lançamento?",
            opcoes: ["0 m", "75 m", "150 m", "225 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um atleta corre em uma pista retilínea com velocidade constante de 8 m/s. Qual é a sua posição após 30 segundos, partindo do repouso?",
            opcoes: ["0 m", "120 m", "240 m", "360 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um avião decola da pista com velocidade constante de 300 km/h. Qual é a sua posição após 1 hora de decolagem?",
            opcoes: ["0 km", "150 km", "300 km", "450 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 10 m/s. Qual é a sua posição após 2 segundos de lançamento?",
            opcoes: ["0 m", "10 m", "20 m", "30 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um ciclista parte do repouso e acelera a uma taxa constante de 2 m/s². Qual é a sua posição após 8 segundos de movimento?",
            opcoes: ["0 m", "16 m", "32 m", "64 m"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE MRU \n Um barco se desloca em linha reta com velocidade constante de 12 m/s. Qual é a sua posição após 15 segundos, partindo do repouso?",
            opcoes: ["0 m", "90 m", "180 m", "270 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 25 m/s. Qual é a sua posição após 4 segundos de lançamento?",
            opcoes: ["0 m", "50 m", "100 m", "150 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um trem parte da estação com velocidade constante de 36 km/h. Qual é a sua posição após 2 horas de movimento?",
            opcoes: ["0 km", "36 km", "72 km", "108 km"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE MRU \n Um carro se desloca em linha reta com velocidade constante de 100 km/h. Qual é a sua posição após 3 horas?",
            opcoes: ["200 km", "250 km", "300 km", "350 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um ciclista percorre uma distância de 24 km em 1 hora. Qual é a sua velocidade média?",
            opcoes: ["20 km/h", "22 km/h", "24 km/h", "26 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto se move a uma velocidade constante de 15 m/s. Qual é a sua posição após 10 segundos?",
            opcoes: ["50 m", "100 m", "150 m", "200 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um barco se desloca com velocidade constante de 8 m/s. Qual é a sua posição após 30 segundos?",
            opcoes: ["120 m", "180 m", "240 m", "300 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um trem viaja a 90 km/h. Qual é a distância percorrida após 1,5 horas?",
            opcoes: ["120 km", "135 km", "150 km", "165 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto se desloca a uma velocidade constante de 5 m/s. Qual é a sua posição após 20 segundos?",
            opcoes: ["50 m", "80 m", "100 m", "120 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um carro parte do repouso e acelera uniformemente até atingir uma velocidade de 20 m/s após percorrer uma distância de 100 metros. Qual foi a aceleração do carro?",
            opcoes: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Qual é a sua velocidade após 4 segundos de lançamento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["10,2 m/s", "20,2 m/s", "30,2 m/s", "40,2 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE MRUV \n Um trem desacelera uniformemente de uma velocidade de 36 m/s até parar completamente em 15 segundos. Qual é a aceleração de desaceleração do trem?",
            opcoes: ["0,4 m/s²", "0,6 m/s²", "0,8 m/s²", "1,0 m/s²"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Qual é a altura máxima atingida pelo objeto durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["10 m", "20 m", "30 m", "40 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um corpo parte do repouso com uma aceleração de 2 m/s² em linha reta. Qual é a sua velocidade após percorrer uma distância de 50 metros?",
            opcoes: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 15 m/s. Quanto tempo ele leva para atingir a altura máxima durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["1,0 s", "1,5 s", "2,0 s", "2,5 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um carro parte do repouso e acelera uniformemente a uma taxa de 3 m/s². Qual é a sua velocidade após 10 segundos de movimento?",
            opcoes: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 25 m/s. Qual é a altura máxima atingida pelo objeto durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["12,5 m", "25 m", "37,5 m", "50 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um corpo é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Quanto tempo ele leva para atingir a altura máxima durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["2,04 s", "2,45 s", "2,86 s", "3,27 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Quanto tempo ele leva para atingir a altura máxima durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["2,04 s", "2,45 s", "2,86 s", "3,27 s"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE MRUV \n Um ciclista acelera de 5 m/s a 25 m/s em 10 segundos. Qual é a aceleração média do ciclista?",
            opcoes: ["1 m/s²", "2 m/s²", "2,5 m/s²", "3 m/s²"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE VETORES \n Uma pessoa caminha 20 m para leste e, em seguida, 30 m para sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["10 m, 45° Oeste", "40 m, 30° Nordeste", "50 m, 45° Sul", "50 m, 60° Sudeste"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE VETORES \n Um avião voa 800 km em direção nordeste e, em seguida, 600 km em direção sudoeste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["1000 km, 45° Norte", "1000 km, 135° Nordeste", "1400 km, 45° Sudoeste", "1400 km, 225° Oeste"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE VETORES \n Um barco navega em linha reta com velocidade de 20 km/h em relação à água. Se o rio tem uma correnteza de 5 km/h no sentido norte-sul, determine a velocidade do barco em relação à margem norte quando ele se move:",
            opcoes: ["Para norte", "Para sul", "Para leste", "Para oeste"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE VETORES \n Um carro viaja 100 km para leste e, em seguida, 200 km para o sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["250 km, 63,43° Sudeste", "250 km, 26,57° Oeste", "300 km, 63,43° Sudoeste", "300 km, 26,57° Nordeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um pássaro voa a uma velocidade de 30 km/h em relação ao solo. Se há um vento soprando a 10 km/h na direção norte-sul, determine a velocidade do pássaro em relação ao solo quando ele voa:",
            opcoes: ["Para norte", "Para sul", "Para leste", "Para oeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um navio navega com velocidade de 25 km/h em relação à água. Se há uma correnteza de 10 km/h na direção leste-oeste, determine a velocidade do navio em relação ao solo quando ele navega:",
            opcoes: ["Para norte", "Para sul", "Para leste", "Para oeste"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE VETORES \n Uma pessoa caminha 4 km para o norte e, em seguida, 3 km para o leste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["5 km, 37° Nordeste", "5 km, 53° Sudeste", "7 km, 37° Nordeste", "7 km, 53° Sudeste"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE VETORES \n Um carro viaja 60 km para leste e, em seguida, 80 km para o sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["100 km, 36,87° Sudeste", "100 km, 53,13° Sudoeste", "100 km, 36,87° Nordeste", "100 km, 53,13° Noroeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um avião voa 400 km para oeste e, em seguida, 300 km para o sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["500 km, 36,87° Sudoeste", "500 km, 53,13° Sudoeste", "500 km, 36,87° Noroeste", "500 km, 53,13° Noroeste"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE VETORES \n Uma pessoa caminha 10 km para norte e, em seguida, 15 km para o leste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["25 km, 45° Nordeste", "25 km, 45° Noroeste", "25 km, 63,43° Nordeste", "25 km, 63,43° Noroeste"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE VETORES \n Um ciclista pedala 12 km para leste e, em seguida, 5 km para norte. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["13 km, 22,6° Nordeste", "13 km, 67,4° Nordeste", "17 km, 22,6° Sudeste", "17 km, 67,4° Sudeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um carro percorre 80 km para norte e depois 60 km para oeste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["100 km, 36,87° Sudoeste", "100 km, 53,13° Sudoeste", "140 km, 53,13° Nordeste", "140 km, 36,87° Noroeste"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 15 m/s. Adotando g = 10 m/s², qual é a altura máxima atingida pelo objeto?",
            opcoes: ["10 m", "12,5 m", "15 m", "17,5 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Uma pedra é solta do topo de uma torre de 50 metros de altura. Determine o tempo que a pedra leva para atingir o solo, desprezando a resistência do ar.",
            opcoes: ["2 s", "3 s", "4 s", "5 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um pássaro voa verticalmente para cima com uma velocidade inicial de 8 m/s. Adotando g = 10 m/s², qual é a altura máxima atingida pelo pássaro?",
            opcoes: ["16 m", "24 m", "32 m", "40 m"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima com uma velocidade inicial de 25 m/s. Determine o tempo necessário para que ele atinja a altura máxima.",
            opcoes: ["2,5 s", "3 s", "3,5 s", "4 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um corpo é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Determine a altura máxima atingida pelo corpo, considerando g = 10 m/s².",
            opcoes: ["20 m", "25 m", "30 m", "35 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é solto de uma altura de 100 metros em relação ao solo. Qual é a velocidade do objeto quando ele atinge o solo, considerando g = 10 m/s²?",
            opcoes: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um projétil é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Desprezando a resistência do ar e adotando g = 10 m/s², determine o tempo necessário para que o projétil atinja a altura máxima.",
            opcoes: ["2 s", "3 s", "4 s", "5 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um corpo é lançado verticalmente para cima com uma velocidade inicial de 12 m/s. Adotando g = 10 m/s², determine a altura máxima atingida pelo corpo.",
            opcoes: ["6 m", "8 m", "10 m", "12 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima com uma velocidade inicial de 18 m/s. Adotando g = 10 m/s², determine o tempo necessário para que o objeto atinja a altura máxima.",
            opcoes: ["1,8 s", "2 s", "2,2 s", "2,4 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Uma bola é lançada verticalmente para cima a partir do solo com uma velocidade inicial de 24 m/s. Determine a altura máxima atingida pela bola, considerando g = 10 m/s².",
            opcoes: ["14,4 m", "16 m", "17,6 m", "19,2 m"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para baixo com uma velocidade inicial de 5 m/s de uma altura de 20 metros. Qual será sua velocidade ao atingir o solo, considerando g = 10 m/s²?",
            opcoes: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Uma bola é solta de uma altura de 80 metros. Quanto tempo leva para atingir o solo, desprezando a resistência do ar?",
            opcoes: ["3 s", "4 s", "5 s", "6 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima com uma velocidade inicial de 10 m/s. Qual será a altura máxima atingida, adotando g = 10 m/s²?",
            opcoes: ["5 m", "10 m", "15 m", "20 m"],
            respostaCorreta: "B"
        }
    ]);
else if (perguntas === "mecanica") (
    questoes = [
        {
            question: "QUESTÃO DE MECÂNICA \n Um corredor está treinando em uma pista circular de 400 metros de raio. Ele completa uma volta em 60 segundos. Qual é a sua velocidade escalar média?",
            opcoes: ["4 m/s", "8 m/s", "12 m/s", "16 m/s"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Uma bola é lançada verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Desprezando a resistência do ar, qual é a altura máxima atingida pela bola?",
            opcoes: ["10 m", "20 m", "30 m", "40 m"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um avião voa em linha reta com velocidade constante de 800 km/h em relação ao solo. Se a velocidade do vento é de 100 km/h, qual é a velocidade do avião em relação ao ar?",
            opcoes: ["700 km/h", "800 km/h", "900 km/h", "1000 km/h"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado horizontalmente a partir do topo de uma montanha com uma velocidade inicial de 30 m/s. Desprezando a resistência do ar, qual é a trajetória descrita pelo corpo?",
            opcoes: ["Parabólica", "Vertical", "Horizontal", "Circular"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um veículo percorre uma estrada em linha reta durante 2 horas com velocidade constante de 60 km/h. Qual é a distância total percorrida pelo veículo?",
            opcoes: ["30 km", "60 km", "120 km", "240 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Uma bola é lançada horizontalmente a partir de uma altura de 2 metros acima do solo com uma velocidade inicial de 10 m/s. Desprezando a resistência do ar, qual é o tempo necessário para a bola atingir o solo?",
            opcoes: ["0,2 s", "1 s", "2 s", "5 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro viaja de uma cidade A para uma cidade B com velocidade média de 80 km/h e retorna para a cidade A com velocidade média de 60 km/h. Qual é a velocidade média do carro durante toda a viagem?",
            opcoes: ["70 km/h", "72 km/h", "75 km/h", "76 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 10 m/s. Desprezando a resistência do ar, qual é o tempo necessário para o objeto atingir a altura máxima?",
            opcoes: ["1 s", "2 s", "3 s", "4 s"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um trem percorre uma distância de 400 km em 5 horas. Qual é a sua velocidade média?",
            opcoes: ["40 km/h", "80 km/h", "100 km/h", "120 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um projétil é lançado com uma velocidade inicial de 50 m/s formando um ângulo de 30 graus com a horizontal. Qual é a sua velocidade horizontal inicial?",
            opcoes: ["25 m/s", "35 m/s", "40 m/s", "45 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um ciclista percorre uma pista circular de 200 metros de raio em 40 segundos. Qual é a sua velocidade escalar média?",
            opcoes: ["3 m/s", "5 m/s", "10 m/s", "15 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Uma pedra é lançada verticalmente para baixo com uma velocidade inicial de 15 m/s. Desprezando a resistência do ar, qual será a altura após 2 segundos?",
            opcoes: ["5 m", "10 m", "15 m", "25 m"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um barco navega a 30 km/h em relação à água. Se a correnteza do rio está a 10 km/h contra o barco, qual é a velocidade do barco em relação à margem?",
            opcoes: ["20 km/h", "30 km/h", "40 km/h", "10 km/h"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto é lançado horizontalmente de uma altura de 10 metros. Desprezando a resistência do ar, quanto tempo leva para atingir o solo?",
            opcoes: ["1 s", "2 s", "3 s", "4 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro vai de uma cidade A para uma cidade B a 90 km/h e volta a 60 km/h. Qual é a velocidade média durante toda a viagem?",
            opcoes: ["70 km/h", "75 km/h", "80 km/h", "85 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto é lançado verticalmente para cima com uma velocidade de 25 m/s. Qual é a altura máxima atingida?",
            opcoes: ["30 m", "31,25 m", "32,5 m", "25 m"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um trem viaja a 120 km/h por 2 horas. Qual é a distância total percorrida?",
            opcoes: ["120 km", "200 km", "240 km", "300 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um projétil é lançado com uma velocidade de 40 m/s formando um ângulo de 45 graus com a horizontal. Qual é sua velocidade vertical inicial?",
            opcoes: ["20 m/s", "28,28 m/s", "30 m/s", "40 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado verticalmente para baixo com uma velocidade inicial de 20 m/s. Qual é a sua velocidade após 2 segundos?",
            opcoes: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro percorre 150 km em 2 horas e 30 minutos. Qual é sua velocidade média?",
            opcoes: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um objeto cai de uma altura de 5 metros. Quanto tempo leva para atingir o solo, desprezando a resistência do ar?",
            opcoes: ["0,5 s", "1 s", "1,5 s", "2 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um atleta corre 400 metros em 50 segundos. Qual é sua velocidade média?",
            opcoes: ["6 m/s", "8 m/s", "10 m/s", "12 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um foguete é lançado com uma velocidade inicial de 100 m/s. Quanto tempo levará para atingir a altura máxima?",
            opcoes: ["5 s", "10 s", "15 s", "20 s"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro viaja a uma velocidade de 72 km/h. Qual é sua velocidade em m/s?",
            opcoes: ["10 m/s", "12 m/s", "20 m/s", "25 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado verticalmente para cima com uma velocidade inicial de 12 m/s. Qual será a altura máxima atingida?",
            opcoes: ["6 m", "7,2 m", "8 m", "10 m"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um barco navega a 25 km/h em relação à água, mas há uma correnteza de 5 km/h a favor. Qual é a velocidade do barco em relação à margem?",
            opcoes: ["20 km/h", "25 km/h", "30 km/h", "35 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um carro percorre 300 km a uma velocidade de 100 km/h. Quanto tempo leva para completar a viagem?",
            opcoes: ["2 h", "3 h", "4 h", "5 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um projetor lança uma bola a 30 m/s formando um ângulo de 60 graus. Qual é a componente vertical da velocidade?",
            opcoes: ["15 m/s", "25,98 m/s", "30 m/s", "10 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um ciclista se desloca 10 km em 20 minutos. Qual é sua velocidade média em km/h?",
            opcoes: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE MECÂNICA \n Um corpo é lançado verticalmente para baixo com uma velocidade de 10 m/s. Qual será sua velocidade após 3 segundos?",
            opcoes: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
            respostaCorreta: "C"
        }]);
else if (perguntas === "velocidade") (
    questoes = [
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ciclista percorre uma distância de 15 km em 30 minutos. Qual é a sua velocidade média?",
            opcoes: ["15 km/h", "20 km/h", "30 km/h", "45 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um trem viaja de uma estação para outra com uma velocidade média de 80 km/h. Se a distância entre as duas estações é de 200 km, quanto tempo o trem leva para chegar ao destino?",
            opcoes: ["1 h", "2 h", "2,5 h", "3 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um atleta corre uma maratona de 42 km em 3 horas. Qual é a sua velocidade média durante a corrida?",
            opcoes: ["12 km/h", "14 km/h", "16 km/h", "18 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um avião percorre uma distância de 800 km em 2 horas. Qual é a sua velocidade média?",
            opcoes: ["200 km/h", "400 km/h", "600 km/h", "800 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um barco atravessa um rio com uma velocidade média de 6 km/h em relação à água. Se a largura do rio é de 300 metros, quanto tempo o barco leva para atravessá-lo?",
            opcoes: ["5 min", "10 min", "15 min", "20 min"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ônibus viaja de uma cidade para outra com uma velocidade média de 50 km/h. Se a distância entre as duas cidades é de 150 km, quanto tempo o ônibus leva para chegar ao destino?",
            opcoes: ["2 h", "3 h", "4 h", "5 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um carro percorre uma distância de 360 km em 6 horas. Qual é a sua velocidade média?",
            opcoes: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um nadador percorre uma distância de 1,5 km em 30 minutos. Qual é a sua velocidade média?",
            opcoes: ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um trem viaja de uma estação para outra com uma velocidade média de 90 km/h. Se a distância entre as duas estações é de 180 km, quanto tempo o trem leva para chegar ao destino?",
            opcoes: ["1 h", "2 h", "3 h", "4 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um carro sai de uma cidade A e chega a uma cidade B em 4 horas, viajando a 80 km/h. Qual é a distância entre as duas cidades?",
            opcoes: ["240 km", "320 km", "360 km", "400 km"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ciclista viaja a uma velocidade constante de 25 km/h. Quanto tempo ele leva para percorrer 100 km?",
            opcoes: ["3 h", "4 h", "5 h", "6 h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um caminhão percorre 150 km a uma velocidade de 75 km/h. Quanto tempo ele leva para completar a viagem?",
            opcoes: ["1 h", "2 h", "2,5 h", "3 h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um corredor participa de uma corrida de 5 km e termina em 25 minutos. Qual é a sua velocidade média em km/h?",
            opcoes: ["10 km/h", "12 km/h", "14 km/h", "15 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um carro viaja a uma velocidade de 100 km/h por 2 horas e depois a 80 km/h por 1 hora. Qual é a velocidade média total da viagem?",
            opcoes: ["90 km/h", "85 km/h", "80 km/h", "75 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um ônibus faz uma viagem de 300 km a uma velocidade média de 60 km/h. Depois, retorna a 90 km/h. Qual é a velocidade média total da viagem?",
            opcoes: ["72 km/h", "70 km/h", "75 km/h", "80 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um atleta corre 10 km em 50 minutos. Qual é a sua velocidade média em km/h?",
            opcoes: ["10 km/h", "12 km/h", "14 km/h", "15 km/h"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÃO DE VELOCIDADE MÉDIA \n Um barco navega a 15 km/h em águas tranquilas. Se ele encontra uma correnteza de 3 km/h contra, qual é a sua velocidade em relação à terra?",
            opcoes: ["12 km/h", "15 km/h", "18 km/h", "21 km/h"],
            respostaCorreta: "A"
        }
    ]);
else if (perguntas === "MRU") (
    questoes = [
        {
            question: "QUESTÕES DE MRU \n Um carro percorre uma estrada retilínea com velocidade constante de 20 m/s. Qual é a sua posição após 10 segundos, partindo do repouso?",
            opcoes: ["0 m", "100 m", "200 m", "300 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Qual é a sua posição após 5 segundos de lançamento?",
            opcoes: ["0 m", "75 m", "150 m", "225 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um atleta corre em uma pista retilínea com velocidade constante de 8 m/s. Qual é a sua posição após 30 segundos, partindo do repouso?",
            opcoes: ["0 m", "120 m", "240 m", "360 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um avião decola da pista com velocidade constante de 300 km/h. Qual é a sua posição após 1 hora de decolagem?",
            opcoes: ["0 km", "150 km", "300 km", "450 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 10 m/s. Qual é a sua posição após 2 segundos de lançamento?",
            opcoes: ["0 m", "10 m", "20 m", "30 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um ciclista parte do repouso e acelera a uma taxa constante de 2 m/s². Qual é a sua posição após 8 segundos de movimento?",
            opcoes: ["0 m", "16 m", "32 m", "64 m"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE MRU \n Um barco se desloca em linha reta com velocidade constante de 12 m/s. Qual é a sua posição após 15 segundos, partindo do repouso?",
            opcoes: ["0 m", "90 m", "180 m", "270 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 25 m/s. Qual é a sua posição após 4 segundos de lançamento?",
            opcoes: ["0 m", "50 m", "100 m", "150 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um trem parte da estação com velocidade constante de 36 km/h. Qual é a sua posição após 2 horas de movimento?",
            opcoes: ["0 km", "36 km", "72 km", "108 km"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE MRU \n Um carro se desloca em linha reta com velocidade constante de 100 km/h. Qual é a sua posição após 3 horas?",
            opcoes: ["200 km", "250 km", "300 km", "350 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um ciclista percorre uma distância de 24 km em 1 hora. Qual é a sua velocidade média?",
            opcoes: ["20 km/h", "22 km/h", "24 km/h", "26 km/h"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto se move a uma velocidade constante de 15 m/s. Qual é a sua posição após 10 segundos?",
            opcoes: ["50 m", "100 m", "150 m", "200 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um barco se desloca com velocidade constante de 8 m/s. Qual é a sua posição após 30 segundos?",
            opcoes: ["120 m", "180 m", "240 m", "300 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um trem viaja a 90 km/h. Qual é a distância percorrida após 1,5 horas?",
            opcoes: ["120 km", "135 km", "150 km", "165 km"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRU \n Um objeto se desloca a uma velocidade constante de 5 m/s. Qual é a sua posição após 20 segundos?",
            opcoes: ["50 m", "80 m", "100 m", "120 m"],
            respostaCorreta: "C"
        }
    ]);
else if (perguntas === "MRUV") (
    questoes = [
        {
            question: "QUESTÕES DE MRUV \n Um carro parte do repouso e acelera uniformemente até atingir uma velocidade de 20 m/s após percorrer uma distância de 100 metros. Qual foi a aceleração do carro?",
            opcoes: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Qual é a sua velocidade após 4 segundos de lançamento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["10,2 m/s", "20,2 m/s", "30,2 m/s", "40,2 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE MRUV \n Um trem desacelera uniformemente de uma velocidade de 36 m/s até parar completamente em 15 segundos. Qual é a aceleração de desaceleração do trem?",
            opcoes: ["0,4 m/s²", "0,6 m/s²", "0,8 m/s²", "1,0 m/s²"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Qual é a altura máxima atingida pelo objeto durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["10 m", "20 m", "30 m", "40 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um corpo parte do repouso com uma aceleração de 2 m/s² em linha reta. Qual é a sua velocidade após percorrer uma distância de 50 metros?",
            opcoes: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 15 m/s. Quanto tempo ele leva para atingir a altura máxima durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["1,0 s", "1,5 s", "2,0 s", "2,5 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um carro parte do repouso e acelera uniformemente a uma taxa de 3 m/s². Qual é a sua velocidade após 10 segundos de movimento?",
            opcoes: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 25 m/s. Qual é a altura máxima atingida pelo objeto durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["12,5 m", "25 m", "37,5 m", "50 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um corpo é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Quanto tempo ele leva para atingir a altura máxima durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["2,04 s", "2,45 s", "2,86 s", "3,27 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE MRUV \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Quanto tempo ele leva para atingir a altura máxima durante o movimento, considerando uma aceleração gravitacional de -9,8 m/s²?",
            opcoes: ["2,04 s", "2,45 s", "2,86 s", "3,27 s"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE MRUV \n Um ciclista acelera de 5 m/s a 25 m/s em 10 segundos. Qual é a aceleração média do ciclista?",
            opcoes: ["1 m/s²", "2 m/s²", "2,5 m/s²", "3 m/s²"],
            respostaCorreta: "B"
        }
    ]);
else if (perguntas === "vetores") (
    questoes = [
        {
            question: "QUESTÕES DE VETORES \n Uma pessoa caminha 20 m para leste e, em seguida, 30 m para sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["10 m, 45° Oeste", "40 m, 30° Nordeste", "50 m, 45° Sul", "50 m, 60° Sudeste"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE VETORES \n Um avião voa 800 km em direção nordeste e, em seguida, 600 km em direção sudoeste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["1000 km, 45° Norte", "1000 km, 135° Nordeste", "1400 km, 45° Sudoeste", "1400 km, 225° Oeste"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE VETORES \n Um barco navega em linha reta com velocidade de 20 km/h em relação à água. Se o rio tem uma correnteza de 5 km/h no sentido norte-sul, determine a velocidade do barco em relação à margem norte quando ele se move:",
            opcoes: ["Para norte", "Para sul", "Para leste", "Para oeste"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE VETORES \n Um carro viaja 100 km para leste e, em seguida, 200 km para o sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["250 km, 63,43° Sudeste", "250 km, 26,57° Oeste", "300 km, 63,43° Sudoeste", "300 km, 26,57° Nordeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um pássaro voa a uma velocidade de 30 km/h em relação ao solo. Se há um vento soprando a 10 km/h na direção norte-sul, determine a velocidade do pássaro em relação ao solo quando ele voa:",
            opcoes: ["Para norte", "Para sul", "Para leste", "Para oeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um navio navega com velocidade de 25 km/h em relação à água. Se há uma correnteza de 10 km/h na direção leste-oeste, determine a velocidade do navio em relação ao solo quando ele navega:",
            opcoes: ["Para norte", "Para sul", "Para leste", "Para oeste"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE VETORES \n Uma pessoa caminha 4 km para o norte e, em seguida, 3 km para o leste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["5 km, 37° Nordeste", "5 km, 53° Sudeste", "7 km, 37° Nordeste", "7 km, 53° Sudeste"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE VETORES \n Um carro viaja 60 km para leste e, em seguida, 80 km para o sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["100 km, 36,87° Sudeste", "100 km, 53,13° Sudoeste", "100 km, 36,87° Nordeste", "100 km, 53,13° Noroeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um avião voa 400 km para oeste e, em seguida, 300 km para o sul. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["500 km, 36,87° Sudoeste", "500 km, 53,13° Sudoeste", "500 km, 36,87° Noroeste", "500 km, 53,13° Noroeste"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE VETORES \n Uma pessoa caminha 10 km para norte e, em seguida, 15 km para o leste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["25 km, 45° Nordeste", "25 km, 45° Noroeste", "25 km, 63,43° Nordeste", "25 km, 63,43° Noroeste"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE VETORES \n Um ciclista pedala 12 km para leste e, em seguida, 5 km para norte. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["13 km, 22,6° Nordeste", "13 km, 67,4° Nordeste", "17 km, 22,6° Sudeste", "17 km, 67,4° Sudeste"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE VETORES \n Um carro percorre 80 km para norte e depois 60 km para oeste. Determine o módulo e a direção do deslocamento resultante.",
            opcoes: ["100 km, 36,87° Sudoeste", "100 km, 53,13° Sudoeste", "140 km, 53,13° Nordeste", "140 km, 36,87° Noroeste"],
            respostaCorreta: "B"
        }
    ]);
else if (perguntas === "queda") (
    questoes = [
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 15 m/s. Adotando g = 10 m/s², qual é a altura máxima atingida pelo objeto?",
            opcoes: ["10 m", "12,5 m", "15 m", "17,5 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Uma pedra é solta do topo de uma torre de 50 metros de altura. Determine o tempo que a pedra leva para atingir o solo, desprezando a resistência do ar.",
            opcoes: ["2 s", "3 s", "4 s", "5 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um pássaro voa verticalmente para cima com uma velocidade inicial de 8 m/s. Adotando g = 10 m/s², qual é a altura máxima atingida pelo pássaro?",
            opcoes: ["16 m", "24 m", "32 m", "40 m"],
            respostaCorreta: "A"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima com uma velocidade inicial de 25 m/s. Determine o tempo necessário para que ele atinja a altura máxima.",
            opcoes: ["2,5 s", "3 s", "3,5 s", "4 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um corpo é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 20 m/s. Determine a altura máxima atingida pelo corpo, considerando g = 10 m/s².",
            opcoes: ["20 m", "25 m", "30 m", "35 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é solto de uma altura de 100 metros em relação ao solo. Qual é a velocidade do objeto quando ele atinge o solo, considerando g = 10 m/s²?",
            opcoes: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um projétil é lançado verticalmente para cima a partir do solo com uma velocidade inicial de 30 m/s. Desprezando a resistência do ar e adotando g = 10 m/s², determine o tempo necessário para que o projétil atinja a altura máxima.",
            opcoes: ["2 s", "3 s", "4 s", "5 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um corpo é lançado verticalmente para cima com uma velocidade inicial de 12 m/s. Adotando g = 10 m/s², determine a altura máxima atingida pelo corpo.",
            opcoes: ["6 m", "8 m", "10 m", "12 m"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima com uma velocidade inicial de 18 m/s. Adotando g = 10 m/s², determine o tempo necessário para que o objeto atinja a altura máxima.",
            opcoes: ["1,8 s", "2 s", "2,2 s", "2,4 s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Uma bola é lançada verticalmente para cima a partir do solo com uma velocidade inicial de 24 m/s. Determine a altura máxima atingida pela bola, considerando g = 10 m/s².",
            opcoes: ["14,4 m", "16 m", "17,6 m", "19,2 m"],
            respostaCorreta: "D"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para baixo com uma velocidade inicial de 5 m/s de uma altura de 20 metros. Qual será sua velocidade ao atingir o solo, considerando g = 10 m/s²?",
            opcoes: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
            respostaCorreta: "C"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Uma bola é solta de uma altura de 80 metros. Quanto tempo leva para atingir o solo, desprezando a resistência do ar?",
            opcoes: ["3 s", "4 s", "5 s", "6 s"],
            respostaCorreta: "B"
        },
        {
            question: "QUESTÕES DE QUEDA LIVRE \n Um objeto é lançado verticalmente para cima com uma velocidade inicial de 10 m/s. Qual será a altura máxima atingida, adotando g = 10 m/s²?",
            opcoes: ["5 m", "10 m", "15 m", "20 m"],
            respostaCorreta: "B"
        }
    ]);

    if (questoes.length === 0) {
        console.error("Nenhuma questão carregada.");
    } else {
    }

function iniciarJogo(jogadores) {
    numJogadores = jogadores;
    document.getElementById("selecionar-jogadores").style.display = "none";
    document.getElementById("estatisticas").style.display = "block";
    document.getElementById("perguntas").style.display = "block";
    for (let i = 1; i <= numJogadores; i++) {
        document.getElementById(`jogador${i}`).style.display = "block";
    };
};

btn.onclick = function () {
    let num = Math.ceil(Math.random() * 10000);
    container.style.transition = "transform 5s";
    let angle = num % 360;
    position = Math.floor(angle / 40) * 10;
    setTimeout(function () {
        alert("Valor na roleta: " + position);
        if (position === 0) {
            alert(`Jogador ${vez} perdeu todos os pontos!`);
            switch (vez) {
                case 1:
                    pontosJogador1 = 0;
                    local_ptn.innerHTML = pontosJogador1;
                    break;
                case 2:
                    pontosJogador2 = 0;
                    local_ptn2.innerHTML = pontosJogador2;
                    break;
                case 3:
                    pontosJogador3 = 0;
                    local_ptn3.innerHTML = pontosJogador3;
                    break;
                case 4:
                    pontosJogador4 = 0;
                    local_ptn4.innerHTML = pontosJogador4;
                    break;
            }
            vez++;
            if (vez > numJogadores) {
                vez = 1;
            }
        }
    }, 5000);

    container.style.transform = "rotate(" + num + "deg)";
}

function sortearQuestao() {
    if (sorte == false){
    let indiceAleatorio = Math.floor(Math.random() * questoes.length);
    perguntaAtual = questoes[indiceAleatorio];
    let texto = perguntaAtual.question + "\n\n";
    let alternativa = ["A", "B", "C", "D"];
    perguntaAtual.opcoes.forEach((opcao, index) => {
        texto += `${alternativa[index]}. ${opcao}\n`;
    });
    document.getElementById('enunciado').textContent = texto;

    sorte = true;
}
};

function Corecao() {
    sorte = false;
    console.log(sorte);
    let respostaUsuario = document.getElementById('respostaInput').value.toUpperCase();
    if (respostaUsuario === perguntaAtual.respostaCorreta) {
        alert(`Resposta correta ${vez}!`);
        switch (vez) {
            case 1:
                pontosJogador1 += position;
                local_ptn.innerHTML = pontosJogador1;
                break;
            case 2:
                pontosJogador2 += position;
                local_ptn2.innerHTML = pontosJogador2;
                break;
            case 3:
                pontosJogador3 += position;
                local_ptn3.innerHTML = pontosJogador3;
                break;
            case 4:
                pontosJogador4 += position;
                local_ptn4.innerHTML = pontosJogador4;
                break;
        }
    } else {
        alert("Resposta incorreta. A resposta correta é: " + perguntaAtual.respostaCorreta);
        switch (vez) {
            case 1:
                pontosJogador1 -= position;
                local_ptn.innerHTML = pontosJogador1;
                break;
            case 2:
                pontosJogador2 -= position;
                local_ptn2.innerHTML = pontosJogador2;
                break;
            case 3:
                pontosJogador3 -= position;
                local_ptn3.innerHTML = pontosJogador3;
                break;
            case 4:
                pontosJogador4 -= position;
                local_ptn4.innerHTML = pontosJogador4;
                break;
        }
    }
    vez++;
    if (vez > numJogadores) {
        vez = 1;
    };

        //vencedor
    if (pontosJogador1 >= 1000) {
        alert("Jogador 1 é o vencedor!");
        localStorage.setItem("vencedor", "Jogador 1");
        window.location.href = "final.html";
    } else if (pontosJogador2 >= 1000) {
        alert("Jogador 2 é o vencedor!");
        localStorage.setItem("vencedor", "Jogador 2");
        window.location.href = "final.html";
    } else if (pontosJogador3 >= 1000) {
        alert("Jogador 3 é o vencedor!");
        localStorage.setItem("vencedor", "Jogador 3");
        window.location.href = "final.html";
    } else if (pontosJogador4 >= 1000) {
        alert("Jogador 4 é o vencedor!");
        localStorage.setItem("vencedor", "Jogador 4");
        window.location.href = "final.html";
    };

    localStorage.removeItem("[_{{{CITATION{{{_1{](https://github.com/lucasnsouza/teste-procedo-01/tree/1d2588107ef7e8c436526f614138602cf5b84d66/cadastro-e-login%2Fpainel.php)[_{{{CITATION{{{_2{](https://github.com/LucasFernandesBrazil/CRUD/tree/9932377bb5cdb6a5fe80dab29ca932a53a2c35cc/listar_produtos.php)[_{{{CITATION{{{_3{](https://github.com/FemiFatokun03/secure-quiz-webapp/tree/773b7b27df7eff92becae3a36d07c40694c5c5d5/login.php)[_{{{CITATION{{{_4{](https://github.com/juancastaoc/taller-html-css/tree/1bf13fde2833007eb4c22050da60e83321c245d8/cliente-urban.php)[_{{{CITATION{{{_5{](https://github.com/smartz-mtz/TERRA-ARCH/tree/7db76682638f851726cbfddb4e8fd2fcb87c4d1a/index.php");
}