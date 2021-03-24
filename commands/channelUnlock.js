const Discord = require('discord.js')
module.exports = {

    name:'channelunlock',
    description: 'Unlocks channels that are in lock down',

    async execute(message,args,client){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Perms Denied')

        if(!args[0]) return message.channel.send('Please mention a channel')

        const role = message.guild.roles.everyone;

        let lockChannel = message.mentions.channels.first()
        
        if(!lockChannel) return message.channel.send('Please provide a valid channel')

        await lockChannel.updateOverwrite(role, {
            SEND_MESSAGES: true
        
        }).catch(err => console.log(err))


        return message.channel.send('This channel has been unlocked')


    }


}