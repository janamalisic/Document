$(document).ready(function() {
    $.get("https://jsonplaceholder.typicode.com/albums/1/photos", function(data) {
        var i;
        for(i=0;i<data.length;i++) {
            $("#album").append(`
            <div class= "col-lg-3 col-md-4 col-xs-12">
            <div class="card" style="width: 99%;">
            <a href="${data[i].url}"><img src="${data[i].thumbnailUrl}" class="card-img-top"></a>
                <div class="card-body">
                <h2>Album id: ${data[i].albumId} </h2>
                <h5>Photo id: ${data[i].id} </h5>
                <p> ${data[i].title}</p>
                </div>
            </div>
            </div>       
            `)
        }
    })
})
$("#dugme").click(function(){
    var prvi = parseInt($("#prvi").val());
    var drugi = parseInt($("#drugi").val());
    $("#album").html("");
    $.get("https://jsonplaceholder.typicode.com/albums/1/photos", function(data) {
        var i;
        for(i=prvi;i<drugi;i++) {
            $("#album").append(`
<div class="col-lg-3 col-md-4 col-xs-12">
<div class="card" style="width: 99%;">
  <a href="${data[i].url}"><img src="${data[i].thumbnailUrl}" class="card-img-top"></a>
  <div class="card-body">
  <h2>Album id: ${data[i].albumId}</h2>
  <h5>Photo id: ${data[i].id}</h5>
  <p>${data[i].title}</p>
  </div>
</div>
</div>
`)
        }
    })
})
