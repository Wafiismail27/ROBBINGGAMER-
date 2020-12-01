/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _✏️Send your Atron Address _
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("Atronwallet")
User.setProperty("Atronwallet" , data.message ,"string")
Bot.sendMessage("*✅ Atron wallet set To :* "+data.message+"")
