const formatarString = (endereço) => {
    let {rua, cidade, cep} = endereço;
    return `Rua: ${rua}, Cidade: ${cidade}, cep: ${cep}`;
};

console.log(formatarString({rua: "Rua das Flores", cidade: "Porto Alegre", cep: "90000-000"}))