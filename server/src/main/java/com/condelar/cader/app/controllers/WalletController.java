package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.Wallet;
import com.condelar.cader.app.dto.wallet.WalletDTO;
import com.condelar.cader.app.dto.wallet.WalletFilterDTO;
import com.condelar.cader.app.dto.wallet.WalletListDTO;
import com.condelar.cader.app.repositories.WalletRepository;
import com.condelar.cader.app.services.WalletService;
import com.condelar.cader.app.valid.WalletValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/wallet")
public class WalletController extends BaseController<Wallet, WalletDTO, WalletFilterDTO, WalletListDTO, WalletRepository, WalletService, WalletValid> {

}
