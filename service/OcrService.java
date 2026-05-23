package com.arkaprava.backend.service;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Service
public class OcrService {

    public String extractText(MultipartFile file) throws Exception {

        // Convert MultipartFile to normal File
        File convFile = File.createTempFile("temp", ".png");

        file.transferTo(convFile);

        // Create Tesseract object
        ITesseract tesseract = new Tesseract();

        // Path to tessdata
        tesseract.setDatapath("src/main/resources/tessdata");

        // Language
        tesseract.setLanguage("eng");

        // Better OCR settings
        tesseract.setPageSegMode(6);
        tesseract.setOcrEngineMode(1);

        // Extract text
        String text = tesseract.doOCR(convFile);

        // Delete temp file
        convFile.delete();

        return text;
    }
}