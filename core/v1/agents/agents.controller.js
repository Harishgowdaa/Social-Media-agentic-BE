import AgentsService from "./agents.service.js";

class AgentsController {
    async signIn(req, res) {
        /*
        #swagger.tags = ['Agents']
        #swagger.description = 'Endpoint to sign in an agent.'
        
        */
        await AgentsService.signIn(req, res);
    }
}
export default new AgentsController();