let tasasDeConversion = {
    longitud: {
        km: 1000,
        m: 1,
        cm: 0.01,
        mi: 1609.34,
        y: 0.9144,
        ft: 0.3048,
        in: 0.0254
    },
    masa: {
        to: 1000000,
        kg: 1000,
        gr: 1,
        migr: 0.001,
        lb: 453.592
    },
    velocidad: {
        mph: 0.44704,
        mps: 1609.34,
        kph: 0.277778,
        kps: 1000,
        kt: 0.514444
    }
};

function convertirUnidades(valor, desdeUnidad, hastaUnidad, tipo) {
    let tasas = tasasDeConversion[tipo];
    let valorEnUnidadBase = valor * tasas[desdeUnidad];
    let valorConvertido = valorEnUnidadBase / tasas[hastaUnidad];
    return valorConvertido;
}

function convertirLongitud() {
    let valor = parseFloat(document.getElementById('longitudEntrada').value);
    let desdeUnidad = document.getElementById('longitudDesde').value;
    let hastaUnidad = document.getElementById('longitudHasta').value;
    if (isNaN(valor)) {
        document.getElementById('longitudResultado').value = '';
    } else {
        let resultado = convertirUnidades(valor, desdeUnidad, hastaUnidad, 'longitud');
        document.getElementById('longitudResultado').value = resultado;
    }
}

function convertirMasa() {
    let valor = parseFloat(document.getElementById('masaEntrada').value);
    let desdeUnidad = document.getElementById('masaDesde').value;
    let hastaUnidad = document.getElementById('masaHasta').value;
    if (isNaN(valor)) {
        document.getElementById('masaResultado').value = '';
    } else {
        let resultado = convertirUnidades(valor, desdeUnidad, hastaUnidad, 'masa');
        document.getElementById('masaResultado').value = resultado;
    }
}

function convertirVelocidad() {
    let valor = parseFloat(document.getElementById('velocidadEntrada').value);
    let desdeUnidad = document.getElementById('velocidadDesde').value;
    let hastaUnidad = document.getElementById('velocidadHasta').value;
    if (isNaN(valor)) {
        document.getElementById('velocidadResultado').value = '';
    } else {
        let resultado = convertirUnidades(valor, desdeUnidad, hastaUnidad, 'velocidad');
        document.getElementById('velocidadResultado').value = resultado;
    }
}