const dbconnection = require('../config/db');

const getAllCards = async (req, res) => {
  try {
    const qry = `SELECT * FROM cardsapp_cards`;
    await dbconnection.query(qry, (err, resualt) => {
      if (err) throw err;
      res.send(JSON.stringify(resualt));
    });
  } catch (err) {
    console.log(err);
  }
};



module.exports = {
  getAllCards,
};
