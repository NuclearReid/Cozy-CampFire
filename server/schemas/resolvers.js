const { User } = require('../models')
const {signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async() => {
            return User.find()
        },
        me: async(parent, args, context) => {
            if(context.user){
                const foundUser = await User.findOne({
                    _id: context.user._id,
                })
                return foundUser
            }
            throw AuthenticationError
        }
    },

    Mutation: {
        addUser: async (parent, {email, password}) =>{
            const user = await User.create({
                email,
                password
            })
            const token = signToken(user)
            return {token, user}
        },
        login: async (parent, {email, password}) =>{
            const user = await User.findOne({ email })

            if(!user){
                throw AuthenticationError
            }

            const correctPw = await user.isCorrectPassword(password)

            if(!correctPw){
                throw AuthenticationError
            }
            const token = signToken(user)

            return{token, user} 

        }
    }
}

module.exports = resolvers