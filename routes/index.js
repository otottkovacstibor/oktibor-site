const { Router } = require('express');
const GitHubCalendar = require('../plugins/github-calendar');
const UptimeRobot = require('../plugins/uptime-robot');

const router = Router();

const GITHUB_USERNAME = 'otottkovacstibor';

router.use(async (req, res, next) => {
  try {
    res.locals = {
      monitors: await UptimeRobot.getMonitors(),
      githubCalendar: await GitHubCalendar(GITHUB_USERNAME),
    };

    next();
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get('/', ({ res }) => res.render('index', { title: 'Home' }));

module.exports = router;
