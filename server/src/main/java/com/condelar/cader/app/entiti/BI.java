package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "report")
public class BI  extends BaseEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Lob
    private byte[] body;

    @Override
    public User getUser() {
        return null;
    }

    @Override
    public void setUser(User user) {

    }

    @Override
    public LocalDateTime getUpdate() {
        return null;
    }

    @Override
    public void setUpdate(LocalDateTime update) {

    }

    @Override
    public LocalDate getRegister() {
        return null;
    }

    @Override
    public void setRegister(LocalDate register) {

    }
}
