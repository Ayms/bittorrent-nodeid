bittorrent-nodeID
===

Javascript implementation of [BEP42 - DHT Security extension](http://www.bittorrent.org/beps/bep_0042.html) to calculate or check the nodeID of a peer.

BEP42 is implemented for uTorrent.

## Installation and use

This is using [node-fast-crc32c](https://github.com/ashi009/node-fast-crc32c) from Xiaoyi and/or [sse4_crc32](https://github.com/Voxer/sse4_crc32) from Anand Suresh.

It does include fast-crc32c in node_modules slightly modified to handle the binary format (see the explaination below) but you can link to npm directly:

	npm install bittorrent-nodeid
	
Then:

	var generate_id=require('bittorent-nodeid');

	generate_id('W.X.Y.Z',Random_byte) --> prefix abcdefgh --> nodeID: (first 20 bits of prefix) (random number) Random_byte
	generate_id('124.31.75.21',1) --> prefix 5fbfbdb2 --> nodeID: 5fbfb e7519910c34ae7026c3e64eacc13c5159 01
	generate_id('21.75.31.124',86) --> prefix 5a3ce9b0 --> nodeID: 5a3ce 91f3dc70a057e9a9fe0cc900d52b4e61e 56
	generate_id('65.23.51.170',22) --> prefix a5d4344a --> a5d43 396da271c1a4d1dc7149247f021eabc34 16
	
## Note about the binary format

In javascript a character outside of the normal ascii range like 'Á' will be interpreted as utf8 0xc381 and crc32c.calculate('Á') will give 'b1cf5bcd'

But most of the c++ libraries does handle this byte by byte, so 'Á' will be interpreted as 0xc1 and crc32c.calculate('Á') will give '639bf696'

This implementation does follow the existing ones (uTorrent, libtorrent, bootstrap-dht) using the second method.

## Related projects :

* [Ayms/torrent-live](https://github.com/Ayms/torrent-live)
* [Ayms/node-Tor](https://github.com/Ayms/node-Tor)
* [Ayms/iAnonym](https://github.com/Ayms/iAnonym)
* [Interception Detector](http://www.ianonym.com/intercept.html)
* [Ayms/abstract-tls](https://github.com/Ayms/abstract-tls)
* [Ayms/websocket](https://github.com/Ayms/websocket)
* [Ayms/node-typedarray](https://github.com/Ayms/node-typedarray)
* [Ayms/node-dom](https://github.com/Ayms/node-dom)
* [Ayms/node-bot](https://github.com/Ayms/node-bot)
* [Ayms/node-gadgets](https://github.com/Ayms/node-gadgets)
