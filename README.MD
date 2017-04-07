# Rest Json Nodejs

This little server return a json file (from **json_files** folder)
Example
```
ssilva$ curl 'http://localhost:3000/test'
{ 
	"test" : "test"
}
```
When we call **/test** the server will check into **json_files** folder if there is a **test.json**, if yes its content will be returned, otherwise a 404 will be raised

Just drop you json file into **json_files** folder and call with its name on url