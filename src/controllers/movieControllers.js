const database = require("../../database");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.json(movies); // use res.json instead of console.log
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  database
  .query("select * from movies where id = ?", [id])
  .then(([movies]) => {
    if (movies[0] != null) {
      res.json(movies[0]);
    } else {
      res.sendStatus(404);
    }
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

const getUsers = (req, res) => {
  database
    .query("select * from movies")
    .then(([users]) => {
      res.status(200).json(users); // use res.json instead of console.log
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  database
  .query("select * from users where id = ?", [id])
  .then(([users]) => {
    if (users[0] != null) {
      res.status(200).json(users[0]);
    } else {
      res.sendStatus(404);
    }
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

module.exports = {
  getMovies,
  getMovieById,
  getUsersById,
  getUsers
};
