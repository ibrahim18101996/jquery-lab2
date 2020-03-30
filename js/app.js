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
    // $('main').append(choose);

    choose.find('img').attr({ 'src': this.image_url, 'width': 270 });
    // attr('width':150px);
    $('main').append(choose);
    // glory1.removeClass();

    choose.find('p').text(this.description);
    $('main').append(choose);

    keywordArray.push(this.keyword);
    for (let i = 0; i < keywordArray.length; i++) {
        if (unReeatArray.indexOf(keywordArray[i]) === -1) {
            unReeatArray.push(keywordArray[i]);
            let option = $('option');
            $('select').append(`<option value ='${unReeatArray[i]}'>${unReeatArray[i]}</option>`);
        }
    }
}