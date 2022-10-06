const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

// alvo.addEventListener("evento", função);

// mouseover, função arrow no body.

body.addEventListener("mouseover", (e) => {
    body.style.background = "gray";
});

body.addEventListener("mouseout", (e) => {
    body.style.background = "unset";
});

const addText = function(target, text){
    const newDiv = document.createElement(target);
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = text;
        
    /*console.log("Altura da Página", body.clientHeight);
    console.log("Largura da Página", body.clientWidth);
    console.log("Altura do Tooltip", tooltip.clientHeight);
    console.log("Largura do Tooltip", tooltip.clientWidth);
    console.log("Altura do mouse", e.clientY);
    console.log("Largura do mouse", e.clientX);
*/
    tooltip.addEventListener("mouseover", (e) => {
        if (document.querySelector(".tooltip")) {
            document.querySelector(".tooltip").remove();
            //document.querySelector(".tooltip").unset();
        };

        const largura = 200;
        newDiv.style.position = "fixed";
        newDiv.style.width = largura + "px";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.display = "flex";
        newDiv.style.left = (e.clientX + largura > body.clientWidth ? e.clientX - largura : e.clentX + largura) + "px";
        header.appendChild(newDiv);

        console.log(newDiv.style.width, "width");
        // colocando a newDiv dentro do header
    });
};

addText("div", "Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa! Daa jiji bappleees tank yuuu! Butt po kass gelatooo hahaha. Potatoooo poulet tikka masala butt poopayee uuuhhh po kass. Chasy belloo! Daa baboiii ti aamoo! Daa. Potatoooo uuuhhh bee do bee do bee do pepete butt tank yuuu! Potatoooo gelatooo.")

tooltip.addEventListener("mouseout", (e) => {
    if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
});

