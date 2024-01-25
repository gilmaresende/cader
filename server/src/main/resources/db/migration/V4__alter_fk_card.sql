ALTER TABLE `cartao`
DROP FOREIGN KEY `fk_cartei_cartao`,
DROP FOREIGN KEY `fk_cat_des_cartao`,
DROP FOREIGN KEY `fk_mei_pag_cartao`,
DROP FOREIGN KEY `fk_pessoa_cartao`;
ALTER TABLE `cartao`
CHANGE COLUMN `id_carteira` `id_carteira` BIGINT NULL ,
CHANGE COLUMN `id_categoria_despesa` `id_categoria_despesa` BIGINT NULL ,
CHANGE COLUMN `id_meio_pagamento` `id_meio_pagamento` BIGINT NULL ,
CHANGE COLUMN `id_pessoa` `id_pessoa` BIGINT NULL ,
CHANGE COLUMN `valor_estorno` `valor_estorno` DECIMAL(10,2) NULL ;
ALTER TABLE `cartao`
ADD CONSTRAINT `fk_cartei_cartao`
  FOREIGN KEY (`id_carteira`)
  REFERENCES `carteira` (`id`),
ADD CONSTRAINT `fk_cat_des_cartao`
  FOREIGN KEY (`id_categoria_despesa`)
  REFERENCES `categoria_despesa` (`id`),
ADD CONSTRAINT `fk_mei_pag_cartao`
  FOREIGN KEY (`id_meio_pagamento`)
  REFERENCES `meio_pagamento` (`id`),
ADD CONSTRAINT `fk_pessoa_cartao`
  FOREIGN KEY (`id_pessoa`)
  REFERENCES `pessoa` (`id`);
