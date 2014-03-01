var about_an_hour, bell, schedule_bell;

about_an_hour = function() {
  return 1000 * 60 * (Math.ceil(Math.random() * 40) + 50);
};

bell = function() {
  return $("#bell")[0].play();
};

schedule_bell = function(wait) {
  bell();
  return setTimeout(schedule_bell, about_an_hour());
};

$(function() {
  return schedule_bell();
});
