
var e = document.getElementById("input-sort");
    var type = e.options[e.selectedIndex].value;
    var data = {
      username: $('#username').text(),
      type: type
    };

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    document.write(this.responseText);
  }
};
xhttp.open("POST", "/tutorList", true);
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send(JSON.stringify(data));

// $('#input-sort').on('change', function(event) {
//     event.preventDefault();
//     var e = document.getElementById("input-sort");
//     var type = e.options[e.selectedIndex].value;
//     var data = {
//       username: $('#username').text(),
//       type: type
//     };
//
//     $.ajax({
//        url: "/tutorList",
//        type: "post",
//        data: data,
//        dataType: "json",
//        async: true,
//        success: function(data) {
//          console.log(data);
//        }
//     });
// });
