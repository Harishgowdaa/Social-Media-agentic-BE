import UserService from './user.utility.js';
class UserController {

    async socialLogin(req, res, next) {
        /* 	#swagger.tags = ['Open']
                        #swagger.description = 'Social Login for FaceBook,Google,Twitter' */
        /*	#swagger.parameters['network'] = {
                               in: 'query',
                               default: 'Facebook',
                               enum:["Facebook","Google","Twitter"]
                       } */
        return await UserService.socialLogin(req, res, next);
    }

    async googleCallback(req, res, next) {
        /* 	#swagger.tags = ['Social-Callback']
            #swagger.description = 'Google code ' */

        /*	#swagger.parameters['code'] = {
                  in: 'query',
                  required: true,
        }*/
        return await UserService.googleCallback(req, res, next);
    }
}
export default new UserController();
