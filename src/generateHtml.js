// Create HTML
// Create Head
// Create Body
function createBody(){
    // Head
    const header = $('<header>').addClass('header');
    const headerTitle = $('<h1>');
    header.append(headerTitle);
    // Create and append card
    const cardContainer = $('<div').addClass('card-container');
    let card = createCard();
    cardContainer.append(card);
    // Append all
    const body = $('<body>');
    body.append(header);
}
//Create Card
let i = 0;
function createCard(){
    // Create card header
    let cardHeader = $('<div>').addClass('card-header');
    let cardName = $('<h2>') // set id to name-i
    let cardRole = $('<h3>') // set id to role-i
    cardHeader.append(cardName).append(cardRole);
    
    // Create card info section
    let cardInfo = $('<div>').addClass('card-info');
    let infoList = $('<ul>') // set id to info-list-i
    let cardId = $('<li>') // set id to id-i
    let cardEmail = $('<li>') // set id to email-i
    infoList.append(cardId).append(cardEmail);
    cardInfo.append(infoList);
    
    // Append header and info sections to card
    let card = $('<div>').addClass('card');
    card.append(cardHeader).append(cardInfo);

    i++;
    return card;
}