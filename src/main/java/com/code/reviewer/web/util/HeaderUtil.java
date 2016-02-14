package com.code.reviewer.web.util;

import org.springframework.http.HttpHeaders;

/**
 * Created by NicholasG on 11.02.2016.
 */
public class HeaderUtil {

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-code-interviewer-alert", message);
        headers.add("X-code-interviewer-params", param);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("code-interviewer." + entityName + ".created", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("code-interviewer." + entityName + ".updated", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("code-interviewer." + entityName + ".deleted", param);
    }

    public static HttpHeaders createFailureAlert(String entityName, String errorKey, String defaultMessage) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-code-interviewer-error", "error." + errorKey);
        headers.add("X-code-interviewer-params", entityName);
        headers.add("X-code-interviewer-message", defaultMessage);
        return headers;
    }

}
