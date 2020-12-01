/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "⚜️ Joined ⚜️" , command : "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(button , "*🛡 Please  Subscribe To Our Live Transactions Channels : \n\n1️⃣ @WeRLooters \n2️⃣ @WE4YOUYT \n3️⃣ @legit_airdrop_1 \n4️⃣ @Atron_Pay \n\n☑️You must subscribe our YouTube channel :- \n\nhttps://youtu.be/bW80gprsL0k \n\nAfter do all the steps click ☑️Joined*")
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(5000)
Bot.sendMessageToChatWithId(refUser.chatId, "*👬 New Referral : +5000 Atron*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
