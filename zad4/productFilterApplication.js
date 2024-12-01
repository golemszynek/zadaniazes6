const filterProducts = (produkty, { kategoria, minCena = 0, maxCena} = {}) => {
    let filteredProducts = produkty.filter(produkt => {
        const { cena, kategoria: kategoriaProduktu } = produkt;
        const wKategorii = kategoria ? kategoriaProduktu === kategoria : true;
        const wCenie = cena >= minCena && cena <= maxCena;
        return wKategorii && wCenie;
    });

    return filteredProducts.map(({ nazwa, cena, kategoria }) => 
        `Produkt: ${nazwa}, Cena: $${cena}, Kategoria: ${kategoria}`);
};

const produkty = [
    { nazwa: "Laptop", cena: 999.99, kategoria: "Elektronika" },
    { nazwa: "Telefon", cena: 499.99, kategoria: "Elektronika" },
    { nazwa: "Ładowarka", cena: 29.99, kategoria: "Elektronika" },
    { nazwa: "Blender", cena: 19.99, kategoria: "Akcesoria domowe" },
    { nazwa: "Krzesło", cena: 89.99, kategoria: "Meble" },
];

const filterOptions = { kategoria: "Elektronika", minCena: 100, maxCena: 600 };
console.log(filterProducts(produkty, filterOptions));
const priceOnlyOptions = { minCena: 20, maxCena: 100 };
console.log(filterProducts(produkty, priceOnlyOptions));
