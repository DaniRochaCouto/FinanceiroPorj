USE ProjFinalBanco;

CREATE TABLE contas (
    id_user VARCHAR(355) PRIMARY KEY, 
    nome_banco VARCHAR(30) NOT   NULL,
    tipo_conta VARCHAR(50) NOT NULL,
    nome_titular VARCHAR(60) NOT   NULL,
    linite_cartao FLOAT(15) NOT   NULL
   
);

INSERT INTO contas (id_user, nome_banco, tipo_conta, nome_titular, limite_cartao) VALUES 
('hflkhflalflhhlhf732507099746','Banco do Brasil', 'corrente', 'Daniela Iara da Rocha', 50000);