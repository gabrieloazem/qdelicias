function resolucoes(){
    var resolucao = []
    resolucao.push('360 x 560 (!)')
    resolucao.push('360 x 674')
    resolucao.push('412 x 784')
    resolucao.push('640 x 280 (!)')
    resolucao.push('730 x 280')
    resolucao.push('842 x 329')
    resolucao.push('1024 (!)')
    for(c1 = 0; c1 < resolucao.length; c1 ++){
        console.log(`Resolução = ${resolucao[c1]}`)
    }
}

function menu(){
    var acabou = "n"
    if(document.getElementById("menu").style.width == ""){
        document.getElementById("menu").style.width = "100%"
        document.getElementById("menuOpcoes").style.display = "block"
        acabou = "s"
    }
    if(acabou == "n"){
        document.getElementById("menuOpcoes").style.display = "none"
        document.getElementById("menu").style.width = ""
    }
}

function hyperlinks(){
    document.getElementById('linkedin').addEventListener('click',function(){
        window.location.href = 'https://www.linkedin.com/in/gabrieloazem'
    })
       
    document.getElementById('github').addEventListener('click',function(){
        window.location.href = 'https://github.com/gabrieloazem'
    })
       
    document.getElementById('gmail').addEventListener('click',function(){
        window.location.href = 'mailto:gabrieloazemvieira@gmail.com'
    })
       
    document.getElementById('whatsapp').addEventListener('click',function(){
        window.location.href = 'https://web.whatsapp.com/send?phone=5521995915221'
    })
}

// Inicio
resolucoes()
hyperlinks()