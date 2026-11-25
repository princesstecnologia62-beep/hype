(function(){var st=document.createElement('style');st.textContent=":root{\n    --bg:#fbfaf6; --surface:#ffffff; --ink:#1d2a1f; --muted:#5b6b5e;\n    --brand:#2f7d32; --brand-2:#8bc34a; --accent:#ff7a1a; --line:#e3e8df;\n    --radius:14px;\n  }\n  #hype-app, #hype-app *{box-sizing:border-box}\n  #hype-app{margin:0;font-family:system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55}\n  a{color:var(--brand)}\n  .wrap{max-width:1100px;margin:0 auto;padding:0 16px}\n  #hype-app header.top{background:var(--surface);border-bottom:1px solid var(--line);}\n  header.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:12px;padding-bottom:12px;flex-wrap:wrap}\n  .brand{font-weight:800;font-size:1.1rem}\n  .brand small{display:block;font-weight:500;font-size:.75rem;color:var(--muted)}\n  nav a{margin-left:14px;text-decoration:none;color:var(--ink);font-weight:600;font-size:.95rem}\n  .btn{display:inline-block;background:var(--brand);color:#fff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;border:0;cursor:pointer;font-size:1rem}\n  .btn.alt{background:var(--accent)}\n  .btn.ghost{background:transparent;color:var(--brand);border:2px solid var(--brand)}\n\n  /* HERO \u2013 Hype Drink */\n  .hero{background:linear-gradient(135deg,#1b5e20,#43a047 55%,#ff9800);color:#fff;padding:64px 0}\n  .hero .wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;align-items:center}\n  .hero h1{font-size:clamp(2rem,5vw,3.2rem);line-height:1.1;margin:0 0 12px}\n  .hero p.lead{font-size:1.15rem;opacity:.95;margin:0 0 22px}\n  .tag{display:inline-block;background:rgba(255,255,255,.18);padding:4px 12px;border-radius:999px;font-size:.8rem;font-weight:700;letter-spacing:.04em;margin-bottom:14px}\n  .cup{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);border-radius:var(--radius);padding:22px}\n  .cup h3{margin:0 0 10px}\n  .cup ul{margin:0;padding-left:18px}\n  .slogans{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}\n  .slogans span{background:#fff;color:var(--brand);font-weight:700;border-radius:999px;padding:6px 14px;font-size:.9rem}\n\n  section{padding:56px 0}\n  h2{font-size:clamp(1.6rem,3.5vw,2.2rem);margin:0 0 8px}\n  .sub{color:var(--muted);margin:0 0 28px}\n\n  /* Produtos */\n  .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}\n  .tabs button{border:1px solid var(--line);background:var(--surface);padding:9px 18px;border-radius:999px;font-weight:700;cursor:pointer;color:var(--ink)}\n  .tabs button.on{background:var(--brand);color:#fff;border-color:var(--brand)}\n  .prod{display:grid;grid-template-columns:260px 1fr 1fr;gap:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-bottom:14px;overflow:hidden}\n  .prod > div{padding:18px}\n  .prod .name{background:#f1f7ee}\n  .prod .name h3{margin:0 0 4px;font-size:1.1rem}\n  .pill{display:inline-block;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;padding:3px 9px;border-radius:999px;background:var(--brand-2);color:#1d2a1f}\n  .prod h4{margin:0 0 6px;font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}\n  .prod p{margin:0}\n  details summary{cursor:pointer;color:var(--brand);font-size:.85rem;margin-top:6px}\n\n  /* Oportunidade */\n  .op{background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\n  .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}\n  .card{background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:20px}\n  .card b.n{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--brand);color:#fff;margin-bottom:10px}\n  .notice{background:#fff8e6;border:1px solid #f3d27a;border-radius:var(--radius);padding:16px 18px;margin-top:22px;font-size:.92rem}\n\n  /* Formul\u00e1rio */\n  form{display:grid;gap:12px;max-width:560px}\n  label{font-weight:600;font-size:.92rem}\n  input,select,textarea{width:100%;padding:12px;border:1px solid var(--line);border-radius:10px;font:inherit;background:#fff}\n  .check{display:flex;gap:8px;align-items:flex-start;font-weight:400;font-size:.88rem}\n  .check input{width:auto;margin-top:4px}\n\n  footer{background:#1d2a1f;color:#cfd8cf;padding:32px 0;font-size:.85rem}\n  footer a{color:#a5d6a7}\n\n  @media (max-width:820px){\n    .hero .wrap{grid-template-columns:1fr}\n    .prod{grid-template-columns:1fr}\n    .steps{grid-template-columns:1fr}\n    nav{display:none}\n  }\n";document.head.appendChild(st);})();
(function(){
  function hypeInit(){
    if(document.getElementById('hype-app')) return;
    var box=document.createElement('div'); box.id='hype-app';
    box.innerHTML="<header class=\"top\">\n  <div class=\"wrap\">\n    <div class=\"brand\">Nutri\u00e7\u00e3o & Bem-Estar\n      <small>Distribuidor Independente Herbalife<\/small>\n    <\/div>\n    <nav>\n      <a href=\"#hype\">Hype Drink<\/a>\n      <a href=\"#produtos\">Produtos<\/a>\n      <a href=\"#oportunidade\">Oportunidade<\/a>\n      <a href=\"#contato\">Contato<\/a>\n    <\/nav>\n  <\/div>\n<\/header>\n\n<!-- 1. HERO: HYPE DRINK -->\n<section class=\"hero\" id=\"hype\">\n  <div class=\"wrap\">\n    <div>\n      <span class=\"tag\">O QUERIDINHO DO MOMENTO<\/span>\n      <h1>Hype Drink: energia que te acompanha o dia todo.<\/h1>\n      <p class=\"lead\">Uma bebida funcional preparada com a combina\u00e7\u00e3o de produtos Herbalife para dar mais energia, foco, disposi\u00e7\u00e3o e hidrata\u00e7\u00e3o na rotina e nos treinos.<\/p>\n      <a class=\"btn alt\" href=\"#contato\">Quero provar o meu Hype<\/a>\n      <div class=\"slogans\">\n        <span>Seu dia no modo Hype.<\/span>\n        <span>Foco no copo, energia na rotina.<\/span>\n        <span>Hidrata, anima, acompanha.<\/span>\n        <span>Treino pede Hype.<\/span>\n      <\/div>\n    <\/div>\n    <div class=\"cup\">\n      <h3>Como montamos o seu Hype<\/h3>\n      <ul>\n        <li>Base de <b>Herbal Concentrate<\/b> ou <b>N-R-G<\/b> (ch\u00e1)<\/li>\n        <li><b>Liftoff\u00ae<\/b> efervescente (energia e foco)<\/li>\n        <li><b>Fiber Concentrate<\/b> para dar sabor (opcional)<\/li>\n        <li>\u00c1gua bem gelada e gelo<\/li>\n      <\/ul>\n      <p style=\"font-size:.82rem;opacity:.85;margin:12px 0 0\">Cont\u00e9m cafe\u00edna (cerca de 85 mg por por\u00e7\u00e3o de Herbal Concentrate e 85 mg por sach\u00ea de Liftoff). N\u00e3o recomendado para gestantes, lactantes, crian\u00e7as e pessoas sens\u00edveis \u00e0 cafe\u00edna. Siga a por\u00e7\u00e3o indicada no r\u00f3tulo de cada produto.<\/p>\n    <\/div>\n  <\/div>\n<\/section>\n\n<!-- 2. PRODUTOS -->\n<section id=\"produtos\">\n  <div class=\"wrap\">\n    <h2>Nossos produtos<\/h2>\n    <p class=\"sub\">Veja cada produto com seus principais ingredientes e para que serve. Confira sempre a composi\u00e7\u00e3o completa no r\u00f3tulo oficial.<\/p>\n    <div class=\"tabs\" id=\"tabs\">\n      <button class=\"on\" data-f=\"todos\">Todos<\/button>\n      <button data-f=\"po\">Em p\u00f3<\/button>\n      <button data-f=\"liquido\">L\u00edquidos<\/button>\n      <button data-f=\"solido\">S\u00f3lidos (comprimidos, c\u00e1psulas, barras)<\/button>\n    <\/div>\n    <div id=\"lista\"><\/div>\n  <\/div>\n<\/section>\n\n<!-- 3. OPORTUNIDADE (MMN dentro das normas) -->\n<section class=\"op\" id=\"oportunidade\">\n  <div class=\"wrap\">\n    <h2>Conhe\u00e7a a oportunidade de neg\u00f3cio<\/h2>\n    <p class=\"sub\">Voc\u00ea pode ser cliente, consumir com desconto ou se tornar um Distribuidor Independente. Voc\u00ea escolhe o seu ritmo.<\/p>\n    <div class=\"steps\">\n      <div class=\"card\"><b class=\"n\">1<\/b><h3>Conhe\u00e7a os produtos<\/h3><p>Experimente, entenda os benef\u00edcios e veja se eles combinam com o seu estilo de vida.<\/p><\/div>\n      <div class=\"card\"><b class=\"n\">2<\/b><h3>Converse comigo<\/h3><p>Explico como funciona o cadastro, o plano de vendas e as regras da empresa, com transpar\u00eancia.<\/p><\/div>\n      <div class=\"card\"><b class=\"n\">3<\/b><h3>Cadastre-se oficialmente<\/h3><p>O cadastro \u00e9 feito pelo canal oficial da Herbalife, com o meu c\u00f3digo de patrocinador.<\/p><\/div>\n    <\/div>\n    <div class=\"notice\">\n      <b>Transpar\u00eancia:<\/b> os resultados de cada distribuidor dependem do esfor\u00e7o, do tempo dedicado e das vendas de produtos a clientes. N\u00e3o h\u00e1 garantia de renda. Consulte a\n      <a href=\"https://www.herbalife.com/content/dam/global-reusable-assets/documents/pd-statement-typical-distributor-earnings-pt-br.pdf\" target=\"_blank\" rel=\"noopener\">Declara\u00e7\u00e3o de Ganhos T\u00edpicos do Distribuidor<\/a> publicada pela empresa.\n    <\/div>\n  <\/div>\n<\/section>\n\n<!-- 4. CONTATO / CADASTRO -->\n<section id=\"contato\">\n  <div class=\"wrap\">\n    <h2>Fale comigo<\/h2>\n    <p class=\"sub\">Preencha os dados e eu entro em contato pelo WhatsApp.<\/p>\n    <form id=\"form\">\n      <div><label for=\"nome\">Nome<\/label><input id=\"nome\" required><\/div>\n      <div><label for=\"whats\">WhatsApp<\/label><input id=\"whats\" type=\"tel\" required placeholder=\"(00) 00000-0000\"><\/div>\n      <div><label for=\"interesse\">Tenho interesse em<\/label>\n        <select id=\"interesse\">\n          <option>Provar o Hype Drink<\/option>\n          <option>Comprar produtos<\/option>\n          <option>Acompanhamento de bem-estar<\/option>\n          <option>Conhecer a oportunidade de neg\u00f3cio<\/option>\n        <\/select>\n      <\/div>\n      <label class=\"check\"><input type=\"checkbox\" required> Autorizo o contato pelo WhatsApp e o uso dos meus dados apenas para este atendimento (LGPD).<\/label>\n      <button class=\"btn\" type=\"submit\">Enviar pelo WhatsApp<\/button>\n    <\/form>\n  <\/div>\n<\/section>\n\n<footer>\n  <div class=\"wrap\">\n    <p><b>Nutri\u00e7\u00e3o & Bem-Estar<\/b> \u2014 Distribuidor Independente Herbalife. Este site \u00e9 mantido de forma independente e n\u00e3o \u00e9 o site oficial da Herbalife.<\/p>\n    <p>Os produtos n\u00e3o se destinam a diagnosticar, tratar, curar ou prevenir qualquer doen\u00e7a. Consulte um profissional de sa\u00fade antes de iniciar qualquer programa nutricional. Resultados variam de pessoa para pessoa.<\/p>\n  <\/div>\n<\/footer>";
    var alvo=null, els=document.querySelectorAll('p,div,span,h1,h2,h3');
    for(var i=0;i<els.length;i++){ if(els[i].children.length===0 && els[i].textContent.trim()==='HYPE_AQUI'){ alvo=els[i]; break; } }
    if(alvo){ alvo.replaceWith(box); }
    else { var m=document.querySelector('main'); if(m){ m.insertBefore(box,m.firstChild); } else { document.body.insertBefore(box,document.body.firstChild); } }

/* ======= EDITE AQUI A SUA LISTA DE PRODUTOS =======
   tipo: "po" | "liquido" | "solido"
   Ingredientes: copie do rótulo oficial do produto (catálogo Brasil). */
const PRODUTOS = [
 {
  "nome": "Beauty Booster",
  "tipo": "po",
  "formato": "Pó · 240 g",
  "sabores": "Frutas Vermelhas",
  "para": "Melhore e mantenha a aparência saudável da pele, cabelos e unhas com essa bebida de colágeno multivitamínica.",
  "modo": "Agite esta embalagem antes de cada uso. Misture em uma shakeira ou liquidificador 2 medidas (12 g) com 1 copo (200 ml) de água gelada. Beba imediatamente após o preparo.",
  "ingredientes": "proteína de soro do leite concentrada, caseinato de cálcio, colágeno hidrolisado, lactato de cálcio, fosfato de cálcio dibásico, óxido de magnésio, concentrado de cenoura e hibisco, premix de vitaminas e minerais (maltodextrina, ascorbato de sódio (vitamina C), acetato de DL-alfa-tocoferol (vitamina E), sulfato de zinco, palmitato de retinol (vitamina A), colecalciferol (vitamina D), sulfato de cobre, D-biotina (vitamina B7) e selenito de sódio), triglicerídeos de cadeia média (TCM), reguladores de acidez ácido málico e ácido cítrico, aromatizantes, estabilizante carboximetilcelulose sódica, espessante goma xantana, edulcorante glicosídeos de esteviol de Stevia rebaudiana Bertoni e corante natural vermelho beterraba. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/beauty-booster-frutas-vermelhas-240g-1923"
 },
 {
  "nome": "Creatina Premium",
  "tipo": "po",
  "formato": "Pó · 150 g",
  "sabores": "",
  "para": "Alimento do desempenho físico",
  "modo": "Momentos de consumo Uma vez por dia, a qualquer hora Pré ou Pós Treino Pelo tempo que você quiser, sem a necessidade de fazer pausas no uso Misturada com produtos Herbalife como Shake, Herbal Concentrate, NRG, Liftoff ou Fiber Concentrate. MODO DE PREPARO: Adicione 1 medida (3g) do pó em 200ml de água ou outra bebida de sua preferência",
  "ingredientes": "Creatina Monohidratada",
  "link": "https://www.herbalife.com/pt-br/u/products/premium-creatine-150g-325K"
 },
 {
  "nome": "Fiber Powder",
  "tipo": "po",
  "formato": "Pó",
  "sabores": "Neutro",
  "para": "Ajuda a manter a regularidade do intestino saudável.",
  "modo": "Adicione uma colher de sopa rasa do pó (5 g) em uma bebida ou alimento de sua preferência, três vezes ao dia.",
  "ingredientes": "amido de milho resistente. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/fiber-powder-neutro-275g-0927"
 },
 {
  "nome": "Golden Beverage",
  "tipo": "po",
  "formato": "Pó · 45 g",
  "sabores": "Abacaxi, limão e gengibre",
  "para": "O cuidado diário para quem vive em movimento",
  "modo": "Modo de Preparo: Misturar o conteúdo de 1 sachê em 120 ml de água fria e consumir 1 vez ao dia. Momentos de consumo: Escolha um momento do dia que melhor combina com sua rotina: Shot matinal, para começar o dia acompanhando seu ritmo; Pós-treino, para complementar sua rotina após a atividade física; Em outro momento do dia, quando quiser incluir seu ritual de cuidado na rotina. Para quem está sempre em movimento e busca praticidade sem abrir mão de uma fórmula diferenciada, Golden Beverage é uma forma saborosa e conveniente de aproveitar a cúrcuma de maneira eficiente. Golden Beverage — sabor vibrante e ciência avançada em uma fórmula exclusiva da Herbalife.",
  "ingredientes": "Suco de abacaxi desidratado, maltodextrina, extrato de rizomas de cúrcuma (Curcuma longa L.), suco de limão desidratado, triglicerídeos de cadeia média, aromatizantes, acidulante ácido cítrico, antiumectante fosfato tricálcico, edulcorante sucralose e antiumectante dióxido de silício.",
  "link": "https://www.herbalife.com/pt-br/u/products/golden-beverage-pineapple-lemon-ginger-45g-238k"
 },
 {
  "nome": "Herbal Concentrate",
  "tipo": "po",
  "formato": "Pó · 102 g",
  "sabores": "Laranja and Especiarias, Limão, Original",
  "para": "Impulsione seu metabolismo e hidratação com esta bebida de baixa caloria, à base de chá verde, chá preto, cafeína e antioxidantes.",
  "modo": "Misture 1⁄2 colher de chá (1,7 g) em 250 ml de água quente ou fria.",
  "ingredientes": "maltodextrina, chá verde, chá preto, cafeína, mistura de ervas aromáticas (cardamomo, malva e hibisco) e aromatizante. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbal-concentrate-original-102g-059k"
 },
 {
  "nome": "Herbalife24® CR7 Drive",
  "tipo": "po",
  "formato": "Pó · 810 g",
  "sabores": "Berry Mix",
  "para": "Combustível ideal para ajudar na performance dos seus treinos com energia e hidratação.",
  "modo": "Misturar 27 g(2 colheres medida) para cada 450 ml de água.",
  "ingredientes": "dextrose, sacarose, maltodextrina, isomaltulose, citrato de sódio, citrato de magnésio, citrato de potássio, concentrado de cenoura, concentrado de uva, cianocobalamina (vitamina B12), tiamina mononitrato (vitamina B1), acidulante ácido cítrico e aromatizantes naturais. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-cr7-drive-berry-mix-810g-1445"
 },
 {
  "nome": "Herbalife24® Glutamina",
  "tipo": "po",
  "formato": "Pó · 150 g",
  "sabores": "Neutro",
  "para": "L-glutamina da AJINOMOTO Co.® que ajuda na recuperação muscular e a fortalecer a função do intestino de barreira protetora*",
  "modo": "Consumir 1 medida (5 g) em 200 ml de água uma vez ao dia, ou conforme orientação profissional. Este produto é recomendado para adultos a partir de 19 anos.",
  "ingredientes": "L-Glutamina**. NÃO CONTÉM GLÚTEN. **PURE AMINO ACID by AJINOMOTO Co.®",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-glutamina-neutro-150g-146k"
 },
 {
  "nome": "Herbalife24® Tri-Core Protein Blend",
  "tipo": "po",
  "formato": "Pó · 1010 g",
  "sabores": "Chocolate",
  "para": "Recupere-se com este shake pós-treino delicioso, rico em proteínas para fortalecer e recuperar os músculos após exercícios intensos.",
  "modo": "Misture 50,5 g (2 colheres medida ou 8 colheres de sopa rasas) em 280 ml de água.",
  "ingredientes": "proteína concentrada de leite obtida de leite bovino, proteína de soro do leite concentrada, frutose, sacarose, maltodextrina, proteína de soro do leite isolada, cacau em pó, cloreto de sódio, óleo vegetal de girassol altamente oleico, triglicerídeos de cadeia média (TCM), óxido de magnésio, sais de magnésio do ácido cítrico, ácido ascórbico (vitamina C), acetato de racealfatocoferol (vitamina E), fumarato ferroso, D-pantotenato de cálcio (vitamina B5), mononitrato de tiamina (vitamina B1), cloreto de cromo, cloridrato de piridoxina (vitamina B6), regulador de acidez citrato de potássio, aromatizantes naturais, antiumectante dióxido de silício, espessante goma guar e edulcorante glicosídeos de esteviol. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-tri-core-protein-blend-chocolate-1010g-1417"
 },
 {
  "nome": "Herbalife24® Whey Protein 3W",
  "tipo": "po",
  "formato": "Pó · 510 g",
  "sabores": "Baunilha, Chocolate",
  "para": "Suplemento de proteína à base de whey de alta qualidade (Blend Whey Isolado, Hidrolisado e Concentrado), que promove o crescimento muscular, fortalece os ossos e auxilia na recuperação pós-treino.",
  "modo": "Diluir 3 medidas (34 g) em 250 ml de água de preferência gelada.",
  "ingredientes": "proteína de soro do leite isolada, proteína de soro do leite concentrada, cacau em pó, proteína de soro do leite hidrolisada, aromatizantes, espessante goma xantana e edulcorante glicosídeos de esteviol.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-whey-protein-3w-chocolate-510g-147k"
 },
 {
  "nome": "Liftoff®",
  "tipo": "po",
  "formato": "Pó efervescente em sachê · 15 Sachês",
  "sabores": "Abacaxi, Amora Intenso, Limão Siciliano",
  "para": "Potencialize sua sensação de energia, concentração e treino com este delicioso suplemento efervescente com cafeína, taurina e vitaminas.",
  "modo": "Por ser em sachê individual, o Liftoff é extremamente prático e pode ser transportado e preparado em qualquer lugar apenas com a adição de água. Pode ser consumido em qualquer momento do dia, principalmente em dias mais atarefados que exigem maior foco e concentração em atividades como reuniões, apresentações e provas. Pode ser consumido todos os dias como pré-treino, para qualquer hora que o seu corpo precisar de energia!",
  "ingredientes": "maltodextrina, taurina, cafeína, ácido ascórbico (vitamina C), niacinamida (vitamina B3), cloridrato de piridoxina (vitamina B6), cianocobalamina (vitamina B12), D-pantotenato de cálcio (vitamina B5), D-biotina (vitamina B7), tiamina mononitrato (vitamina B1), riboflavina (vitamina B2), reguladores de acidez ácido cítrico, bicarbonato de sódio e bicarbonato de potássio, aromatizantes e edulcorante glicosídeos de esteviol de Stevia rebaudiana Bertoni.",
  "link": "https://www.herbalife.com/pt-br/u/products/liftoff-abacaxi-15-saches-371k"
 },
 {
  "nome": "N-R-G",
  "tipo": "po",
  "formato": "Pó · 100 g",
  "sabores": "Guaraná Tropical, Original",
  "para": "Tenha mais energia e disposição no seu dia com esta deliciosa bebida zero calorias à base de chá preto e guaraná.",
  "modo": "Misture 1/2 colher de chá (1 g) em 200 ml de água quente ou fria.",
  "ingredientes": "maltodextrina, chá preto, guaraná, cafeína (40 mg/ 200 ml), aromatizante e acidulante ácido cítrico. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/nrg-original-100g-057k"
 },
 {
  "nome": "NutreV",
  "tipo": "po",
  "formato": "Pó · 672 g",
  "sabores": "Neutro",
  "para": "Uma alternativa ao leite que contém nutrientes essenciais como proteínas, fibras, vitaminas e minerais",
  "modo": "Misture em uma shakeira ou liquidificador 2 1/2 colheres de sopa de NutreV (32g) com uma porção de Fórmula 1 Shake. Combine também seu NutreV com suas receitas favoritas, cereais e frutas.",
  "ingredientes": "maltodextrina, proteína de soja isolada, inulina, amido modificado, fosfato de cálcio dibásico, gordura vegetal, mix de vitaminas e minerais (maltodextrina, óxido de magnésio, pirofosfato férrico, ácido ascórbico (vitamina Q), acetato de DL-alfa-tocoferol (vitamina D. palmitato de retinol (vitamina A), óxido de zinco. riboflavina e colecalciferol (vitamina D)), cloreto de potássio, sal, aromatizante, emulsificante lecitina, espessantes goma xantana e goma quar e edulcorante sucralose. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE. NÃO CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/nutrev-neutro-672g-1639"
 },
 {
  "nome": "Nutri Soup",
  "tipo": "po",
  "formato": "Pó · 416 g",
  "sabores": "Frango com Legumes",
  "para": "Uma deliciosa e prática refeição, rica em proteínas, que fica pronta em minutos.",
  "modo": "Consulte a embalagem.",
  "ingredientes": "Consulte o rótulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/formula-1-nutri-soup-frango-com-legumes-416g-0748"
 },
 {
  "nome": "OnActive Drink",
  "tipo": "po",
  "formato": "Pó · 264g",
  "sabores": "Chocolate",
  "para": "Nutrição inteligente para uma vida ativa",
  "modo": "Adicione 2 colheres de sopa (24g) de OnActive Drink em 180ml de água fria. Bata na shakeira ou mixer até ficar homogêneo.",
  "ingredientes": "proteína de soja isolada, soro de leite, proteína de soro do leite concentrada, cacau em pó, frutooligossacarídeos (FOS), óleo vegetal de palma, mix de minerais (fosfato tricálcico, sulfato de magnésio, fosfato de potássio monobásico, amido de milho, iodeto de potássio, sulfato de zinco, sulfato de manganês, sulfato cúprico e selenito de sódio), amido modificado, permeado de soro do leite, inulina, mix de substâncias bioativas (luteina, zeaxantina, amido de milho), mix de vitaminas (amido de milho, ácido ascórbico (vitamina C), niacinamida (vitamina B3), palmitato de retinol (vitamina A), colecalciferol (vitamina D), ácido pantotênico (vitamina B5), cloridrato de piridoxina (vitamina B6), tiamina (vitamina B1), ácido fólico (vitamina B9), cianocobalamina (vitamina B12), acetato de DL-alfa-tocoferol (vitamina E), fitonadiona (vitamina K1) e D-biotina (vitamina B7)), sal, L-metionina, fosfato de magnésio, pirofosfato férrico, riboflavina (vitamina B2), óxido de zinco, emulsificantes lecitina e mono e diglicerídeos de ácidos graxos, espessantes goma xantana, aromatizantes, reguladores de acidez citrato de potássio, fosfato dipotássico e hidróxido de potássio, corante beta-carotenos vegetais e edulcorante sucralose. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE. CONTÉM LACTOSE. NÃO CONTÉM GLUTÉN.",
  "link": "https://www.herbalife.com/pt-br/u/products/onactive-drink-chocolate-264g-223k"
 },
 {
  "nome": "Protein Complete",
  "tipo": "po",
  "formato": "Pó · 550 g",
  "sabores": "Baunilha, Chocolate Sensation, Morango",
  "para": "Protein Complete. Completo no nome. Completo no sabor.",
  "modo": "Consulte a embalagem.",
  "ingredientes": "Consulte o rótulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-complete-baunilha-550g-613k"
 },
 {
  "nome": "Protein Crunch",
  "tipo": "po",
  "formato": "Pó · 150 g",
  "sabores": "Chocolate",
  "para": "Adicione mais proteína e uma textura crocante sabor chocolate ao seus shakes e snacks",
  "modo": "Acrescente 2 colheres de sopa (10 g) do Protein Crunch no alimento de sua preferência, como: Shake Herbalife®, Leite, Iogurte e Frutas",
  "ingredientes": "crisps de proteína isolada de soja com cacau (proteína isolada de soja, cacau e amido), maltodextrina, amido de mandioca, estabilizantes maltitol e xarope de maltitol, umectante sorbitol, aromatizante e edulcorante sucralose. ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO E SOJA. NÃO CONTÉM LACTOSE. CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-crunch-chocolate-150g-040k"
 },
 {
  "nome": "Protein Powder",
  "tipo": "po",
  "formato": "Pó · 480 g",
  "sabores": "Neutro",
  "para": "Adicione proteínas no seu consumo diário de forma prática com esta combinação de proteínas de alto valor biológico.",
  "modo": "Uma colher de sopa rasa (6 g), de uma a seis vezes ao dia. Por ter sabor neutro, pode ser adicionado em bebidas, shakes e sopas.",
  "ingredientes": "proteína de soja isolada, proteína de soro do leite concentrada, aromatizante e antiumectante dióxido de silício. ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. CONTÉM LACTOSE E PROTEÍNAS DO LEITE. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-powder-neutro-480g-0246"
 },
 {
  "nome": "Shake",
  "tipo": "po",
  "formato": "Pó · 550 g",
  "sabores": "Banana Caramelizada, Baunilha Cremoso, Chocolate Sensation, Coco, Cookies and Cream, Doce de Leite, Frapê de Abacaxi, Morango Cremoso, Pistache, Torta de Limão",
  "para": "Nosso delicioso shake substituto de refeição, campeão de vendas.",
  "modo": "Agite a embalagem antes de cada uso. Bata no liquidificador ou misture duas colheres e meia de sopa (26 g) do Shake com 250 ml de leite semidesnatado ou 250 ml de NutreV.",
  "ingredientes": "proteína de soja isolada, frutose, celulose, óleo vegetal de girassol, cloreto de potássio, triglicerídeos de cadeia média (TCM), caseinato, inulina, fosfato de cálcio dibásico, óxido de magnésio, mix de vitaminas (maltodextrina, ácido ascórbico (vitamina C), acetato de DL-alfa-tocoferol (vitamina E), niacinamida (vitamina B3), palmitato de retinol (vitamina A), D-pantotenato de cálcio (vitamina B5), cloridrato de piridoxina (vitamina B6), ácido fólico (vitamina B9), biotina (vitamina B7), colecalciferol (vitamina D), tiamina (vitamina B1) e cianocobalamina (vitamina B12)), mix de minerais (maltodextrina, fumarato ferroso, iodeto de potássio, gluconato de cobre, óxido de zinco, sulfato de manganês e selenito de sódio), antiumectante dióxido de silício, emulsificante lecitina, espessantes goma guar, goma xantana e carragena, aromatizante, corante sintético idêntico ao natural betacaroteno e dulcorante sucralose. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE. NÃO CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN. ***Lactose proveniente da adição do leite semidesnatado, conforme instrução de preparo.",
  "link": "https://www.herbalife.com/pt-br/u/products/formula-1-shake-baunilha-550g-0951"
 },
 {
  "nome": "Sopa Instantânea",
  "tipo": "po",
  "formato": "Pó · 7 Sachês",
  "sabores": "sabor Creme de Cebola",
  "para": "Uma sopa snack proteica, saborosa, prática e saudável, fonte de fibras e nutrientes.",
  "modo": "Água quente: Despeje o conteúdo do sachê (28g) em uma caneca ou tigela funda. Acrescente 200 ml de água aquecida e misture até ficar homogêneo. Micro-Ondas: Para preparo no forno de micro-ondas, misture o conteúdo do sachê em 200 ml de água fria e leve ao micro-ondas por um minuto e meio. Misture novamente e a sopa estará pronta para consumo. Dica: Experimente além da sopa! Use como ingrediente em receitas criativas e transforme seus pratos com um toque extra de proteína e sabor. Seu trunfo para dar sabor em receitas proteicas, nutritivas e deliciosas! OPÇÕES DISPONÍVEIS Caixa com 7 sachês de 28g cada Frango com Legumes - #448K",
  "ingredientes": "proteína de soja isolada, batata, maltodextrina, amido modificado, celulose, inulina, cebola em flocos, cebola, sal, óleo vegetal de girassol, tomate, alho, mix de vitaminas e minerais (maltodextrina, ácido ascórbico (vitamina C), pirofosfato férrico, acetato de DL-alfa-tocoferol (vitamina E), niacinamida (vitamina B3), sulfato de zinco, palmitato de retinol (vitamina A), sulfato de manganês, D-pantotenato de cálcio (vitamina B5), cianocobalamina (vitamina B12), cloridrato de piridoxina (vitamina B6), tiamina mononitrato (vitamina B1), riboflavina (vitamina B2) e ácido fólico (vitamina B9)), cloreto de potássio, pimenta preta, aromatizantes, emulsificante lecitina e acidulante ácido cítrico.",
  "link": "https://www.herbalife.com/pt-br/u/products/sopa-snack-proteica-sabor-creme-de-cebola-7-saches-445k"
 },
 {
  "nome": "Fiber Concentrate",
  "tipo": "liquido",
  "formato": "Concentrado líquido 450 ml",
  "sabores": "Manga, Uva",
  "para": "Ajude seu intestino a entrar no ritmo certo adicionando fibras de uma forma prática, saborosa e com baixas calorias.",
  "modo": "Agite bem antes de usar. Para o preparo de 200 ml (1 copo), adicione uma colher e meia de sopa (15 ml) e complete com a bebida de sua preferência (185 ml).",
  "ingredientes": "água, maltodextrina resistente de milho, concentrado de cenoura e mirtilo, acidulante ácido cítrico, regulador de acidez citrato de sódio, conservadores benzoato de sódio e sorbato de potássio, aromatizante, edulcorante sucralose, estabilizante goma xantana e antioxidante ácido ascórbi. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/fiber-concentrate-uva-450ml-2140"
 },
 {
  "nome": "Fiber Concentrate Immune",
  "tipo": "liquido",
  "formato": "Concentrado líquido 450 ml",
  "sabores": "Limão e Mel",
  "para": "Ajude seu intestino a entrar no ritmo certo adicionando fibras de uma forma prática, saborosa e com baixas calorias.",
  "modo": "Agite bem antes de usar. Para o preparo de 200ml (1 copo), adicione uma colher e meia (15ml) em 185ml de água ou da +L31.",
  "ingredientes": "água, maltodextrina resistente de milho, mix de vitaminas e minerais (maltodextrina, ascorbato de sódio (vitamina C), sulfato de zinco monoidratado (zinco) e selenito de sódio (selênio)), acidulante ácido cítrico, aromatizantes, regulador de acidez citrato de sódio, edulcorante sucralose, estabilizante goma xantana, conservadores benzoato de sódio e sorbato de potássio. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/fiber-concentrate-immune-limao-mel-450ml-235k"
 },
 {
  "nome": "Barra de Proteínas",
  "tipo": "solido",
  "formato": "Barra · 7 Barras",
  "sabores": "Citrus Lemon",
  "para": "Irresistível barra proteica com cobertura de chocolate, perfeita para aquela fome entre as refeições.",
  "modo": "Consulte a embalagem.",
  "ingredientes": "xarope de glicose, cobertura de chocolate ao leite (açúcar, leite em pó integral, manteiga de cacau, massa de cacau, emulsificante lecitina e aromatizante), xarope de frutose, caseinato de cálcio, proteína de soro do leite concentrada, óleo de palma, caseinato de sódio, colágeno hidrolisado, dextrose, água, proteína hidrolisada do leite, clara de ovo desidratada, aromatizantes e acidulante ácido cítrico. ALÉRGICOS: CONTÉM LEITE E DERIVADOS E DERIVADOS DE SOJA, OVO E TRIGO. PODE CONTER CEVADA, AVEIA, AMENDOIM, AMÊNDOA, CASTANHA-DE-CAJU, PECÃ, NOZES, AVELÃ, MACADÂMIA E LÁTEX NATURAL**. CONTÉM LACTOSE. CONTÉM GLÚTEN. **Proveniente de material utilizado na embalagem.",
  "link": "https://www.herbalife.com/pt-br/u/products/barra-de-proteinas-citrus-lemon-245g-0031"
 },
 {
  "nome": "Herbalife24® BCAA 5:1:1",
  "tipo": "solido",
  "formato": "Tabletes · 120 Tabletes ",
  "sabores": "",
  "para": "Suplemento para apoiar o crescimento e a recuperação muscular",
  "modo": "Consumir 4 tabletes uma vez ao dia após o treino, ou conforme orientação professional.",
  "ingredientes": "L-Leucina**, L-Isoleucina**, L-Valina**, cloridrato de piridoxina (vitamina B6), estabilizantes celulose microcristalina com dióxido de silício e hidroxipropilmetilcelulose e glaceante hidroxipropilmetilcelulose com polietilenoglicol. NÃO CONTÉM GLÚTEN. **PURE AMINO ACID by AJINOMOTO Co.®",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-bcaa-120-tabletes-148k"
 },
 {
  "nome": "Herbalifeline Ômega 3",
  "tipo": "solido",
  "formato": "Cápsulas · 90 Cápsulas ",
  "sabores": "",
  "para": "Suplemento de Ômega-3 com uma exclusiva combinação de óleos marinhos refinados, e vitamina E.",
  "modo": "Três cápsulas ao dia, de preferência após a refeição.",
  "ingredientes": "óleo de peixe (ômega 3: EPA e DHA), cápsula de gelatina (gelificante gelatina, umectante glicerina e aromatizante), vitamina E e aromatizantes. ALÉRGICOS: CONTÉM DERIVADOS DE PEIXE E SOJA. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalifeline-omega-3-90-capsulas-0065"
 },
 {
  "nome": "Multivitaminas & Minerais",
  "tipo": "solido",
  "formato": "Tabletes · 90 Tabletes ",
  "sabores": "",
  "para": "Complemente suas necessidades nutricionais diárias com este suplemento completo de vitaminas e Minerais.",
  "modo": "Dois tabletes por dia, preferencialmente com a refeição.",
  "ingredientes": "minerais (carbonato de cálcio, óxido de magnésio, fumarato ferroso, sulfato de zinco, sulfato de manganês, L-selenometionina, molibdato de sódio, iodeto de potássio, cloreto de cromo e óxido de cobre), vitaminas (vitamina C, vitamina A, vitamina E, niacina, ácido pantotênico, biotina, vitamina B6, vitamina D, ácido fólico, tiamina, riboflavina e vitamina B12), dextrina, dextrose, estabilizantes celulose microcristalina, hidroxipropilcelulose, croscarmelose sódica e carboximetilcelulose sódica e emulsificante lecitina de soja. ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E TRIGO. CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/multivitaminas-minerais-90-tabletes-3122"
 },
 {
  "nome": "Shape Control",
  "tipo": "solido",
  "formato": "Cápsulas · 18,9 g",
  "sabores": "",
  "para": "Aumenta sua energia e seu metabolismo.",
  "modo": "Consumir uma cápsula 1 vez ao dia ou conforme orientação profissional.",
  "ingredientes": "extrato de laranja moro (Citrus sinensis (L.) Osbeck), maltodextrina, cápsula de gelatina, picolinato de cromo, estabilizante celulose microcristalina e antiumectante dióxido de silicio. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/shape-control-18-9g-318k"
 },
 {
  "nome": "Xtra-Cal",
  "tipo": "solido",
  "formato": "Tabletes · 60 Tabletes",
  "sabores": "",
  "para": "Desenvolva e mantenha ossos e dentes fortes e saudáveis.",
  "modo": "Tomar 2 tabletes ao dia, preferencialmente antes da refeição.",
  "ingredientes": "Carbonato de cálcio (carbonato de cálcio e maltodextrina), óxido de magnésio, colecalciferol (amido modificado, sacarose, triglicerídeos de cadeia média, colecalciferol, antioxidantes: ascorbato de sódio e DL-alfa-tocoferol e antiumectante dióxido de silício), estabilizantes: celulose microcristalina, croscarmelose sódica e hidroxipropilmetilcelulose, corante dióxido de titânio e umectante glicerina. NÃO CONTÉM GLÚTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/xtra-cal-60-tabletes-0020"
 }
];

const lista = document.getElementById('lista');
const nomes = {po:"Em pó", liquido:"Líquido", solido:"Sólido"};
function resumo(t){const s=t.split(/,\s*(?![^()]*\))/).slice(0,4).join(', ');return s.length<t.length?s+'…':s;}
function render(f){
  lista.innerHTML = PRODUTOS.filter(p => f==="todos" || p.tipo===f).map(p => `
    <article class="prod">
      <div class="name"><span class="pill">${nomes[p.tipo]}</span><h3>${p.nome}</h3><p style="color:var(--muted);font-size:.9rem">${p.formato}</p>${p.sabores?`<p style="font-size:.85rem;margin-top:6px"><b>Sabores:</b> ${p.sabores}</p>`:''}</div>
      <div><h4>Principais ingredientes</h4><p>${resumo(p.ingredientes)}</p><details><summary>Ver lista completa</summary><p style="font-size:.85rem;margin-top:6px">${p.ingredientes}</p></details></div>
      <div><h4>Para que serve</h4><p>${p.para}</p><h4 style="margin-top:12px">Modo de uso</h4><p style="font-size:.92rem">${p.modo}</p><p style="margin-top:8px;font-size:.85rem"><a href="${p.link}" target="_blank" rel="noopener">Página oficial do produto</a></p></div>
    </article>`).join('');
}
document.getElementById('tabs').addEventListener('click', e => {
  if(!e.target.dataset.f) return;
  document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('on', b===e.target));
  render(e.target.dataset.f);
});
render("todos");

/* ======= SEU WHATSAPP (somente números, com DDI 55) ======= */
const MEU_WHATS = "5581999097522";
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = `Olá! Sou ${document.getElementById("nome").value}. Tenho interesse em: ${document.getElementById("interesse").value}. Meu WhatsApp: ${document.getElementById("whats").value}`;
  window.open(`https://wa.me/${MEU_WHATS}?text=${encodeURIComponent(msg)}`, '_blank');
});

  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',hypeInit); } else { hypeInit(); }
})();
