
const elementsData = [
    [
        {
            "id": 1,
            "name": "Hydrogen",
            "symbol": "H",
            "atomicNumber": 1,
            "atomicMass": 1.008,
            "biography": "Hydrogen is the first element..."
        },
        {
            "id": 2,
            "name": "Helium",
            "symbol": "He",
            "atomicNumber": 2,
            "atomicMass": 4.0026,
            "biography": "Helium is a chemical element with the symbol He..."
        },
        {
            "id": 3,
            "name": "Lithium",
            "symbol": "Li",
            "atomicNumber": 3,
            "atomicMass": 6.94,
            "biography": "Lithium is a chemical element with the symbol Li..."
        },
        {
            "id": 4,
            "name": "Beryllium",
            "symbol": "Be",
            "atomicNumber": 4,
            "atomicMass": 9.0122,
            "biography": "Beryllium is a chemical element with the symbol Be..."
        },
        {
            "id": 5,
            "name": "Boron",
            "symbol": "B",
            "atomicNumber": 5,
            "atomicMass": 10.81,
            "biography": "Boron is a chemical element with the symbol B..."
        },
        {
            "id": 6,
            "name": "Carbon",
            "symbol": "C",
            "atomicNumber": 6,
            "atomicMass": 12.011,
            "biography": "Carbon is a chemical element with the symbol C..."
        },
        {
            "id": 7,
            "name": "Nitrogen",
            "symbol": "N",
            "atomicNumber": 7,
            "atomicMass": 14.007,
            "biography": "Nitrogen is a chemical element with the symbol N..."
        },
        {
            "id": 8,
            "name": "Oxygen",
            "symbol": "O",
            "atomicNumber": 8,
            "atomicMass": 15.999,
            "biography": "Oxygen is a chemical element with the symbol O..."
        },
        {
            "id": 9,
            "name": "Fluorine",
            "symbol": "F",
            "atomicNumber": 9,
            "atomicMass": 18.998,
            "biography": "Fluorine is a chemical element with the symbol F..."
        },
        {
            "id": 10,
            "name": "Neon",
            "symbol": "Ne",
            "atomicNumber": 10,
            "atomicMass": 20.180,
            "biography": "Neon is a chemical element with the symbol Ne..."
        },
    
        {
            "id": 11,
            "name": "Sodium",
            "symbol": "Na",
            "atomicNumber": 11,
            "atomicMass": 22.990,
            "biography": "Sodium is a chemical element with the symbol Na..."
        },
        {
            "id": 12,
            "name": "Magnesium",
            "symbol": "Mg",
            "atomicNumber": 12,
            "atomicMass": 24.305,
            "biography": "Magnesium is a chemical element with the symbol Mg..."
        },
        {
            "id": 13,
            "name": "Aluminum",
            "symbol": "Al",
            "atomicNumber": 13,
            "atomicMass": 26.982,
            "biography": "Aluminum is a chemical element with the symbol Al..."
        },
        {
            "id": 14,
            "name": "Silicon",
            "symbol": "Si",
            "atomicNumber": 14,
            "atomicMass": 28.085,
            "biography": "Silicon is a chemical element with the symbol Si..."
        },
        {
            "id": 15,
            "name": "Phosphorus",
            "symbol": "P",
            "atomicNumber": 15,
            "atomicMass": 30.974,
            "biography": "Phosphorus is a chemical element with the symbol P..."
        },
        {
            "id": 16,
            "name": "Sulfur",
            "symbol": "S",
            "atomicNumber": 16,
            "atomicMass": 32.06,
            "biography": "Sulfur is a chemical element with the symbol S..."
        },
        {
            "id": 17,
            "name": "Chlorine",
            "symbol": "Cl",
            "atomicNumber": 17,
            "atomicMass": 35.453,
            "biography": "Chlorine is a chemical element with the symbol Cl..."
        },
        {
            "id": 18,
            "name": "Argon",
            "symbol": "Ar",
            "atomicNumber": 18,
            "atomicMass": 39.948,
            "biography": "Argon is a chemical element with the symbol Ar..."
        },
        {
            "id": 19,
            "name": "Potassium",
            "symbol": "K",
            "atomicNumber": 19,
            "atomicMass": 39.098,
            "biography": "Potassium is a chemical element with the symbol K..."
        },
        {
            "id": 20,
            "name": "Calcium",
            "symbol": "Ca",
            "atomicNumber": 20,
            "atomicMass": 40.078,
            "biography": "Calcium is a chemical element with the symbol Ca..."
        },
    
        {
            "id": 21,
            "name": "Scandium",
            "symbol": "Sc",
            "atomicNumber": 21,
            "atomicMass": 44.956,
            "biography": "Scandium is a chemical element with the symbol Sc..."
        },
        {
            "id": 22,
            "name": "Titanium",
            "symbol": "Ti",
            "atomicNumber": 22,
            "atomicMass": 47.867,
            "biography": "Titanium is a chemical element with the symbol Ti..."
        },
        {
            "id": 23,
            "name": "Vanadium",
            "symbol": "V",
            "atomicNumber": 23,
            "atomicMass": 50.942,
            "biography": "Vanadium is a chemical element with the symbol V..."
        },
        {
            "id": 24,
            "name": "Chromium",
            "symbol": "Cr",
            "atomicNumber": 24,
            "atomicMass": 52.000,
            "biography": "Chromium is a chemical element with the symbol Cr..."
        },
        {
            "id": 25,
            "name": "Manganese",
            "symbol": "Mn",
            "atomicNumber": 25,
            "atomicMass": 54.938,
            "biography": "Manganese is a chemical element with the symbol Mn..."
        },
        {
            "id": 26,
            "name": "Iron",
            "symbol": "Fe",
            "atomicNumber": 26,
            "atomicMass": 55.845,
            "biography": "Iron is a chemical element with the symbol Fe..."
        },
        {
            "id": 27,
            "name": "Cobalt",
            "symbol": "Co",
            "atomicNumber": 27,
            "atomicMass": 58.933,
            "biography": "Cobalt is a chemical element with the symbol Co..."
        },
        {
            "id": 28,
            "name": "Nickel",
            "symbol": "Ni",
            "atomicNumber": 28,
            "atomicMass": 58.693,
            "biography": "Nickel is a chemical element with the symbol Ni..."
        },
        {
            "id": 29,
            "name": "Copper",
            "symbol": "Cu",
            "atomicNumber": 29,
            "atomicMass": 63.546,
            "biography": "Copper is a chemical element with the symbol Cu..."
        },
        {
            "id": 30,
            "name": "Zinc",
            "symbol": "Zn",
            "atomicNumber": 30,
            "atomicMass": 65.38,
            "biography": "Zinc is a chemical element with the symbol Zn..."
        },
    
        {
            "id": 31,
            "name": "Gallium",
            "symbol": "Ga",
            "atomicNumber": 31,
            "atomicMass": 69.723,
            "biography": "Gallium is a chemical element with the symbol Ga..."
        },
        {
            "id": 32,
            "name": "Germanium",
            "symbol": "Ge",
            "atomicNumber": 32,
            "atomicMass": 72.630,
            "biography": "Germanium is a chemical element with the symbol Ge..."
        },
        {
            "id": 33,
            "name": "Arsenic",
            "symbol": "As",
            "atomicNumber": 33,
            "atomicMass": 74.922,
            "biography": "Arsenic is a chemical element with the symbol As..."
        },
        {
            "id": 34,
            "name": "Selenium",
            "symbol": "Se",
            "atomicNumber": 34,
            "atomicMass": 78.971,
            "biography": "Selenium is a chemical element with the symbol Se..."
        },
        {
            "id": 35,
            "name": "Bromine",
            "symbol": "Br",
            "atomicNumber": 35,
            "atomicMass": 79.904,
            "biography": "Bromine is a chemical element with the symbol Br..."
        },
        {
            "id": 36,
            "name": "Krypton",
            "symbol": "Kr",
            "atomicNumber": 36,
            "atomicMass": 83.798,
            "biography": "Krypton is a chemical element with the symbol Kr..."
        },
        {
            "id": 37,
            "name": "Rubidium",
            "symbol": "Rb",
            "atomicNumber": 37,
            "atomicMass": 85.468,
            "biography": "Rubidium is a chemical element with the symbol Rb..."
        },
        {
            "id": 38,
            "name": "Strontium",
            "symbol": "Sr",
            "atomicNumber": 38,
            "atomicMass": 87.620,
            "biography": "Strontium is a chemical element with the symbol Sr..."
        },
        {
            "id": 39,
            "name": "Yttrium",
            "symbol": "Y",
            "atomicNumber": 39,
            "atomicMass": 88.906,
            "biography": "Yttrium is a chemical element with the symbol Y..."
        },
        {
            "id": 40,
            "name": "Zirconium",
            "symbol": "Zr",
            "atomicNumber": 40,
            "atomicMass": 91.224,
            "biography": "Zirconium is a chemical element with the symbol Zr..."
        },
    
        {
            "id": 41,
            "name": "Niobium",
            "symbol": "Nb",
            "atomicNumber": 41,
            "atomicMass": 92.906,
            "biography": "Niobium is a chemical element with the symbol Nb..."
        },
        {
            "id": 42,
            "name": "Molybdenum",
            "symbol": "Mo",
            "atomicNumber": 42,
            "atomicMass": 95.950,
            "biography": "Molybdenum is a chemical element with the symbol Mo..."
        },
        {
            "id": 43,
            "name": "Technetium",
            "symbol": "Tc",
            "atomicNumber": 43,
            "atomicMass": 98.000,
            "biography": "Technetium is a chemical element with the symbol Tc..."
        },
        {
            "id": 44,
            "name": "Ruthenium",
            "symbol": "Ru",
            "atomicNumber": 44,
            "atomicMass": 101.070,
            "biography": "Ruthenium is a chemical element with the symbol Ru..."
        },
        {
            "id": 45,
            "name": "Rhodium",
            "symbol": "Rh",
            "atomicNumber": 45,
            "atomicMass": 102.906,
            "biography": "Rhodium is a chemical element with the symbol Rh..."
        },
        {
            "id": 46,
            "name": "Palladium",
            "symbol": "Pd",
            "atomicNumber": 46,
            "atomicMass": 106.420,
            "biography": "Palladium is a chemical element with the symbol Pd..."
        },
        {
            "id": 47,
            "name": "Silver",
            "symbol": "Ag",
            "atomicNumber": 47,
            "atomicMass": 107.868,
            "biography": "Silver is a chemical element with the symbol Ag..."
        },
        {
            "id": 48,
            "name": "Cadmium",
            "symbol": "Cd",
            "atomicNumber": 48,
            "atomicMass": 112.414,
            "biography": "Cadmium is a chemical element with the symbol Cd..."
        },
        {
            "id": 49,
            "name": "Indium",
            "symbol": "In",
            "atomicNumber": 49,
            "atomicMass": 114.818,
            "biography": "Indium is a chemical element with the symbol In..."
        },
        {
            "id": 50,
            "name": "Tin",
            "symbol": "Sn",
            "atomicNumber": 50,
            "atomicMass": 118.710,
            "biography": "Tin is a chemical element with the symbol Sn..."
        },
    
        {
            "id": 51,
            "name": "Antimony",
            "symbol": "Sb",
            "atomicNumber": 51,
            "atomicMass": 121.760,
            "biography": "Antimony is a chemical element with the symbol Sb..."
        },
        {
            "id": 52,
            "name": "Tellurium",
            "symbol": "Te",
            "atomicNumber": 52,
            "atomicMass": 127.600,
            "biography": "Tellurium is a chemical element with the symbol Te..."
        },
        {
            "id": 53,
            "name": "Iodine",
            "symbol": "I",
            "atomicNumber": 53,
            "atomicMass": 126.904,
            "biography": "Iodine is a chemical element with the symbol I..."
        },
        {
            "id": 54,
            "name": "Xenon",
            "symbol": "Xe",
            "atomicNumber": 54,
            "atomicMass": 131.293,
            "biography": "Xenon is a chemical element with the symbol Xe..."
        },
        {
            "id": 55,
            "name": "Cesium",
            "symbol": "Cs",
            "atomicNumber": 55,
            "atomicMass": 132.905,
            "biography": "Cesium is a chemical element with the symbol Cs..."
        },
        {
            "id": 56,
            "name": "Barium",
            "symbol": "Ba",
            "atomicNumber": 56,
            "atomicMass": 137.327,
            "biography": "Barium is a chemical element with the symbol Ba..."
        },
        {
            "id": 57,
            "name": "Lanthanum",
            "symbol": "La",
            "atomicNumber": 57,
            "atomicMass": 138.905,
            "biography": "Lanthanum is a chemical element with the symbol La..."
        },
        {
            "id": 58,
            "name": "Cerium",
            "symbol": "Ce",
            "atomicNumber": 58,
            "atomicMass": 140.116,
            "biography": "Cerium is a chemical element with the symbol Ce..."
        },
        {
            "id": 59,
            "name": "Praseodymium",
            "symbol": "Pr",
            "atomicNumber": 59,
            "atomicMass": 140.907,
            "biography": "Praseodymium is a chemical element with the symbol Pr..."
        },
        {
            "id": 60,
            "name": "Neodymium",
            "symbol": "Nd",
            "atomicNumber": 60,
            "atomicMass": 144.242,
            "biography": "Neodymium is a chemical element with the symbol Nd..."
        },
    
        {
            "id": 61,
            "name": "Promethium",
            "symbol": "Pm",
            "atomicNumber": 61,
            "atomicMass": 145,
            "biography": "Promethium is a chemical element with the symbol Pm..."
        },
        {
            "id": 62,
            "name": "Samarium",
            "symbol": "Sm",
            "atomicNumber": 62,
            "atomicMass": 150.36,
            "biography": "Samarium is a chemical element with the symbol Sm..."
        },
        {
            "id": 63,
            "name": "Europium",
            "symbol": "Eu",
            "atomicNumber": 63,
            "atomicMass": 151.964,
            "biography": "Europium is a chemical element with the symbol Eu..."
        },
        {
            "id": 64,
            "name": "Gadolinium",
            "symbol": "Gd",
            "atomicNumber": 64,
            "atomicMass": 157.25,
            "biography": "Gadolinium is a chemical element with the symbol Gd..."
        },
        {
            "id": 65,
            "name": "Terbium",
            "symbol": "Tb",
            "atomicNumber": 65,
            "atomicMass": 158.925,
            "biography": "Terbium is a chemical element with the symbol Tb..."
        },
        {
            "id": 66,
            "name": "Dysprosium",
            "symbol": "Dy",
            "atomicNumber": 66,
            "atomicMass": 162.500,
            "biography": "Dysprosium is a chemical element with the symbol Dy..."
        },
        {
            "id": 67,
            "name": "Holmium",
            "symbol": "Ho",
            "atomicNumber": 67,
            "atomicMass": 164.930,
            "biography": "Holmium is a chemical element with the symbol Ho..."
        },
        {
            "id": 68,
            "name": "Erbium",
            "symbol": "Er",
            "atomicNumber": 68,
            "atomicMass": 167.259,
            "biography": "Erbium is a chemical element with the symbol Er..."
        },
        {
            "id": 69,
            "name": "Thulium",
            "symbol": "Tm",
            "atomicNumber": 69,
            "atomicMass": 168.934,
            "biography": "Thulium is a chemical element with the symbol Tm..."
        },
        {
            "id": 70,
            "name": "Ytterbium",
            "symbol": "Yb",
            "atomicNumber": 70,
            "atomicMass": 173.045,
            "biography": "Ytterbium is a chemical element with the symbol Yb..."
        },
        {
            "id": 71,
            "name": "Lutetium",
            "symbol": "Lu",
            "atomicNumber": 71,
            "atomicMass": 174.9668,
            "biography": "Lutetium is a chemical element with the symbol Lu..."
        },
        {
            "id": 72,
            "name": "Hafnium",
            "symbol": "Hf",
            "atomicNumber": 72,
            "atomicMass": 178.49,
            "biography": "Hafnium is a chemical element with the symbol Hf..."
        },
        {
            "id": 73,
            "name": "Tantalum",
            "symbol": "Ta",
            "atomicNumber": 73,
            "atomicMass": 180.947,
            "biography": "Tantalum is a chemical element with the symbol Ta..."
        },
        {
            "id": 74,
            "name": "Tungsten",
            "symbol": "W",
            "atomicNumber": 74,
            "atomicMass": 183.84,
            "biography": "Tungsten is a chemical element with the symbol W..."
        },
        {
            "id": 75,
            "name": "Rhenium",
            "symbol": "Re",
            "atomicNumber": 75,
            "atomicMass": 186.207,
            "biography": "Rhenium is a chemical element with the symbol Re..."
        },
        {
            "id": 76,
            "name": "Osmium",
            "symbol": "Os",
            "atomicNumber": 76,
            "atomicMass": 190.23,
            "biography": "Osmium is a chemical element with the symbol Os..."
        },
        {
            "id": 77,
            "name": "Iridium",
            "symbol": "Ir",
            "atomicNumber": 77,
            "atomicMass": 192.217,
            "biography": "Iridium is a chemical element with the symbol Ir..."
        },
        {
            "id": 78,
            "name": "Platinum",
            "symbol": "Pt",
            "atomicNumber": 78,
            "atomicMass": 195.084,
            "biography": "Platinum is a chemical element with the symbol Pt..."
        },
        {
            "id": 79,
            "name": "Gold",
            "symbol": "Au",
            "atomicNumber": 79,
            "atomicMass": 196.966,
            "biography": "Gold is a chemical element with the symbol Au..."
        },
        {
            "id": 80,
            "name": "Mercury",
            "symbol": "Hg",
            "atomicNumber": 80,
            "atomicMass": 200.59,
            "biography": "Mercury is a chemical element with the symbol Hg..."
        },
        {
            "id": 81,
            "name": "Thallium",
            "symbol": "Tl",
            "atomicNumber": 81,
            "atomicMass": 204.383,
            "biography": "Thallium is a chemical element with the symbol Tl..."
        },
        {
            "id": 82,
            "name": "Lead",
            "symbol": "Pb",
            "atomicNumber": 82,
            "atomicMass": 207.2,
            "biography": "Lead is a chemical element with the symbol Pb..."
        },
        {
            "id": 83,
            "name": "Bismuth",
            "symbol": "Bi",
            "atomicNumber": 83,
            "atomicMass": 208.98,
            "biography": "Bismuth is a chemical element with the symbol Bi..."
        },
        {
            "id": 84,
            "name": "Polonium",
            "symbol": "Po",
            "atomicNumber": 84,
            "atomicMass": 209,
            "biography": "Polonium is a chemical element with the symbol Po..."
        },
        {
            "id": 85,
            "name": "Astatine",
            "symbol": "At",
            "atomicNumber": 85,
            "atomicMass": 210,
            "biography": "Astatine is a chemical element with the symbol At..."
        },
        {
            "id": 86,
            "name": "Radon",
            "symbol": "Rn",
            "atomicNumber": 86,
            "atomicMass": 222,
            "biography": "Radon is a chemical element with the symbol Rn..."
        },
        {
            "id": 87,
            "name": "Francium",
            "symbol": "Fr",
            "atomicNumber": 87,
            "atomicMass": 223,
            "biography": "Francium is a chemical element with the symbol Fr..."
        },
        {
            "id": 88,
            "name": "Radium",
            "symbol": "Ra",
            "atomicNumber": 88,
            "atomicMass": 226,
            "biography": "Radium is a chemical element with the symbol Ra..."
        },
        {
            "id": 89,
            "name": "Actinium",
            "symbol": "Ac",
            "atomicNumber": 89,
            "atomicMass": 227,
            "biography": "Actinium is a chemical element with the symbol Ac..."
        },
        {
            "id": 90,
            "name": "Thorium",
            "symbol": "Th",
            "atomicNumber": 90,
            "atomicMass": 232.038,
            "biography": "Thorium is a chemical element with the symbol Th..."
        },
        {
            "id": 91,
            "name": "Protactinium",
            "symbol": "Pa",
            "atomicNumber": 91,
            "atomicMass": 231.036,
            "biography": "Protactinium is a chemical element with the symbol Pa..."
        },
        {
            "id": 92,
            "name": "Uranium",
            "symbol": "U",
            "atomicNumber": 92,
            "atomicMass": 238.029,
            "biography": "Uranium is a chemical element with the symbol U..."
        },
        {
            "id": 93,
            "name": "Neptunium",
            "symbol": "Np",
            "atomicNumber": 93,
            "atomicMass": 237,
            "biography": "Neptunium is a chemical element with the symbol Np..."
        },
        {
            "id": 94,
            "name": "Plutonium",
            "symbol": "Pu",
            "atomicNumber": 94,
            "atomicMass": 244,
            "biography": "Plutonium is a chemical element with the symbol Pu..."
        },
        {
            "id": 95,
            "name": "Americium",
            "symbol": "Am",
            "atomicNumber": 95,
            "atomicMass": 243,
            "biography": "Americium is a chemical element with the symbol Am..."
        },
        {
            "id": 96,
            "name": "Curium",
            "symbol": "Cm",
            "atomicNumber": 96,
            "atomicMass": 247,
            "biography": "Curium is a chemical element with the symbol Cm..."
        },
        {
            "id": 97,
            "name": "Berkelium",
            "symbol": "Bk",
            "atomicNumber": 97,
            "atomicMass": 247,
            "biography": "Berkelium is a chemical element with the symbol Bk..."
        },
        {
            "id": 98,
            "name": "Californium",
            "symbol": "Cf",
            "atomicNumber": 98,
            "atomicMass": 251,
            "biography": "Californium is a chemical element with the symbol Cf..."
        },
        {
            "id": 99,
            "name": "Einsteinium",
            "symbol": "Es",
            "atomicNumber": 99,
            "atomicMass": 252,
            "biography": "Einsteinium is a chemical element with the symbol Es..."
        },
        {
            "id": 100,
            "name": "Fermium",
            "symbol": "Fm",
            "atomicNumber": 100,
            "atomicMass": 257,
            "biography": "Fermium is a chemical element with the symbol Fm..."
        },
        {
            "id": 101,
            "name": "Mendelevium",
            "symbol": "Md",
            "atomicNumber": 101,
            "atomicMass": 258,
            "biography": "Mendelevium is a chemical element with the symbol Md..."
        },
        {
            "id": 102,
            "name": "Nobelium",
            "symbol": "No",
            "atomicNumber": 102,
            "atomicMass": 259,
            "biography": "Nobelium is a chemical element with the symbol No..."
        },
        {
            "id": 103,
            "name": "Lawrencium",
            "symbol": "Lr",
            "atomicNumber": 103,
            "atomicMass": 262,
            "biography": "Lawrencium is a chemical element with the symbol Lr..."
        },
        {
            "id": 104,
            "name": "Rutherfordium",
            "symbol": "Rf",
            "atomicNumber": 104,
            "atomicMass": 267,
            "biography": "Rutherfordium is a chemical element with the symbol Rf..."
        },
        {
            "id": 105,
            "name": "Dubnium",
            "symbol": "Db",
            "atomicNumber": 105,
            "atomicMass": 270,
            "biography": "Dubnium is a chemical element with the symbol Db..."
        },
        {
            "id": 106,
            "name": "Seaborgium",
            "symbol": "Sg",
            "atomicNumber": 106,
            "atomicMass": 271,
            "biography": "Seaborgium is a chemical element with the symbol Sg..."
        },
        {
            "id": 107,
            "name": "Bohrium",
            "symbol": "Bh",
            "atomicNumber": 107,
            "atomicMass": 270,
            "biography": "Bohrium is a chemical element with the symbol Bh..."
        },
        {
            "id": 108,
            "name": "Hassium",
            "symbol": "Hs",
            "atomicNumber": 108,
            "atomicMass": 277,
            "biography": "Hassium is a chemical element with the symbol Hs..."
        },
        {
            "id": 109,
            "name": "Meitnerium",
            "symbol": "Mt",
            "atomicNumber": 109,
            "atomicMass": 278,
            "biography": "Meitnerium is a chemical element with the symbol Mt..."
        },
        {
            "id": 110,
            "name": "Darmstadtium",
            "symbol": "Ds",
            "atomicNumber": 110,
            "atomicMass": 281,
            "biography": "Darmstadtium is a chemical element with the symbol Ds..."
        },
        {
            "id": 111,
            "name": "Roentgenium",
            "symbol": "Rg",
            "atomicNumber": 111,
            "atomicMass": 282,
            "biography": "Roentgenium is a chemical element with the symbol Rg..."
        },
        {
            "id": 112,
            "name": "Copernicium",
            "symbol": "Cn",
            "atomicNumber": 112,
            "atomicMass": 285,
            "biography": "Copernicium is a chemical element with the symbol Cn..."
        },
        {
            "id": 113,
            "name": "Nihonium",
            "symbol": "Nh",
            "atomicNumber": 113,
            "atomicMass": 286,
            "biography": "Nihonium is a chemical element with the symbol Nh..."
        },
        {
            "id": 114,
            "name": "Flerovium",
            "symbol": "Fl",
            "atomicNumber": 114,
            "atomicMass": 289,
            "biography": "Flerovium is a chemical element with the symbol Fl..."
        },
        {
            "id": 115,
            "name": "Moscovium",
            "symbol": "Mc",
            "atomicNumber": 115,
            "atomicMass": 288,
            "biography": "Moscovium is a chemical element with the symbol Mc..."
        },
        {
            "id": 116,
            "name": "Livermorium",
            "symbol": "Lv",
            "atomicNumber": 116,
            "atomicMass": 293,
            "biography": "Livermorium is a chemical element with the symbol Lv..."
        },
        {
            "id": 117,
            "name": "Tennessine",
            "symbol": "Ts",
            "atomicNumber": 117,
            "atomicMass": 294,
            "biography": "Tennessine is a chemical element with the symbol Ts..."
        },
        {
            "id": 118,
            "name": "Oganesson",
            "symbol": "Og",
            "atomicNumber": 118,
            "atomicMass": 294,
            "biography": "Oganesson is a chemical element with the symbol Og..."
        }
    ]

];

const qrcode = new Html5Qrcode("reader");

function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtém o valor do parâmetro "id" da URL
const elementId = parseInt(getParameterByName("id"));

// Busca o elemento no JSON pelo ID
const elementData = elementsData.find(data => data.id === elementId);

// Atualiza o cartão e a biografia com as informações do elemento
if (elementData) {
    updateCardAndBiography(elementData);
}

function updateCardAndBiography(elementData) {
    const imgElement = document.querySelector(".img-element");
    imgElement.src = `${elementData.id}.jpg`;

    const atomicNumberSpan = document.querySelector(".atomic-number");
    atomicNumberSpan.textContent = elementData.atomicNumber;

    const symbolSpan = document.querySelector(".symbol");
    symbolSpan.textContent = elementData.symbol;

    const nameSpan = document.querySelector(".name");
    nameSpan.textContent = elementData.name;

    const atomicMassSpan = document.querySelector(".atomicMass");
    atomicMassSpan.textContent = elementData.atomicMass;

    const biographyDiv = document.querySelector(".biography");
    biographyDiv.textContent = elementData.biography;
}
