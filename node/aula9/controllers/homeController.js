exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Cliente: <input type="text" name="qualquercoisa">
    <button>Enviar Forumlario</button>
    </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send("Nova rota de post");
};
