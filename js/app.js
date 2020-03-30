`use strict`;
$.get('./data/page-1.json')
    .then(glory => {
        console.log(glory);
        glory.forEach((val) => {
            console.log(val);
            let majd = new glory1(val.image_url, val.title, val.description, val.keyword, val.glory);
            console.log(glory1);
            majd.render();
        });
        renderSelect();
    })
    // keyword.push(glory);

function glory1(image_url, title, description, keyword, glory) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.glory = glory;
}
let keywordArray = [];
let unReeatArray = [];

glory1.prototype.render = function () {

    let choose = $(`#photo-template`).clone();
    choose.find('h2').text(this.title);
    choose.attr('class',this.keyword);
    choose.find('img').attr({ 'src': this.image_url, 'width': 270 });
    choose.find('p').text(this.description);
    $('main').append(choose);
    
    // keywordArray.push(this.keyword);
}
$('#selection').on('change',function(){
    for (let i=0;i<unReeatArray.length;i++){
        if ($('#selection').val()==unReeatArray[i]){
            $('section').hide();
            $(`.${unReeatArray[i]}`).show();
        }
    }
})


    function renderSelect(){
    for (let i = 0; i < keywordArray.length; i++) {
        if (unReeatArray.indexOf(keywordArray[i]) === -1) {
            unReeatArray.push(keywordArray[i]);
        }
    }
        for (let i=0;i<unReeatArray.length;i++){
            $('select').append(`<option value ='${unReeatArray[i]}'>${unReeatArray[i]}</option>`);
            
        }
    }    
