package com.condelar.cader.report.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "report")
public class BI {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Lob
    private byte[] body;
}
