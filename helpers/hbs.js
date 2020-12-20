const moment = require('moment')

module.exports = {
 formatDate: function (date, format) {
    return moment(date).utc().format(format)
 },
 truncate: function(str, len){
  // Cut the text when its too long and it will not let the card too big for the screen
  if(str.lenght > len && str.lenght>0){
   let new_str = str + ' '
   new_str = str.substr(0, len)
   new_str = str.substr(0, new_str.lastIndexOf(' '))
   new_str = new_str.lenght > 0 ? new_str : str.substr(0,len)
   return new_str + ' '
  }
  return str
 },
 stripTags: function(input){
  // replaces HTML tags in text
  return  input.replace(/<(?:.|\n)*?>/gm, '')
 },
 editIcon: function(storyUser, loggedUser,storyId, floating =true ){
  if(storyUser._id.toString() == loggedUser._id.toString()){
   if(floating){
    return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`
      }
    } else {
      return ''
    }
  },
}
