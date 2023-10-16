const fs = require("fs");
const path = require("path");

async function cadaverEsquisito(palavraChave = null) {
  // Obtém o caminho para a pasta "lists"
  const listsDir = path.join(__dirname, 'lists');

  // Lista todos os arquivos na pasta "lists"
  const files = fs.readdirSync(listsDir);

  // Filtra os arquivos JSON na lista
  const lists = files.filter(arquivo => arquivo.endsWith('.json'));

  // Carrega os arquivos JSON correspondentes
  const adjetivos = JSON.parse(fs.readFileSync(path.join(listsDir, lists[0])));
  const artigos = JSON.parse(fs.readFileSync(path.join(listsDir, lists[1])));
  const substantivos = JSON.parse(fs.readFileSync(path.join(listsDir, lists[2])));
  const verbos = JSON.parse(fs.readFileSync(path.join(listsDir, lists[3])));

  // Monta a frase aleatoriamente
  const opcao = Math.random() < 0.5 ? "simples" : "completa";

  if (opcao === "simples") {
    const artigo = randomWord(artigos);
    const substituirSubstantivo = palavraChave !== null;
    const substantivo = substituirSubstantivo
      ? palavraChave
      : randomWord(substantivos);
    const adjetivo = randomWord(adjetivos);
    const verbo = randomWord(verbos);
    return `${artigo} ${substantivo} ${adjetivo} ${verbo}.`;
  } else {
    const phrase = [];
    phrase.push(randomWord(artigos));
    const substituirSubstantivo = palavraChave !== null;
    const substantivo = substituirSubstantivo
      ? palavraChave
      : randomWord(substantivos);
    phrase.push(substantivo);
    phrase.push(randomWord(adjetivos));
    phrase.push(randomWord(verbos));
    phrase.push(randomWord(artigos));
    phrase.push(randomWord(substantivos));
    phrase.push(randomWord(adjetivos));
    return phrase.join(" ") + ".";
  }
}

module.exports = { cadaverEsquisito };
