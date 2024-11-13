
function assunto(assuntos) {
    switch (assuntos) {
        case 'todos':
            localStorage.setItem("questoes","todos");
            window.location.href = "roleta.js";
            break;
        case 'mecanica':
            localStorage.setItem("questoes", "mecanica");
            window.location.href = "roleta.js";
            break;
        case 'Velocidade':
            localStorage.setItem("questoes", "velocidade");
            window.location.href = "roleta.js";
            break;
        case 'MRU':
            localStorage.setItem("questoes", "MRU");
            window.location.href = "roleta.js";
            break;

        case 'MRUV':
            localStorage.setItem("questoes", "MRUV");
            window.location.href = "roleta.js";
            break;

        case 'Vetores':
            localStorage.setItem("questoes", "vetores");
            window.location.href = "roleta.js";
            break;

        case 'queda':
            localStorage.setItem("questoes", "queda");
            window.location.href = "roleta.js";
            break;
    };
};
