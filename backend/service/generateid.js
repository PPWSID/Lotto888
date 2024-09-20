const userModel = require('../models/userModel')
const generateUserId = async () => {
    try {
        //console.log('genid')
        let isUnique = false;
        let newUserId;
        const paddingLength = 5;
 
        while (!isUnique) {
            // Get the maximum existing user number
            const maxUser = await userModel.findOne()
                .sort({ user_id: -1 })
                .exec();
 
            const maxUserNumber = maxUser ? parseInt(maxUser.user_id.slice(2)) : 0;
            const newUserNumber = maxUserNumber + 1;
            newUserId = `US${String(newUserNumber).padStart(paddingLength, '0')}`;
 
            // Check if the newUserId already exists
            const existingUser = await userModel.findOne({ user_id: newUserId });
 
            if (!existingUser) {
                isUnique = true;
            }
        }
 
        return newUserId;
    } catch (error) {
        throw new Error('Error generating user ID');
    }
 };

 module.exports = generateUserId