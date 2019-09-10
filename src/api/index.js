import CryptoJS from "crypto-js";
import { GET } from "../utils/api";
import {
	url,
	appId,
	consumerKey,
	consumerSecret
} from './consts'

const getGeolocation = () => {
	return new Promise((resolve, reject) => {
		const geolocation = {
			latitude: 0,
			longitude: 0
		};

		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				position => {
					geolocation.latitude = position.coords.latitude;
					geolocation.longitude = position.coords.longitude;

					resolve(geolocation);
				},
				error => reject(error)
			);
		} else {
			resolve(geolocation);
		}
	})
};

const getWeatherInfo = async (unitFormat) => {
	const { latitude, longitude } = await getGeolocation();
	const query = { lat: latitude, lon: longitude, u: unitFormat, format: 'json' };
	const oauth = {
		'oauth_consumer_key': consumerKey,
		'oauth_nonce': Math.random().toString(36).substring(2),
		'oauth_signature_method': 'HMAC-SHA1',
		'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
		'oauth_version': '1.0'
	};
	const merged = Object.assign({}, query, oauth);
	const mergedArr = Object.keys(merged).sort().map(k => [`${k}=${encodeURIComponent(merged[k])}`]);
	const signatureBaseStr = `GET&${encodeURIComponent(url)}&${encodeURIComponent(mergedArr.join('&'))}`;
	const compositeKey = `${encodeURIComponent(consumerSecret)}&`;
	const hash = CryptoJS.HmacSHA1(signatureBaseStr, compositeKey);

	oauth['oauth_signature'] = hash.toString(CryptoJS.enc.Base64);

	const authHeader = `OAuth ${Object.keys(oauth).map(k => [`${k}="${oauth[k]}"`]).join(',')}`;
	const headers = {
		'Authorization': authHeader,
		'X-Yahoo-App-Id': appId
	};

	return GET(url, query, headers);
};

export {
	getWeatherInfo
};
