let switchButton = document.getElementById("switch-button");
let switchButtonImg = document.getElementById("switch-button-img");
let switchButtonCz = document.getElementById("switch-button-czech");
let switchButtonImgCz = document.getElementById("switch-button-img-czech");
let aboutUsEn = document.getElementById("about-us-en");
let referenceEn = document.getElementById("reference-en");
let contactsEn = document.getElementById("contacts-en");
let aboutUsTextEn = document.getElementById("about-us-text-en");
let text1En = document.getElementById("text-1-en");
let text2En = document.getElementById("text-2-en");
let text3En = document.getElementById("text-3-en");
let text4En = document.getElementById("text-4-en");
let text5En = document.getElementById("text-5-en");
let contactsH2En = document.getElementById("contacts-h2-en");

switchButton.addEventListener("click",function switchToEnglish(){
    if (switchButtonImg.src = "images/english-flag.jpg"){
        aboutUsEn.textContent = "About us";
        referenceEn.textContent = "References";
        contactsEn.textContent = "Contacts";
        aboutUsTextEn.textContent = "Are you looking for reliable way, how fortify your business?";
        text1En.textContent = "Are you looking for reliable way, how fortify your business?";
        text2En.textContent = "Are you looking for reliable way, how fortify your business?";
        text3En.textContent = "Are you looking for reliable way, how fortify your business?";
        text4En.textContent = "Are you looking for reliable way, how fortify your business?";
        text5En.textContent = "Are you looking for reliable way, how fortify your business?";
        contactsH2En.textContent = "Contacts";
    }
    else {
        console.log("zaseklo se to u prvního")
    }
})

switchButtonCz.addEventListener("click",function switchToCzech(){
    if (switchButtonImgCz.src = "images/czech-flag.png") {
        aboutUsEn.textContent = "O nás";
        referenceEn.textContent = "Reference";
        contactsEn.textContent = "Kontakty";
        aboutUsTextEn.textContent = "Hledáte spolehlivou cestu, jak posílit vaše podnikání a udržet krok s požadavky trhu? ";
        text1En.textContent = "Znáte ten pocit, kdy vám chybí klíčoví zaměstnanci a výroba nebo logistika stojí? ";
        text2En.textContent = "Představujeme Mayer agency s.r.o., agenturu, která je výsledkem unikátního spojení sil dvou zkušených agentur v oblasti lidských zdrojů. Jsme připraveni stát se vaším strategickým partnerem v oblasti personálních služeb pro sklady a výrobu. Díky naší agentuře už nebudete muset trávit drahocenný čas hledáním kvalifikovaných pracovníků. My to uděláme za vás!";
        text3En.textContent = "Naše služby jsou šité na míru vašim potřebám. Mayer agency s.r.o. není jen obyčejná pracovní agentura. Jsme tým odborníků, kteří rozumí vašemu odvětví a vědí, jak nalézt ty pravé lidi pro vaše specifické potřeby. Naši kandidáti jsou pečlivě vybíráni a připraveni se stát součástí vašeho týmu, ať už potřebujete posílit obsazenost v sezónních špičkách nebo hledáte dlouhodobé řešení pro vaše personální zdroje.";
        text4En.textContent = "Představte si, že vaše sklady a výrobní linky jsou provozovány týmem motivovaných a kvalifikovaných pracovníků, kteří jsou připraveni přispět k růstu vaší společnosti. S Mayer agency s.r.o. to není jen sen. Naši klienti hlásí zvýšení produktivity, snížení fluktuace zaměstnanců a vylepšení celkového pracovního prostředí. Spokojený zaměstnanec znamená spokojeného zákazníka, a právě to je naším cílem.";
        text5En.textContent = "Nenechte vaše podnikání stagnovat kvůli nedostatku pracovní síly. Kontaktujte Mayer agency s.r.o. ještě dnes a společně najdeme řešení přizpůsobené vašim potřebám. Pojďme společně vytvořit silný základ pro vaši společnost s týmem, na který se můžete spolehnout. Zavolejte nám nebo nám pošlete e-mail a domluvte si nezávaznou konzultaci. Uvidíte, že investice do správných lidí se vám mnohonásobně vyplatí. S Mayer agency s.r.o. máte budoucnost vašeho podnikání ve skvělých rukou.";
        contactsH2En.textContent = "Kontakty";
    }
    else{
        console.log("Nezdařilo se")
    }
})