/**
 * Fetches and displays address information based on a given CEP (Brazilian postal code).
 * @param {Event} event - The event object triggered by the button click.
 */
function buscarCEP(event) {
    event.preventDefault();

    const cepInput = document.getElementById("cep");
    const resultadoCEP = document.getElementById("resultadoCEP");

    const cep = cepInput.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { logradouro = "Não encontrado", bairro = "Não encontrado", localidade = "Não encontrado", uf = "Não encontrado" } = data;

            const resultadoHTML = `
        <p name="logradouro">Logradouro: ${logradouro}</p>
        <p name="bairro">Bairro: ${bairro}</p>
        <p name="localidade">Localidade: ${localidade}</p>
        <p name="uf">UF: ${uf}</p>
      `;

            resultadoCEP.innerHTML = resultadoHTML;
        })
        .catch(error => {
            resultadoCEP.innerHTML = "Erro ao buscar o CEP.";
        });
}

//________________________________________________________________________________________//


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contratacao-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.querySelector("input[name='nome']").value;
        const cpf = document.querySelector("input[name='cpf']").value;
        const telcontato = document.querySelector("input[name='telcontato']").value;
        const email = document.querySelector("input[name='email']").value;
        const plan = document.querySelector("select[name='plan']").value;
        const time = document.querySelector("select[name='time']").value;
        const cep = document.querySelector("input[name='cep']").value;
        const numerocasa = document.querySelector("input[name='numerocasa']").value;
        const logradouro = document.querySelector("p[name='logradouro']").value;
        const bairro = document.querySelector("p[name='bairro']").value;
        const localidade = document.querySelector("p[name='localidade']").value;
        const uf = document.querySelector("p[name='uf']").value;

        const dados = {
            nome: nome,
            cpf: cpf,
            telcontato: telcontato,
            email: email,
            cep: cep,
            numerocasa: numerocasa,
            logradouro: logradouro,
            bairro: bairro,
            localidade: localidade,
            uf: uf,
            plan: plan,
            time: time,

        };

        // Envia os dados 
        fetch("https://api/contratacao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Resposta do servidor:", data);
                alert("Contratação concluída com sucesso!");
                form.reset(); // Limpa o formulário
            })
            .catch((error) => {
                console.error("Erro ao enviar os dados:", error);
                alert("Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.");
            });
    });
});


