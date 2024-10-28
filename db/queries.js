const pool = require("./pool");

async function getAllRelease() {
  const { rows } = await pool.query("SELECT * FROM allrelease");
  return rows;
}
async function getAllreleaseWithArtist() {
  const { rows } = await pool.query(`
    SELECT 
        allrelease.instock,
        allrelease.price, 
        allrelease.id AS release_id,
        allrelease.name AS release_name,
        artist.id AS artist_id,
        artist.first_name || ' ' || artist.last_name AS artist_name
    FROM 
        allrelease
    JOIN 
        album ON allrelease.album_id = album.id
    JOIN 
        artist ON album.artist_id = artist.id;
`);
  return rows;
}
async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}
async function getNumberOfAllbum() {
  const { rows } = await pool.query("select count(*) from album");
  return rows[0].count;
}
async function getNumberOfItemInstock() {
  const { rows } = await pool.query("select sum(instock) from allrelease");
  return rows[0].sum;
}
async function getNumberOfItemWithNumberInStockLessHundered() {
  const { rows } = await pool.query(
    "select count(*) from allrelease where instock < 100"
  );
  return rows[0].count;
}
async function getAllAlbumsWithRelease() {
  const { rows } = await pool.query(
    "SELECT album.id ,album.name FROM album join allrelease on album.id=allrelease.album_id"
  );
  return rows;
}
module.exports = {
  getAllreleaseWithArtist,
  getAllRelease,
  getAllAlbumsWithRelease,
  getNumberOfAllbum,
  getNumberOfItemInstock,
  getNumberOfItemWithNumberInStockLessHundered,
};
