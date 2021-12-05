function mainMenuComponent() {
    const main = document.createElement("div");
    main.className = "main";

    const hr = document.createElement("hr");
    hr.className = "menuHr";


    const block = document.createElement("div");
    block.className = "block";

    const h1MainText = document.createElement("h1");
    h1MainText.className = "menuTitle";
    h1MainText.textContent = "Menu";
    block.appendChild(h1MainText);
    block.appendChild(hr.cloneNode());


    const h1MenuItem1 = document.createElement("h1");
    h1MenuItem1.textContent = "Maecenas facilisis";
    block.appendChild(h1MenuItem1);
    const pMenuItem1Desc = document.createElement("p");
    pMenuItem1Desc.textContent = "Morbi volutpat velit at sem venenatis consectetur. Praesent ut vehicula nunc, non dictum lacus. Aenean ultrices, massa ac blandit fermentum.";
    block.appendChild(pMenuItem1Desc);
    const pMenuItem1Price = document.createElement("h1");
    pMenuItem1Price.textContent = "35€";
    block.appendChild(pMenuItem1Price);
    block.appendChild(hr.cloneNode());


    const h1MenuItem2 = document.createElement("h1");
    h1MenuItem2.textContent = "Proin vestibulum";
    block.appendChild(h1MenuItem2);

    const pMenuItem2Desc = document.createElement("p");
    pMenuItem2Desc.textContent = "Nulla facilisi. In maximus odio nibh, sed feugiat justo elementum non. Aliquam vitae interdum erat, in accumsan velit. Suspendisse ultrices.";
    block.appendChild(pMenuItem2Desc);
    const pMenuItem2Price = document.createElement("h1");
    pMenuItem2Price.textContent = "20€";
    block.appendChild(pMenuItem2Price);

    block.appendChild(hr.cloneNode());


    const h1MenuItem3 = document.createElement("h1");
    h1MenuItem3.textContent = "Morbi pharetra";
    block.appendChild(h1MenuItem3);

    const pMenuItem3Desc = document.createElement("p");
    pMenuItem3Desc.textContent = "Quisque faucibus, arcu sed iaculis hendrerit, diam nibh faucibus neque, vel pretium diam dolor quis odio. Donec sed nisi ultricies.";
    block.appendChild(pMenuItem3Desc);
    const pMenuItem3Price = document.createElement("h1");
    pMenuItem3Price.textContent = "55€";
    block.appendChild(pMenuItem3Price);

    block.appendChild(hr.cloneNode());




    main.appendChild(block);
    return main;
}

export { mainMenuComponent };