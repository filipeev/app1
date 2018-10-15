var sold = (valor : number, imposto: number)  => {
    console.log(`teste: `+ valor);
    return valor * imposto;
};

sold(10, 0.17);