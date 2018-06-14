
$('#input-sort').on('change', function(event) {
    event.preventDefault();
    var e = document.getElementById("input-sort");
    var type = e.options[e.selectedIndex].value;
    var data = {
      username: $('#username').text(),
      type: type
    };

    $.ajax({
       url: "/tutorList",
       type: "post",
       data: data,
       dataType: "json",
       async: true,
       success: function(data) {
         console.log(data);
       }
    });
});
