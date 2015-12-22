var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var numbers=[
  "0104140232",
  "0102140137",
  "0104140210",
  "0104140213",
  "0104140217",
  "0104140221",
  "0104140224",
  "0104140229",
  "0104140236",
  "0104140238",
  "0104140241",
  "0104140243",
  "0104140247",
  "0104140249",
  "0104140258",
  "0104140301",
  "0104140302",
  "0104140303",
  "0104140307",
  "0104140308",
  "0104140312",
  "0104140315",
  "0104140317",
  "0104140319",
  "0104140320",
  "0104140321",
  "0104140325",
  "0104140326",
  "0104140328",
  "0104140331",
  "0104140332",
  "0104140333",
  "0104140335",
  "0104140336",
  "0104140337",
  "0104140339",
  "0104140341",
  "0104140342",
  "0104140343",
  "0104140347",
  "0104140348",
  "0104140350",
  "0104140353",
  "0104140356",
  "0104140402",
  "0104140405",
  "0104140407",
  "0104140410",
  "0104140414",
  "0104140418",
  "0104140419",
  "0104140420",
  "0104140421",
  "0104140459",
  "010414052",
  "0110140101",
  "0110140102",
  "0110140103",
  "0110140104",
  "0110140105",
  "0110140106",
  "0110140107",
  "0110140108",
  "0110140109",
  "0110140110",
  "0110140111",
  "0110140112",
  "0110140113",
  "0110140114",
  "0110140115",
  "0110140116",
  "0110140117",
  "0110140118",
  "0110140119",
  "0110140120",
  "0110140121",
  "0110140122",
  "0110140123",
  "0110140124",
  "0110140125",
  "0110140126",
  "0110140127",
  "0110140128",
  "0110140129",
  "0110140130",
  "0110140131",
  "0110140132",
  "0110140133",
  "0110140134",
  "0110140135",
  "0110140136",
  "0110140137",
  "0110140138",
  "0110140139",
  "0110140140",
  "0110140141",
  "0110140142",
  "0110140143",
  "0110140144",
  "0110140145",
  "0110140146",
  "0110140147",
  "0110140148",
  "0110140149",
  "0110140150",
  "0110140151",
  "0110140152"];
function HashMap()
{
  /** Map 大小 **/
  var size = 0;
  /** 对象 **/
  var entry = new Object();

  /** 存 **/
  this.put = function (key , value)
  {
    if(!this.containsKey(key))
    {
      size ++ ;
    }
    entry[key] = value;
  }

  /** 取 **/
  this.get = function (key)
  {
    return this.containsKey(key) ? entry[key] : null;
  }

  /** 删除 **/
  this.remove = function ( key )
  {
    if( this.containsKey(key) && ( delete entry[key] ) )
    {
      size --;
    }
  }

  /** 是否包含 Key **/
  this.containsKey = function ( key )
  {
    return (key in entry);
  }

  /** 是否包含 Value **/
  this.containsValue = function ( value )
  {
    for(var prop in entry)
    {
      if(entry[prop] == value)
      {
        return true;
      }
    }
    return false;
  }

  /** 所有 Value **/
  this.values = function ()
  {
    var values = new Array();
    for(var prop in entry)
    {
      values.push(entry[prop]);
    }
    return values;
  }

  /** 所有 Key **/
  this.keys = function ()
  {
    var keys = new Array();
    for(var prop in entry)
    {
      keys.push(prop);
    }
    return keys;
  }

  /** Map Size **/
  this.size = function ()
  {
    return size;
  }

  /* 清空 */
  this.clear = function ()
  {
    size = 0;
    entry = new Object();
  }
}

var dogs=new HashMap();
var uuid = require('node-uuid')
for(i=0;i<numbers.length;i++)
{
  var temp=[];
  for( j=0;j<10;j++)
  {
    temp.push({_id:uuid.v1(),age:"13", name:"dog"+j})
  }
  dogs.put(numbers[i],temp);
}
router.put('/Dogs/:number/:_id',function(req,res,next){
  var ar = dogs.get(req.params.number);
  for(i=0;i<ar.length;i++){
      if(ar[i]._id === req.params._id)
      {
        ar[i].name=req.body.name;
        ar[i].age=req.body.age;
        res.jsonp(ar[i]);
      }
  }
})
router.delete('/Dogs/:number/:_id',function(req,res,next){
  //
  var ar = dogs.get(req.params.number);
  for(i=0;i<ar.length;i++){
      if(ar[i]._id==req.params._id)
      {
        res.jsonp(ar[i]);
        ar.splice(i,1);
      }
  }
  //
})
router.get('/Dogs/:number',function(req,res,next){
  var ar = dogs.get(req.params.number);
  res.jsonp(ar);
})
router.post('/Dogs/:number',function(req,res,next){
  var ar = dogs.get(req.params.number);
  req.body._id=uuid.v1();
  var dog = req.body;
  ar.push(dog);
  res.jsonp(dog);
})

module.exports = router;
