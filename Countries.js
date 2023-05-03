
class Country {
    constructor(name, lang, helloWorld, colors, flag) {
      this.name = name;
      this.lang = lang;
      this.helloWorld = helloWorld;
      this.colors = colors;
      this.flag = flag;
    }
  }

  const Germany = new Country(
    "Deutschland",
    "Deutsch",
    "Guten Tag, Welt!",
    ["red", "black", "yellow"],
    "images/ger.jpg"
);
const Ireland = new Country(
    "Èire",
    "Gaeilge",
    "Dia duit, Domhan!",
    ["green", "white", "orange"],
    "images/ire.jpg"
);
const Greece = new Country(
    "Ελλάδα (Ellada)",
    "Ελληνικά (Ellénika)",
    "Γεια σου Κόσμε!",
    ["blue", "white"],
    "images/gre.jpg"
);
const Russia = new Country(
    "Россия (Rossia)",
    "Русский язык (Russky yazyk)",
    "Всем Привет!",
    ["white", "blue", "red"],
    "images/rus.jpg"
);
const Japan = new Country(
    "日本 (Nihon/Nippon)",
    "日本語 (Nihon/Nippon go)",
    "こんにちは世界",
    ["red", "white"],
    "images/jap.jpg"
);

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;;
    let country;

    if (input === "Deutschland" || input === "Germany") {
        country = Germany;
    }
    else if (input === "Èire" || input === "Ireland") {
        country = Ireland;
    }
    else if (input === "Ελλάδα" || input === "Greece") {
        country = Greece;
    }
    else if (input === "Россия" || input === "Russia") {
        country = Russia;
    }
    else if (input === "日本" || input === "Japan") {
        country = Japan;
    }

    console.log(country.name);
    console.log(country.lang);
    console.log(country.helloWorld);
    console.log(country.colors);

  document.getElementById("CountryName").innerHTML = country.name;
  document.getElementById("OfficialLanguage").innerHTML = "Official Language: <br>" + country.lang;
  document.getElementById("HelloWorld").innerHTML = "Hello World: <br>" + country.helloWorld;
  document.getElementById("CountryFlag").src = country.flag;
  document.getElementById("Color1").style.backgroundColor = country.colors[0];
  document.getElementById("Color2").style.backgroundColor = country.colors[1];
  document.getElementById("Color3").style.backgroundColor = country.colors.length > 2 ? 
                                  country.colors[2] : country.colors[0];

}
    


