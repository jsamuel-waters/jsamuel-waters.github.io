//  generates html for the crystals

var obj = {
    ruby: 4,
    sapphire: 3,
    emerald: 1,
    diamond: 2
}

var gameHTML = `<button id="ruby" value="obj.ruby">Ruby</button>
<button id="sapphire" value="2" name="sapphire">Sapphire</button>
<button id="emerald" value="3">Emerald</button>
<button id="diamond" value="4">Diamond</button>`;

// addPoints adds the point value obtained from the button by the click event
function addPoints(){
    // var str = $(this).val();
     console.log($(this).name);
    // var crystalClicked = $(this).id();
    // var str = "obj." + crystalClicked;
    // str =+ $(this).val();
}


//the game executes below
$(document).ready(function() {
    $("#game").html(gameHTML);
    
    $("#ruby").on("click", addPoints);
    $("#sapphire").on("click", addPoints);
    $("#emerald").on("click", addPoints);
    $("#diamond").on("click", addPoints);


})