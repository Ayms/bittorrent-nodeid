bittorrent-nodeID: javascript implementation of BEP42, bittorrent DHT security extension where the nodeID is tied to the IP address of the peer
===

Javascript implementation of [BEP42 - DHT Security extension](http://www.bittorrent.org/beps/bep_0042.html) to calculate or check a peer nodeID.

BEP42 is implemented for uTorrent.

## Installation and use

This is using [node-fast-crc32c](https://github.com/ashi009/node-fast-crc32c) from Xiaoyi in node_modules slightly modified.
	
Then simply use the generate_id function (ip,random byte):

	generate_id('W.X.Y.Z',Rand) --> prefix abcdefgh --> nodeID: (first 20 bits of prefix) (random number) Rand
	generate_id('124.31.75.21',1) --> prefix 5fbfbdb2 --> nodeID: 5fbfb e7519910c34ae7026c3e64eacc13c5159 01
	generate_id('21.75.31.124',86) --> prefix 5a3ce9b0 --> nodeID: 5a3ce 91f3dc70a057e9a9fe0cc900d52b4e61e 56
	generate_id('65.23.51.170',22) --> prefix a5d4344a --> a5d43 396da271c1a4d1dc7149247f021eabc34 16

## Related projects :

* [Ayms/node-Tor](https://github.com/Ayms/torrent-live)
* [Ayms/node-Tor](https://github.com/Ayms/node-Tor)
* [Ayms/iAnonym](https://github.com/Ayms/iAnonym)
* [Interception Detector](http://www.ianonym.com/intercept.html)
* [Ayms/abstract-tls](https://github.com/Ayms/abstract-tls)
* [Ayms/websocket](https://github.com/Ayms/websocket)
* [Ayms/node-typedarray](https://github.com/Ayms/node-typedarray)
* [Ayms/node-dom](https://github.com/Ayms/node-dom)
* [Ayms/node-bot](https://github.com/Ayms/node-bot)
* [Ayms/node-gadgets](https://github.com/Ayms/node-gadgets)
