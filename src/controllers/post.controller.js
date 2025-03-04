const postModel = require("../models/post.model")
const userModel = require("../models/user.model")



module.exports.postViewController = (req, res)=>{
    res.render('createPost')
}

module.exports.postCreateController = async (req, res)=>{
    const {media, caption} = req.body

    const post = await postModel.create({
        media,
        caption,
        author: req.user.id
    })
    const user = await userModel.findOneAndUpdate({
        _id: req.user.id
    },{
        $push: {
            posts: post._id
        }
    })
    res.send('post Created')
}