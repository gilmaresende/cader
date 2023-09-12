update pessoa p
set p.update_time = p.data_cadastro
where p.id > 0;

update categoria_despesa p
set p.update_time = p.data_cadastro
where p.id > 0;

update categoria_receita p
set p.update_time = p.data_cadastro
where p.id > 0;

update meio_pagamento p
set p.update_time = p.data_cadastro
where p.id > 0;

update cartao p
set p.update_time = p.data_cadastro
where p.id > 0;
