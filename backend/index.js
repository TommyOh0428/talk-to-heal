const { Configuration, OpenAIApi } = require("openai");
const apiKey = "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";

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function apiCall () {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
            {role: "user", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
            {role: "assistant", content: "Hello, I'm a chatbot. I can help you with your psychological problems. What's your name and do you have any concerns?"},
        ],
        });
      console.log(completion.data.choices[0].message);}

apiCall();


