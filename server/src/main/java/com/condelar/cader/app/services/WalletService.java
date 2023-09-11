package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.app.dto.wallet.WalletDTO;
import com.condelar.cader.app.dto.wallet.WalletFilterDTO;
import com.condelar.cader.app.dto.wallet.WalletListDTO;
import com.condelar.cader.app.repositories.WalletRepository;
import com.condelar.cader.app.valid.WalletValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WalletService extends BaseService<Wallet, WalletDTO, WalletFilterDTO, WalletListDTO, WalletRepository, WalletValid> {

    @Override
    public Wallet instance() {
        return new Wallet();
    }

    @Override
    public Wallet toEntity(Wallet ob, WalletDTO dto) {
        ob.setName(dto.getName());
        ob.setActive(EnumYesNo.valueOf(dto.getActive()).getValue());
        return ob;
    }

    @Override
    public WalletDTO toDTO(Wallet ob) {
        return new WalletDTO(ob);
    }

    @Override
    public List<Wallet> filter(WalletFilterDTO ob, User user) {
        return null;
    }

    @Override
    public WalletListDTO toListItem(Wallet ob) {
        return new WalletListDTO(ob);
    }
}
