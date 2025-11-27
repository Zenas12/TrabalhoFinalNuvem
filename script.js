fetch("resultados/previsao_6_meses.csv")
    .then(res => res.text())
    .then(text => {
        const linhas = text.trim().split("\n").slice(1);
        const tbody = document.querySelector("#forecast-tabela tbody");

        linhas.forEach(linha => {
            const [mes, valor] = linha.split(",");
            const row = `<tr><td>${mes}</td><td>${Number(valor).toFixed(2)}</td></tr>`;
            tbody.innerHTML += row;
        });
    });
