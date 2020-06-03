const express=require ('express');
const bodyParser=require ('body-parser');
const app=express();
var items = ['cook food','eat food','tea'];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

/*app.get("/",function(req,res)
{
	var today=new Date();
	var currentDay=today.getDay();
	var day=" ";

	switch(currentDay)
	{
		case 0:
		day  = "sunday";
		break;
		case 1:
		day  ="monday";
		break;
		case 2:
		day = "tuesday";
		break;
		case 3:
		day = "wednesday";
		break;
		case 4:
		day = "tuesday";
		break;
		case 5:
		day = "friday";
		break;
		case 6:
		day = "saturday";
		break;
		default: console.log("ye kya ho gya re baba");
	}
	

res.render('list', {kindOfDay: day });
}
);*/
app.get("/",function(req,res)
{
	var today=new Date();
	var options={
		weekday:"long",
		day:"numeric",
		month:"long",
	};
	var day=today.toLocaleDateString("en-US",options);
	res.render("list",{kindOfDay:day , newListItems:items  });
	
});
app.post("/",function(req,res)
{
	var item=req.body.newItem;
	items.push(item);
	res.redirect('/');
}
);

app.listen(3000,function()
{
	console.log("connected");
})