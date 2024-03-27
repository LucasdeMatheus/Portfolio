// eu odeio front-end

// ---------------------------- interações do site ------------------------------------



// linha 8 para carregar o HTML primeiro
document.addEventListener('DOMContentLoaded', function() {

// ----------------------- header -------------------------------

function show_header(){
    setTimeout(function(){
        document.getElementById("nav_header").classList.add("visible")
    }, 100)
}
show_header()


// ----------------------- home ---------------------------------

function show_home(){
    setTimeout(function(){
        document.getElementById("home").classList.add("visible")
    }, 400)
}
show_home()





// ------------------- animação de opacidade ----------------

// adicionar class para transição
function show_sobreMim() {
    setTimeout(function() {
        updateIndex()
        document.getElementById("id_img").classList.add("visible")
        document.getElementById("sobreMim").classList.add("visible");
        console.log("\n\n pois é amigo, nem tudo é mil maravilhas kkkkkk\n\n")
    }, 900);
}

// remover class para nova transição 
function removeClass(){
    document.getElementById("id_img").classList.remove("visible")
    document.getElementById("sobreMim").classList.remove("visible");
}




// -------------------------  sobre mim -----------------------------

// h1, h2 e img
var h1_sobreMim = document.getElementById("h1_sobremim");
var h2_sobreMim = document.getElementById("h2_sobremim");
var img_sobreMim = document.getElementById("id_img")

// sobre mim 1, 2 e 3 e img
var sobre_mim1_h1 = '<strong id=\"strong_number\">1  </strong><strong id=\"strong_red\">console</strong>.<strong id=\"strong_blue\">log</strong><strong id=\"strong_yellow\">(</strong><strong id=\"strong_green\">“>> ”</strong>, quemSou<strong id=\"strong_yellow\">)</strong>'
var sobre_mim1_h2 = "<strong id=\"strong_blue\">[Running]</strong><br>>> Bom, eu sou o Lucas. Tenho 18 anos e sou um desenvolvedor back-end em constante aprendizado."
var sobre_mim1_img = '<img class=\"emoji_nerd\" id=\"emoji_nerd\" src=\"\\img\\notebook.png\" alt=\"emoji_nerd\">'

var sobre_mim2_h1 = '<strong id=\"strong_number\">2   </strong><strong id=\"strong_blue\">print</strong><strong id=\"strong_yellow\">(</strong><strong id=\"strong_green\">">> "</strong>, Formação<strong id=\"strong_yellow\">)</strong>'
var sobre_mim2_h2 = '<strong id=\"strong_blue\">[Running]</strong><br>>> Atualmente, estou cursando o 1º semestre em Análise e Desenvolvimento de Sistemas na Uniasselvi.'
var sobre_mim2_img = '<img class=\"emoji_nerd\" id=\"emoji_nerd\" src=\"\\img\\nerd_formando.svg\" alt=\"emoji_nerd_formando\">'


// indice da navegação
let count_nav = 0

// botão esquerdo e direito
var botton_navleft = document.getElementById("nav_left");
var botton_navright = document.getElementById("nav_right");

// -------------- funções da interação ---------------------------

// botão esquerdo
botton_navleft.onclick = function(){
    if(count_nav === 1){
        count_nav = 0
        removeClass()
        show_sobreMim();
    }else{
        count_nav +=1;
        removeClass()
        show_sobreMim();
    }
};

// botão direito
botton_navright.onclick = function(){
    if(count_nav === 0){
        count_nav += 1;
        removeClass()
        show_sobreMim();
    }else{
        count_nav -=1;
        removeClass()
        show_sobreMim();
    }
}


// função para atualizar a navegação
function updateIndex(){
    if(count_nav === 0){
        h1_sobreMim.innerHTML = sobre_mim1_h1
        h2_sobreMim.innerHTML = sobre_mim1_h2
        img_sobreMim.innerHTML = sobre_mim1_img
    }else if(count_nav === 1){
        img_sobreMim.innerHTML = sobre_mim2_img
        h1_sobreMim.innerHTML = sobre_mim2_h1
        h2_sobreMim.innerHTML = sobre_mim2_h2
    }
}


updateIndex()
show_sobreMim()

// ----------------------- projetos -------------------------------


var projetos = document.getElementById("projetos")

function show_projetos(){
    setTimeout(function(){
        projetos.classList.add("visible")
    }, 900)
}

show_projetos()

// --------------------- conhecimentos ----------------------


var conhecimentos = document.getElementById("conhecimentos");

function show_conhecimento(){
    setTimeout(function(){
        conhecimentos.classList.add("visible")
    }, 900)
}

show_conhecimento()

var sobre_conhecimentos = document.getElementById("sobre_conhecimentos")

function show_conhecimento_select(){
    setTimeout(function(){
        sobre_conhecimentos.classList.add("visible")
    }, 200)
    
}

// para o desgraçado não ficar apertando no mesmo varias
var index_select;

// h1, h2 e imagens
var h1_conhecimentos = document.getElementById("h1_conhecimentos");
var h2_conhecimentos = document.getElementById("h2_conhecimentos");
var img_conhecimentos = document.getElementById("div_conhecimentos_select");

// config python
var python_select = document.getElementById("python_select");
var h1_python_select = '<strong id="strong_blue">py</strong><strong id="strong_yellow">thon</strong>';
var h2_python_select = ' >> <strong id="strong_blue">py</strong><strong id="strong_yellow">thon</strong> é uma <strong id="strong_red">linguagem</strong> de programação popular conhecida por sua <strong id="strong_green">sintaxe simples</strong> e legibilidade. <br> <br>>> Em prática, já utilizei para <strong id="strong_blue">automação</strong> de <strong id="strong_green">tarefas</strong>, <strong id="strong_blue">análise</strong> de <strong id="strong_yellow">dados</strong> e ja escrevi diversos <strong id="strong_red">algoritmos</strong> . . . <br><strong id="strong_grey"># Há diversos códigos .py em meu git hub</strong>'
var img_python_select = '<img src="\\img\\python.svg" alt="python.svg">';

// 0
python_select.onclick = function(){
    if(index_select != 0){
        index_select = 0
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_python_select;
            h2_conhecimentos.innerHTML = h2_python_select;
            img_conhecimentos.innerHTML = img_python_select;
            show_conhecimento_select();
            
        },500)
    }
}

// config illustrator
var h1_illustrator_select = '<strong id="strong_orange">Adobe Illustrator</strong>';
var h2_illustrator_select = '>> <strong id="strong_orange">Adobe Illustrator</strong> é um dos <strong id="strong_red">programas</strong> mais populares e poderosos para criação de gráficos <strong id="strong_blue">vetoriais</strong><br><br> >> Em prática, já utilizei para recriação de <strong id="strong_blue">vetores</strong>, design de <strong id="strong_blue">logos</strong>, entre outros. <br><strong id="strong_grey"># Alguns vetores deste site, eu mesmo recriei e modifiquei.</strong>';
var img_illustrator_select = '<img src="\\img\\AI.svg" alt="AI.svg">';

// 1
AI_select.onclick = function(){
    if(index_select != 1){
        index_select = 1
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_illustrator_select
            h2_conhecimentos.innerHTML = h2_illustrator_select
            img_conhecimentos.innerHTML = img_illustrator_select
            
            show_conhecimento_select()
        },500)
    }
}

// config excel
var h1_excel_select = '<strong id="strong_green">Excel</strong>'
var h2_excel_select = '>> <strong id="strong_green">Excel</strong> é um dos <strong id="strong_red">programas</strong> de <strong id="strong_green">planilhas</strong> eletrônicas mais populares e amplamente utilizados em todo o mundo. <br><br>>> Em prática, utilizo como <strong id="strong_yellow">banco de dados</strong>. Com o <strong id="strong_blue">py</strong><strong id="strong_yellow">thon</strong>, ja fiz pesquisas de <strong id="strong_yellow">dados</strong>, análise, entre outros. <br><strong id="strong_grey"># Há códigos que fiz em meu git hub</strong>'
var img_excel_select = '<img src="\\img\\excel.svg" alt="excel.svg">'

// 2

excel_select.onclick = function(){
    if(index_select != 2){
        index_select = 2
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_excel_select
            h2_conhecimentos.innerHTML = h2_excel_select
            img_conhecimentos.innerHTML = img_excel_select
            
            show_conhecimento_select()
        },500)
    }
}

// config javascript
var h1_js_select = '<strong id="strong_yellow">javascript</strong>'
var h2_js_select = '>> <strong id="strong_yellow">javascript</strong> é uma <strong id="strong_red">linguagem</strong> de <strong id="strong_red">programação</strong> de alto nível, interpretada e multi-paradigma. <br><br>>> Em prática, ja utilizei para criação de <strong id="strong_yellow">site</strong>, e com o <strong id="strong_green">nodejs</strong>, ja fiz diversos <strong id="strong_red">algoritmos</strong>. <br><strong id="strong_grey"># Há alguns algoritmos em meu git hub</strong>'
var img_js_select = '<img src="\\img\\javascript.svg" alt="AI.svg"></img>'

// 3
js_select.onclick = function(){
    if(index_select != 3){
        index_select = 3
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_js_select
            h2_conhecimentos.innerHTML = h2_js_select
            img_conhecimentos.innerHTML = img_js_select
            
            show_conhecimento_select()
        },500)
    }
}

// config figma
var h1_figma_select = '<strong id="strong_blue">Figma</strong>'
var h2_figma_select = '>> <strong id="strong_blue">Figma</strong> é uma <strong id="strong_red">ferramenta</strong> de design de <strong id="strong_blue">interface</strong> do usuário (<strong id="strong_red">UI</strong>) e <strong id="strong_blue">experiência</strong> do usuário (<strong id="strong_red">UX</strong>) baseada na nuvem, conhecida por sua <strong id="strong_blue">colaboração</strong> em tempo real e recursos de design de ponta. <br> <br>>> Em prática, utilizei para criar <strong id="strong_blue">design</strong> rápidos para <strong id="strong_blue">sites</strong>, e tambem utilizei <strong id="strong_red">designs</strong> para a criação de <strong id="strong_red">sites</strong>.<br><strong id="strong_grey"># Utilizei o figma para moldar este site</strong>'
var img_figma_select = '<img src="\\img\\figma.svg" alt="figma.svg">'

// 4
figma_select.onclick = function(){
    if(index_select != 4){
        index_select = 4
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_figma_select
            h2_conhecimentos.innerHTML = h2_figma_select
            img_conhecimentos.innerHTML = img_figma_select
            show_conhecimento_select()
        },500)
    }
}

// config css
var h1_css_select = '<strong id="strong_blue">CSS</strong>'
var h2_css_select = '>> <strong id="strong_blue">CSS</strong> é uma <strong id="strong_red">linguagem</strong> de <strong id="strong_blue">estilo</strong> utilizada para definir a apresentação de documentos <strong id="strong_orange1">HTML</strong> e <strong id="strong_orange">XML</strong>. <br><br>>> Em prática, utilizei para <strong id="strong_blue">estilizar</strong> um <strong id="strong_red">site</strong>. <strong id="strong_grey"><br># Este site foi com css puríssimo. xD</strong>'
var img_css_select = '<img src="\\img\\css.svg" alt="css.svg">'

// 5
css_select.onclick = function(){
    if(index_select != 5){
        index_select = 5
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_css_select
            h2_conhecimentos.innerHTML = h2_css_select
            img_conhecimentos.innerHTML = img_css_select
            show_conhecimento_select()
        },500)
    }
}

// config html
var h1_html_select = '<strong id="strong_orange1">HTML</strong>'
var h2_html_select = '>> <strong id="strong_orange1">HTML</strong> é uma <strong id="strong_red">linguagem</strong> de <strong id="strong_blue">marcação</strong> padrão para criação e <strong id="strong_blue">estruturação</strong> de páginas da <strong id="strong_red">web</strong>. <br><br>>> Em prática, utilizei para <strong id="strong_blue">criação</strong> e <strong id="strong_blue">estruturação</strong> de <strong id="strong_red">sites</strong> e paginas <strong id="strong_red">web</strong>. <br><strong id="strong_grey"># Este site foi feito em html, por mim mesmo.</strong>'
var img_html_select = '<img src="\\img\\html.svg" alt="html.svg">'

// 6
html_select.onclick = function(){
    if(index_select != 6){
        index_select = 6
        sobre_conhecimentos.classList.remove("visible")
        setTimeout(function(){
            h1_conhecimentos.innerHTML = h1_html_select
            h2_conhecimentos.innerHTML = h2_html_select
            img_conhecimentos.innerHTML = img_html_select
            show_conhecimento_select()
        },500)
    }
}


});