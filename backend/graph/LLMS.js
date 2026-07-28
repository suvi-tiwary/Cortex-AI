import { ChatGroq } from "@langchain/groq";

const groq = new ChatGroq({
model: "openai/gpt-oss-120b",
temperature: 0
});

export const getModel = async(agent)=>{
    switch (agent) {

        case "chat":
            return groq
        default:
            return groq

    }
}
