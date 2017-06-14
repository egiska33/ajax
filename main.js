var url = 'https://api.dribbble.com/v1/shots?access_token=a8fb838a867b7b10da48288cb03a4dd40a31291b93953d2b015aa1ab91f71f32';
//susikuriam kintamaji nurodyti puslapiui
var page = 1;

$(document).ready(function () {

    getPost();


    // if(page > 1) {
    //     $('#less').show();
    // }else {
    //     $('#less').hide();
    // }

    $('#more').on('click', function (){
        page ++;
        getPost();
    });

    $('#less').on('click', function () {
         page --;
        getPost();
    });
    console.log(page);
});

 function getPost() {
    $.ajax({

        url: url+ '&page='+ page,
        type: 'GET',
        success: function(resp){
            //isvalome html kad nerodytu buvusiu postu
            $('#shots').html('');
            for(var i=0; i < resp.length; i++) {
                var shot = resp[i];
                var html = $('<div class="shot"></div>');

                html.append('<h3>');
                html.append(shot.title);
                html.append('</h3>');
                html.append('<p><img src="' +shot.images.teaser + ' "/></p>');
                html.append(shot.description);
                html.append(' <p><a href="' + shot.html_url + '">' +'<button class="btn">Show on Dribbble</button>' +'</a></p>');

                $('#shots').append(html);

            }
        }
    });
}