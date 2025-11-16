import express from 'express';

const app = express();

app.use(express.json());

interface Ali {
  name: string;
  value: number;
}

app.get('/', (req, res) => {
  const ali = {
    name: 'example',
    value: 42
  } as Ali;
  console.log(`Ali name: ${ali.name}, value: ${ali.value}`);

  res.send('Servidor Express funcionando!');
});

app.listen(3000, () => console.log('Servidor Rodando na Porta 3000'));
