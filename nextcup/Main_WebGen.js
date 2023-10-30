async function main() {

    site = document.createElement('div');
    site.id = "site"

    //api prefferences
    site.appendChild((new API_Choice()).getElement());

    //setup
    site.appendChild((new LearningStyle()).getElement());
    site.appendChild((new identifyLearningAreas()).getElement());
    
    
    // start on learning first subject
    site.appendChild((new StartLearning()).getElement());

    document.body.appendChild(site)

    // api refferences
    // setup
    // learning (parent class - can get replaced)
        //explain...
        //assignment...
    
}

main();