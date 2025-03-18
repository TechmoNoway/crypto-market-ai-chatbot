package com.trikynguci.cryptomarketaichatbot.service;

import com.trikynguci.cryptomarketaichatbot.response.ApiResponse;

public interface ChatbotService {

    ApiResponse getCoinDetails(String prompt) throws Exception;

    String simpleChat(String prompt);
}
