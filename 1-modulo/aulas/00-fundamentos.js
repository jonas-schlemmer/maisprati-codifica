
// ============================================================
// BLOCO 7 — NULLISH COALESCING ?? (valor padrão seguro)
// ============================================================
// O operador ?? foi introduzido no ES2020 (ES11).
// Ele retorna o lado direito APENAS se o lado esquerdo for null ou undefined.
// É muito usado para definir valores padrão de forma segura.

let nomeVisitante = null;      // imagine que veio de um banco de dados vazio
let nomeExibido2 = nomeVisitante ?? "Visitante";
console.log(nomeExibido2);     // "Visitante" — pois nomeVisitante era null

let outroNome = "Ana";
let outroExibido = outroNome ?? "Visitante";
console.log(outroExibido);     // "Ana" — não era null/undefined, então usa o original

// Diferença crucial entre ?? e ||:
// || retorna o lado direito se o esquerdo for qualquer valor "falsy"
//    (false, 0, "", NaN, null, undefined)
// ?? retorna o lado direito SOMENTE para null ou undefined

let quantidade = 0;  // zero é um valor válido (ex: quantidade de itens no carrinho)
console.log(quantidade || 10);  // 10 — porque 0 é falsy, || substituiu por 10 (indesejado!)
console.log(quantidade ?? 10);  // 0  — 0 não é null nem undefined, ?? mantém o 0 (correto!)

// Encadeamento opcional com ?. (optional chaining — ES2020):
// Permite acessar propriedades de objetos que podem ser null ou undefined
// sem causar erro. Funciona bem junto com ??.
let perfil = null;
console.log(perfil?.nome);           // undefined — não lança erro
console.log(perfil?.nome ?? "Anônimo"); // "Anônimo" — combina ?. com ??


// ============================================================
// BLOCO 8 — TRUTHY e FALSY (valores que se comportam como boolean)
// ============================================================
// No JS, qualquer valor pode ser usado numa condição, mesmo sem ser true/false.
// Isso acontece porque o JS faz uma coerção implícita para boolean ao avaliar
// a condição de um if. Esse processo se chama "conversão para boolean".

// Você pode ver o valor boolean de qualquer coisa com Boolean() ou !!:
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean(false));      // false
// ↑ Esses 6 são os únicos valores FALSY do JS. Todo o resto é TRUTHY.

console.log(Boolean(1));          // true
console.log(Boolean("texto"));    // true
console.log(Boolean([]));         // true  ← array vazio é TRUTHY!
console.log(Boolean({}));         // true  ← objeto vazio é TRUTHY!
console.log(Boolean(-1));         // true  ← número negativo é TRUTHY!

// O !! (dupla negação) é um atalho comum para converter para boolean:
console.log(!!0);        // false
console.log(!!"texto");  // true
// É equivalente a Boolean(), mas mais curto de escrever.

// Uso prático — verificar string vazia:
let texto = "";
if (texto) {
    console.log("A string tem conteúdo.");
} else {
    console.log("A string está vazia.");  // ← cai aqui, pois "" é falsy
}

// ARMADILHA clássica — array vazio é truthy:
let lista = [];
if (lista) {
    console.log("O array existe (mesmo vazio, [] é truthy!)");  // ← cai aqui!
}
// Para verificar se um array está realmente vazio, use .length:
if (lista.length === 0) {
    console.log("O array está vazio de verdade.");  // ← agora sim
}

// Uso prático — verificar se o usuário preencheu um campo:
let campoBusca = "JavaScript";
if (campoBusca) {
    console.log("Buscando por:", campoBusca);  // executa porque a string tem conteúdo
} else {
    console.log("Digite algo para buscar.");
}


// ============================================================
// BLOCO 9 — EXEMPLOS PRÁTICOS DO DIA A DIA
// ============================================================

// --- Verificar disponibilidade de cor ---
// Array.includes() retorna true ou false — perfeito para usar em condicionais.
const coresDisponiveis = ["vermelho", "verde", "azul"];
let corEscolhida = "amarelo";
if (coresDisponiveis.includes(corEscolhida)) {
    console.log(`${corEscolhida} disponível! ✅`);
} else {
    console.log(`${corEscolhida} indisponível. ❌`);
}

// ?? (nullish)   → valor padrão seguro: só substitui null ou undefined
// ?.             → optional chaining: acesso seguro a propriedades que podem ser null
// Truthy / Falsy → 6 valores falsy; todo o resto é truthy; use !! ou Boolean() para ver

// Só funciona no navegador

// console.warn()  → exibe aviso em amarelo
// console.error() → exibe erro em vermelho
// console.table() → exibe dados em formato de tabela

console.log("Olá, mundo!");        // texto com aspas duplas
console.warn("Olá, mundo!");        // texto com aspas duplas
console.error('Olá de novo!');       // aspas simples também funcionam
console.table(`E eu uso crases!`);   // crases são chamadas de "template literals"

// Tecnicamente, o JS usa o padrão IEEE 754 de dupla precisão (64 bits)
// para representar todos os números. Por isso, há limites:
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991 — maior inteiro seguro
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// SYMBOL (ES6+) — identificador único e imutável, usado em casos avançados
const id = Symbol("id");
console.log(typeof id);  // "symbol"
// Dois Symbols com a mesma descrição são sempre diferentes entre si:
console.log(Symbol("id") === Symbol("id"));  // false

// BIGINT (ES2020+) — para inteiros maiores que Number.MAX_SAFE_INTEGER
const numeroGigante = 9007199254740992n;  // note o "n" no final
console.log(numeroGigante + 1n);          // 9007199254740993n
// BigInt e Number não podem ser misturados diretamente em operações.

console.log(typeof null);       // "object" ← bug histórico do JS (existe desde 1995!)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 42n);        // "bigint"

// Regras para nomear variáveis:
// nomeCompleto    (camelCase — padrão no JS)
// minhaIdade
// VALOR_MAXIMO    (UPPER_SNAKE_CASE — convenção para constantes)

// Precedência de operadores (igual à matemática — regra PEMDAS):
// 1° Parênteses ( )
// 2° Potência **
// 3° Multiplicação *, Divisão /, Módulo %
// 4° Adição +, Subtração -
console.log(2 + 3 * 4);    // 14 (3*4=12 primeiro, depois 2+12)
console.log((2 + 3) * 4);  // 20 (parênteses primeiro: 2+3=5, depois 5*4)

// CUIDADO com texto + número (coerção de tipos):
console.log("5" + 3);   // "53" — o JS converte 3 para string e concatena!
console.log(5 + 3);     // 8    — dois numbers, soma normal
// O operador + tem dupla função: soma números E concatena strings.
// Com - * / o JS sempre converte para número:
console.log("10" - 2);  // 8  — JS converte "10" para número automaticamente
console.log("10" * 2);  // 20 — idem
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TEXTO → NÚMERO (casting explícito)
let textoNumero = "42";
console.log(textoNumero + 8);          // "428" — coerção implícita: concatenou!
console.log(Number(textoNumero) + 8);  // 50    — casting explícito para número
console.log(parseInt("42.9abc"));      // 42    — lê inteiro até onde der
console.log(parseFloat("3.14xyz"));    // 3.14  — lê decimal até onde der
// parseInt e parseFloat são funções globais herdadas do ES1.
// Elas ignoram caracteres não numéricos após o número válido.

// NÚMERO → TEXTO (casting explícito)
let num = 100;
console.log(String(num) + " reais");  // "100 reais"
console.log(num.toString() + " kg");  // "100 kg"
console.log(num.toFixed(2));          // "100.00" — define casas decimais (retorna string)

// Coerção implícita — o JS fazendo por conta própria (cuidado!):
console.log("10" * 2);   // 20    — converte para número (- * / sempre convertem)
console.log("10" - 2);   // 8     — idem
console.log("10" + 2);   // "102" — MAS + prefere concatenar quando há string!

// Verificando se uma conversão falhou:
console.log(Number("abc"));  // NaN — "Not a Number"
console.log(isNaN("abc"));   // true  — isNaN() checa se o valor NÃO é número
console.log(isNaN("42"));    // false — "42" pode ser convertido em número
// NaN é do tipo "number" — mais um detalhe curioso do JS:
console.log(typeof NaN);     // "number"
// E NaN nunca é igual a si mesmo:
console.log(NaN === NaN);    // false — use isNaN() para verificar

// ============================================================
// BLOCO 7 — MATH (funções matemáticas prontas)
// ============================================================
// Math é um objeto nativo do JS com propriedades e métodos matemáticos.
// Não precisa importar nada — já está disponível globalmente.

// Número aleatório entre 0 (inclusive) e 1 (exclusive):
console.log(Math.random());  // ex: 0.7382...

// Número inteiro aleatório entre 0 e 9:
console.log(Math.floor(Math.random() * 10));
// Math.random() → 0.0 a 0.999...
// * 10          → 0.0 a 9.999...
// Math.floor()  → arredonda pra baixo → 0 a 9

// Número aleatório entre 1 e N (fórmula universal):
// Math.floor(Math.random() * N) + 1
let aleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número de 1 a 100:", aleatorio);

// Arredondamentos:
console.log(Math.round(4.4));   // 4 — arredonda para o mais próximo
console.log(Math.round(4.5));   // 5 — .5 vai para cima
console.log(Math.ceil(4.1));    // 5 — sempre arredonda para CIMA  (teto = ceiling)
console.log(Math.floor(4.9));   // 4 — sempre arredonda para BAIXO (chão = floor)
console.log(Math.trunc(4.9));   // 4 — remove as casas decimais (sem arredondar)
console.log(Math.trunc(-4.9));  // -4 — atenção: trunc ≠ floor para negativos!
// floor(-4.9) seria -5, pois floor vai ao inteiro ABAIXO.

// Máximo e mínimo:
console.log(Math.max(1, 99, 50, 23));  // 99
console.log(Math.min(1, 99, 50, 23));  // 1

// Potência e raiz:
console.log(Math.pow(2, 8));   // 256 — equivalente a 2 ** 8
console.log(Math.sqrt(144));   // 12  — raiz quadrada (√144)
console.log(Math.cbrt(27));    // 3   — raiz cúbica (∛27)
console.log(Math.log2(8));     // 3   — logaritmo base 2 de 8

// Valor absoluto (remove o sinal negativo):
console.log(Math.abs(-50));  // 50
console.log(Math.abs(50));   // 50 — positivo continua positivo

// Constantes matemáticas:
console.log(Math.PI);     // 3.141592653589793
console.log(Math.E);      // 2.718281828459045 — número de Euler (base do logaritmo natural)
console.log(Math.SQRT2);  // 1.4142135623730951 — raiz quadrada de 2


// ============================================================
// BLOCO 8 — DATE (trabalhando com datas e horas)
// ============================================================
// Date é um objeto nativo do JS para lidar com datas e horas.
// Internamente, ele armazena o tempo como um número inteiro:
// a quantidade de milissegundos desde 1° de janeiro de 1970 às 00:00:00 UTC.
// Esse ponto de referência se chama "Unix Epoch" ou "Unix Timestamp".

// Data e hora AGORA:
const agora = new Date();       // captura o momento atual
console.log(agora.toString());  // ex: "Tue May 05 2026 14:32:10 GMT-0300"

// Timestamp atual em milissegundos (forma mais rápida):
console.log(Date.now());  // ex: 1746464930000

// Extraindo partes da data:
console.log("Ano:", agora.getFullYear());           // ex: 2026
console.log("Mês (0=jan):", agora.getMonth());      // 0 a 11 — CUIDADO! Janeiro = 0
console.log("Dia do mês:", agora.getDate());        // 1 a 31
console.log("Dia da semana:", agora.getDay());      // 0=domingo, 1=segunda, ..., 6=sábado
console.log("Hora:", agora.getHours());             // 0 a 23
console.log("Minutos:", agora.getMinutes());        // 0 a 59
console.log("Segundos:", agora.getSeconds());       // 0 a 59
console.log("Milissegundos:", agora.getMilliseconds()); // 0 a 999

// Exibindo de forma localizada (respeita idioma e fuso horário):
console.log("Data formatada:", agora.toLocaleDateString("pt-BR"));  // 05/05/2026
console.log("Hora formatada:", agora.toLocaleTimeString("pt-BR"));  // 14:32:10
console.log("Completo:", agora.toLocaleString("pt-BR"));            // 05/05/2026 14:32:10

// Criando uma data específica:
// new Date(ano, mês, dia, hora, minuto, segundo) — mês começa em 0!
const natal = new Date(2026, 11, 25);  // mês 11 = dezembro
console.log("Natal:", natal.toLocaleDateString("pt-BR"));  // 25/12/2026

// Criando data a partir de string no formato ISO 8601 (padrão internacional):
const reveillon = new Date("2026-12-31T23:59:59");
console.log("Réveillon:", reveillon.toLocaleString("pt-BR"));

// Calculando diferença entre datas:
// Subtrair dois objetos Date retorna a diferença em milissegundos.
const hoje = new Date();
const proximoAno = new Date(2027, 0, 1);  // 1° de janeiro de 2027
const diffMs = proximoAno - hoje;
const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));  // ms → seg → min → h → dias
console.log(`Faltam ${diffDias} dias para 2027!`);

// Modificando partes de uma data:
let aniversario = new Date(1990, 4, 15);  // 15 de maio de 1990
aniversario.setFullYear(1991);            // altera apenas o ano
aniversario.setMonth(11);                 // altera para dezembro (11)
console.log("Aniversário ajustado:", aniversario.toLocaleDateString("pt-BR"));

// ============================================================
// BLOCO 9 — STRINGS (trabalhando com texto)
// ============================================================
// Strings são textos. Internamente são sequências de caracteres Unicode,
// onde cada posição possui um índice começando em 0.
// São imutáveis: métodos não alteram a string original, retornam uma nova.

const frase = "JavaScript é incrível!";

// COMPRIMENTO — número de caracteres (espaços e símbolos contam)
console.log(frase.length);  // 22

// ACESSO a caracteres por índice:
console.log(frase[0]);       // "J" — primeiro caractere
console.log(frase.at(-1));   // "!" — último (at() aceita índices negativos, ES2022+)

// MAIÚSCULAS e MINÚSCULAS
console.log(frase.toUpperCase());  // "JAVASCRIPT É INCRÍVEL!"
console.log(frase.toLowerCase());  // "javascript é incrível!"

// VERIFICAR conteúdo:
console.log(frase.includes("incrível"));   // true
console.log(frase.startsWith("Java"));     // true
console.log(frase.endsWith("!"));          // true

// ENCONTRAR posição de uma substring (índice começa em 0):
console.log(frase.indexOf("é"));       // 11 — primeira ocorrência
console.log(frase.indexOf("Python"));  // -1 — não encontrou
console.log(frase.lastIndexOf("!"));   // 21 — última ocorrência

// RECORTAR partes da string:
// slice(início, fim) — fim não é incluído; aceita índices negativos
console.log(frase.slice(0, 10));  // "JavaScript"
console.log(frase.slice(11));     // "é incrível!" (do índice 11 ao fim)
console.log(frase.slice(-9));     // "incrível!" (9 últimos caracteres)

// SUBSTITUIR texto:
console.log(frase.replace("incrível", "fantástico"));  // substitui 1ª ocorrência
console.log(frase.replaceAll("a", "@"));               // substitui todas (ES2021+)

// DIVIDIR em partes — retorna um array:
const palavras = frase.split(" ");  // divide onde há espaço
console.log(palavras);              // ["JavaScript", "é", "incrível!"]
console.log(palavras.length);       // 3 — número de palavras

// REPETIR e PREENCHER:
console.log("Ha".repeat(3));        // "HaHaHa"
console.log("5".padStart(3, "0"));  // "005" — preenche à esquerda
console.log("5".padEnd(3, "0"));    // "500" — preenche à direita

// REMOVER espaços das pontas (essencial ao tratar input de usuário):
const comEspacos = "   olá mundo   ";
console.log(comEspacos.trim());       // "olá mundo"
console.log(comEspacos.trimStart());  // "olá mundo   "
console.log(comEspacos.trimEnd());    // "   olá mundo"

// TEMPLATE LITERALS (ES6+) — a forma moderna de montar strings:
const produto = "café";
const preco = 8.5;

// Jeito antigo — concatenação com +:
console.log("O " + produto + " custa R$ " + preco);

// Jeito moderno — template literal com ${expressão}:
console.log(`O ${produto} custa R$ ${preco}`);
// Dentro de ${} cabe qualquer expressão JS válida:
console.log(`O dobro do preço seria R$ ${preco * 2}`);
console.log(`A frase tem ${frase.length} caracteres.`);

// ============================================================
// RESUMO FINAL — O que você aprendeu:
// ============================================================
// console.log()  → exibir mensagens no terminal
// Tipos          → string, number, boolean, null, undefined, symbol, bigint
// Variáveis      → let (mutável), const (imutável), var (evitar)
// Matemática     → + - * / % ** e operadores de atribuição composta
// Incremento     → ++ -- += -= *= /= **= %=
// Coerção        → implícita (automática) e explícita (Number, String, parseInt...)
// Math           → random, floor, ceil, round, trunc, max, min, sqrt, abs, PI, E
// Date           → new Date(), getFullYear(), toLocaleDateString(), Date.now()
// String         → length, at, slice, includes, replace, split, trim, template literals