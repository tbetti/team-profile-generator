//Create Card
function createCard(obj){
    // Create card header
    let cardName = `<h2 class='name card-heading' id='name-${obj.id}'>${obj.name}</h2>`;
    let cardRole = `<h3 class='role card-heading' id='role-${obj.id}'>${obj.role}</h3>`;
    let cardHeader = `<div class='card-header'>
        ${cardName}
        ${cardRole}
    </div>`;
    // let cardHeader = $('<div>').addClass('card-header');
    // let cardName = $('<h2>').text(object.name).attr('id', `name-${object.id}`); // set id to name-i
    // let cardRole = $('<h3>').text(object.role).attr('id', `role-${object.id}`); // set id to role-i
    // cardHeader.append(cardName).append(cardRole);

    ////////////////////////////////////////////////////////////////
    // Create card info section
    let cardId = `<li class='list-group-item' id='id-number-${obj.id}'><b>Id: </b>${obj.getId()}</li>`
    let cardEmail = `<li class = 'list-group-item' id='email-${obj.id}'><b>Email: </b>${obj.getEmail()}</li>`
    let additionalInfo = roleSpecific(obj);
    let infoList = `<ul class="info-list list-group list-group-flush" id='info-list-${obj.id}'>
        ${cardId}
        ${cardEmail}
        ${additionalInfo}
    </ul>`;
    let cardInfo = `<div class='card-info'>
        ${infoList}
    </div>`;
    
    // let cardInfo = $('<div>').addClass('card-info');
    // let infoList = $('<ul>').attr('id', `info-list-${object.id}`); // set id to info-list-i
    // let cardId = $('<li>').text(`Id: ${object.id}`).attr(`id-number-${object.id}`); // set id to id-i
    // let cardEmail = $('<li>').text(`Email: ${object.email}`).attr(`email-${object.id}`); // set id to email-i
    // infoList.append(cardId).append(cardEmail);
    // cardInfo.append(infoList);
    
    // Append header and info sections to card
    let card = `<div class='card'>
        ${cardHeader}
        ${cardInfo}
    </div>`
    
    // let card = $('<div>').addClass('card');
    // card.append(cardHeader).append(cardInfo);

    return card;

    // const cardContainer = $('.card-container');
    // cardContainer.append(card);
}

function roleSpecific(obj){
    let text;
    switch (obj.role){
        case 'Manager':
            text = `<li class='list-group-item' id='office-${obj.id}'><b>Office Number: </b>#${obj.officeNumber}</li>`;
            break;
        case 'Engineer':
            text = `<li class='list-group-item' id='github-${obj.id}'><b>Github: </b>${obj.getGithub()}</li>`;
            break;
        case 'Intern':
            text = `<li class='list-group-item' id='school-${obj.id}'><b>School: </b>${obj.getSchool()}</li>`;
            break;
        default:
            text = ``;
    }
    return text;
}

module.exports = createCard;