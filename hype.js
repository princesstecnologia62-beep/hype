(function(){var st=document.createElement('style');st.textContent=":root{\n    --bg:#fbfaf6; --surface:#ffffff; --ink:#1d2a1f; --muted:#5b6b5e;\n    --brand:#2f7d32; --brand-2:#8bc34a; --accent:#ff7a1a; --line:#e3e8df;\n    --radius:14px;\n  }\n  #hype-app, #hype-app *{box-sizing:border-box}\n  #hype-app{margin:0;font-family:system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55}\n  a{color:var(--brand)}\n  .wrap{max-width:1100px;margin:0 auto;padding:0 16px}\n  #hype-app header.top{background:var(--surface);border-bottom:1px solid var(--line);}\n  header.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:12px;padding-bottom:12px;flex-wrap:wrap}\n  .brand{font-weight:800;font-size:1.1rem}\n  .brand small{display:block;font-weight:500;font-size:.75rem;color:var(--muted)}\n  nav a{margin-left:14px;text-decoration:none;color:var(--ink);font-weight:600;font-size:.95rem}\n  .btn{display:inline-block;background:var(--brand);color:#fff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;border:0;cursor:pointer;font-size:1rem}\n  .btn.alt{background:var(--accent)}\n  .btn.ghost{background:transparent;color:var(--brand);border:2px solid var(--brand)}\n\n  /* HERO \u2013 Hype Drink */\n  .hero{background:linear-gradient(135deg,#1b5e20,#43a047 55%,#ff9800);color:#fff;padding:64px 0}\n  .hero .wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;align-items:center}\n  .hero h1{font-size:clamp(2rem,5vw,3.2rem);line-height:1.1;margin:0 0 12px}\n  .hero p.lead{font-size:1.15rem;opacity:.95;margin:0 0 22px}\n  .tag{display:inline-block;background:rgba(255,255,255,.18);padding:4px 12px;border-radius:999px;font-size:.8rem;font-weight:700;letter-spacing:.04em;margin-bottom:14px}\n  .cup{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);border-radius:var(--radius);padding:22px}\n  .cup h3{margin:0 0 10px}\n  .cup ul{margin:0;padding-left:18px}\n  .slogans{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}\n  .slogans span{background:#fff;color:var(--brand);font-weight:700;border-radius:999px;padding:6px 14px;font-size:.9rem}\n\n  section{padding:56px 0}\n  h2{font-size:clamp(1.6rem,3.5vw,2.2rem);margin:0 0 8px}\n  .sub{color:var(--muted);margin:0 0 28px}\n\n  /* Produtos */\n  .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}\n  .tabs button{border:1px solid var(--line);background:var(--surface);padding:9px 18px;border-radius:999px;font-weight:700;cursor:pointer;color:var(--ink)}\n  .tabs button.on{background:var(--brand);color:#fff;border-color:var(--brand)}\n  .prod{display:grid;grid-template-columns:420px 1fr 1fr;gap:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-bottom:14px;overflow:hidden}\n  .prod > div{padding:18px}\n  .prod .name{background:#f1f7ee}\n  .prod .fotobox{height:420px;position:relative;overflow:hidden;background:#fff;border-radius:10px;margin:0 0 12px}\n  .prod .foto{display:block;width:100%;height:100%;object-fit:contain;transform:scale(2.3);cursor:zoom-in}\n  .prod .fotobox small{position:absolute;right:8px;bottom:6px;font-size:.72rem;color:var(--muted);background:#fff;padding:2px 6px;border-radius:6px}\n  .prod .name h3{margin:0 0 4px;font-size:1.1rem}\n  .pill{display:inline-block;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;padding:3px 9px;border-radius:999px;background:var(--brand-2);color:#1d2a1f}\n  .prod h4{margin:0 0 6px;font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}\n  .prod p{margin:0}\n  .prod .preco{font-size:1.35rem;font-weight:800;color:var(--brand);margin:10px 0 8px}\n  .prod .btn.comprar{padding:9px 18px;font-size:.9rem;margin-top:8px}\n  details summary{cursor:pointer;color:var(--brand);font-size:.85rem;margin-top:6px}\n\n  /* Oportunidade */\n  .op{background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\n  .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}\n  .card{background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:20px}\n  .card b.n{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--brand);color:#fff;margin-bottom:10px}\n  .notice{background:#fff8e6;border:1px solid #f3d27a;border-radius:var(--radius);padding:16px 18px;margin-top:22px;font-size:.92rem}\n\n  /* Formul\u00e1rio */\n  form{display:grid;gap:12px;max-width:560px}\n  label{font-weight:600;font-size:.92rem}\n  input,select,textarea{width:100%;padding:12px;border:1px solid var(--line);border-radius:10px;font:inherit;background:#fff}\n  .check{display:flex;gap:8px;align-items:flex-start;font-weight:400;font-size:.88rem}\n  .check input{width:auto;margin-top:4px}\n\n  footer{background:#1d2a1f;color:#cfd8cf;padding:32px 0;font-size:.85rem}\n  footer a{color:#a5d6a7}\n\n  @media (max-width:820px){\n    .hero .wrap{grid-template-columns:1fr}\n    .prod{grid-template-columns:1fr}\n    .steps{grid-template-columns:1fr}\n    nav{display:none}\n  }";document.head.appendChild(st);})();
(function(){
  function hypeInit(){
    if(document.getElementById('hype-app')) return;
    var box=document.createElement('div'); box.id='hype-app';
    box.innerHTML="<header class=\"top\">\n  <div class=\"wrap\">\n    <div class=\"brand\">Nutri\u00e7\u00e3o & Bem-Estar\n      <small>Distribuidor Independente Herbalife<\/small>\n    <\/div>\n    <nav>\n      <a href=\"#hype\">Hype Drink<\/a>\n      <a href=\"#produtos\">Produtos<\/a>\n      <a href=\"#oportunidade\">Oportunidade<\/a>\n      <a href=\"#contato\">Contato<\/a>\n    <\/nav>\n  <\/div>\n<\/header>\n\n<!-- 1. HERO: HYPE DRINK -->\n<section class=\"hero\" id=\"hype\">\n  <div class=\"wrap\">\n    <div>\n      <span class=\"tag\">O QUERIDINHO DO MOMENTO<\/span>\n      <h1>Hype Drink: energia que te acompanha o dia todo.<\/h1>\n      <p class=\"lead\">Uma bebida funcional preparada com a combina\u00e7\u00e3o de produtos Herbalife para dar mais energia, foco, disposi\u00e7\u00e3o e hidrata\u00e7\u00e3o na rotina e nos treinos.<\/p>\n      <a class=\"btn alt\" href=\"#contato\">Quero provar o meu Hype<\/a>\n      <div class=\"slogans\">\n        <span>Seu dia no modo Hype.<\/span>\n        <span>Foco no copo, energia na rotina.<\/span>\n        <span>Hidrata, anima, acompanha.<\/span>\n        <span>Treino pede Hype.<\/span>\n      <\/div>\n    <\/div>\n    <div class=\"cup\">\n      <h3>Como montamos o seu Hype<\/h3>\n      <ul>\n        <li>Base de <b>Herbal Concentrate<\/b> ou <b>N-R-G<\/b> (ch\u00e1)<\/li>\n        <li><b>Liftoff\u00ae<\/b> efervescente (energia e foco)<\/li>\n        <li><b>Fiber Concentrate<\/b> para dar sabor (opcional)<\/li>\n        <li>\u00c1gua bem gelada e gelo<\/li>\n      <\/ul>\n      <p style=\"font-size:.82rem;opacity:.85;margin:12px 0 0\">Cont\u00e9m cafe\u00edna (cerca de 85 mg por por\u00e7\u00e3o de Herbal Concentrate e 85 mg por sach\u00ea de Liftoff). N\u00e3o recomendado para gestantes, lactantes, crian\u00e7as e pessoas sens\u00edveis \u00e0 cafe\u00edna. Siga a por\u00e7\u00e3o indicada no r\u00f3tulo de cada produto.<\/p>\n    <\/div>\n  <\/div>\n<\/section>\n\n<!-- 2. PRODUTOS -->\n<section id=\"produtos\">\n  <div class=\"wrap\">\n    <h2>Nossos produtos<\/h2>\n    <p class=\"sub\">Veja cada produto com seus principais ingredientes e para que serve. Confira sempre a composi\u00e7\u00e3o completa no r\u00f3tulo oficial. Pre\u00e7os sugeridos ao consumidor em Pernambuco, sujeitos a altera\u00e7\u00e3o.<\/p>\n    <div class=\"tabs\" id=\"tabs\">\n      <button class=\"on\" data-f=\"todos\">Todos<\/button>\n      <button data-f=\"po\">Em p\u00f3<\/button>\n      <button data-f=\"liquido\">L\u00edquidos<\/button>\n      <button data-f=\"solido\">S\u00f3lidos (comprimidos, c\u00e1psulas, barras)<\/button>\n      <button data-f=\"pele\">Pele e corpo<\/button>\n    <\/div>\n    <div id=\"lista\"><\/div>\n  <\/div>\n<\/section>\n\n<!-- 3. OPORTUNIDADE (MMN dentro das normas) -->\n<section class=\"op\" id=\"oportunidade\">\n  <div class=\"wrap\">\n    <h2>Conhe\u00e7a a oportunidade de neg\u00f3cio<\/h2>\n    <p class=\"sub\">Voc\u00ea pode ser cliente, consumir com desconto ou se tornar um Distribuidor Independente. Voc\u00ea escolhe o seu ritmo.<\/p>\n    <div class=\"steps\">\n      <div class=\"card\"><b class=\"n\">1<\/b><h3>Conhe\u00e7a os produtos<\/h3><p>Experimente, entenda os benef\u00edcios e veja se eles combinam com o seu estilo de vida.<\/p><\/div>\n      <div class=\"card\"><b class=\"n\">2<\/b><h3>Converse comigo<\/h3><p>Explico como funciona o cadastro, o plano de vendas e as regras da empresa, com transpar\u00eancia.<\/p><\/div>\n      <div class=\"card\"><b class=\"n\">3<\/b><h3>Cadastre-se oficialmente<\/h3><p>O cadastro \u00e9 feito pelo canal oficial da Herbalife, com o meu c\u00f3digo de patrocinador.<\/p><\/div>\n    <\/div>\n    <div class=\"notice\">\n      <b>Transpar\u00eancia:<\/b> os resultados de cada distribuidor dependem do esfor\u00e7o, do tempo dedicado e das vendas de produtos a clientes. N\u00e3o h\u00e1 garantia de renda. Consulte a\n      <a href=\"https://www.herbalife.com/content/dam/global-reusable-assets/documents/pd-statement-typical-distributor-earnings-pt-br.pdf\" target=\"_blank\" rel=\"noopener\">Declara\u00e7\u00e3o de Ganhos T\u00edpicos do Distribuidor<\/a> publicada pela empresa.\n    <\/div>\n  <\/div>\n<\/section>\n\n<!-- 4. CONTATO / CADASTRO -->\n<section id=\"contato\">\n  <div class=\"wrap\">\n    <h2>Fale comigo<\/h2>\n    <p class=\"sub\">Preencha os dados e eu entro em contato pelo WhatsApp.<\/p>\n    <form id=\"form\">\n      <div><label for=\"nome\">Nome<\/label><input id=\"nome\" required><\/div>\n      <div><label for=\"whats\">WhatsApp<\/label><input id=\"whats\" type=\"tel\" required placeholder=\"(00) 00000-0000\"><\/div>\n      <div><label for=\"interesse\">Tenho interesse em<\/label>\n        <select id=\"interesse\">\n          <option>Provar o Hype Drink<\/option>\n          <option>Comprar produtos<\/option>\n          <option>Acompanhamento de bem-estar<\/option>\n          <option>Conhecer a oportunidade de neg\u00f3cio<\/option>\n        <\/select>\n      <\/div>\n      <label class=\"check\"><input type=\"checkbox\" required> Autorizo o contato pelo WhatsApp e o uso dos meus dados apenas para este atendimento (LGPD).<\/label>\n      <button class=\"btn\" type=\"submit\">Enviar pelo WhatsApp<\/button>\n    <\/form>\n  <\/div>\n<\/section>\n\n<footer>\n  <div class=\"wrap\">\n    <p><b>Nutri\u00e7\u00e3o & Bem-Estar<\/b> \u2014 Distribuidor Independente Herbalife. Este site \u00e9 mantido de forma independente e n\u00e3o \u00e9 o site oficial da Herbalife.<\/p>\n    <p>Os produtos n\u00e3o se destinam a diagnosticar, tratar, curar ou prevenir qualquer doen\u00e7a. Consulte um profissional de sa\u00fade antes de iniciar qualquer programa nutricional. Resultados variam de pessoa para pessoa.<\/p>\n  <\/div>\n<\/footer>";
    var alvo=null, els=document.querySelectorAll('p,div,span,h1,h2,h3');
    for(var i=0;i<els.length;i++){ if(els[i].children.length===0 && els[i].textContent.trim()==='HYPE_AQUI'){ alvo=els[i]; break; } }
    if(alvo){ alvo.replaceWith(box); }
    else { var m=document.querySelector('main'); if(m){ m.insertBefore(box,m.firstChild); } else { document.body.insertBefore(box,document.body.firstChild); } }

/* ======= EDITE AQUI A SUA LISTA DE PRODUTOS =======
   tipo: "po" | "liquido" | "solido"
   Ingredientes: copie do r\u00f3tulo oficial do produto (cat\u00e1logo Brasil). */
const PRODUTOS = [
 {
  "nome": "Beauty Booster",
  "preco": "301,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 240 g",
  "sabores": "Frutas Vermelhas",
  "para": "Melhore e mantenha a apar\u00eancia saud\u00e1vel da pele, cabelos e unhas com essa bebida de col\u00e1geno multivitam\u00ednica.",
  "modo": "Agite esta embalagem antes de cada uso. Misture em uma shakeira ou liquidificador 2 medidas (12 g) com 1 copo (200 ml) de \u00e1gua gelada. Beba imediatamente ap\u00f3s o preparo.",
  "ingredientes": "prote\u00edna de soro do leite concentrada, caseinato de c\u00e1lcio, col\u00e1geno hidrolisado, lactato de c\u00e1lcio, fosfato de c\u00e1lcio dib\u00e1sico, \u00f3xido de magn\u00e9sio, concentrado de cenoura e hibisco, premix de vitaminas e minerais (maltodextrina, ascorbato de s\u00f3dio (vitamina C), acetato de DL-alfa-tocoferol (vitamina E), sulfato de zinco, palmitato de retinol (vitamina A), colecalciferol (vitamina D), sulfato de cobre, D-biotina (vitamina B7) e selenito de s\u00f3dio), triglicer\u00eddeos de cadeia m\u00e9dia (TCM), reguladores de acidez \u00e1cido m\u00e1lico e \u00e1cido c\u00edtrico, aromatizantes, estabilizante carboximetilcelulose s\u00f3dica, espessante goma xantana, edulcorante glicos\u00eddeos de esteviol de Stevia rebaudiana Bertoni e corante natural vermelho beterraba. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE LEITE E SOJA. CONT\u00c9M LACTOSE. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/beauty-booster-frutas-vermelhas-240g-1923",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-1923-br.png"
 },
 {
  "nome": "Creatina Premium",
  "preco": "181,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 150 g",
  "sabores": "",
  "para": "Alimento do desempenho f\u00edsico",
  "modo": "Momentos de consumo Uma vez por dia, a qualquer hora Pr\u00e9 ou P\u00f3s Treino Pelo tempo que voc\u00ea quiser, sem a necessidade de fazer pausas no uso Misturada com produtos Herbalife como Shake, Herbal Concentrate, NRG, Liftoff ou Fiber Concentrate. MODO DE PREPARO: Adicione 1 medida (3g) do p\u00f3 em 200ml de \u00e1gua ou outra bebida de sua prefer\u00eancia",
  "ingredientes": "Creatina Monohidratada",
  "link": "https://www.herbalife.com/pt-br/u/products/premium-creatine-150g-325K",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-325k-br.png"
 },
 {
  "nome": "Fiber Powder",
  "preco": "243,00",
  "tipo": "po",
  "formato": "P\u00f3",
  "sabores": "Neutro",
  "para": "Ajuda a manter a regularidade do intestino saud\u00e1vel.",
  "modo": "Adicione uma colher de sopa rasa do p\u00f3 (5 g) em uma bebida ou alimento de sua prefer\u00eancia, tr\u00eas vezes ao dia.",
  "ingredientes": "amido de milho resistente. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/fiber-powder-neutro-275g-0927",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0927-br.png"
 },
 {
  "nome": "Golden Beverage",
  "preco": "",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 45 g",
  "sabores": "Abacaxi, lim\u00e3o e gengibre",
  "para": "O cuidado di\u00e1rio para quem vive em movimento",
  "modo": "Modo de Preparo: Misturar o conte\u00fado de 1 sach\u00ea em 120 ml de \u00e1gua fria e consumir 1 vez ao dia. Momentos de consumo: Escolha um momento do dia que melhor combina com sua rotina: Shot matinal, para come\u00e7ar o dia acompanhando seu ritmo; P\u00f3s-treino, para complementar sua rotina ap\u00f3s a atividade f\u00edsica; Em outro momento do dia, quando quiser incluir seu ritual de cuidado na rotina. Para quem est\u00e1 sempre em movimento e busca praticidade sem abrir m\u00e3o de uma f\u00f3rmula diferenciada, Golden Beverage \u00e9 uma forma saborosa e conveniente de aproveitar a c\u00farcuma de maneira eficiente. Golden Beverage \u2014 sabor vibrante e ci\u00eancia avan\u00e7ada em uma f\u00f3rmula exclusiva da Herbalife.",
  "ingredientes": "Suco de abacaxi desidratado, maltodextrina, extrato de rizomas de c\u00farcuma (Curcuma longa L.), suco de lim\u00e3o desidratado, triglicer\u00eddeos de cadeia m\u00e9dia, aromatizantes, acidulante \u00e1cido c\u00edtrico, antiumectante fosfato tric\u00e1lcico, edulcorante sucralose e antiumectante di\u00f3xido de sil\u00edcio.",
  "link": "https://www.herbalife.com/pt-br/u/products/golden-beverage-pineapple-lemon-ginger-45g-238k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-238k-br.png"
 },
 {
  "nome": "Herbal Concentrate",
  "tamanhos": "51 g: R$ 222,00 \u00b7 357 g: R$ 1.072,00",
  "preco": "364,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 102 g",
  "sabores": "Laranja and Especiarias, Lim\u00e3o, Original",
  "para": "Impulsione seu metabolismo e hidrata\u00e7\u00e3o com esta bebida de baixa caloria, \u00e0 base de ch\u00e1 verde, ch\u00e1 preto, cafe\u00edna e antioxidantes.",
  "modo": "Misture 1\u20442 colher de ch\u00e1 (1,7 g) em 250 ml de \u00e1gua quente ou fria.",
  "ingredientes": "maltodextrina, ch\u00e1 verde, ch\u00e1 preto, cafe\u00edna, mistura de ervas arom\u00e1ticas (cardamomo, malva e hibisco) e aromatizante. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbal-concentrate-original-102g-059k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-059k-br.png"
 },
 {
  "nome": "Herbalife24\u00ae CR7 Drive",
  "preco": "243,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 810 g",
  "sabores": "Berry Mix",
  "para": "Combust\u00edvel ideal para ajudar na performance dos seus treinos com energia e hidrata\u00e7\u00e3o.",
  "modo": "Misturar 27 g(2 colheres medida) para cada 450 ml de \u00e1gua.",
  "ingredientes": "dextrose, sacarose, maltodextrina, isomaltulose, citrato de s\u00f3dio, citrato de magn\u00e9sio, citrato de pot\u00e1ssio, concentrado de cenoura, concentrado de uva, cianocobalamina (vitamina B12), tiamina mononitrato (vitamina B1), acidulante \u00e1cido c\u00edtrico e aromatizantes naturais. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-cr7-drive-berry-mix-810g-1445",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-1445-br.png"
 },
 {
  "nome": "Herbalife24\u00ae Glutamina",
  "preco": "90,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 150 g",
  "sabores": "Neutro",
  "para": "L-glutamina da AJINOMOTO Co.\u00ae que ajuda na recupera\u00e7\u00e3o muscular e a fortalecer a fun\u00e7\u00e3o do intestino de barreira protetora*",
  "modo": "Consumir 1 medida (5 g) em 200 ml de \u00e1gua uma vez ao dia, ou conforme orienta\u00e7\u00e3o profissional. Este produto \u00e9 recomendado para adultos a partir de 19 anos.",
  "ingredientes": "L-Glutamina**. N\u00c3O CONT\u00c9M GL\u00daTEN. **PURE AMINO ACID by AJINOMOTO Co.\u00ae",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-glutamina-neutro-150g-146k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-146k-br.png"
 },
 {
  "nome": "Herbalife24\u00ae Tri-Core Protein Blend",
  "preco": "467,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 1010 g",
  "sabores": "Chocolate",
  "para": "Recupere-se com este shake p\u00f3s-treino delicioso, rico em prote\u00ednas para fortalecer e recuperar os m\u00fasculos ap\u00f3s exerc\u00edcios intensos.",
  "modo": "Misture 50,5 g (2 colheres medida ou 8 colheres de sopa rasas) em 280 ml de \u00e1gua.",
  "ingredientes": "prote\u00edna concentrada de leite obtida de leite bovino, prote\u00edna de soro do leite concentrada, frutose, sacarose, maltodextrina, prote\u00edna de soro do leite isolada, cacau em p\u00f3, cloreto de s\u00f3dio, \u00f3leo vegetal de girassol altamente oleico, triglicer\u00eddeos de cadeia m\u00e9dia (TCM), \u00f3xido de magn\u00e9sio, sais de magn\u00e9sio do \u00e1cido c\u00edtrico, \u00e1cido asc\u00f3rbico (vitamina C), acetato de racealfatocoferol (vitamina E), fumarato ferroso, D-pantotenato de c\u00e1lcio (vitamina B5), mononitrato de tiamina (vitamina B1), cloreto de cromo, cloridrato de piridoxina (vitamina B6), regulador de acidez citrato de pot\u00e1ssio, aromatizantes naturais, antiumectante di\u00f3xido de sil\u00edcio, espessante goma guar e edulcorante glicos\u00eddeos de esteviol. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE LEITE E SOJA. CONT\u00c9M LACTOSE. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-tri-core-protein-blend-chocolate-1010g-1417",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-1417-br.png"
 },
 {
  "nome": "Herbalife24\u00ae Whey Protein 3W",
  "preco": "256,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 510 g",
  "sabores": "Baunilha, Chocolate",
  "para": "Suplemento de prote\u00edna \u00e0 base de whey de alta qualidade (Blend Whey Isolado, Hidrolisado e Concentrado), que promove o crescimento muscular, fortalece os ossos e auxilia na recupera\u00e7\u00e3o p\u00f3s-treino.",
  "modo": "Diluir 3 medidas (34 g) em 250 ml de \u00e1gua de prefer\u00eancia gelada.",
  "ingredientes": "prote\u00edna de soro do leite isolada, prote\u00edna de soro do leite concentrada, cacau em p\u00f3, prote\u00edna de soro do leite hidrolisada, aromatizantes, espessante goma xantana e edulcorante glicos\u00eddeos de esteviol.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-whey-protein-3w-chocolate-510g-147k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-147k-br.png"
 },
 {
  "nome": "Liftoff\u00ae",
  "preco": "196,00",
  "tipo": "po",
  "formato": "P\u00f3 efervescente em sach\u00ea \u00b7 15 Sach\u00eas",
  "sabores": "Abacaxi, Amora Intenso, Lim\u00e3o Siciliano",
  "para": "Potencialize sua sensa\u00e7\u00e3o de energia, concentra\u00e7\u00e3o e treino com este delicioso suplemento efervescente com cafe\u00edna, taurina e vitaminas.",
  "modo": "Por ser em sach\u00ea individual, o Liftoff \u00e9 extremamente pr\u00e1tico e pode ser transportado e preparado em qualquer lugar apenas com a adi\u00e7\u00e3o de \u00e1gua. Pode ser consumido em qualquer momento do dia, principalmente em dias mais atarefados que exigem maior foco e concentra\u00e7\u00e3o em atividades como reuni\u00f5es, apresenta\u00e7\u00f5es e provas. Pode ser consumido todos os dias como pr\u00e9-treino, para qualquer hora que o seu corpo precisar de energia!",
  "ingredientes": "maltodextrina, taurina, cafe\u00edna, \u00e1cido asc\u00f3rbico (vitamina C), niacinamida (vitamina B3), cloridrato de piridoxina (vitamina B6), cianocobalamina (vitamina B12), D-pantotenato de c\u00e1lcio (vitamina B5), D-biotina (vitamina B7), tiamina mononitrato (vitamina B1), riboflavina (vitamina B2), reguladores de acidez \u00e1cido c\u00edtrico, bicarbonato de s\u00f3dio e bicarbonato de pot\u00e1ssio, aromatizantes e edulcorante glicos\u00eddeos de esteviol de Stevia rebaudiana Bertoni.",
  "link": "https://www.herbalife.com/pt-br/u/products/liftoff-abacaxi-15-saches-371k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-371k-br.png"
 },
 {
  "nome": "N-R-G",
  "tamanhos": "60 g: R$ 158,00 \u00b7 330 g: R$ 668,00",
  "preco": "252,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 100 g",
  "sabores": "Guaran\u00e1 Tropical, Original",
  "para": "Tenha mais energia e disposi\u00e7\u00e3o no seu dia com esta deliciosa bebida zero calorias \u00e0 base de ch\u00e1 preto e guaran\u00e1.",
  "modo": "Misture 1/2 colher de ch\u00e1 (1 g) em 200 ml de \u00e1gua quente ou fria.",
  "ingredientes": "maltodextrina, ch\u00e1 preto, guaran\u00e1, cafe\u00edna (40 mg/ 200 ml), aromatizante e acidulante \u00e1cido c\u00edtrico. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE SOJA. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/nrg-original-100g-057k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-057k-br.png"
 },
 {
  "nome": "NutreV",
  "tamanhos": "Pack com 10 unidades: R$ 790,00",
  "preco": "79,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 672 g",
  "sabores": "Neutro",
  "para": "Uma alternativa ao leite que cont\u00e9m nutrientes essenciais como prote\u00ednas, fibras, vitaminas e minerais",
  "modo": "Misture em uma shakeira ou liquidificador 2 1/2 colheres de sopa de NutreV (32g) com uma por\u00e7\u00e3o de F\u00f3rmula 1 Shake. Combine tamb\u00e9m seu NutreV com suas receitas favoritas, cereais e frutas.",
  "ingredientes": "maltodextrina, prote\u00edna de soja isolada, inulina, amido modificado, fosfato de c\u00e1lcio dib\u00e1sico, gordura vegetal, mix de vitaminas e minerais (maltodextrina, \u00f3xido de magn\u00e9sio, pirofosfato f\u00e9rrico, \u00e1cido asc\u00f3rbico (vitamina Q), acetato de DL-alfa-tocoferol (vitamina D. palmitato de retinol (vitamina A), \u00f3xido de zinco. riboflavina e colecalciferol (vitamina D)), cloreto de pot\u00e1ssio, sal, aromatizante, emulsificante lecitina, espessantes goma xantana e goma quar e edulcorante sucralose. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE SOJA E LEITE. N\u00c3O CONT\u00c9M LACTOSE. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/nutrev-neutro-672g-1639",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-1639-br.png"
 },
 {
  "nome": "Nutri Soup",
  "preco": "246,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 416 g",
  "sabores": "Frango com Legumes",
  "para": "Uma deliciosa e pr\u00e1tica refei\u00e7\u00e3o, rica em prote\u00ednas, que fica pronta em minutos.",
  "modo": "Consulte a embalagem.",
  "ingredientes": "Consulte o r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/formula-1-nutri-soup-frango-com-legumes-416g-0748",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0748-br.png"
 },
 {
  "nome": "OnActive Drink",
  "preco": "176,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 264g",
  "sabores": "Chocolate",
  "para": "Nutri\u00e7\u00e3o inteligente para uma vida ativa",
  "modo": "Adicione 2 colheres de sopa (24g) de OnActive Drink em 180ml de \u00e1gua fria. Bata na shakeira ou mixer at\u00e9 ficar homog\u00eaneo.",
  "ingredientes": "prote\u00edna de soja isolada, soro de leite, prote\u00edna de soro do leite concentrada, cacau em p\u00f3, frutooligossacar\u00eddeos (FOS), \u00f3leo vegetal de palma, mix de minerais (fosfato tric\u00e1lcico, sulfato de magn\u00e9sio, fosfato de pot\u00e1ssio monob\u00e1sico, amido de milho, iodeto de pot\u00e1ssio, sulfato de zinco, sulfato de mangan\u00eas, sulfato c\u00faprico e selenito de s\u00f3dio), amido modificado, permeado de soro do leite, inulina, mix de subst\u00e2ncias bioativas (luteina, zeaxantina, amido de milho), mix de vitaminas (amido de milho, \u00e1cido asc\u00f3rbico (vitamina C), niacinamida (vitamina B3), palmitato de retinol (vitamina A), colecalciferol (vitamina D), \u00e1cido pantot\u00eanico (vitamina B5), cloridrato de piridoxina (vitamina B6), tiamina (vitamina B1), \u00e1cido f\u00f3lico (vitamina B9), cianocobalamina (vitamina B12), acetato de DL-alfa-tocoferol (vitamina E), fitonadiona (vitamina K1) e D-biotina (vitamina B7)), sal, L-metionina, fosfato de magn\u00e9sio, pirofosfato f\u00e9rrico, riboflavina (vitamina B2), \u00f3xido de zinco, emulsificantes lecitina e mono e diglicer\u00eddeos de \u00e1cidos graxos, espessantes goma xantana, aromatizantes, reguladores de acidez citrato de pot\u00e1ssio, fosfato dipot\u00e1ssico e hidr\u00f3xido de pot\u00e1ssio, corante beta-carotenos vegetais e edulcorante sucralose. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE SOJA E LEITE. CONT\u00c9M LACTOSE. N\u00c3O CONT\u00c9M GLUT\u00c9N.",
  "link": "https://www.herbalife.com/pt-br/u/products/onactive-drink-chocolate-264g-223k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-223k-br.png"
 },
 {
  "nome": "Protein Complete",
  "preco": "",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 550 g",
  "sabores": "Baunilha, Chocolate Sensation, Morango",
  "para": "Protein Complete. Completo no nome. Completo no sabor.",
  "modo": "Consulte a embalagem.",
  "ingredientes": "Consulte o r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-complete-baunilha-550g-613k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-613k-br.png"
 },
 {
  "nome": "Protein Crunch",
  "preco": "112,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 150 g",
  "sabores": "Chocolate",
  "para": "Adicione mais prote\u00edna e uma textura crocante sabor chocolate ao seus shakes e snacks",
  "modo": "Acrescente 2 colheres de sopa (10 g) do Protein Crunch no alimento de sua prefer\u00eancia, como: Shake Herbalife\u00ae, Leite, Iogurte e Frutas",
  "ingredientes": "crisps de prote\u00edna isolada de soja com cacau (prote\u00edna isolada de soja, cacau e amido), maltodextrina, amido de mandioca, estabilizantes maltitol e xarope de maltitol, umectante sorbitol, aromatizante e edulcorante sucralose. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE TRIGO E SOJA. N\u00c3O CONT\u00c9M LACTOSE. CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-crunch-chocolate-150g-040k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-040k-br.png"
 },
 {
  "nome": "Protein Powder",
  "tamanhos": "240 g: R$ 221,00",
  "preco": "401,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 480 g",
  "sabores": "Neutro",
  "para": "Adicione prote\u00ednas no seu consumo di\u00e1rio de forma pr\u00e1tica com esta combina\u00e7\u00e3o de prote\u00ednas de alto valor biol\u00f3gico.",
  "modo": "Uma colher de sopa rasa (6 g), de uma a seis vezes ao dia. Por ter sabor neutro, pode ser adicionado em bebidas, shakes e sopas.",
  "ingredientes": "prote\u00edna de soja isolada, prote\u00edna de soro do leite concentrada, aromatizante e antiumectante di\u00f3xido de sil\u00edcio. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE LEITE E SOJA. CONT\u00c9M LACTOSE E PROTE\u00cdNAS DO LEITE. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-powder-neutro-480g-0246",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0246-br.png"
 },
 {
  "nome": "Shake",
  "tamanhos": "Sach\u00ea (caixa com 7): R$ 87,00 \u00b7 Pacote 2 kg: R$ 827,00",
  "preco": "246,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 550 g",
  "sabores": "Banana Caramelizada, Baunilha Cremoso, Chocolate Sensation, Coco, Cookies and Cream, Doce de Leite, Frap\u00ea de Abacaxi, Morango Cremoso, Pistache, Torta de Lim\u00e3o",
  "para": "Nosso delicioso shake substituto de refei\u00e7\u00e3o, campe\u00e3o de vendas.",
  "modo": "Agite a embalagem antes de cada uso. Bata no liquidificador ou misture duas colheres e meia de sopa (26 g) do Shake com 250 ml de leite semidesnatado ou 250 ml de NutreV.",
  "ingredientes": "prote\u00edna de soja isolada, frutose, celulose, \u00f3leo vegetal de girassol, cloreto de pot\u00e1ssio, triglicer\u00eddeos de cadeia m\u00e9dia (TCM), caseinato, inulina, fosfato de c\u00e1lcio dib\u00e1sico, \u00f3xido de magn\u00e9sio, mix de vitaminas (maltodextrina, \u00e1cido asc\u00f3rbico (vitamina C), acetato de DL-alfa-tocoferol (vitamina E), niacinamida (vitamina B3), palmitato de retinol (vitamina A), D-pantotenato de c\u00e1lcio (vitamina B5), cloridrato de piridoxina (vitamina B6), \u00e1cido f\u00f3lico (vitamina B9), biotina (vitamina B7), colecalciferol (vitamina D), tiamina (vitamina B1) e cianocobalamina (vitamina B12)), mix de minerais (maltodextrina, fumarato ferroso, iodeto de pot\u00e1ssio, gluconato de cobre, \u00f3xido de zinco, sulfato de mangan\u00eas e selenito de s\u00f3dio), antiumectante di\u00f3xido de sil\u00edcio, emulsificante lecitina, espessantes goma guar, goma xantana e carragena, aromatizante, corante sint\u00e9tico id\u00eantico ao natural betacaroteno e dulcorante sucralose. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE SOJA E LEITE. N\u00c3O CONT\u00c9M LACTOSE. N\u00c3O CONT\u00c9M GL\u00daTEN. ***Lactose proveniente da adi\u00e7\u00e3o do leite semidesnatado, conforme instru\u00e7\u00e3o de preparo.",
  "link": "https://www.herbalife.com/pt-br/u/products/formula-1-shake-baunilha-550g-0951",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0951-br.png"
 },
 {
  "nome": "Sopa Instant\u00e2nea",
  "preco": "87,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 7 Sach\u00eas",
  "sabores": "sabor Creme de Cebola",
  "para": "Uma sopa snack proteica, saborosa, pr\u00e1tica e saud\u00e1vel, fonte de fibras e nutrientes.",
  "modo": "\u00c1gua quente: Despeje o conte\u00fado do sach\u00ea (28g) em uma caneca ou tigela funda. Acrescente 200 ml de \u00e1gua aquecida e misture at\u00e9 ficar homog\u00eaneo. Micro-Ondas: Para preparo no forno de micro-ondas, misture o conte\u00fado do sach\u00ea em 200 ml de \u00e1gua fria e leve ao micro-ondas por um minuto e meio. Misture novamente e a sopa estar\u00e1 pronta para consumo. Dica: Experimente al\u00e9m da sopa! Use como ingrediente em receitas criativas e transforme seus pratos com um toque extra de prote\u00edna e sabor. Seu trunfo para dar sabor em receitas proteicas, nutritivas e deliciosas! OP\u00c7\u00d5ES DISPON\u00cdVEIS Caixa com 7 sach\u00eas de 28g cada Frango com Legumes - #448K",
  "ingredientes": "prote\u00edna de soja isolada, batata, maltodextrina, amido modificado, celulose, inulina, cebola em flocos, cebola, sal, \u00f3leo vegetal de girassol, tomate, alho, mix de vitaminas e minerais (maltodextrina, \u00e1cido asc\u00f3rbico (vitamina C), pirofosfato f\u00e9rrico, acetato de DL-alfa-tocoferol (vitamina E), niacinamida (vitamina B3), sulfato de zinco, palmitato de retinol (vitamina A), sulfato de mangan\u00eas, D-pantotenato de c\u00e1lcio (vitamina B5), cianocobalamina (vitamina B12), cloridrato de piridoxina (vitamina B6), tiamina mononitrato (vitamina B1), riboflavina (vitamina B2) e \u00e1cido f\u00f3lico (vitamina B9)), cloreto de pot\u00e1ssio, pimenta preta, aromatizantes, emulsificante lecitina e acidulante \u00e1cido c\u00edtrico.",
  "link": "https://www.herbalife.com/pt-br/u/products/sopa-snack-proteica-sabor-creme-de-cebola-7-saches-445k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-445k-br.png"
 },
 {
  "nome": "Fiber Concentrate",
  "preco": "206,00",
  "tipo": "liquido",
  "formato": "Concentrado l\u00edquido 450 ml",
  "sabores": "Manga, Uva",
  "para": "Ajude seu intestino a entrar no ritmo certo adicionando fibras de uma forma pr\u00e1tica, saborosa e com baixas calorias.",
  "modo": "Agite bem antes de usar. Para o preparo de 200 ml (1 copo), adicione uma colher e meia de sopa (15 ml) e complete com a bebida de sua prefer\u00eancia (185 ml).",
  "ingredientes": "\u00e1gua, maltodextrina resistente de milho, concentrado de cenoura e mirtilo, acidulante \u00e1cido c\u00edtrico, regulador de acidez citrato de s\u00f3dio, conservadores benzoato de s\u00f3dio e sorbato de pot\u00e1ssio, aromatizante, edulcorante sucralose, estabilizante goma xantana e antioxidante \u00e1cido asc\u00f3rbi. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/fiber-concentrate-uva-450ml-2140",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-2140-br.png"
 },
 {
  "nome": "Fiber Concentrate Immune",
  "preco": "",
  "tipo": "liquido",
  "formato": "Concentrado l\u00edquido 450 ml",
  "sabores": "Lim\u00e3o e Mel",
  "para": "Ajude seu intestino a entrar no ritmo certo adicionando fibras de uma forma pr\u00e1tica, saborosa e com baixas calorias.",
  "modo": "Agite bem antes de usar. Para o preparo de 200ml (1 copo), adicione uma colher e meia (15ml) em 185ml de \u00e1gua ou da +L31.",
  "ingredientes": "\u00e1gua, maltodextrina resistente de milho, mix de vitaminas e minerais (maltodextrina, ascorbato de s\u00f3dio (vitamina C), sulfato de zinco monoidratado (zinco) e selenito de s\u00f3dio (sel\u00eanio)), acidulante \u00e1cido c\u00edtrico, aromatizantes, regulador de acidez citrato de s\u00f3dio, edulcorante sucralose, estabilizante goma xantana, conservadores benzoato de s\u00f3dio e sorbato de pot\u00e1ssio. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/fiber-concentrate-immune-limao-mel-450ml-235k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-235k-br.png"
 },
 {
  "nome": "Barra de Prote\u00ednas",
  "preco": "110,00",
  "tipo": "solido",
  "formato": "Barra \u00b7 7 Barras",
  "sabores": "Citrus Lemon",
  "para": "Irresist\u00edvel barra proteica com cobertura de chocolate, perfeita para aquela fome entre as refei\u00e7\u00f5es.",
  "modo": "Consulte a embalagem.",
  "ingredientes": "xarope de glicose, cobertura de chocolate ao leite (a\u00e7\u00facar, leite em p\u00f3 integral, manteiga de cacau, massa de cacau, emulsificante lecitina e aromatizante), xarope de frutose, caseinato de c\u00e1lcio, prote\u00edna de soro do leite concentrada, \u00f3leo de palma, caseinato de s\u00f3dio, col\u00e1geno hidrolisado, dextrose, \u00e1gua, prote\u00edna hidrolisada do leite, clara de ovo desidratada, aromatizantes e acidulante \u00e1cido c\u00edtrico. AL\u00c9RGICOS: CONT\u00c9M LEITE E DERIVADOS E DERIVADOS DE SOJA, OVO E TRIGO. PODE CONTER CEVADA, AVEIA, AMENDOIM, AM\u00caNDOA, CASTANHA-DE-CAJU, PEC\u00c3, NOZES, AVEL\u00c3, MACAD\u00c2MIA E L\u00c1TEX NATURAL**. CONT\u00c9M LACTOSE. CONT\u00c9M GL\u00daTEN. **Proveniente de material utilizado na embalagem.",
  "link": "https://www.herbalife.com/pt-br/u/products/barra-de-proteinas-citrus-lemon-245g-0031",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0031-br.png"
 },
 {
  "nome": "Herbalife24\u00ae BCAA 5:1:1",
  "preco": "264,00",
  "tipo": "solido",
  "formato": "Tabletes \u00b7 120 Tabletes ",
  "sabores": "",
  "para": "Suplemento para apoiar o crescimento e a recupera\u00e7\u00e3o muscular",
  "modo": "Consumir 4 tabletes uma vez ao dia ap\u00f3s o treino, ou conforme orienta\u00e7\u00e3o professional.",
  "ingredientes": "L-Leucina**, L-Isoleucina**, L-Valina**, cloridrato de piridoxina (vitamina B6), estabilizantes celulose microcristalina com di\u00f3xido de sil\u00edcio e hidroxipropilmetilcelulose e glaceante hidroxipropilmetilcelulose com polietilenoglicol. N\u00c3O CONT\u00c9M GL\u00daTEN. **PURE AMINO ACID by AJINOMOTO Co.\u00ae",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife24-bcaa-120-tabletes-148k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-148k-br.png"
 },
 {
  "nome": "Herbalifeline \u00d4mega 3",
  "preco": "281,00",
  "tipo": "solido",
  "formato": "C\u00e1psulas \u00b7 90 C\u00e1psulas ",
  "sabores": "",
  "para": "Suplemento de \u00d4mega-3 com uma exclusiva combina\u00e7\u00e3o de \u00f3leos marinhos refinados, e vitamina E.",
  "modo": "Tr\u00eas c\u00e1psulas ao dia, de prefer\u00eancia ap\u00f3s a refei\u00e7\u00e3o.",
  "ingredientes": "\u00f3leo de peixe (\u00f4mega 3: EPA e DHA), c\u00e1psula de gelatina (gelificante gelatina, umectante glicerina e aromatizante), vitamina E e aromatizantes. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE PEIXE E SOJA. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalifeline-omega-3-90-capsulas-0065",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0065-br.png"
 },
 {
  "nome": "Multivitaminas & Minerais",
  "preco": "122,00",
  "tipo": "solido",
  "formato": "Tabletes \u00b7 90 Tabletes ",
  "sabores": "",
  "para": "Complemente suas necessidades nutricionais di\u00e1rias com este suplemento completo de vitaminas e Minerais.",
  "modo": "Dois tabletes por dia, preferencialmente com a refei\u00e7\u00e3o.",
  "ingredientes": "minerais (carbonato de c\u00e1lcio, \u00f3xido de magn\u00e9sio, fumarato ferroso, sulfato de zinco, sulfato de mangan\u00eas, L-selenometionina, molibdato de s\u00f3dio, iodeto de pot\u00e1ssio, cloreto de cromo e \u00f3xido de cobre), vitaminas (vitamina C, vitamina A, vitamina E, niacina, \u00e1cido pantot\u00eanico, biotina, vitamina B6, vitamina D, \u00e1cido f\u00f3lico, tiamina, riboflavina e vitamina B12), dextrina, dextrose, estabilizantes celulose microcristalina, hidroxipropilcelulose, croscarmelose s\u00f3dica e carboximetilcelulose s\u00f3dica e emulsificante lecitina de soja. AL\u00c9RGICOS: CONT\u00c9M DERIVADOS DE SOJA E TRIGO. CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/multivitaminas-minerais-90-tabletes-3122",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-3122-br.png"
 },
 {
  "nome": "Shape Control",
  "preco": "338,00",
  "tipo": "solido",
  "formato": "C\u00e1psulas \u00b7 18,9 g",
  "sabores": "",
  "para": "Aumenta sua energia e seu metabolismo.",
  "modo": "Consumir uma c\u00e1psula 1 vez ao dia ou conforme orienta\u00e7\u00e3o profissional.",
  "ingredientes": "extrato de laranja moro (Citrus sinensis (L.) Osbeck), maltodextrina, c\u00e1psula de gelatina, picolinato de cromo, estabilizante celulose microcristalina e antiumectante di\u00f3xido de silicio. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/shape-control-18-9g-318k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-318k-br.png"
 },
 {
  "nome": "Xtra-Cal",
  "preco": "108,00",
  "tipo": "solido",
  "formato": "Tabletes \u00b7 60 Tabletes",
  "sabores": "",
  "para": "Desenvolva e mantenha ossos e dentes fortes e saud\u00e1veis.",
  "modo": "Tomar 2 tabletes ao dia, preferencialmente antes da refei\u00e7\u00e3o.",
  "ingredientes": "Carbonato de c\u00e1lcio (carbonato de c\u00e1lcio e maltodextrina), \u00f3xido de magn\u00e9sio, colecalciferol (amido modificado, sacarose, triglicer\u00eddeos de cadeia m\u00e9dia, colecalciferol, antioxidantes: ascorbato de s\u00f3dio e DL-alfa-tocoferol e antiumectante di\u00f3xido de sil\u00edcio), estabilizantes: celulose microcristalina, croscarmelose s\u00f3dica e hidroxipropilmetilcelulose, corante di\u00f3xido de tit\u00e2nio e umectante glicerina. N\u00c3O CONT\u00c9M GL\u00daTEN.",
  "link": "https://www.herbalife.com/pt-br/u/products/xtra-cal-60-tabletes-0020",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-1230-br.png"
 },
 {
  "nome": "Protein Ice Cream (Gelato Proteico)",
  "preco": "473,00",
  "tipo": "po",
  "formato": "P\u00f3 \u00b7 pouch 1,040 kg",
  "sabores": "Baunilha, Chocolate",
  "para": "Mistura em p\u00f3 para preparar um gelato proteico em casa.",
  "modo": "Siga o modo de preparo indicado no r\u00f3tulo.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/protein-ice-cream-baunilha-pack-535k",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-535k-br.png"
 },
 {
  "nome": "Herbalife SKIN\u00ae Cleanser Facial C\u00edtrico",
  "preco": "102,00",
  "tipo": "pele",
  "formato": "Gel de limpeza \u00b7 150 ml",
  "para": "Gel de limpeza facial com esferas de jojoba e aroma c\u00edtrico. Ajuda a limpar a pele e controlar a oleosidade.",
  "modo": "Aplique no rosto \u00famido, massageie suavemente e enx\u00e1gue. Siga as instru\u00e7\u00f5es do r\u00f3tulo.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife-skin-cleanser-facial-citrico-150ml-0766",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0766-br.png"
 },
 {
  "nome": "Herbalife SKIN\u00ae M\u00e1scara Purificante de Argila",
  "preco": "188,00",
  "tipo": "pele",
  "formato": "M\u00e1scara facial \u00b7 120 ml",
  "para": "M\u00e1scara de argila com menta que limpa a pele e absorve o excesso de oleosidade.",
  "modo": "Aplique ap\u00f3s a limpeza, deixe agir de 5 a 10 minutos e enx\u00e1gue. Use de 1 a 3 vezes por semana.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/category/all-products",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0773-br.png"
 },
 {
  "nome": "Herbalife SKIN\u00ae Gel Firmador para os Olhos",
  "preco": "282,00",
  "tipo": "pele",
  "formato": "Gel \u00b7 15 ml",
  "para": "Gel para a \u00e1rea dos olhos, da linha Herbalife SKIN.",
  "modo": "Siga as instru\u00e7\u00f5es do r\u00f3tulo.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/category/all-products",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0770-br.png"
 },
 {
  "nome": "Herbalife SKIN\u00ae S\u00e9rum Facial Redutor de Linhas",
  "preco": "387,00",
  "tipo": "pele",
  "formato": "S\u00e9rum \u00b7 30 ml",
  "para": "S\u00e9rum com pept\u00eddeos, babosa e vitaminas C e E, para uma pele mais suave e luminosa.",
  "modo": "Aplique ap\u00f3s a limpeza, antes do hidratante. Siga as instru\u00e7\u00f5es do r\u00f3tulo.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/herbalife-skin-serum-30ml-0768",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0768-br.png"
 },
 {
  "nome": "Soft Green Hidratante Corporal",
  "preco": "82,00",
  "tipo": "pele",
  "formato": "Creme \u00b7 200 g",
  "para": "Hidratante corporal com ch\u00e1 verde.",
  "modo": "Aplique sobre a pele limpa. Siga as instru\u00e7\u00f5es do r\u00f3tulo.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/products/soft-green-hidratante-corporal-cha-verde-200g-0431",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0431-br.png"
 },
 {
  "nome": "Soft Green Desodorante Roll-on",
  "preco": "30,00",
  "tipo": "pele",
  "formato": "Roll-on",
  "para": "Desodorante com o frescor do ch\u00e1 verde.",
  "modo": "Aplique nas axilas limpas e secas.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/category/all-products",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0563-br.png"
 },
 {
  "nome": "Soft Green Sabonete em Barra",
  "preco": "21,00",
  "tipo": "pele",
  "formato": "Sabonete em barra",
  "para": "Sabonete enriquecido com ch\u00e1 verde, que limpa suavemente sem ressecar a pele.",
  "modo": "Use no banho, com \u00e1gua.",
  "ingredientes": "Consulte a lista completa de ingredientes no r\u00f3tulo oficial.",
  "link": "https://www.herbalife.com/pt-br/u/category/all-products",
  "foto": "https://www.herbalife.com/content/dam/market-reusable-assets/amer/brazil/images/canister/pc-0411-br.png"
 }
];

/* ======= SEU WHATSAPP (somente n\u00fameros, com DDI 55) ======= */
const MEU_WHATS = "5581999097522";
const lista = document.getElementById('lista');
const nomes = {po:"Em p\u00f3", liquido:"L\u00edquido", solido:"S\u00f3lido", pele:"Pele e corpo"};
function resumo(t){const s=t.split(/,\s*(?![^()]*\))/).slice(0,4).join(', ');return s.length<t.length?s+'\u2026':s;}
function render(f){
  lista.innerHTML = PRODUTOS.filter(p => f==="todos" || p.tipo===f).map(p => `
    <article class="prod">
      <div class="name">${p.foto?`<a class="fotobox" href="${p.foto}" target="_blank" rel="noopener" style="display:block"><img class="foto" src="${p.foto}" alt="${p.nome}" loading="lazy" onerror="this.parentNode.style.display='none'"><small>Clique para ampliar</small></a>`:''}<span class="pill">${nomes[p.tipo]}</span><h3>${p.nome}</h3><p style="color:var(--muted);font-size:.9rem">${p.formato}</p>${p.sabores?`<p style="font-size:.85rem;margin-top:6px"><b>Sabores:</b> ${p.sabores}</p>`:''}${p.preco?`<p class="preco">R$ ${p.preco}</p>`:''}${p.tamanhos?`<p style="font-size:.85rem;margin:0 0 6px"><b>Outros tamanhos:</b> ${p.tamanhos}</p>`:''}<a class="btn comprar" href="https://wa.me/${MEU_WHATS}?text=${encodeURIComponent('Ol\u00e1! Quero comprar: '+p.nome+(p.preco?' (R$ '+p.preco+')':''))}" target="_blank" rel="noopener">${p.preco?'Comprar':'Consultar pre\u00e7o'}</a></div>
      <div><h4>Principais ingredientes</h4><p>${resumo(p.ingredientes)}</p><details><summary>Ver lista completa</summary><p style="font-size:.85rem;margin-top:6px">${p.ingredientes}</p></details></div>
      <div><h4>Para que serve</h4><p>${p.para}</p><h4 style="margin-top:12px">Modo de uso</h4><p style="font-size:.92rem">${p.modo}</p><p style="margin-top:8px;font-size:.85rem"><a href="${p.link}" target="_blank" rel="noopener">P\u00e1gina oficial do produto</a></p></div>
    </article>`).join('');
}
document.getElementById('tabs').addEventListener('click', e => {
  if(!e.target.dataset.f) return;
  document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('on', b===e.target));
  render(e.target.dataset.f);
});
render("todos");

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = `Ol\u00e1! Sou ${document.getElementById("nome").value}. Tenho interesse em: ${document.getElementById("interesse").value}. Meu WhatsApp: ${document.getElementById("whats").value}`;
  window.open(`https://wa.me/${MEU_WHATS}?text=${encodeURIComponent(msg)}`, '_blank');
});

  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',hypeInit); } else { hypeInit(); }
})();
