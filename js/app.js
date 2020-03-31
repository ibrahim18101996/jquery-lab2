'use strict';
let ibrahim;
$.get('./data/page-1.json')
    .then(galeryOfHorns => {
        galeryOfHorns.forEach((val) => {
            let ibrahim = new Horns(val.image_url, val.title, val.description, val.keyword, val.horns);
            ibrahim.printOut();
        });
        renderSelect()
    });
$.get('./data/page-2.json')
    .then(page2 => {
    page2.forEach((val) => {
        let majd = new Page2(val.image_url, val.title, val.description, val.keyword, val.horns);
        majd.printOut();
    });
    renderSelect()
});
function Horns(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    keywordArray.push(this.keyword);
}
function Page2(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    keywordArray.push(this.keyword);
}
var keywordArray = [];
let unRepeatArray = [];
Horns.prototype.printOut = function () {

    let choose = $('#template').html();
    let html = Mustache.render(choose, this)
    console.log(choose);
    let sections = $('#photo-template').append(html);
    console.log(sections);
    $('main').append(sections);
}
Page2.prototype.printOut = function () {


    let choose = $('#template').html();
    let html = Mustache.render(choose, this);
    console.log(choose);
    let sections2 = $('#photo-template-page2').append(html);
    console.log(sections2);
    $('final').append(sections2);
}
$(`div`).hide();
$('#selectEle').on('change', function () {
    console.log($('#selectEle').val());
    for (let i = 0; i < unRepeatArray.length; i++) {
        if ($(`#selectEle`).val() == unRepeatArray[i]) {
            $(`div`).hide();
            console.log($(`div`).hide());
            $(`.${unRepeatArray[i]}`).show();
        }
        if ($('#selectEle').val() == 'default') {
            $(`div`).show();
        }
    }
})
function renderSelect() {
    for (let i = 0; i < keywordArray.length; i++) {
        if (unRepeatArray.indexOf(keywordArray[i]) === -1) {
            // This method returns -1 if the value to search for never occurs......................................................
            unRepeatArray.push(keywordArray[i]);

        }
    }
    for (let i = 0; i < unRepeatArray.length; i++) {
        $('select').append(`<option value ='${unRepeatArray[i]}'>${unRepeatArray[i]}</option>`);
    }
}
$('button').on('click', function () {
    console.log(this);
})