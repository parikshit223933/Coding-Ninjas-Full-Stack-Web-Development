$("body").height(window.innerHeight-10);
var items = $("#items");

$("form button").click(function(e) {
    
    let roll = $("#roll");
    let name = $("#name");
    let marks = $("#marks");
    
    let rollVal = roll.val();
    let nameVal = name.val();
    let marksVal = marks.val();
    
    e.preventDefault();
    
    if(rollVal === "" || nameVal === "" || marksVal === "") {
        
        alert("Please fill all the fields");
    
    } else {
        
        let item = '<div class="items">Roll no - <span class="highlight">' + rollVal + '</span> , <span class="highlight">' + nameVal + '</span> have got <span class="highlight">' + marksVal + '</span> marks</div>';

        items.append(item);
        
        roll.val("");
        name.val("");
        marks.val("");
    }
    
});
