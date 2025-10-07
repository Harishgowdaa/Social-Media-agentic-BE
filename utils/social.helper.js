import request from 'request';
import config from 'config';
import TwitterHelper from './twitter.helper.js';
// import logger from '../../logs/logger.log.js';
const fbVersion = 'v3.3';
import requestPromise from 'request-promise';
import logger from '../resources/logs/logger.log.js';

class Helper {
    constructor() {
        // this.twtConnect = new TwitterHelper(config.get('twitter_api'));
    }

    async getGoogleAccessToken(code, redirectUrl) {
        return new Promise((resolve, reject) => {
            const requestBody = `code=${code}&redirect_uri=${redirectUrl}&client_id=${config.get('google_api.client_id')}&client_secret=${config.get(
                'google_api.client_secrets'
            )}&scope=&grant_type=authorization_code`
            request.post(
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    url: 'https://www.googleapis.com/oauth2/v4/token',
                    body: requestBody,
                },
                (error, _response, body) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        const parsedBody = JSON.parse(body);
                        if (parsedBody?.error_description) {
                            reject(parsedBody?.error_description);
                        }
                        const tokens = {
                            access_token: parsedBody?.access_token,
                            refresh_token: parsedBody?.refresh_token,
                        };
                        resolve(tokens);
                    }
                }
            );
        });
    }
    async getGoogleProfileInformation(tokens) {
        return new Promise((resolve, reject) => {
            // Hitting google with accessToken to get data of google profile details
            request.get(
                {
                    headers: { Authorization: `Bearer ${tokens.access_token}` },
                    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
                },
                (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        const parsedBody = JSON.parse(body);
                        const userGoogleId = parsedBody?.id;
                        const userGoogleEmail = parsedBody?.email;
                        const firstName = parsedBody?.given_name;
                        const lastName = parsedBody?.family_name;
                        const profilePicUrl = parsedBody?.picture;
                        const birthday = parsedBody?.birthday ? parsedBody?.birthday : '';
                        const profileLink = parsedBody?.link;

                        const userDetails = {
                            id: userGoogleId,
                            email: userGoogleEmail,
                            firstName,
                            lastName,
                            profilePicUrl,
                            birthday,
                            profileLink,
                            access_token: tokens.access_token,
                            refresh_token: tokens.refresh_token,
                        };
                        // Sending response

                        resolve(userDetails);
                    }
                }
            );
        });
    }
    async parsedataGoogle(data, tokens) {
        try{
        let UserDetails = {
            firstName: data?.firstName,
            lastName: data?.lastName ?? '',
            userName: data?.firstName+(data?.lastName?data?.lastName:''),
            profilePic: data?.profilePicUrl,
            password: 'powerDao@123',
            email: data?.email,
            verified: true,
            isSocialLogin: true,
            socialNetwork: 1,
            //choose the network Id
        };
        return UserDetails;
        }catch(error){
            console.log(error)
        }
    }
    async getTwitterData(requestToken, requestSecret, verifier) {
        return this.twtConnect.addTwitterProfilebyLogin(requestToken, requestSecret, verifier).then(profile => {
            let firstName = profile?.userDetails?.name;
            if (firstName) {
                const parts = firstName.split(' ');
                firstName = parts.map((part, index) => {
                    return index === 0 
                        ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() 
                        : part.toLowerCase();
                }).join(' ');
            }
            const email= (profile?.userDetails?.email ? profile?.userDetails?.email : `${profile?.userDetails?.screen_name}@twitter.com`).toLowerCase();
            let UserDetails = {
                firstName: firstName,
                lastName: profile?.userDetails?.lastName ?? '',
                userName: profile?.userDetails?.name+(profile?.userDetails?.lastName?profile?.userDetails?.lastName:''),
                profilePic: profile?.userDetails?.profile_image_url_https,
                password: 'powerDao@123',
                email: email, // If mail not found
                verified: true,
                isSocialLogin: true,
                socialNetwork: 3,
                TwitterId:profile?.userDetails?.id_str
                //choose the network Id
            };
            return UserDetails;
        });
    }
    async getFbToken(code) {
        return new Promise((resolve, reject) => {
            const postOptions = {
                method: 'GET',
                uri: `https://graph.facebook.com/${fbVersion}/oauth/access_token`,
                qs: {
                    client_id: config.get('facebook_api.app_id'),
                    redirect_uri: config.get('facebook_api.redirect_url'),
                    client_secret: config.get('facebook_api.secret_key'),
                    code,
                },
            };
            return requestPromise(postOptions)
                .then(response => {
                    const parsedResponse = JSON.parse(response);
                    resolve(parsedResponse.access_token);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    async getFbUserProfileInfo(accessToken) {
        const url = `https://graph.facebook.com/${fbVersion}/me?fields=id,ids_for_apps,name,email,birthday,first_name,last_name,friends&access_token=${accessToken}`;

        return new Promise((resolve, reject) =>
            request.get(url, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    let parsedBody = JSON.parse(body);
                    let UserDetails = {
                        firstName: parsedBody?.first_name,
                        lastName: parsedBody?.last_name?parsedBody?.last_name:'',
                        userName: parsedBody?.first_name+(parsedBody?.last_name?parsedBody?.last_name:''),
                        profilePic: parsedBody?.profilePicUrl ?? '', //profile pic not getting from API
                        password: 'powerDao@123',
                        email: decodeURI(parsedBody?.email),
                        verified: true,
                        isSocialLogin: true,
                        socialNetwork: 2,
                    };
                    resolve(UserDetails);
                }
            })
        );
    }
}
export default new Helper();
