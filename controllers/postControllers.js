const postdata = require("../data");

const postController = (req, res) => {
  const posts = postdata.slice(0, 5);
  res.render("index", { postdata: posts });
};

const postsController = (req, res) => {
  res.render("index", { postdata });
};
 const postpageController = (req, res) => {
    try {
      const value = postdata.filter((item) => {
        return item.id == req.params.id;
      });
      res.render("./posts/postpage", { post: value[0] });
    } catch (err) {
      console.log(err);
    }
  }


module.exports = {postController,postsController,postpageController};
