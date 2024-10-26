exports.getHome = (req, res) => {
  res.render("home", {
    title: "home",
  });
};
