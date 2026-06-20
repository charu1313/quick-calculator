package com.example.calculator.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class CalculatorController {

    @GetMapping("/add")
    public double add(@RequestParam double num1,
                      @RequestParam double num2) {
        return num1 + num2;
    }

    @GetMapping("/subtract")
    public double subtract(@RequestParam double num1,
                           @RequestParam double num2) {
        return num1 - num2;
    }

    @GetMapping("/multiply")
    public double multiply(@RequestParam double num1,
                           @RequestParam double num2) {
        return num1 * num2;
    }

    @GetMapping("/divide")
    public double divide(@RequestParam double num1,
                         @RequestParam double num2) {
        return num1 / num2;
    }
}