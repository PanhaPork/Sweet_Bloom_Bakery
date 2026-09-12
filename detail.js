const products = {
    "classic-chocolate-chip": ["Classic Chocolate Chip 🍪", "Classic_Chocolatechip.jpg", "$1.50", "Chocolate chip", "Rich butter cookie dough packed with generous chocolate chips, baked fresh for a crisp edge and soft center."],
    "red-velvet": ["Red Velvet 🍪", "Red_Valvet.jpg", "$1.50", "Red velvet and white chocolate", "Deep cocoa red velvet cookie dough filled with smooth white chocolate chips."],
    matcha: ["Matcha 🍪", "Matcha.jpg", "$1.50", "Matcha and white chocolate", "Earthy matcha powder balanced with sweet white chocolate chips in every bite."],
    "double-chocolate": ["Double Chocolate 🍪", "Double Chocolate.jpg", "$1.50", "Dark chocolate", "Decadent dark chocolate cookie dough loaded with rich chocolate chips."],
    oreo: ["Oreo 🍪", "Oreo.jpg", "$1.50", "Cookies and cream", "Creamy cookie dough topped with real Oreo crunch and a sweet drizzle."],
    smore: ["S'more 🍪", "S'more.jpg", "$2.00", "Marshmallow and chocolate", "Golden cookie dough packed with toasted marshmallows and chocolate pieces."],
    monster: ["Monster 🍪", "Monster.jpg", "$2.00", "White chocolate and Oreo", "Fun blue cookie dough swirled with white chocolate, Oreo crunch, and sweet fillings."],
    "lotus-biscoff": ["Lotus Biscoff 🍪", "Lotus_Biscoff.jpg", "$2.00", "Caramelized biscuit", "Spiced caramelized cookie dough topped with a whole Lotus Biscoff cookie."],
    "dubai-chocolate": ["Dubai Chocolate 🍪", "Dubai Chocolate.jpg", "$2.50", "Chocolate, pistachio, and kataifi", "A rich chocolate cookie filled with crunchy pistachio kataifi."],
    "fudgy-brownie-bite": ["Fudgy Brownie Bite 🍫", "Fudgy_brownie Bite.jpg", "$1.00", "Dark chocolate", "A small, rich, and fudgy brownie made for a quick chocolate treat."],
    "fudgy-brownie-large": ["Fudgy Brownie Large 🍫", "Fudgy Brownie Large.jpg", "$4.00", "Dark chocolate, 250g", "A generous 250g brownie with a rich chocolate flavor and soft fudgy center."],
    "fudgy-brownie-small": ["Fudgy Brownie Small 🍫", "Fudgy Brownie Small.jpg", "$2.50", "Dark chocolate, 120g", "A 120g fudgy brownie with a deep chocolate flavor and tender center."],
    "egg-tart": ["Egg Tart 🥚", "Egg Tert.jpg", "$3.50", "Egg custard, 4 pieces", "Four flaky pastries filled with smooth, lightly sweet egg custard."],
    "iced-chocolate": ["Iced Chocolate 🥤", "Ice Chocolate.JPG", "$2.50", "Chilled chocolate", "A cold, creamy chocolate drink made for a refreshing sweet break."],
    "jasmine-iced-chocolate": ["Jasmine Iced Chocolate 🥤", "Jasmine Ice Chocolate.JPG", "$2.50", "Jasmine and chocolate", "A refreshing iced chocolate drink with a delicate jasmine aroma."],
    hojicha: ["Hojicha 🍵", "Hojicha.JPG", "$3.00", "Roasted green tea", "Smooth roasted hojicha with a warm, nutty tea flavor."],
    "lotus-biscoff-matcha-latte": ["Lotus Biscoff Matcha Latte 🍵", "Lotus biscoff matcha latte.JPG", "$3.50", "Matcha and Biscoff", "Creamy matcha latte finished with sweet Lotus Biscoff flavor."],
    "strawberry-matcha-latte": ["Strawberry Matcha Latte 🍓", "Strawberry matcha latte.JPG", "$3.00", "Strawberry and matcha", "A bright combination of sweet strawberry and earthy matcha latte."],
    "matcha-latte": ["Matcha Latte 🍵", "Matcha latte.JPG", "$2.50", "Matcha and milk", "A smooth, creamy matcha latte with a balanced earthy finish."]
};

const key = new URLSearchParams(window.location.search).get("product");
const product = products[key] || products["classic-chocolate-chip"];
const [name, image, price, flavor, description] = product;
const cleanName = name.replace(/ [^ ]+$/, "");

document.title = `${cleanName} | SweetBloom`;
document.querySelector("#detail-image").src = `images/${image}`;
document.querySelector("#detail-image").alt = cleanName;
document.querySelector("#detail-name").textContent = name;
document.querySelector("#detail-price").textContent = price;
document.querySelector("#detail-description").textContent = description;
document.querySelector("#detail-flavor").textContent = `🍫 Flavor: ${flavor}`;

const drinkKeys = [
    "iced-chocolate",
    "jasmine-iced-chocolate",
    "hojicha",
    "lotus-biscoff-matcha-latte",
    "strawberry-matcha-latte",
    "matcha-latte"
];
const isDrink = drinkKeys.includes(key);
const isLatte = key?.includes("latte");
const isMatcha = key?.includes("matcha");

const drinkOptions = document.querySelector("#drink-options");
const milkOptions = document.querySelector("#milk-options");
const matchaOptions = document.querySelector("#matcha-options");

drinkOptions.hidden = !isDrink;
milkOptions.hidden = !isLatte;
matchaOptions.hidden = !isMatcha;
