const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addTalkSchema = new Schema( 
    {
        content: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)



module.exports = mongoose.model('addTalk', addTalkSchema);