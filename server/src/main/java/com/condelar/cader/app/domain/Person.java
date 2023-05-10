package com.condelar.cader.app.domain;

import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "pessoa")
public class Person extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "ativo")
    private Short active;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "fk_pessoa_usuario"))
    private User user;

    public Person() {
        setActive((short) 1);
    }

    @Override
    public String toString() {
        return getName();
    }
}
