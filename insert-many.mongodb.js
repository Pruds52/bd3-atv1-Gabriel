const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].insertMany([
    {
        cod_aluno: 1,
        cod_turma: 3,
        nome: "João Silva",
        cpf: 4311955645,
        rg: 390770743,
        telefone_aluno: 11912345678,
        telefone_responsavel: 11923456789,
        email: "joao.silva@gmail.com",
        data_nascimento: "2005-01-15"
    },
    {
        cod_aluno: 2,
        cod_turma: 2,
        nome: "Maria Oliveira",
        cpf: 1109439232,
        rg: 798284562,
        telefone_aluno: 11934567890,
        telefone_responsavel: 11945678901,
        email: "maria.oliveira@gmail.com",
        data_nascimento: "2006-05-20"
    },
    {
        cod_aluno: 3,
        cod_turma: 1,
        nome: "Carlos Pereira",
        cpf: 6280778887,
        rg: 567896015,
        telefone_aluno: 11956781234,
        telefone_responsavel: 11967892345,
        email: "carlos.pereira@gmail.com",
        data_nascimento: "2004-08-10"
    },
    {
        cod_aluno: 4,
        cod_turma: 5,
        nome: "Ana Costa",
        cpf: 3073250072,
        rg: 276852384,
        telefone_aluno: 11978901234,
        telefone_responsavel: 11989012345,
        email: "ana.costa@gmail.com",
        data_nascimento: "2005-12-30"
    },
    {
        cod_aluno: 5,
        cod_turma: 5,
        nome: "Lucas Santos",
        cpf: 8087604899,
        rg: 336796125,
        telefone_aluno: 11912345678,
        telefone_responsavel: 11923456789,
        email: "lucas.santos@gmail.com",
        data_nascimento: "2003-07-25"
    },
    {
        cod_aluno: 6,
        cod_turma: 1,
        nome: "Fernanda Lima",
        cpf: 2511635330,
        rg: 644510673,
        telefone_aluno: 11934567890,
        telefone_responsavel: 11945678901,
        email: "fernanda.lima@gmail.com",
        data_nascimento: "2006-03-18"
    },
    {
        cod_aluno: 7,
        cod_turma: 3,
        nome: "Rafael Souza",
        cpf: 8755359670,
        rg: 662244395,
        telefone_aluno: 11956781234,
        telefone_responsavel: 11967892345,
        email: "rafael.souza@gmail.com",
        data_nascimento: "2005-11-02"
    },
    {
        cod_aluno: 8,
        cod_turma: 2,
        nome: "Juliana Mendes",
        cpf: 8043944882,
        rg: 422075553,
        telefone_aluno: 11978901234,
        telefone_responsavel: 11989012345,
        email: "juliana.mendes@gmail.com",
        data_nascimento: "2004-04-14"
    },
    {
        cod_aluno: 9,
        cod_turma: 3,
        nome: "Gustavo Almeida",
        cpf: 1577097349,
        rg: 156130396,
        telefone_aluno: 11912345678,
        telefone_responsavel: 11923456789,
        email: "gustavo.almeida@gmail.com",
        data_nascimento: "2006-09-21"
    },
    {
        cod_aluno: 10,
        cod_turma: 1,
        nome: "Beatriz Ferreira",
        cpf: 1408300701,
        rg: 316872962,
        telefone_aluno: 11934567890,
        telefone_responsavel: 11945678901,
        email: "beatriz.ferreira@gmail.com",
        data_nascimento: "2003-02-09"
    }
    
])