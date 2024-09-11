const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].updateOne(
    {
        cod_aluno: 3
    },
    {
        $set:
        {
            nome: "Gabriel Prudêncio Ribas",
            cpf: 67847638929,
            rg: 784958939
        }
    }
)