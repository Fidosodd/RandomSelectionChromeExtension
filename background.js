window.onload = function() {
	document.getElementById("selectButton").onclick = randomSelector;
	document.getElementById("editButton").onclick = storageEditor;
  document.getElementById("saveButton").onclick = saveEdits;
	//Check for stored data
	chrome.storage.local.get('set', function(data) {
		if (typeof data.links === 'undefined') {
		// if already set then nothing to do 
		} else {
			//blank list
			var list = [""];
			//set blank data for all the classes
			chrome.storage.local.set({SSlist1: list}, function() {
          			console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist2: list}, function() {
        	  		console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist3: list}, function() {
          			console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist4: list}, function() {
          			console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist5: list}, function() {
          			console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist6: list}, function() {
          			console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist7: list}, function() {
          			console.log('Value is set to ');
        		});
			chrome.storage.local.set({SSlist8: list}, function() {
          			console.log('Value is set to ');
        		});
			//set data to "set"
			chrome.storage.local.set({set: "true"}, function() {
          			console.log('Value is set to ' + value);
			});
		}
	});
}
function randomSelector() {
  
    var rawFile = new XMLHttpRequest();
	var filename = document.getElementById("list").value;
    rawFile.open("GET", filename, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				var splitString = allText.split("\n");
				var classSize = splitString.length;
				/*var test = allText.slice(2, 8);*/

				var randomChoice = Math.floor(Math.random() * classSize); 
				document.getElementById("result").textContent = (splitString[randomChoice])
				
            }
        }
    }
    rawFile.send(null);
}
  function storageEditor {
    var filename = document.getElementById("list").value;
    chrome.storage.local.get(['"SS"+list'], function(pulledData) {
      	console.log('Value currently is ' + result.key);
      document.getElementById("listContent").value = pulledData;
    });
    document.getElementById("listID").textContent = (filename);
  }
  function saveEdits {
    // Get a value saved in a form.
    var theValue = textarea.listContent;
    // Check that there's some code there.
    if (!theValue) {
      message('Error: No value specified');
      return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'"SS" + list': listContent}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
  } 
