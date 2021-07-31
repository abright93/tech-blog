const router = require("express").Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
  try { 
      const dbUserData = await User.findOne({
        where: {
        name: req.body.name,
          },
      });
  if (!dbUserData) {
      res
      .status(400).json({ 
      message: 'Email or password is incorrect. Try again!' });
          return;
      }
const validPassword = await dbUserData.checkPassword(req.body.password);
  if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Email or password is incorrect. Try again!' });
        return;
      }
const dataObj = dbUserData.get({plain:true});
  req.session.save(() => {
  req.session.loggedIn = true;
  req.session.userId = dbUserData.id;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are logged in!' });
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

router.post('/', async (req, res) => {
  try {
      const dbUserData = await User.create({
          name: req.body.name,
          password: req.body.password,
      });

      req.session.save(() => {
          req.session.loggedIn = true;
          req.session.userId = dbUserData.id;
          res.status(200).json(dbUserData);
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});


module.exports = router;
