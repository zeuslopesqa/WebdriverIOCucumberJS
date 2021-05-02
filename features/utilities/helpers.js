class Helpers{

//_Function to verify what is the button to be clicked on the top menu
menuOption(page){
    switch(page){
        case('home'):
            return $('#home');
            break;
        case('form'):
            return $('#form');
            break;
        case('error'):
            return $('#error');
            break;
        case('uitesting'):
            return $('#site');
            break;
        default:
            return $('#home');
            break;
    }
}

}module.exports = new Helpers();