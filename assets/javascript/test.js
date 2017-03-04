for (var i = 0; i < length; i++) {
    document.write(" _ ");
}





up vote
9
down vote
favorite
  function mutation(arr) {

  var tester = arr[1].split('');

  for (var i = 0; i < tester.length; i ++) {
    if (!arr[0].indexOf(tester[i])) return false;
  }
  return true;
  }

  mutation(["hello", "hey"]);