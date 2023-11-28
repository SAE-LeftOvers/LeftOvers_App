const Ecru = '#ACA279'
const Alabaster = '#F2F0E4'
const Jet = '#3F3C42'
const Moonstone = '#59BDCD'
const Cerulean = '#2680AA'
const Celeste = '#ADF3EA'
const Tan = '#E0C293'
const Pearl = '#E3DEC9'
const EerieBlack = '#222222'
const CarolinaBlue = '#8DB4D9'
const SteelBlue = '#5882A8'

export interface Theme {
    primary: string,
    primaryComplement: string,
    cardBackground: string,
    cardTitle: string,
    cardDetail: string,
    cardElementBackground: string,
    cardElementText: string,
    cardElementBorder: string,
    cardElementTitle: string,
    cardElementTitleBackground: string,
    ingredientBackground: string,
    ingredientContent: string,
    ingredientBorder: string,
    buttonBackground: string,
    buttonDetail: string,
    welcomeText: string,
    welcomeName: string,
    carrouselBackground: string,
    carrouselText: string,
    carrouselDetail: string
}

export const LightTheme : Theme = {
    primary: Cerulean,
    primaryComplement: Moonstone, 
    cardBackground: Alabaster,
    cardTitle: Ecru,
    cardDetail: Jet,
    cardElementBackground: Pearl,
    cardElementText: Jet,
    cardElementBorder: Ecru,
    cardElementTitle: Jet,
    cardElementTitleBackground: Alabaster,
    ingredientBackground: Pearl,
    ingredientBorder: EerieBlack,
    ingredientContent: Jet,
    buttonBackground: Pearl,
    buttonDetail: Moonstone,
    welcomeText: Ecru,
    welcomeName: Moonstone,
    carrouselBackground: Pearl,
    carrouselText: Ecru,
    carrouselDetail: Moonstone
}

export const DarkTheme : Theme = {
    primary: EerieBlack,
    primaryComplement: Jet,
    cardBackground: Jet,
    cardTitle: Alabaster,
    cardDetail: Alabaster,
    cardElementBackground: SteelBlue,
    cardElementText: Jet,
    cardElementTitle: Alabaster,
    cardElementBorder: SteelBlue,
    cardElementTitleBackground: CarolinaBlue,
    ingredientBackground: EerieBlack,
    ingredientBorder: SteelBlue,
    ingredientContent: Alabaster,
    buttonBackground: Jet,
    buttonDetail: CarolinaBlue,
    welcomeText: SteelBlue,
    welcomeName:Alabaster,
    carrouselBackground: CarolinaBlue,
    carrouselText: SteelBlue,
    carrouselDetail: Alabaster
}

