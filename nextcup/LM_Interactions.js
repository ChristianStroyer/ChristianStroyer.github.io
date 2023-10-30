let apiKey = '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'
let mlModel = 'gpt-3.5-turbo'

const OpenAIRole = {
    system: 'system',
    user: 'user',
    assistant: 'assistant',
    function: 'function'
};

class OpenAIMessage {
    constructor(role, content) {
        this.role = role;
        this.content = content;
    }
}

async function sendMessagesToOpenAI(messages) {

    if (apiKey == ''){
        console.warn("no api key \npressent key is: " + apiKey)
        return;
    }

    //const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const requestData = {
        model: mlModel,
        messages: messages.map(msg => ({ role: msg.role, content: msg.content })),
        top_p: 0
    };

    console.log('json: ' + JSON.stringify(requestData,null,2)) //print json = json, leave what out, indentation size

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestData)
    });

    const responseContent = await response.text();
    return responseContent;
}

async function extractMessageFromOpenAIJson(jsonString) {
    const jsonObject = JSON.parse(jsonString);
    const choice = jsonObject.choices[0];

    const role = choice.message.role;
    const content = choice.message.content;

    return new OpenAIMessage(role, content);
}

// extract toke use