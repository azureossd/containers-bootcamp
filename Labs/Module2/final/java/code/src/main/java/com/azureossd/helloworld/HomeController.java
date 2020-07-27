package com.azureossd.helloworld;

import java.io.IOException;
import java.net.InetAddress;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.http.HttpHeaders;

@RestController
public class HomeController {

	@RequestMapping("/")
	public String index(@RequestHeader HttpHeaders headers) {

		String hostname = new String("");

		try {
			hostname = InetAddress.getLocalHost().getHostName();
		} catch (IOException e){
			e.printStackTrace();
		}

		JSONObject response = new JSONObject();
		response.put("Message", "My Java container is running...");
		response.put("Hostname", hostname);
		response.put("Java version", System.getProperty("java.version"));
		response.put("Request Headers", headers);
		return response.toString();
	}
}