function mainContactComponent() {
    const main = document.createElement("div");
    main.className = "main";
    const block = document.createElement("div");
    block.className = "block";
    const h1MainText = document.createElement("h1");
    h1MainText.textContent = "Contact Information";
    block.appendChild(h1MainText);

    const pMainText1 = document.createElement("p");
    pMainText1.textContent = "Phone: (608) 912-8880";
    block.appendChild(pMainText1);

    const pMainText2 = document.createElement("p");
    pMainText2.textContent = "Address: 4581 Williams Lane, Wichita KS";
    block.appendChild(pMainText2);

    const pMainText3 = document.createElement("p");
    pMainText3.textContent = "Open: Fri-Sat, 18-23";
    block.appendChild(pMainText3);

    main.appendChild(block);
    return main;
}

export {mainContactComponent};