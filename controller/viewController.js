const db = require("../db/queries");
exports.getHome = async (req, res) => {
  const releases = await db.getAllreleaseWithArtist();
  const numberOfAllbum = await db.getNumberOfAllbum();
  const numberOfItemInStock = await db.getNumberOfItemInstock();
  const numberOfItemLowInStock =
    await db.getNumberOfItemWithNumberInStockLessHundered();
  res.render("home", {
    title: "home",
    view: {
      dash: true,
    },
    data: releases,
    numberOfAllbum: numberOfAllbum,
    numberOfItemInStock: numberOfItemInStock,
    numberOfItemLowInStock: numberOfItemLowInStock,
  });
};
exports.getAllAlbum = async (req, res) => {
  res.render("home", {
    title: "Albums",
    view: {
      album: true,
    },
  });
};
exports.getAllRelease = async (req, res) => {
  const releases = await db.getAllreleaseWithArtist();

  console.log(releases);
  res.render("home", {
    title: "All Release",
    view: {
      allreleased: true,
    },
    data: releases,
  });
};
