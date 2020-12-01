/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("Atronwallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(data.message < 25000 ){
Bot.sendMessage("_❌ Minimum withdraw 25000_")
}else{
if(data.message > balance.value()){
Bot.sendMessage("_❌ Maximum withdraw "+balance.value().toFixed(6)+" Atrons_")
}else{
Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+data.message+" Atron\n💼 wallet : "+wallet+"\n\n⛔ May be it will take upto 24 hours*")
balance.add(-data.message)
Api.sendMessage({ 
chat_id: "@Atron_Pay", 
text: "*🔋 New Approved Payout\n\n▪️ Status : pending\n▪️ User Name :* "+user.telegramid+"\n*▪️ Amount :* "+data.message+" Atron\n\n*♦️ Paid Address ♦️\n "+wallet+"\n\n✅ Bot @Atron_V1_Bot*" , 
parse_mode: "Markdown"})
}
}
