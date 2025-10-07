import UserValidation from './user.validation.js';
import UserSchema from './user.model.js';
import Response from '../../../response/response.js';
import jwt from 'jsonwebtoken';
import config from 'config';
import logger from '../../../resources/logs/logger.log.js';
import { UserMessageNew, commonMessage } from '../../../language/language.translator.js';
import helper from '../../../utils/social.helper.js';
class UserService {

    async socialLogin(req, res, next) {
        try {
            const { value, error } = UserValidation.validateNetwork(req.query);
            if (error) return res.send(Response.validationFailResp(UserMessageNew['NETWORK_VALIDATION']['en'], error.message));

            const { network } = req.query;
            let redirectUrl = '';

            // if (network == 'Facebook') {
            //     redirectUrl = `https://www.facebook.com/dialog/oauth?response_type=code&redirect_uri=${encodeURIComponent(config.get('facebook_api.redirect_url'))}&client_id=${config.get(
            //         'facebook_api.app_id'
            //     )}&scope=${config.get('facebook_api.login_scopes')}`;
            //     return res.send(Response.SocialCallbackResponse(res, redirectUrl, null, 'Navigated to Facebook'));
            // }
            if (network == 'Google') {
                redirectUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${encodeURIComponent(
                    config.get('google_api.redirect_url')
                )}&prompt=consent&response_type=code&client_id=${config.get('google_api.client_id')}&scope=${config.get('google_api.login_scopes')}&access_type=offline`;
                return res.send(Response.SocialCallbackResponse(res, redirectUrl, null, 'Navigated to Google'));
            }

            // if (network == 'Twitter') {
            //     const twitter_response = await this.twtConnect.requestTokenLogin();
            //     const tokens = {
            //         requestToken: twitter_response.requestToken,
            //         requestSecret: twitter_response.requestSecret,
            //     };

            //     redirectUrl = `https://api.twitter.com/oauth/authenticate?oauth_token=${tokens.requestToken}`;
            //     return res.send(Response.SocialCallbackResponse(res, redirectUrl, tokens, 'navigate to twitter'));
            // }
        } catch (err) {
            logger.error(`Error in catch social Login ${err}`);
            res.send(Response.FailResp(UserMessageNew['FAILED_SOCIAL_LOGIN']['en'], err.message));
        }
    }


    async googleCallback(req, res, next) {
        try {
            const { value, error } = UserValidation.validateCode(req.query);
            if (error) return res.send(Response.validationFailResp( error?.message,commonMessage['VALIDATION_FAILED']['en'].message));

            const { code } = req.query;

            const g_token = await helper.getGoogleAccessToken(code, config.get('google_api.redirect_url'));
            const googlerawuserInfo = await helper.getGoogleProfileInformation(g_token);

            const parseData = await helper.parsedataGoogle(googlerawuserInfo, g_token);
            const isDataExist = await UserSchema.findOne({ email: parseData?.email });
            if (!isDataExist) {
                parseData.email = parseData.email.toLowerCase(); // converting the any email into lowercase
                let resultData = await UserSchema.create(parseData);
                let { forgotPasswordToken, forgotTokenExpire, password, dashboardConfig, emailValidateToken, emailTokenExpire, ...filteredData } = resultData.toJSON();
                let accessToken = jwt.sign({ userData: filteredData }, config.get('token_secret'), { expiresIn: '24h' });
                res.send(Response.SuccessResp(`success`, { userData: filteredData, accessToken }));
            } else {
                let { forgotPasswordToken, forgotTokenExpire, password, dashboardConfig, emailValidateToken, emailTokenExpire, ...filteredData } = isDataExist.toJSON();
                let accessToken = jwt.sign({ userData: filteredData }, config.get('token_secret'), { expiresIn: '24h' });
                res.send(Response.SuccessResp(`success`, { userData: filteredData, accessToken }));
            }
        } catch (error) {
            logger.error(`Error in catch Google Login ${error}`);
            res.send(Response.FailResp(UserMessageNew['FAILED_GOOGLE_LOGIN']['en'], error.message));
        }
    }
   
}
export default new UserService();