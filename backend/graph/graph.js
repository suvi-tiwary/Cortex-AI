import { StateGraph } from "@langchain/langgraph";
import { agentState } from "./state";
import { routerAgent } from "./routerAgent";
import { chatAgent } from "./agents/chatAgent";
import { searchAgent } from "./agents/searchAgent";
import { codingAgent } from "./agents/codingAgent";
import { pdfAgent } from "./agents/pdfAgent";
import { pptAgent } from "./agents/pptAgent";
import { visionAgent } from "./agents/visionAgent";


const workflow = new StateGraph(agentState)

workflow.addNode("route",routerAgent)
workflow.addNode("chat",chatAgent)
workflow.addNode("search",searchAgent)
workflow.addNode("coding",codingAgent)
workflow.addNode("pdf",pdfAgent)
workflow.addNode("ppt",pptAgent)
workflow.addNode("vision",visionAgent)

workflow.addEdge("__start__","route")
workflow.addConditionalEdges("route",(state)=>{
    switch (state.agent) {
        case "chat":
            return "chat"
            
        case "search":
            return "search"
                  
        case "coding":
           return "coding"
            
        case "pdf":
            return "pdf "     
            
        case "ppt":
            return "ppt"
              
        case "vision":
            return "vision"
            
        default:
            return "chat"
            
    }
},{
    "chat":"chat",
    "search":"search",
    "coding":"coding",
    "pdf":"pdf",
    "ppt":"ppt",
    "vision":"vision"
})


workflow.addEdge("chat","__end__")
workflow.addEdge("search","chat")
workflow.addEdge("coding","__end__")
workflow.addEdge("pdf","__end__")
workflow.addEdge("ppt","__end__")
workflow.addEdge("vision","__end__")

export const graph = workflow.compile()

