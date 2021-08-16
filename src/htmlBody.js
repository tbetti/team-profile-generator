// <i class='bi bi-cup'></i>
// <i class='bi bi-eyeglasses'></i>
// <i class='bi bi-graduation-cap'></i>
//Create Card
function createCard(obj){
    // Create card header
    let cardName = `<h2 class='name card-heading' id='name-${obj.id}'>${obj.name}</h2>`;
    let cardRole = `<h3 class='role card-heading' id='role-${obj.id}'>${obj.role}</h3>`;
    let cardHeader = `<div class='card-header'>
        ${cardName}
        ${cardRole}
    </div>`;
    
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
    
    // Append header and info sections to card
    let card = `<div class='card'>
        ${cardHeader}
        ${cardInfo}
    </div>`

    return card;
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