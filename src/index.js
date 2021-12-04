function component() {
    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.className = "header";
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Great Restaurant";
    header.appendChild(headerTitle);
    content.appendChild(header);

    const main = document.createElement("div");
    main.className = "main";
    const block = document.createElement("div");
    block.className = "block";
    const h1MainText = document.createElement("h1");
    h1MainText.textContent = "We are the best restaurant in town!";
    block.appendChild(h1MainText);
    const pMainText = document.createElement("p");
    pMainText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    block.appendChild(pMainText);
    main.appendChild(block);
    content.appendChild(main);


    const footer = document.createElement("div");
    footer.className = "footer";
    const pFooterText = document.createElement("p");
    pFooterText.textContent = "Footer";
    footer.appendChild(pFooterText);
    content.appendChild(footer);

    return;
}

component();