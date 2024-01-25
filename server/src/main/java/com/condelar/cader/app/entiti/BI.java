package com.condelar.cader.app.entiti;

import com.condelar.cader.app.repositories.projection.BIItemList;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "report")
public class BI extends BaseEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Lob
    private byte[] body;

    @ManyToOne
    @JoinColumn(name = "id_user", foreignKey = @ForeignKey(name = "fk_bi_user"))
    private User user;

    @Version
    @Column(name = "update_time")
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime update;

    @Column(name = "date_register")
    private LocalDate register;

    public BI() {
    }

    public BI(BIItemList bi) {
        setId(bi.getId());
        setName(bi.getName());
    }
}
