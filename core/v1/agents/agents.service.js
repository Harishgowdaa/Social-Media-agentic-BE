

class AgentsService {

    async signIn(req, res) {
        try{

        }catch(error){
            console.error("Error during sign-in:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
export default new AgentsService;