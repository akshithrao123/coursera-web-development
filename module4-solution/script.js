var names=["Jeshwanth","Girish","Hemanth","John","Muhammad Kutty","Kamal Hassan"];



var speakWord1 = "Good Bye";
var speakWord2 = "Hello";
  
function speak(name) {
      
        if (name[0]==("J" || 'j')){
            console.log(speakWord1 + " " + name);
        }
        else
            console.log(speakWord2 + " " + name);
      }

    
  for (var name=0;name<names.length;name++){
    speak(names[name]);
  }