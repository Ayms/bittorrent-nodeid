var crc32c;

try {
	crc32c=require('fast-crc32c');
} catch(ee) {
	try {
		crc32c=require("sse4_crc32");
	}
};

var generate_id=function(ip,rand) { //rand 0-255
	var id=new Buffer(20);
	var mask=[0x03,0x0f,0x3f,0xff];
	ip=ip.split('.');
	ip.forEach(function(val,i) {ip[i]&=mask[i]});
	var r=rand&0x7;
	ip[0]|=r<<5;
	//crc_optimal<32, 0x1EDC6F41, 0xFFFFFFFF, 0xFFFFFFFF, true, true> crc;
	var c=crc32c.calculate(new Buffer(ip),0);
	id[0]=(c>>24)&0xff;
	id[1]=(c>>16)&0xff;
	id[2]=((c>>8)&0xf8)|(parseInt(Math.random()*255)&0x7);
	for (var i=3;i<19;i++) {id[i]=parseInt(Math.random()*255);}
	id[19]=rand;
	return id;
};

module.exports=generate_id;