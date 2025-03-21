package com.trikynguci.cryptomarketaichatbot.controller;

import com.trikynguci.cryptomarketaichatbot.dto.PromptBody;
import com.trikynguci.cryptomarketaichatbot.response.ApiResponse;
import com.trikynguci.cryptomarketaichatbot.service.ChatbotService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/ai/chat")
public class ChatbotController {

    private final ChatbotService chatbotService;

    @PostMapping
    public ResponseEntity<ApiResponse> getCoinDetails(@RequestBody PromptBody prompt) throws Exception {
        ApiResponse response = chatbotService.getCoinDetails(prompt.getPrompt());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/simple")
    public ResponseEntity<String> simpleChatHandler(@RequestBody PromptBody prompt) throws Exception {
        String response = chatbotService.simpleChat(prompt.getPrompt());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
