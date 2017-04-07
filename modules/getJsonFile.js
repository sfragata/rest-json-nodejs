// exports.test = function(req, res){

// 	console.log(req.query);

// 	var data = { 
// 		document: "base64",
// 		dry_run: true
// 	};

// 	res.status(200).json(data);

// };


exports.get = function(req, res){

	console.log("Request params: " + JSON.stringify(req.query));
	var options = {
	    root: __dirname + '/../json_files/',
	    dotfiles: 'deny',
	    headers: {
	        'x-timestamp': Date.now(),
	        'x-sent': true
	    }
	};

	var path = req.path;
	path = path.substring(path.lastIndexOf('/') + 1)
	var jsonFile = path + ".json";
	console.log("Returning file: " + jsonFile);

	res.sendFile(jsonFile, options, function (err) {
	    if (err) {
	      console.log(err);
	      res.sendStatus(404);
	    } else {
	      console.log("Sent:", jsonFile);
	    }
	});

};