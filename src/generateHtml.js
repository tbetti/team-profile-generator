function generateHtml(card){
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="header">
            <h1>Team Profile</h1>
        </header>
        <div class="card-container">
            ${card}
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="../src/htmlBody.js"></script>
    </body>
</html>`
}

module.exports = generateHtml;