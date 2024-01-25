package com.condelar.cader.core.about;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AboutController {

    @GetMapping
    public String about() {
        StringBuilder sb = new StringBuilder();
        sb.append("{").append("\n");
        sb.append("contact: 'condelar@gmail.com',").append("\n");
        sb.append("versions: [").append("\n");
        sb.append("{").append("\n");
        sb.append("version: '2.0.202310270015',").append("\n");
        sb.append("detail: ['Start Application'],").append("\n");
        sb.append("},").append("\n");
        sb.append("{").append("\n");
        sb.append("version: '2.0.202311101749',").append("\n");
        sb.append("detail: ['Validation: CardBuyValid, CardValid , CashInflowValid, ExpenseValid'],").append("\n");
        sb.append("version: '2.0.202311101857',").append("\n");
        sb.append("detail: ['Remoção requisitos não ativo Card']").append("\n");
        sb.append("}").append("\n");
        sb.append("]").append("\n");
        sb.append("}").append("\n");
        return sb.toString();
    }
}
