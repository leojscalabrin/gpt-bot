const fs = require("fs");
const path = require("path");

function cadaverEsquisito(palavraChave = '') {
  const listsDir = path.join(__dirname, "lists");

  const artigos = JSON.parse(fs.readFileSync(path.join(listsDir, "artigos.json")));
  const adjetivos = JSON.parse(fs.readFileSync(path.join(listsDir, "adjetivos.json")));
  const substantivos = JSON.parse(fs.readFileSync(path.join(listsDir, "substantivos.json")));
  const verbos = JSON.parse(fs.readFileSync(path.join(listsDir, "verbos.json")));

  function randomWord(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }

  const artigo1 = randomWord(artigos);

  let substantivo1 = ""
  if (palavraChave === '') {
    substantivo1 = randomWord(substantivos)
  } else {
    substantivo1 = palavraChave
  }
  console.log(substantivo1, "substantivo")
  // const substantivo1 = substituirSubstantivo
  //   ? palavraChave
  //   : randomWord(substantivos);

  const adjetivo1 = randomWord(adjetivos);
  const verbo = randomWord(verbos);
  const artigo2 = randomWord(artigos);
  const substantivo2 = randomWord(substantivos);
  const adjetivo2 = randomWord(adjetivos);

  const frase = `${artigo1} ${substantivo1} ${adjetivo1} ${verbo} ${artigo2} ${substantivo2} ${adjetivo2}.`;
  console.log(frase, "frase aqui ó")
  return frase;
}

module.exports = { cadaverEsquisito };
