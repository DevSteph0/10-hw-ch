const generateHTML = function(manager, engineers, interns) {
    var headerText = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team List</title>
    <style>
    :root {
        --header: #2bcea8;
        --header-text: white;
        --card: #ECECEC;
        --card-header: #000000;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    
    body {
        margin: 0 auto;
    }
    
    header {
        background: var(--header);
        color: var(--header-text);
        text-align: center;
        height: 100px;
        line-height: 100px;
        font-size: 25px;
        margin-bottom: 25px;
    }
    
    #container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 25px;
    }
    
    .card {
        background: var(--card);
        width: 300px;
        height: 330px;
        border-radius: 5px;
        filter: drop-shadow(5px 5px 5px black);
        margin: 25px;
    }
    
    .cardHeader {
        background: var(--card-header);
        color: var(--header-text);
        padding: 15px;
        font-size: 20px;
    }
    
    .role {
        padding-top: 5px;
        font-size: 18px;
    }
    
    
    #manager::before {
        content: "";
    }
    
    #engineer::before {
        content: "";
    }
    
    #intern::before {
        content: "";
    }
    
    .employeeInfo {
        background: var(--header-text);
        height: 180px;
        margin: 35px 15px;
    }
    
    .infoItem {
        border: 1px solid var(--card);
        height: 60px;
        line-height: 60px;
        padding-left: 15px;
    }
    
    a {
        color: var(--card-header);
        text-decoration: none;
    }
    
    </style>
</head>

<body>
    <header>Team List</header>
    <div id="container">
`

    var managerText = ""
    if (manager[0].name !== "") {
        for (i = 0; i < manager.length; i++) {
            managerText = managerText + 
`       <div class="card">
            <div class="cardHeader">
                ${manager[i].name}
                <br>
                <div class="role" id="manager">${manager[i].getRole()}</div>
            </div>
            <div>
                <div class="employeeInfo">
                    <div class="infoItem">ID: ${manager[i].id}</div>
                    <div class="infoItem">Email: <a href="mailto:${manager[i].email}">${manager[i].email}</a></div>
                    <div class="infoItem">Office number: ${manager[i].officeNumber}</div>
                </div>
            </div>
        </div>
`
        }
    }
    

    var engineersText = ""
    if (engineers !== []) {
        for (i = 0; i < engineers.length; i++) {
            engineersText = engineersText + 
`       <div class="card">
            <div class="cardHeader">
                ${engineers[i].name}
                <br>
                <div class="role" id="engineer">${engineers[i].getRole()}</div>
            </div>
            <div>
                <div class="employeeInfo">
                    <div class="infoItem">ID: ${engineers[i].id}</div>
                    <div class="infoItem">Email: <a href="mailto:${engineers[i].email}">${engineers[i].email}</a></div>
                    <div class="infoItem">GitHub: <a href="https://github.com/${engineers[i].github}/" target="_blank">${engineers[i].github}</a></div>
                </div>
            </div>
        </div>
`
        }
    }

    var internsText = ""
    if (interns !== []) {
        for (i = 0; i < interns.length; i++) {
            internsText = internsText + 
`       <div class="card">
            <div class="cardHeader">
                ${interns[i].name}
                <br>
                <div class="role" id="intern">${interns[i].getRole()}</div>
            </div>
            <div>
                <div class="employeeInfo">
                    <div class="infoItem">ID: ${interns[i].id}</div>
                    <div class="infoItem">Email: <a href="mailto:${interns[i].email}">${interns[i].email}</a></div>
                    <div class="infoItem">School: ${interns[i].school}</div>
                </div>
            </div>
        </div>
`
        }
    }
    
    var footerText = 
`    </div>
</body>
</html>`


    return `${headerText}` + `${managerText}` + `${engineersText}` + `${internsText}` + `${footerText}`;
}

module.exports = { generateHTML };