package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "compra_cartao")
public class CardBuy extends BaseEntity {

  	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_usuario",  foreignKey = @ForeignKey(name = "fk_compra_cartao_user"), nullable = false)
    private User user;

    @Column(name = "descricao", nullable = false, length = 150)
    private String description;

    @Column(name = "valor", nullable = false)
    private Double value;

    @Column(name = "numero_parcelas", nullable = false)
    private Integer launchesNumber;

    @ManyToOne
    @JoinColumn(name = "id_cartao", foreignKey = @ForeignKey(name = "fk_compra_cartao_cartao"), nullable = false)
    private Card card;

    @Column(name = "data_compra", nullable = false)
    private LocalDate buyDate;

    @OneToMany(mappedBy = "cardBuy", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE}, orphanRemoval = true)
    private List<CardBuyLaunch> launches = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_categoria", foreignKey = @ForeignKey(name = "fk_compra_cartao_categoria"), nullable = false)
    private ExpenseCategory expenseCategory;

    @Column(name = "cancelada", nullable = false)
    private Short canceled;

/*


//informações de compra de terceiros, criar novo objeto


    @ManyToOne
    @JoinColumn(name = "id_mpg_terceiros", foreignKey = @ForeignKey(name = "fk_cc_mpg_tercei"))
    private PaymentType paymentType;

    @ManyToOne
    @JoinColumn(name = "id_categoria_terceiros", foreignKey = @ForeignKey(name = "fk_com_catr_tercei"))
    private IncomeCategory incomeCategoryThe3rd;

    @Column(name = "compra_terceiros", nullable = false)
    private Short buyThe3rd;

    @ManyToOne
    @JoinColumn(name = "id_cart_terceiros", foreignKey = @ForeignKey(name = "fk_cc_cart_tercei"))
    private Wallet walletThe3rd;

    @Column(name = "observacao_terceitos", length = 500)
    private String observationThe3rd;

    @ManyToOne
    @JoinColumn(name = "id_pessoa", foreignKey = @ForeignKey(name = "fk_compra_cartao_pessoa"))
    private Person person;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_lote_receita", foreignKey = @ForeignKey(name = "fk_cc_lrec"))
    private LoteReceita loteReceita;

    @Column(name = "vencimento_terceiros")
    private LocalDate dataVencimentoTerceiros;
*/
    public CardBuy() {
    }

}

