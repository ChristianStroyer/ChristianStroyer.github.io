async function main() {
    /*const messages = [
        new OpenAIMessage(OpenAIRole.system, 'you do as instructed'),
        new OpenAIMessage(OpenAIRole.user, 'reply only with hello world')
    ];

    const responseContent = await sendMessagesToOpenAI(messages);
    console.log(`\n\nresponseContent from sendMessagesToOpenAI:\n${responseContent}\n\n`);

    const extractedMessage = await extractMessageFromOpenAIJson(responseContent);
    console.log(`\n\nExtractedMessage from responseContent:\nrole: ${extractedMessage.role}\ncontent: ${extractedMessage.content}\n\n`);
*/


    document.body.appendChild((new API_Choice()).getElement());

    document.body.appendChild((new LearningStyle()).getElement());

    //document.body.appendChild((new PreviousKnowladge()).getElement());

    document.body.appendChild((new identifyLearningAreas()).getElement());

    // start on learning first subject
    document.body.appendChild((new StartLearning()).getElement());

    

    // api refferences
    // setup
    // learning (parent class - can get replaced)
        //explain...
        //assignment...
    
}

main();