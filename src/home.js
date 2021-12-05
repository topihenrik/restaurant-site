import pizzaIcon from "./pizza.jpg";

function mainHomeComponent() {
    const main = document.createElement("div");
    main.className = "main";

    const block = document.createElement("div");
    block.className = "block";
    const h1MainText = document.createElement("h1");
    h1MainText.textContent = "Vestibulum non auctor felis.";
    block.appendChild(h1MainText);

    const blockImage = document.createElement("div");
    blockImage.className = "blockImage";
    const imagePizza = new Image();
    imagePizza.src = pizzaIcon;
    block.appendChild(imagePizza);


    const pMainText1 = document.createElement("p");
    pMainText1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    block.appendChild(pMainText1);

    const pMainText2 = document.createElement("p");
    pMainText2.textContent = "Morbi quis consequat velit, vel consequat odio. In ac vestibulum lacus, sit amet sollicitudin ipsum. Pellentesque vel sollicitudin libero. Quisque tempus sem est, et euismod metus euismod ut. Sed ut eros enim. Etiam interdum turpis tortor, et lobortis felis gravida et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vitae neque sollicitudin, rutrum nisl.";
    block.appendChild(pMainText2);
    

    const pMainText3 = document.createElement("p");
    pMainText3.textContent = "-Noelle Lucas";
    block.appendChild(pMainText3);
    main.appendChild(block);
    return main;
}

export {mainHomeComponent};