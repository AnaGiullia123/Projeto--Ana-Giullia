<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Beleza dos Cabelos</h1>
    <h3>Ana Giullia dos Santos - 3A</h3>
    <p>História, tipos, cuidados e penteados para realçar sua beleza natural.</p>
  </header>
  <nav>
    <a href="#tipos">Tipos</a>
    <a href="#modelos">Modelos</a>
    <a href="#cuidados">Cuidados</a>
    <a href="#historia">História</a>
    <a href="#curiosidades">Curiosidades</a>
  </nav>
  <main>
    <!-- Menu de acessibilidade lateral -->
    <div id="acessibilidade">
      <h3>Acessibilidade</h3>
      <button onclick="aumentarFonte()">Aumentar Fonte</button>
      <button onclick="diminuirFonte()">Diminuir Fonte</button>
      <button onclick="alternarContraste()">Alto Contraste</button>
      <button onclick="resetar()">Resetar</button>
    </div>
    <!-- Conteúdo principal -->
    <div id="conteudo">
      <section id="tipos">
        <h2>Tipos de Cabelo</h2>
        <p>Os cabelos podem variar em textura, espessura e formato dos fios:</p>
        <ul>
          <li><strong>Liso:</strong> fios alinhados, geralmente mais oleosos e fáceis de escovar.</li>
          <li><strong>Ondulado:</strong> apresenta leves ondas que dão movimento e volume.</li>
          <li><strong>Cacheado:</strong> com cachos definidos, precisa de hidratação regular.</li>
          <li><strong>Crespo:</strong> fios mais finos, volumosos e com cachos bem pequenos.</li>
        </ul>
      </section>
      <section id="modelos">
        <h2>Modelos de Penteados</h2>
        <p>Alguns penteados populares que valorizam os cabelos:</p>
        <ul>
          <li><strong>Rabo de cavalo:</strong> clássico e versátil.</li>
          <li><strong>Tranças:</strong> embutidas, box braids ou simples.</li>
          <li><strong>Coques:</strong> despojados ou elegantes para ocasiões formais.</li>
          <li><strong>Solto natural:</strong> com volume, ondas ou liso escovado.</li>
        </ul>
      </section>
      <section id="cuidados">
        <h2>Cuidados Essenciais</h2>
        <p>Para manter cabelos saudáveis:</p>
        <ul>
          <li>Lavar de acordo com o tipo de cabelo (oleoso, normal ou seco).</li>
          <li>Hidratar pelo menos uma vez por semana.</li>
          <li>Usar protetor térmico antes de secador, chapinha ou babyliss.</li>
          <li>Evitar excesso de química sem acompanhamento profissional.</li>
          <li>Proteger contra sol, vento e poluição.</li>
        </ul>
      </section>
      <section id="historia">
        <h2>História do Cabelo</h2>
        <p>O cabelo sempre foi um símbolo cultural e social. No Egito Antigo, perucas eram comuns e representavam status. 
        Na Idade Média, os cabelos longos eram sinal de nobreza. 
        Já nos anos 60, cortes ousados simbolizavam revolução e liberdade. 
        Hoje, o cabelo é uma forma de expressão pessoal e estilo.</p>
      </section>
      <section id="curiosidades">
        <h2>Curiosidades</h2>
        <ul>
          <li>O cabelo humano cresce em média 1 a 1,5 cm por mês.</li>
          <li>Uma pessoa perde cerca de 50 a 100 fios de cabelo por dia.</li>
          <li>O cabelo é composto principalmente por uma proteína chamada queratina.</li>
          <li>O tipo de fio é influenciado pela genética e pelo formato do folículo capilar.</li>
        </ul>
      </section>
    </div>
  </main>

  <footer>
    Projeto desenvolvido por <strong>Ana Giullia</strong>.
  </footer>

  <script src="script.js"></script>
</body>
</html>
