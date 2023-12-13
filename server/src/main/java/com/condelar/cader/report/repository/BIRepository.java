package com.condelar.cader.report.repository;

import com.condelar.cader.report.entity.BI;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BIRepository extends MongoRepository<BI, String>{

}