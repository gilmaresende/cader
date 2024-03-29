package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "item_lote_despesa")
public class ItemLotOfExpense extends BaseEntity {

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
    @JoinColumn(name = "id_usuario")
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_lote", foreignKey = @ForeignKey(name = "fk_il_lote_despesa"), nullable = false)
    private LotOfExpense lot;

    @JoinColumn(name = "id_despesa", foreignKey = @ForeignKey(name = "fk_il_despesa"), nullable = false)
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Expense expense;

    @Column(name = "numero", nullable = false)
    private Integer number;

    public ItemLotOfExpense() {
    }

}

