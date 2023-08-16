package com.condelar.cader.app.domain;

import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.structure.BaseEntity;
import com.condelar.cader.base.structure.RegisterEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "carteira")
public class Wallet extends BaseEntity implements RegisterEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "ativo")
    private Short active;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "carteira_id_usuario_fkey"))
    private User user;

    @Override
    public String toString() {
        return getName();
    }

}
