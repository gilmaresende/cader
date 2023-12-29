
DELIMITER $$

CREATE  TRIGGER `movimento_AFTER_DELETE` AFTER DELETE ON `movimento` FOR EACH ROW BEGIN
DECLARE v_saldo_old numeric(16, 2);
DECLARE v_saldo_new numeric(16, 2);
DECLARE v_permit_saldo_negativo int;
DECLARE v_reservada int;

declare enum_receita int;
declare enum_despesa int;

set enum_receita = 2;
set enum_despesa = 1;

select
saldo,
permitir_cheque_especial,
reservada
from carteira
where
id = old.id_carteira into v_saldo_old, v_permit_saldo_negativo, v_reservada;

if(old.pagamento_recebimento = enum_despesa)
then
   set v_saldo_new := v_saldo_old + old.valor;
else
  set v_saldo_new := v_saldo_old - old.valor;
end if;

update carteira
set saldo = v_saldo_new
where id = old.id_carteira;

END$$
DELIMITER ;


DELIMITER $$
CREATE  TRIGGER `movimento_BEFORE_UPDATE` BEFORE UPDATE ON `movimento` FOR EACH ROW BEGIN

DECLARE v_saldo_old numeric(16, 2);
DECLARE v_saldo_new numeric(16, 2);
DECLARE v_permit_saldo_negativo int;
DECLARE v_reservada int;

declare enum_receita int;
declare enum_despesa int;

set enum_receita = 2;
set enum_despesa = 1;

set v_saldo_old = 0;
set v_saldo_new = 0;

select
permitir_cheque_especial,
reservada,
saldo
from carteira
where id = old.id_carteira
into v_permit_saldo_negativo, v_reservada, v_saldo_old;

if(old.pagamento_recebimento = enum_despesa and new.pagamento_recebimento = enum_despesa)
then
	set v_saldo_new := v_saldo_old + old.valor - new.valor;
elseif (old.pagamento_recebimento = enum_receita and new.pagamento_recebimento = enum_receita)
then
    set v_saldo_new := v_saldo_old - old.valor + new.valor;
elseif (old.pagamento_recebimento = enum_receita and new.pagamento_recebimento = enum_despesa)
then
   set  v_saldo_new := v_saldo_old - old.valor - new.valor;
else-- (old.pagamento_recebimento = enum_despesa and new.pagamento_recebimento = enum_receita)
  set v_saldo_new := v_saldo_old + old.valor + new.valor;
end if;

if(old.numero_movimento is not null)
then
	set new.numero_movimento = old.numero_movimento;
else
    set new.numero_movimento = next_number_movement(v_id_usuario);
end if;

update carteira
set saldo = v_saldo_new
where id = old.id_carteira;
END$$
DELIMITER ;


DELIMITER $$
CREATE  TRIGGER `movimento_BEFORE_INSERT` BEFORE INSERT ON `movimento` FOR EACH ROW BEGIN
DECLARE v_saldo_old numeric(16, 2);
DECLARE v_saldo_new numeric(16, 2);
DECLARE v_permit_saldo_negativo int;
DECLARE v_reservada int;
DECLARE v_id_usuario int;
declare enum_receita int;
declare enum_despesa int;

set enum_receita = 2;
set enum_despesa = 1;

select
saldo,
permitir_cheque_especial,
reservada,
id_usuario
from carteira
where
id = new.id_carteira into v_saldo_old, v_permit_saldo_negativo, v_reservada, v_id_usuario;

set new.numero_movimento := next_number_movement(v_id_usuario);
if(new.pagamento_recebimento = enum_despesa)
then
   set v_saldo_new := v_saldo_old - new.valor;
elseif(new.pagamento_recebimento = enum_receita)
then
  set v_saldo_new := v_saldo_old + new.valor;
end if;

update carteira
set saldo = v_saldo_new
where id = new.id_carteira;
END$$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER `carteira_BEFORE_UPDATE` BEFORE UPDATE ON `carteira` FOR EACH ROW BEGIN
if(old.permitir_cheque_especial = 0 and new.saldo < 0)
then
	CALL  transition_lock('Carteira não permite saldo Negativo');
end if;

if(old.reservada = 1 and old.saldo > new.saldo)
then
	CALL  transition_lock('Carteira Reservada não permite Movimento de Despesa');
end if;
if(new.permitir_cheque_especial = 0 and old.saldo < 0)
then
	CALL  transition_lock('Saldo Já Negativo!');
end if;
if((new.ativa = 0 or old.ativa = 0) and new.saldo <> old.saldo)
then
	CALL  transition_lock('Carteira Inativa!');
end if;
END$$
DELIMITER ;