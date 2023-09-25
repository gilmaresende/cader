package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "baixa_despesa")
public class ExpensePayment extends BaseEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User user;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_carteira", foreignKey = @ForeignKey(name = "bxd_carteira_idx"), nullable = false)
    private Wallet wallet;

    @ManyToOne
    @JoinColumn(name = "id_meio_pg", foreignKey = @ForeignKey(name = "bxd_meio_pg_idx"), nullable = false)
    private PaymentType paymentType;

    @Column(name = "valor", nullable = false)
    private Double value;

    @Column(name = "observacao")
    private String observation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_despesa", foreignKey = @ForeignKey(name = "fk_baixa_despesa"), nullable = false)
    private Expense expense;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_movimento", foreignKey = @ForeignKey(name = "bxd_movimento_idx"), nullable = false)
    private Movement movement;

    @Column(name = "data_baixa", nullable = false)
    private LocalDate payDay;
}
