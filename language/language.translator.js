/**
 * Language localization
 *
 * Languages with short code
 *  __________________________________
 * |    LANGUAGE       |     CODE     |
 * |___________________|______________|
 * |    English        |     en       |
 * |    Spanish        |     es       |
 * |    Indonesian     |     idn      |
 * |    French         |     fr       |
 * |    Arabic         |     ar       |
 * |___________________|______________|
 */

//Multilanguage responses for Admin
export let UserMessageNew = {
    USER_CURRENT_PASSWORD_FAIL: {
        en: 'Invalid Current Password.',
    },
    USER_PASSWORD_SUCCESS: {
        en: 'Password Updated Successfully.',
    },
    USER_PASSWORD_FAIL: {
        en: 'Error Updating Password.',
    },
    PASSWORD_RESEND_LIMIT: {
        en: 'Password Re-set mail sent limit reached,Please try next day.'
    },
    PASSWORD_RESEND_MAIL: {
        en: 'Password reset mail send successfully.'
    },
    USERNAME_EXIST: {
        en: 'UserName already exist, please try with other userNames.'
    },
    EMAIL_EXIST: {
        en: 'Email already exist.'
    },
    REVIWER_SIGNUP_SUCCESS: {
        en: 'Reviewer signup success,Please verify the mail.'
    },
    USER_SIGNUP_SUCCESS: {
        en: 'USer signup success,Please verify the mail.'
    },
    FAILD_TO_SIGNUP: {
        en: 'Failed to signup'
    },
    EMAIL_NOT_REGISTER: {
        en: 'Email not yet registered.'
    },
    EMAIL_ACTIVATED: {
        en: 'Email already activated!'
    },
    INVALID_TOKEN: {
        en: 'Invalid Activation token!.'
    },
    TOKEN_EXPIRED: {
        en: 'Your Token has expired, please re-generated the email verify token.'
    },
    EMAIL_VERIFICATION_FAILED: {
        en: 'Failed to Verify Email !!'
    },
    USER_ACTIVATION_SUCCESS: {
        en: 'User Activated successfully.!'
    },
    USER_ACTIVATION_FAILED: {
        en: 'User Activated Failed.!'
    },
    EMAIL_NOT_EXIST: {
        en: 'Email not exist.'
    },
    FAILED_TO_FETCH_DETAILS: {
        en: 'Error in fetch details.'
    },
    EMAIL_NOT_VERIFIED: {
        en: 'Email not verified.'
    },
    INVALID_EMAIL: {
        en: 'Invalid email.'
    },
    INVALID_PASSWORD: {
        en: 'Invalid password.'
    },
    USER_NOT_EXIST: {
        en: 'User not exist.'
    },
    SOMETHING_WENT_WRONG: {
        en: 'Something went wrong'
    },
    PASSWORD_RESET: {
        en: 'Password reset successfully.'
    },
    FAILED_TO_RESET_PWD: {
        en: 'Error while resetting password.'
    },
    VERIFY_MAIL_LIMIT_REACHED: {
        en: 'Verification mail sent limit reached, Please try next day.'
    },
    VERIFY_MAIL_SENT: {
        en: 'Verification mail sent successfully.'
    },
    FAILED_TO_GENERATE_TOKEN: {
        en: 'Failed to generate token.'
    },
    NETWORK_VALIDATION: {
        en: 'Please choose the valid network'
    },
    FAILED_SOCIAL_LOGIN: {
        en: 'Failed to login with social account'
    },
    FAILED_GOOGLE_LOGIN: {
        en: 'Error while adding the Google Account, Invalid Token'
    },
    FAILED_FACEBOOK_LOGIN: {
        en: 'Error social Account Adding, Invalid verification code format'
    },
    FAILED_TWITTER_LOGIN: {
        en: 'Error while adding the Twitter Account, Invalid Token'
    },
    USER_FETCH_SUCCESS: {
        en: 'User fetched successfully'
    },
    USER_FETCH_FAILED: {
        en: 'Failed to fetch user details'
    },
    INVALID_INPUT: {
        en: 'Invalid Input,Provide valid image extension or url for Profile Pic'
    },
    USER_UPDATE_SUCCESS: {
        en: 'User updated successfully'
    },
    USER_UPDATE_FAILED: {
        en: 'Failed to update user details'
    },
    USER_ID_NOT_EXIST: {
        en: 'User not found. Please checked Provided UserId'
    },
    USER_SUSPEND_SUCCESS: {
        en: 'User suspended successfully'
    },
    USER_ALREADY_SUSPEND: {
        en: 'User is already suspended'
    },
    USER_RESUMED_SUCCESS: {
        en: 'User resumed successfully'
    },
    USER_ALREADY_RESUMED: {
        en: 'User is already resumed'
    },
    FAILED_USER_STATE_UPDATE: {
        en: 'Error in update user state details'
    },
    USER_REWARD_FETCH_SUCCESS: {
        en: 'User rewards details fetched Successfully.',
    },
    USER_REWARD_FETCH_FAILED: {
        en: 'Failed to fetch user rewards.',
    },
    DURATION_ADDED_SUCEESS:{
        en: 'Duration is Added Successfully.'
    },
    FAILED_TO_ADD_DURATION:{
        en: 'Failed to Add Duration.'
    },

};
export let commonMessage = {
    VALIDATION_FAILED: {
        en: 'Validation failed.',
    },
    USER_ID_NOT_EXIST: {
        en: 'User Id not found. Please check provided user Id.'
    },
};

export let RulesSetMessage = {

    SET_RULES_SUCCESS:{
        en: 'Rules created successfully.',
    },
    SET_RULES_FAILED:{
        en: 'Failed to create Rules.',
    },
    UPDATE_RULES_SUCCESS:{
        en: 'Rules updated successfully.',
    },
    UPDATE_RULES_FAILED:{
        en: 'Failed to update Rules.',
    },
    DELETE_RULES_SUCCESS:{
        en: 'Rules deleted successfully.',
    },
    DELETE_RULES_FAILED:{
        en: 'Failed to delete Rules.',
    },
    CHECK_RULES_ID:{
        en: 'Record not found!, Please check given id'
    },
    RULES_FETCH_SUCCESS:{
        en: 'Rules data fetch successfully.'
    },
    RULES_FETCH_FAILED:{
        en: 'Failed to fetch rules data .'
    },
    UPDATE_RULES_STATUS:{
        en: 'Rules status updated successfully.',
    },
    STATUS_UPDATE_FAILED:{
        en: 'Failed to update Rules status.',
    },
};
export let LevelSetMessage = {

    SET_LEVELS_SUCCESS:{
        en: 'Levels created successfully.',
    },
    SET_LEVELS_FAILED:{
        en: 'Failed to create Levels.',
    },
    UPDATE_LEVELS_SUCCESS:{
        en: 'Levels updated successfully.',
    },
    UPDATE_LEVELS_FAILED:{
        en: 'Failed to update Levels.',
    },
    DELETE_LEVELS_SUCCESS:{
        en: 'Levels deleted successfully.',
    },
    DELETE_LEVELS_FAILED:{
        en: 'Failed to delete Levels.',
    },
    CHECK_LEVELS_ID:{
        en: 'Record not found!, Please check given id'
    },
    LEVELS_FETCH_SUCCESS:{
        en: 'Levels data fetch successfully.'
    },
    LEVELS_FETCH_FAILED:{
        en: 'Failed to fetch levels data .'
    },
    UPDATE_LEVELS_STATUS:{
        en: 'Levels status updated successfully.',
    },
    STATUS_UPDATE_FAILED:{
        en: 'Failed to update Levels status.',
    },
};
export let OfferSetMessage = {

    SET_OFFERS_SUCCESS:{
        en: 'Offers created successfully.',
    },
    SET_OFFERS_FAILED:{
        en: 'Failed to create Offers.',
    },
    UPDATE_OFFERS_SUCCESS:{
        en: 'Offers updated successfully.',
    },
    UPDATE_OFFERS_FAILED:{
        en: 'Failed to update Offers.',
    },
    DELETE_OFFERS_SUCCESS:{
        en: 'Offers deleted successfully.',
    },
    DELETE_OFFERS_FAILED:{
        en: 'Failed to delete Offers.',
    },
    CHECK_OFFERS_ID:{
        en: 'Record not found!, Please check given id'
    },
    OFFERS_FETCH_SUCCESS:{
        en: 'Offers data fetch successfully.'
    },
    OFFERS_FETCH_FAILED:{
        en: 'Failed to fetch Offers data .'
    },
    UPDATE_OFFERS_STATUS:{
        en: 'Offers status updated successfully.',
    },
    STATUS_UPDATE_FAILED:{
        en: 'Failed to update Offers status.',
    },
};


