function drawHouse () {
    let c = document.querySelector('canvas')
    let ctx = canvas.getContext('2d')

    // base
    ctx.beginPath()
    ctx.moveTo(200,200)
    ctx.lineTo(275,150)
    ctx.lineTo(350,200)
    ctx.lineTo(350,300)
    ctx.lineTo(200,300)
    ctx.lineTo(200,200)
    ctx.fillStyle = "#65a4ebb2"
    ctx.fill()
    ctx.stroke()
    
    // porta
    ctx.beginPath()
    ctx.moveTo(255,300)
    ctx.lineTo(255,250)
    ctx.lineTo(295,250)
    ctx.lineTo(295,300)
    ctx.lineTo(255,300)
    // maçaneta
    ctx.moveTo(263,275)
    ctx.arc(260,275,3,0,360, false)
    ctx.fillStyle = "#b6aa82b2"
    ctx.fill()
    ctx.stroke()

    // janela (esquerda)
    ctx.beginPath()
    ctx.moveTo(210,225)
    ctx.lineTo(210,250)
    ctx.lineTo(240,250)
    ctx.lineTo(240,225)
    ctx.lineTo(210,225)
    ctx.moveTo(225,225)
    ctx.lineTo(225,250)
    ctx.moveTo(210,237.5)
    ctx.lineTo(240,237.5)
    // cor neutra (janelas)
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.stroke()

    // janela (direita)
    ctx.beginPath()
    ctx.moveTo(340,225)
    ctx.lineTo(340,250)
    ctx.lineTo(310,250)
    ctx.lineTo(310,225)
    ctx.lineTo(340,225)
    ctx.moveTo(325,225)
    ctx.lineTo(325,250)
    ctx.moveTo(310,237.5)
    ctx.lineTo(340,237.5)
    // cor neutra (janelas)
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.stroke()

    // janela central
    ctx.beginPath()
    ctx.moveTo(255,180)
    ctx.lineTo(295,180)
    ctx.lineTo(295,210)
    ctx.lineTo(255,210)
    ctx.lineTo(255,180)
    ctx.moveTo(275,180)
    ctx.lineTo(275, 210)
    ctx.moveTo(255,195)
    ctx.lineTo(295,195)
    // cor neutra (janelas)
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.stroke()

    // telhado
    ctx.beginPath()
    ctx.moveTo(275,150)
    ctx.lineTo(370,212)
    ctx.lineTo(375,200)
    ctx.lineTo(275,135)
    ctx.lineTo(180,200)
    ctx.lineTo(185,211)
    ctx.lineTo(275,150)
    ctx.fillStyle = "#d33f2bb2"
    ctx.fill()
    ctx.stroke()

    // chaminé
    ctx.beginPath()
    ctx.moveTo(330,170)
    ctx.lineTo(330,140)
    ctx.lineTo(310,140)
    ctx.lineTo(310,159)
    ctx.lineTo(330,170)
    ctx.fillStyle = "#d33f2bb2"
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(330,140)
    ctx.arc(329.5,137,3,90,130, true)
    ctx.moveTo(309,133)
    ctx.arc(312,137,3,30,115, true)

    ctx.moveTo(330,134)
    ctx.lineTo(330,140)
    ctx.lineTo(310,140)
    ctx.lineTo(310,134)
    ctx.lineTo(330,134)

    ctx.fillStyle = "#d33f2bb2"
    ctx.fill()
    ctx.stroke()

}