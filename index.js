var crc32c=require('crc32c');

var generate_id=function(ip,rand) { //rand 0-255
	//124.31.75.21
	//5fbfbf f10c5d6a4ec8a88e4c6ab4c28b95eee4 01 rand 1
	var id=new Buffer(20);
	var mask=[0x03,0x0f,0x3f,0xff];
	ip=ip.split('.');
	//7c,1f,4b,15
	ip.forEach(function(val,i) {ip[i]&=mask[i]});
	var r=rand&0x7;
	//0,f,b,15
	ip[0]|=r<<5;
	//20,f,b,15
	//crc_optimal<32, 0x1EDC6F41, 0xFFFFFFFF, 0xFFFFFFFF, true, true> crc;
	var c=crc32c.calculate(String.fromCharCode.apply(null,ip),0);
	console.log(c.toString(16));
	//5fbfbdb2
	id[0]=(c>>24)&0xff;
	id[1]=(c>>16)&0xff;
	id[2]=((c>>8)&0xf8)|(parseInt(Math.random()*255)&0x7);
	for (var i=3;i<19;i++) {id[i]=parseInt(Math.random()*255);}
	id[19]=rand;
	console.log(id.toString('hex'));
};