package com.arkaprava.backend.controller;
import com.arkaprava.backend.service.OcrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/ocr")
@CrossOrigin("*")
public class OcrController {

    @Autowired
    private OcrService ocrService;

    @PostMapping
    public ResponseEntity<?> extractText(
            @RequestParam("file") MultipartFile file) {

        try {
            String text = ocrService.extractText(file);
            return ResponseEntity.ok(text);

        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body("OCR Failed: " + e.getMessage());
        }
    }
}
