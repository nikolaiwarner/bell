about_an_hour = ->
  1000 * 60 * (Math.ceil(Math.random() * 40) + 50)

bell = ->
  $("#bell")[0].play()

schedule_bell = (wait) ->
  bell()
  setTimeout schedule_bell, about_an_hour()

$ ->
  schedule_bell()
