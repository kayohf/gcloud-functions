exports.calcularIMC = (req, res) => {
    let params = req.query.altura || req.query.peso;

    if (params == undefined)
        res.status(404).send("Informe peso e altura");

    let peso = parseFloat(req.query.peso.replace(',', '.'))
    let altura = parseFloat(req.query.altura.replace(',', '.'))

    let imc = peso / (altura * altura)

    res.status(200).send(`${imc}`)
}