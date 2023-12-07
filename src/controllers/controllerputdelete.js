const database = require("../../database");
const putMovieById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
    //   const { title, director, year, color, duration } = req.body;
      const [result] = await database.query(
        "UPDATE movies set ? where id = ?",
        [req.body, id]
      );
      console.log(result);
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };
  const putUserById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const [result] = await database.query(
        "UPDATE users set ? where id = ?",
        [req.body, id]
      );
      console.log(result);
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };
  module.exports = { putMovieById,putUserById
}