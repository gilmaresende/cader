package com.condelar.cader.app.domain;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import com.condelar.cader.core.structure.RegisterEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "categoria_despesa")
public class ExpenseCategory extends BaseEntity implements RegisterEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descricao", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "cat_despesa_usuario_fk"), nullable = false)
    private User user;

    @Column(name = "ativo", nullable = false)
    private Short active;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @Override
    public String toString() {
        return this.name;
    }
}
