package com.condelar.cader.app.dto.wallet;

import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.file.ToolFiles;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class WalletListDTO extends BaseDTO {

    private String name;

    private Short active;

    private String balance;

    public WalletListDTO() {
    }

    public WalletListDTO(Wallet ob) {
        super(ob);
        this.setBalance(ToolReais.toReais(ob.getBalance()));
    }

}
