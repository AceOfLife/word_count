function word (string){
  var arr = string.split(" ");
  obj = {};
  arr.forEach (function (elem){
    if (! (elem in obj)) {
      obj [elem] = 1;
    }
    else {
      obj [elem] += 1;
    }
    });
    return JSON.stringify(obj);
  }
