//Create Card
function createCard(object){
    // Create card header
    let cardHeader = $('<div>').addClass('card-header');
    let cardName = $('<h2>').text(object.name).attr('id', `name-${object.id}`); // set id to name-i
    let cardRole = $('<h3>').text(object.role).attr('id', `role-${object.id}`); // set id to role-i
    cardHeader.append(cardName).append(cardRole);
    
    // Create card info section
    let cardInfo = $('<div>').addClass('card-info');
    let infoList = $('<ul>').attr('id', `info-list-${object.id}`); // set id to info-list-i
    let cardId = $('<li>').text(`Id: ${object.id}`).attr(`id-number-${object.id}`); // set id to id-i
    let cardEmail = $('<li>').text(`Email: ${object.email}`).attr(`email-${object.id}`); // set id to email-i
    infoList.append(cardId).append(cardEmail);
    cardInfo.append(infoList);
    
    // Append header and info sections to card
    let card = $('<div>').addClass('card');
    card.append(cardHeader).append(cardInfo);

    const cardContainer = $('.card-container');
    cardContainer.append(card);
}

module.exports = createCard(object);