var socialMedia = {
  facebook : 'http://facebook.com/profile.php?id=100004690685995',
  youtube: 'http://youtube.com/watch?v=tvEQQFOq4ls'
};

var socialList = function() {
  var output = '<ul>',
  myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output += '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/linkImg/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output += '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);