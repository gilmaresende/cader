package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "movimento")
public class Movement extends BaseEntity {

    private static final long serialVersionUID = 1L;

    public Movement() {
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "moviment_user_fk"), nullable = false)
    private User user;

    @Column(name = "data_movimento")
    private LocalDate movementDate;

    @ManyToOne
    @JoinColumn(name = "id_carteira")
    private Wallet wallet;

    @Column(name = "descricao")
    private String description;

    @Column(name = "origem_movimento")
    private Short origin;

    @Column(name = "pagamento_recebimento")
    private Short typeRevenueExpence;

    @Column(name = "valor")
    private Double value;

    @Override
    public String toString() {
        return description;
    }
}
