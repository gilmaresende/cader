DELIMITER //

CREATE PROCEDURE update_saldo_carteira ()
BEGIN

update carteira cc
set cc.saldo = (
coalesce((
(coalesce( (select sum(m.valor) from movimento m where m.pagamento_recebimento = 2 and m.id_carteira =  cc.id) , 0) )
 -
(coalesce( (select sum(m.valor) from movimento m where m.pagamento_recebimento = 1 and m.id_carteira =  cc.id) , 0) )

)
,0))
where cc.id > 0
and cc.ativa = 1;
END //

DELIMITER ;
call cader.update_saldo_carteira();