package com.trikynguci.cryptomarketaichatbot.controller;

import com.trikynguci.cryptomarketaichatbot.dto.PromptBody;
import com.trikynguci.cryptomarketaichatbot.response.ApiResponse;
import com.trikynguci.cryptomarketaichatbot.service.ChatbotService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ai/chat")
public class ChatbotController {

    private final ChatbotService chatbotService;

    @PostMapping
    public ResponseEntity<ApiResponse> getCoinDetails(@RequestBody PromptBody prompt) throws Exception {
        chatbotService.getCoinDetails(prompt.getPrompt());

        ApiResponse response = new ApiResponse();
        response.setMessage(prompt.getPrompt());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/simple")
    public ResponseEntity<String> simpleChatHandler(@RequestBody PromptBody prompt) throws Exception {
        String response = chatbotService.simpleChat(prompt.getPrompt());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
