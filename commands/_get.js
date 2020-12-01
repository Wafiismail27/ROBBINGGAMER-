/*CMD
  command: /get
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.getChatMember({
  chat_id: "@ROBBING_GAMER_Lets_Chat",
  user_id: user.telegramid,
  on_result: "/check2"
})
