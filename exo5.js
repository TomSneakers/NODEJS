function translateNumber(nbr) {

    const unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    
    const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    
    if (nbr < 20) {
    
    return unite[nbr];
    
    }
    
    /**else if (nbr < 100) {
    
    return tens
    
    }
    
    else {
    
    return "impossible de prendre votre nombre";
    
    }
     */
    }
    
    
    
    console.log(translateNumber(19))