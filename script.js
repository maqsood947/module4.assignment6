
console.log("hello")

  function fun() {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i = 0; i < names.length; i++) {
         var firstLetter = names[i].charAt(0).toLowerCase();

    
         if (firstLetter === 'j') {
          var hellospeaker=names[i];

          console.log('Goodbye'+ ' '+ hellospeaker)
      
      
           } 
           else {
            var Goodbyespeaker=names[i]
            console.log('Hello' + ' '+Goodbyespeaker )
           }}

        
         }
         
          fun();

        