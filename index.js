let robot = require('robotjs');
let express = require('express');
robot.setKeyboardDelay(0);
let app = express();


let doSpam = ()=>{
	robot.typeString('T');
	robot.typeString('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	robot.keyTap('enter');
}
app.get('/spam',(req,res)=>{
	doSpam();
	res.send('ok');
});
app.get('/',(req,res)=>{
	console.log('guy');
	res.send(`
		<input type='button' onclick='doSpam()' value='click'>
		<script>
			function doSpam(){fetch('/spam')}
		</script>
		
		`);

});
app.listen(8080,e=>{
	console.log(e);

});
