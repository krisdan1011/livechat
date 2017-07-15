// static config variables

import { Component } from '@angular/core';

@Component({})
export class Config {

	
	public static server = 'https://mtlivechat.herokuapp.com/';

	// enables or disables chat sounds. usefull for development
	public static audio = false;

	// STUN/TURN ice servers for connection negotiation
	public static ice = [
		{
			urls: 'stun:stun.l.google.com:19302'
		}, {
			urls: 'stun:stun.services.mozilla.com'
		}, {
			urls: 'stun:numb.viagenie.ca',
			username: 'username',
			credential: 'password'
		}, {
			urls: 'turn:numb.viagenie.ca',
			username: 'username',
			credential: 'password'
		}
	];
	// if we allow attachments or not.
	// be sure to configure your AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and S3_BUCKET in the server config
	public static attachments = true;

	// whether or enable markdown parsing client side
	public static markdown = true;
}