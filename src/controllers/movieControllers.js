const database = require("../../database");

const getMovies = async(req, res) => {
  try{
    const[movies]=await database.query("SELECT * FROM movies");
      res.status(200).json(movies); // use res.json instead of console.log
}
    catch(err) {
      console.error(err);
      res.status(500).json("erreur serveur...");
    };
};

const getMovieById = async(req, res) => {
  try{ 
const id = parseInt(req.params.id);
 const[[movies]]  = await database.query("SELECT * FROM movies where id = ?", [id])
    if (movies) 
      res.json(movies[0]);
    else 
      res.sendStatus(404);
    }

  catch(err){
    console.error(err);
    res.sendStatus(500);
  };
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
  });0
};

const postMovies = (req, res) => {
  const { title, director, year, color, duration } = req.body;

  database
    .query(
      "INSERT INTO movies(title, director, year, color, duration) VALUES (?, ?, ?, ?, ?)",
      [title, director, year, color, duration]
    )
    .then(([result]) => {
      res.status(201).send({ id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const postUsers=(req,res)=>{
  const{firstname, lastname, email, city, language}= req.body;
  database
  .query(
    "INSERT INTO users(firstname,lastname,email,city,language) VALUES(?,?,?,?,?)"
    [firstname, lastname, email, city, language])
    .then(([data])=>{
      res.status(201).send({id:data.insertId});
    })
    .catch((err)=>{
      console.error(err);
      res.sendStatus(500);
    });
  
}
module.exports = {
  getMovies,
  getMovieById,
  getUsersById,
  getUsers,
  postMovies,
  postUsers,
};
